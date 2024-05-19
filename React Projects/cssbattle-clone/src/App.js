import Editor from "@monaco-editor/react";
import { useEffect, useState, useRef } from "react";
import "./app.css";
import html2canvas from "html2canvas";
import ImageSlider from "./components/ImageSlider";

function App() {
  const [code, setCode] = useState("");
  const iframeRef = useRef(null);
  const canvasRef = useRef(null);
  const imageSource = "screenshot.png";

  const handleCopyToClipboard = async (e) => {
    const text = e.target.innerText;

    try {
      navigator.clipboard.writeText(text);
      //   console.log("Copied to clipboard");
    } catch (err) {
      //   console.error("Failed to copy: ", err);
    }
  };

  const handleDownloadClick = async () => {
    const iframe = iframeRef.current;

    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    const iframeElement = iframeDocument.documentElement;

    // console.log("Before html2canvas");
    // Utwórz obrazek za pomocą html2canvas
    const canvas = await html2canvas(iframeElement);
    // console.log("After html2canvas");

    // Uzyskaj dane URL obrazu w formacie PNG
    const imageDataURL = canvas.toDataURL("image/png");

    // Możesz przekazać imageDataURL dalej lub utworzyć link do pobrania obrazu
    // np. utwórz element <a> z linkiem do pobrania
    const downloadLink = document.createElement("a");
    downloadLink.href = imageDataURL;
    downloadLink.download = "screenshot.png";
    downloadLink.click();
  };

  const comparePixels = (pixels1, pixels2) => {
    let match = 0;
    if (pixels1.length !== pixels2.length) {
      // const minLength = Math.min(pixels1.length, pixels2.length);
      // pixels1 = pixels1.slice(0, minLength);
      // pixels2 = pixels2.slice(0, minLength);
      // console.log(pixels1, pixels1.length);
      // console.log(pixels2, pixels2.length);
      return -1;
    }
    for (let index = 0; index < pixels1.length; index += 4) {
      const r1 = pixels1[index];
      const g1 = pixels1[index + 1];
      const b1 = pixels1[index + 2];
      const a1 = pixels1[index + 3];

      const r2 = pixels2[index];
      const g2 = pixels2[index + 1];
      const b2 = pixels2[index + 2];
      const a2 = pixels2[index + 3];

      if (r1 === r2 && g1 === g2 && b1 === b2 && a1 === a2) match++;
    }

    return (match / (pixels1.length / 4)) * 100;
  };

  const handleCompare = async () => {
    const iframe = iframeRef.current;

    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    const iframeElement = iframeDocument.documentElement;
    const canvasFromHTML = await html2canvas(iframeElement);

    const image = new Image();
    image.src = imageSource;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);
      const pixelsFromHTML = canvasFromHTML
        .getContext("2d")
        .getImageData(0, 0, image.width, image.height).data;
      const pixelsFromImage = context.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;

      const matchingPixels = comparePixels(pixelsFromHTML, pixelsFromImage);
      console.log(matchingPixels);
    };
  };

  // useEffect(() => {
  //     console.log(code);
  // }, [code]);

  return (
    <div className="App">
      <Editor
        height="800px"
        width="800px"
        defaultLanguage="html"
        defaultValue="// Write your code here"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
        options={{
          autoClosingBrackets: "always",
          autoClosingQuotes: "always",
          autoClosingTags: "always",
          autoIndent: "full",
          automaticLayout: true,
          codeLens: true,
          colorDecorators: true,
          contextmenu: true,
          cursorBlinking: "blink",
          cursorSmoothCaretAnimation: false,
          cursorStyle: "line",
        }}
      />
      <div className="right">
        <ImageSlider
          iframeRef={iframeRef}
          code={code}
          expectedImage={imageSource}
        />
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        <img
          src="screenshot.png"
          alt="screenshot"
          width="400px"
          height="300px"
        />
        <button onClick={handleDownloadClick}>Download</button>
        <button onClick={handleCompare}>Compare</button>
        <button
          onClick={handleCopyToClipboard}
          style={{
            background: "#301e13",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          #301e13
        </button>
        <button
          onClick={handleCopyToClipboard}
          style={{
            background: "magenta",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          magenta
        </button>
      </div>
    </div>
  );
}

export default App;

/*
<div></div>
<div></div>
<div></div>
<div></div>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    html{
        background: #301e13;
        display: flex;
        width: 400px;
        height: 100px;
        justify-content: space-between;
    
    }
    div{
        width: 50px;
        height: 50px;
        background: magenta;
        position: absolute;
    }
    div:nth-child(1){
        top: 50px;
        left: 50px;
    }
    div:nth-child(2){
        top: 50px;
        right: 50px;
    }
    div:nth-child(3){
        bottom: 50px;
        left: 50px;
    }
    div:nth-child(4){
        bottom: 50px;
        right: 50px;
    }



</style>
*/

/* 
const comparePixels = (pixels1, pixels2) => {
      if (pixels1.length !== pixels2.length) {
        return 0;
      }

      let matchingPixels = 0;

      for (let i = 0; i < pixels1.length; i += 4) {
        const r1 = pixels1[i];
        const g1 = pixels1[i + 1];
        const b1 = pixels1[i + 2];
        const a1 = pixels1[i + 3];

        const r2 = pixels2[i];
        const g2 = pixels2[i + 1];
        const b2 = pixels2[i + 2];
        const a2 = pixels2[i + 3];

        if (r1 === r2 && g1 === g2 && b1 === b2 && a1 === a2) {
          matchingPixels++;
        }
      }

      return (matchingPixels / (pixels1.length / 4)) * 100;
    };

    const compareImageAndCanvas = () => {
      if (image.complete) {
        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);
        const canvasPixels = context.getImageData(0, 0, canvas.width, canvas.height).data;

        const imagePixels = []; // Pobierz piksele obrazu, np. przy użyciu Canvas API

        const matchPercentage = comparePixels(canvasPixels, imagePixels);
        console.log('Procent zgodności:', matchPercentage);
      }
    };

*/
