import PlayerInfo from "./playerInfo";
import PlayBox from "./playBox";
import Progress from "./progress";
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "./dataContext";
import { findWinner } from "../helpers/roundResult";
import Winner from "./Winner";

function PlayGame() {

    const { firstPlayerScore, secondPlayerScore } = useContext(DataContext);
    const { draw, rounds, playTime, roundThrows } = useContext(DataContext);
    const { setScreen, setPlayTime, setRoundThrows } = useContext(DataContext);
    const { setfirstPlayerScore, setsecondPlayerScore, setDraw } = useContext(DataContext);
    const { setWinner } = useContext(DataContext);

    const [round, setRound] = useState(1);

    const winSoundRef = useRef(null)

    useEffect(() => {
        
        const winSound = winSoundRef.current;

        let timeout = null;
        const handleNext = () => {
            if(round < rounds){
                setPlayTime('Player1');
                setRoundThrows([]);
                setWinner(null);
            }else{
                setScreen('result');
            }
        }
        if(roundThrows.length === 2){
            const winner = findWinner(roundThrows[0]?.throw, roundThrows[1]?.throw);
            if(winner === 'first'){
                setfirstPlayerScore(firstPlayerScore + 1);
            }else if(winner === 'second'){
                setsecondPlayerScore(secondPlayerScore + 1);
            }else if(winner === 'draw'){
                setDraw(draw + 1);
            }
            setWinner(winner);
            winSound.play();
            setRound((prev) => prev + 1)
            timeout = setTimeout(handleNext, 2000);
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [roundThrows, setPlayTime]);

    return (
        <div className="w-full bg-Peony rounded-lg flex flex-col gap-4 pb-8">
            <audio src={"./audio/win.mp3"} id="winSound" ref={winSoundRef}></audio>
            <audio src={"/"} id="resultSound"></audio>
            <header className="w-full flex items-center box-border ps-4 bg-Hot-Pink rounded-t-lg rounded-tl-lg py-4 text-white">
                <img src="./assets/back.png" alt="Go to Home" className="cursor-pointer" title="Go to Home" onClick={() => setScreen('home')} />
                <h1 className="text-3xl text-center w-full">Rock, Paper, Scissors</h1>
            </header>
            <div className="flex justify-between box-border px-2">
                <PlayerInfo player={"player1"} score={firstPlayerScore} />
                <h4 className="text-center">Draw: {draw}</h4>
                <PlayerInfo player={"player2"} score={secondPlayerScore} />
            </div>
            <Progress max={rounds} value={round} />
            <Winner />
            <div className="flex justify-evenly my-5">
                <PlayBox commandFor={"Player1"} playTime={playTime} />
                <PlayBox commandFor={"Player2"} playTime={playTime} />
            </div>
        </div>
    )
}

export default PlayGame;