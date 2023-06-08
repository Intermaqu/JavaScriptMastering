import React, { useEffect } from "react";
import "../styles/image-slider.css";

const ImageSlider = (props) => {
    const [mouseX, setMouseX] = React.useState(100);
    const [mouseY, setMouseY] = React.useState(100);
    // const [isMouseIn, setIsMouseIn] = React.useState(false); // [x, y]
    const [shiftClicked, setShiftClicked] = React.useState(false);

    const handleMouseMove = (e) => {
        setMouseX(
            (e.clientX - e.currentTarget.getBoundingClientRect().left) / 4,
        );
        setMouseY(
            (e.clientY - e.currentTarget.getBoundingClientRect().top) / 3,
        );
        console.log(
            e.clientX - e.currentTarget.getBoundingClientRect().left,
            e.clientY - e.currentTarget.getBoundingClientRect().top,
        );
    };

    const style2 = {
        backgroundImage: `url(${props.expectedImage})`,
        backgroundSize: "cover",
        clipPath: shiftClicked
            ? `polygon(0% 0%, 0% ${mouseY}%, 100% ${mouseY}%, 100% 0)`
            : `polygon(0% 100%, ${mouseX}% 100%, ${mouseX}% 0%, 0 0%)`,
    };

    useEffect(() => {
        const handleShiftClick = (e) => {
            if (e.key === "Shift") {
                // console.log("shift clicked");
                setShiftClicked(true);
            }
        };

        const handleShiftRelease = (e) => {
            if (e.key === "Shift") {
                console.log("shift released");
                setShiftClicked(false);
            }
        };

        window.addEventListener("keydown", handleShiftClick);
        window.addEventListener("keyup", handleShiftRelease);

        return () => {
            window.removeEventListener("keydown", handleShiftClick);
            window.removeEventListener("keyup", handleShiftRelease);
        };
    }, []);

    // useEffect(() => {
    //     console.log(isMouseIn);
    // }, [isMouseIn]);

    useEffect(() => {
        console.log(shiftClicked);
    }, [shiftClicked]);

    return (
        <div
            className="image-slider"
            // onMouseMove={handleMouseMove}
            // onMouseOut={() => {
            //     setMouseX(0);
            //     setMouseY(0);
            //     console.log("out");
            // }}
        >
            <iframe
                srcDoc={props.code}
                title="output"
                scrolling="no"
                ref={props.iframeRef}
                className="image-slider-main-photo"
                frameBorder="0"
            />
            <div
                className="image-slider-secound-photo"
                style={style2}
                // onMouseEnter={() => setIsMouseIn(true)}
                // onMouseLeave={() => setIsMouseIn(false)}
                // onMouseOut={() => {
                //     setMouseX(0);
                //     setMouseY(0);
                //     console.log("out");
                // }}
            ></div>
            <div
                className="image-slider-mask"
                onMouseMove={handleMouseMove}
                onMouseOut={() => {
                    setMouseX(0);
                    setMouseY(0);
                    console.log("out");
                }}
            ></div>
        </div>
    );
};

export default ImageSlider;
