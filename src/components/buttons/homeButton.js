import { useEffect, useRef } from "react";
import { useContext } from "react";
import { DataContext } from "../dataContext";

function HomeButton() {

    const { setScreen, setPlayTime, setRoundThrows } = useContext(DataContext);
    const { setfirstPlayerScore, setsecondPlayerScore, setDraw } = useContext(DataContext);

    const buttonRef = useRef(null);

    useEffect(() => {

    const button = buttonRef.current;

    const handleButtonclick = () => {
        setScreen('home');
        setfirstPlayerScore(0);
        setsecondPlayerScore(0);
        setRoundThrows([]);
        setDraw(0);
        setPlayTime('Player1'); 
    }
    button?.addEventListener('click', handleButtonclick);
    
    return () => {
        button?.removeEventListener('click', handleButtonclick);
    }
    }, []);

    return (
        <button className="outline-none flex justify-center items-center bg-blue-600 px-4 rounded-lg" ref={buttonRef}>
            <img src="/assets/home.png" alt="Go To Home" title="Home" />
        </button>
    )
}

export default HomeButton;