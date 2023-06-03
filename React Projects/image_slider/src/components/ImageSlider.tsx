import React, { MouseEvent, useEffect } from "react";
import "../styles/image-slider.css";

const ImageSlider = (props: { cilentImage: string; expectedImage: string }) => {
    const [mouseX, setMouseX] = React.useState(0);
    const [mouseY, setMouseY] = React.useState(0);
    const [shiftClicked, setShiftClicked] = React.useState(false);

    const handleMouseMove = (e: MouseEvent) => {
        setMouseX(
            (e.clientX - e.currentTarget.getBoundingClientRect().left) / 4
        );
        setMouseY(
            (e.clientY - e.currentTarget.getBoundingClientRect().top) / 4
        );
    };

    const style1 = {
        backgroundImage: `url(${props.cilentImage})`,
        backgroundSize: "cover",
    };

    const style2 = {
        backgroundImage: `url(${props.expectedImage})`,
        backgroundSize: "cover",
        clipPath: shiftClicked
            ? `polygon(0% 0%, 0% ${mouseY}%, 100% ${mouseY}%, 100% 0)`
            : `polygon(0% 100%, ${mouseX}% 100%, ${mouseX}% 0%, 0 0%)`,
    };

    useEffect(() => {
        const handleShiftClick = (e: KeyboardEvent) => {
            if (e.key === "Shift") {
                // console.log("shift clicked");
                setShiftClicked(true);
            }
        };

        const handleShiftRelease = (e: KeyboardEvent) => {
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

    useEffect(() => {
        console.log(shiftClicked);
    }, [shiftClicked]);

    return (
        <div
            className="image-slider"
            onMouseMove={handleMouseMove}
            onMouseOut={() => {
                setMouseX(0);
                setMouseY(0);
            }}
        >
            <div className="image-slider-main-photo" style={style1}></div>
            <div className="image-slider-secound-photo" style={style2}></div>
        </div>
    );
};

export default ImageSlider;
