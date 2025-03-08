import { useState, useEffect, useRef, useContext } from "react";
import { DataContext } from "./dataContext";
import { getRoundResult } from "../helpers/roundResult";

function ButtonProgress({ active }) {

    const [progress, setProgress] = useState(0);

    const { setPlayTime, playTime } = useContext(DataContext);
    const { setRoundThrows, roundThrows } = useContext(DataContext);

    const [index, setIndex] = useState(0);
    const circumference = 2 * Math.PI * 30;

    const buttonRef = useRef(null);


    useEffect(() => {
        const startProgress = () => {
            if (progress < 100) {
                setProgress((prev) => (prev < 100 ? prev + 1 : 100));
                console.log("Ok");
            }
        }

        const button = buttonRef.current;
        if (button && active) {
            button.addEventListener('mousedown', startProgress);
        }

        return () => {
            if (button) {
                button.removeEventListener('mousedown', startProgress);
            }
        };
    }, [progress, active, playTime]);
    
    useEffect(() => {
        
        const keyCode = playTime === "Player1" ? 65 : 76;
        const startProgressOnKeyDown = (event) => {
            if (event.keyCode === keyCode) {
                setIndex(Math.floor(Math.random() * 10));
                if (progress < 100) {
                    setProgress((prev) => (prev < 100 ? prev + 1 : 100));
                } else {
                    endProgress();
                }
            } else {
                return;
            }
        }

        const endProgressOnKeyDown = (event) => {
            if (event.keyCode === keyCode) {
                endProgress();
            }else{
                return;
            }
        }

        const endProgress = () => {
            if (playTime === "Player1") {
                setPlayTime("Player2");
            } else {
                setPlayTime(null);
            }
            const PlayerThrow = getRoundResult(index);
            setRoundThrows((previous) => [...previous, PlayerThrow]);
            addKeyDownEvents();
            if (active) {
                setProgress(0);
            }
        }

        const button = buttonRef.current;

        const addKeyDownEvents = () => {
            if (button && active) {
                button.focus();
                button.addEventListener('keydown', startProgressOnKeyDown);
                button.addEventListener('keyup', endProgressOnKeyDown);
            }
        }

        addKeyDownEvents();
        return () => {
            if (button) {
                button.removeEventListener('keydown', startProgressOnKeyDown);
                button.removeEventListener('keyup', endProgressOnKeyDown);
            }
        };
    }, [progress, active, roundThrows, playTime]);


    return (
        <button className="outline-none relative" ref={buttonRef}>
            <svg width={70} height={70} viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={30}
                    stroke={"#e6e6e6"}
                    strokeWidth={10}
                    fill="none"
                />
                {/* Progress circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={30}
                    stroke={"#4db8ff"}
                    strokeWidth={10}
                    fill="none"
                    strokeDasharray={2 * Math.PI * 30}
                    strokeDashoffset={circumference - (progress / 100) * circumference}
                    style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                />
                <image x={30} y={35} height={35} width={35} href="assets/scissor24.png"></image>
            </svg>
            {!active ? <div className="absolute top-0 bg-black rounded-full opacity-50 w-full h-full"></div> : null}
        </button>
    )
}

export default ButtonProgress;