import { useState, useEffect, useRef, useContext } from "react";
import { DataContext } from "../dataContext";
import { getRoundResult } from "../../helpers/roundResult";
import CircleProgress from "./circleProgress";

function ButtonProgress({ active }) {

    const [progress, setProgress] = useState(0);

    const { setPlayTime, playTime } = useContext(DataContext);
    const { setRoundThrows, roundThrows } = useContext(DataContext);

    const [index, setIndex] = useState(0);

    const buttonRef = useRef(null);

    const endProgress = () => {
        if (playTime === "Player1") {
            setPlayTime("Player2");
        } else {
            setPlayTime(null);
        }
        const PlayerThrow = getRoundResult(index);
        setRoundThrows((previous) => [...previous, PlayerThrow]);
        if (active) {
            setProgress(0);
        }
    }

    const startProgress = () => {
        if (progress < 100) {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
            console.log("Ok");
        }
    }

    useEffect(() => {

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
                    addKeyDownEvents();
                }
            } else {
                return;
            }
        }

        const endProgressOnKeyDown = (event) => {
            if (event.keyCode === keyCode) {
                endProgress();
                addKeyDownEvents();
            }else{
                return;
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
            <CircleProgress progress={progress}/>
            {!active ? <div className="absolute top-0 bg-black rounded-full opacity-50 w-full h-full"></div> : null}
        </button>
    )
}

export default ButtonProgress;