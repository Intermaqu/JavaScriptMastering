// import html2canvas from "./node_modules/html2canvas/dist/html2canvas.js";

import html2canvas from "html2canvas";

const textarea = document.querySelector("textarea");
const iframe = document.querySelector("iframe");
textarea.addEventListener("input", (event) => {
    iframe.srcdoc = textarea.value;
    console.log(textarea.value);
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        e.preventDefault();
        // textarea.value += "    ";
    }
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    html2canvas(iframe).then((canvas) => {
        document.body.appendChild(canvas);
    });
});
