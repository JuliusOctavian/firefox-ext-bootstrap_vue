import "./index.scss";

function generateData() {
  const bricks = document.querySelectorAll("a.movie-box") as NodeListOf<HTMLAnchorElement>;

  const data = Array.from(bricks).map(b => {
    const span = b.querySelector(".photo-info")!.querySelector("span") as HTMLSpanElement;
    const img = b.querySelector(".photo-frame")!.querySelector("img") as HTMLImageElement;

    const date = span!.querySelectorAll("date") as NodeListOf<HTMLDivElement>;
    return {
      title: img.title,
      id: date[0].innerText,
      cover: img.src,
      date: date[1].innerText,
      link: b.href,
    }
  });

  if (data.length) {
    browser.runtime.sendMessage(
      "addon@example.com",
      {
        name: "PARAM", data: {
          payload: {
            idol: "yuna shiina",
            data
          }
        }, des: "post"
      }
    ).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}

document.onreadystatechange = function () {
  console.log(document.readyState);
  if (document.readyState === "complete") {

    const canvas: HTMLCanvasElement = document.createElement("canvas");

    canvas.id = "mycanvas";
    canvas.width = 100;
    canvas.height = 100;

    const ctx = canvas.getContext("2d");

    ctx?.beginPath();
    ctx?.arc(50, 50, 40, 0, 2 * Math.PI);
    ctx?.stroke();


    document.body.appendChild(canvas);

    generateData();
  }
}