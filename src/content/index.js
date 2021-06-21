"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
document.onreadystatechange = function () {
    console.log(document.readyState);
    if (document.readyState === "complete") {
        var canvas = document.createElement("canvas");
        canvas.id = "mycanvas";
        canvas.width = 100;
        canvas.height = 100;
        var ctx = canvas.getContext("2d");
        ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
        ctx === null || ctx === void 0 ? void 0 : ctx.arc(50, 50, 40, 0, 2 * Math.PI);
        ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
        document.body.appendChild(canvas);
    }
};
document.oncopy = function () {
    var _a;
    var text = (_a = document.getSelection()) === null || _a === void 0 ? void 0 : _a.toString().trim();
    if (text) {
        browser.runtime.sendMessage("addon@example.com", { name: "Content", data: { text: text }, des: "get" }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    }
};
