import React, { useEffect } from "react";
// import "../styles/frontPageWelcome.css";
import image from "../assets/image.png";

const FrontPageWelcome = ({ leftColor, rightColor }) => {
    const [rotate, setRotate] = React.useState(30);
    const [spread, setSpread] = React.useState(0);
    const [deltaY, setDeltaY] = React.useState(0);

    const ROTATE_MAX = 30;
    const SPREAD_MAX = 100;
    const SPREAD_MULTIPIER = 5;
    const ROTATE_MULTIPLIER = 2;

    useEffect(() => {
        const handleScroll = (e) => {
            setDeltaY(e.deltaY);
        };
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    useEffect(() => {
        deltaY !== 0 && setDeltaY(0);
        // console.log(deltaY);

        if (deltaY === 100) {
            if (rotate <= ROTATE_MAX && rotate > 0) {
                setRotate(rotate - ROTATE_MULTIPLIER);
            } else if (rotate === 0 && spread < SPREAD_MAX) {
                setSpread(spread + SPREAD_MULTIPIER);
            }
        }
        if (deltaY === -100) {
            if (spread > 0) {
                setSpread(spread - SPREAD_MULTIPIER);
            } else if (spread === 0 && rotate < ROTATE_MAX) {
                setRotate(rotate + ROTATE_MULTIPLIER);
            }
        }
    }, [deltaY]);

    useEffect(() => {
        console.log(`Rotate: ${rotate}, Gap: ${spread}`);
    }, [rotate, spread]);

    return (
        <div
            className="frontPageWelcome__wrapper"
            style={{
                rotate: `${rotate}deg`,
                gap: `${spread / 2}%`,
                ...frontPageWelcome__wrapper,
            }}
        >
            <div
                className="frontPageWelcome__left"
                style={{
                    ...leftAndRight,
                    backgroundColor: leftColor,
                }}
            >
                <img
                    src={image}
                    style={{ ...imageStyle, right: -IMAGE_SIZE / 2 }}
                    alt="This is me"
                />
            </div>
            <div
                className="frontPageWelcome__right"
                style={{
                    ...leftAndRight,
                    backgroundColor: rightColor,
                }}
            >
                <img
                    src={image}
                    style={{ ...imageStyle, left: -IMAGE_SIZE / 2 }}
                    alt="This is me"
                />
            </div>
            {spread === 0 && (
                <img
                    src={image}
                    alt="This is me"
                    style={{
                        ...imageStyle,
                        left: `calc(50% - ${IMAGE_SIZE / 2}px)`,
                    }}
                />
            )}
        </div>
    );
};

const frontPageWelcome__wrapper = {
    display: "grid",
    height: "4000px",
    width: "4000px",
    gridTemplateColumns: "1fr 1fr",
    position: "absolute",
    translate: `calc(50vw - 50%) calc(50vh - 50%)`,
    overflow: "hidden",
    top: "0",
    left: "0",
};

const leftAndRight = {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
};

const IMAGE_SIZE = 250;

const imageStyle = {
    height: `${IMAGE_SIZE}px`,
    width: `${IMAGE_SIZE}px`,
    position: "absolute",
    borderRadius: "50%",
    boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
    top: `calc(50% - ${IMAGE_SIZE / 2}px)`,
};

export default FrontPageWelcome;
