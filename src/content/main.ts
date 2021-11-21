import QRCode, { QRCodeOptions } from "qrcode";
import "./index.scss";

let box: HTMLDivElement | undefined;
let container: HTMLCanvasElement | undefined;

let boxTimeOutId: number;
let anchorOutId: number;

let activeElement: HTMLAnchorElement | null = null;

let payload:
  | {
      magnet: string;
    }
  | undefined;

function paint(magnet: string, size: { width: number; height: number }) {
  if (container) {
    QRCode.toCanvas(container, magnet, { ...size } as QRCodeOptions)
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

(function () {
  box = document.createElement("div");
  box.id = "box";

  container = document.createElement("canvas");
  container.classList.add("container");
  box.appendChild(container);

  document.body.appendChild(box);

  box.onmouseenter = function () {
    clearTimeout(boxTimeOutId);
    clearTimeout(anchorOutId);

    if (payload) {
      const { magnet } = payload;
      paint(magnet, { width: 270, height: 270 });
    }
  };

  box.onmouseleave = function () {
    if (box) {
      if (container) {
        if (payload) {
          paint(payload.magnet, { width: 130, height: 130 });
        }
      }
      boxTimeOutId = window.setTimeout(() => {
        // @ts-ignore
        activeElement?.style.backgroundColor = "white";
        activeElement = null;
        if (box) {
          box.style.display = "none";
        }
      }, 500);
    }
  };
})();

const sources = document
  .querySelector(".o_cn2")
  ?.querySelector(".o_cn_r_box")
  ?.querySelectorAll(".tabs-list");

sources?.forEach((node) => {
  const list = node.querySelectorAll(
    "div.down_list ul > li .down_part_name > a"
    // eslint-disable-next-line no-undef
  ) as NodeListOf<HTMLAnchorElement>;
  list.forEach((a) => {
    // eslint-disable-next-line no-param-reassign
    a.onmouseenter = function (event) {
      clearTimeout(boxTimeOutId);
      clearTimeout(anchorOutId);

      if (activeElement !== a) {
        // @ts-ignore
        activeElement?.style.backgroundColor = "white";
        // eslint-disable-next-line no-param-reassign
        a.style.backgroundColor = "blue";
        activeElement = a;

        const { pageX, pageY } = event;

        payload = {
          magnet: a.href
        };
        paint(payload.magnet, { width: 130, height: 130 });
        if (box) {
          box.style.left = `${pageX + 20}px`;
          box.style.top = `${pageY - 150 - 20}px`;

          box.style.display = "initial";
        }
      }
    };

    // eslint-disable-next-line no-param-reassign
    a.onmouseleave = function () {
      anchorOutId = window.setTimeout(() => {
        // eslint-disable-next-line no-param-reassign
        a.style.backgroundColor = "white";
        if (box) {
          box.style.display = "none";
        }
      }, 500);
      activeElement = null;
    };
  });
});
