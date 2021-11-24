import QRCode, { QRCodeOptions } from "qrcode";
import "./index.scss";

let box: HTMLDivElement | undefined;
let container: HTMLCanvasElement | undefined;

let boxTimeOutId: number | undefined;
let anchorOutId: number | undefined;

let activeElement: HTMLElement | null = null;

let magnet: string | undefined;

function paint(text: string, width: number) {
  if (container) {
    QRCode.toCanvas(container, text, { width } as QRCodeOptions)
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

(function () {
  container = document.createElement("canvas");
  box = document.createElement("div");

  box.appendChild(container);
  document.body.appendChild(box);

  box.id = "box";
  container.id = "container";

  box.onmouseenter = function () {
    clearTimeout(boxTimeOutId);
    clearTimeout(anchorOutId);
  };

  box.onmouseleave = function () {
    boxTimeOutId = window.setTimeout(() => {
      box!.style.display = "none";
    }, 500);

    if (activeElement) {
      activeElement.style.backgroundColor = "white";
      activeElement = null;
    }
  };
})();

const sources = document
  .querySelector(".o_cn2")
  ?.querySelector(".o_cn_r_box")
  ?.querySelectorAll(".tabs-list");

sources?.forEach((node) => {
  const list = node.querySelectorAll(
    "div.down_list ul > li strong.down_part_name"
  ) as NodeListOf<HTMLElement>;

  list.forEach((strong) => {
    // eslint-disable-next-line no-param-reassign
    strong.onmouseenter = function (event) {
      clearTimeout(boxTimeOutId);
      clearTimeout(anchorOutId);

      if (activeElement !== strong) {
        if (activeElement) {
          activeElement.style.backgroundColor = "white";
        }

        // eslint-disable-next-line no-param-reassign
        strong.style.backgroundColor = "blue";

        const { pageX, pageY } = event;

        const anchor = strong.querySelector("a") as HTMLAnchorElement;
        magnet = anchor.href;

        paint(magnet, 270);

        if (box) {
          box.style.left = `${pageX + 20}px`;
          box.style.top = `${pageY - 150 - 20}px`;

          box.style.display = "initial";
        }

        activeElement = strong;
      }
    };

    // eslint-disable-next-line no-param-reassign
    strong.onmouseleave = function () {
      anchorOutId = window.setTimeout(() => {
        // eslint-disable-next-line no-param-reassign
        strong.style.backgroundColor = "white";
        activeElement = null;
        if (box) {
          box.style.display = "none";
        }
      }, 500);
    };
  });
});
