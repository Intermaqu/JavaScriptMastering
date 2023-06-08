const canvas = document.getElementsByClassName("canvas1")[0];
const canvas2 = document.getElementsByClassName("canvas2")[0];
const ctx1 = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const WIDTH = 400;
const HEIGHT = 300;

canvas.addEventListener("click", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    // const ctx = canvas.getContext("2d");
    ctx1.fillStyle = "blue";
    ctx1.fillRect(x, y, 5, 5);
    console.log(x, y);
    ctx1.fill();
});

canvas2.addEventListener("click", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    // const ctx = canvas.getContext("2d");
    ctx2.fillStyle = "blue";
    ctx2.fillRect(x, y, 5, 5);
    console.log(x, y);
    ctx2.fill();
});

const clr = document.getElementById("clr");
const clr2 = document.getElementById("clr2");
clr.addEventListener("click", () => {
    // const canvas = document.getElementsByTagName("canvas")[0];
    // const ctx = canvas.getContext("2d");
    ctx1.fillStyle = "red";
    ctx1.rect(0, 0, canvas.width, canvas.height);
    ctx1.fill();
});

clr2.addEventListener("click", () => {
    // const canvas = document.getElementsByTagName("canvas")[0];
    // const ctx = canvas.getContext("2d");
    ctx2.fillStyle = "red";
    ctx2.rect(0, 0, canvas.width, canvas.height);
    ctx2.fill();
});

const test = document.getElementById("test");
const test2 = document.getElementById("test2");
test.addEventListener("click", () => {
    // const canvas = document.getElementsByTagName("canvas")[0];
    // const ctx = canvas.getContext("2d");
    const ARR = new Array(WIDTH);
    for (let i = 0; i < WIDTH; i++) {
        ARR[i] = new Array(HEIGHT);
    }

    for (let i = 0; i < WIDTH; i++) {
        for (let j = 0; j < HEIGHT; j++) {
            const data = ctx1.getImageData(i, j, 1, 1).data;
            ARR[i][j] = [data[0], data[1], data[2]];
        }
    }

    console.log(ARR);
});

test2.addEventListener("click", () => {
    const ARR = new Array(WIDTH);
    for (let i = 0; i < WIDTH; i++) {
        ARR[i] = new Array(HEIGHT);
    }

    for (let i = 0; i < WIDTH; i++) {
        for (let j = 0; j < HEIGHT; j++) {
            const data = ctx2.getImageData(i, j, 1, 1).data;
            ARR[i][j] = [data[0], data[1], data[2]];
        }
    }

    console.log(ARR);
});

const random = document.getElementById("random");
const random2 = document.getElementById("random2");

random.addEventListener("click", () => {
    for (let i = 0; i < WIDTH; i++) {
        for (let j = 0; j < HEIGHT; j++) {
            const r = Math.round(Math.random()) * 255;
            const g = Math.round(Math.random()) * 255;
            const b = Math.round(Math.random()) * 255;
            ctx1.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx1.fillRect(i, j, 1, 1);
        }
    }
});

random2.addEventListener("click", () => {
    for (let i = 0; i < WIDTH; i++) {
        for (let j = 0; j < HEIGHT; j++) {
            const r = Math.round(Math.random()) * 255;
            const g = Math.round(Math.random()) * 255;
            const b = Math.round(Math.random()) * 255;
            ctx2.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx2.fillRect(i, j, 1, 1);
        }
    }
});

const compare = document.getElementById("compare");
compare.addEventListener("click", () => {
    let count = 0;
    const maxVal = WIDTH * HEIGHT;

    for (let i = 0; i < WIDTH; i++) {
        for (let j = 0; j < HEIGHT; j++) {
            const data1 = ctx1.getImageData(i, j, 1, 1).data;
            const data2 = ctx2.getImageData(i, j, 1, 1).data;
            if (
                data1[0] === data2[0] &&
                data1[1] === data2[1] &&
                data1[2] === data2[2]
            ) {
                count++;
            }
        }
    }
    console.log(`${((count * 100) / maxVal).toFixed(1)}%`   );
});
