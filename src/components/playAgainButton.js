import { useEffect, useRef } from "react";
import { useContext } from "react";
import { DataContext } from "./dataContext";

function PlayAgainButton() {

    const buttonRef = useRef(null);

    const { setScreen, setPlayTime, setRoundThrows } = useContext(DataContext);
    const { setfirstPlayerScore, setsecondPlayerScore, setDraw } = useContext(DataContext);

    useEffect(() => {

        const button = buttonRef.current;
        const resetGameData = () => {
            setScreen('startGame');
            setPlayTime('Player1');
            setfirstPlayerScore(0);
            setsecondPlayerScore(0);
            setDraw(0);
            setRoundThrows([]);
        }

        button?.addEventListener('click', resetGameData);

        return () => {
            button?.removeEventListener('click', resetGameData);
        }
    }, []);

    return (
        <button className="bg-blue-600 px-10 py-2 rounded-lg" ref={buttonRef}>Play Again</button>
    )
}

export default PlayAgainButton;