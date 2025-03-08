import { useContext, useEffect, useState } from "react";
import { DataContext } from "./dataContext";
import PlayAgainButton from "./playAgainButton";
import HomeButton from "./homeButton";

function Result() {

    const { player1Name, player2Name } = useContext(DataContext);
    const { firstPlayerScore, secondPlayerScore, draw } = useContext(DataContext);
    const { setScreen } = useContext(DataContext);

    const [winner, setWinner] = useState('');

    useEffect(() => {

        if (firstPlayerScore > secondPlayerScore) {
            setWinner(`${player1Name} has won the game.`);
        } else if (firstPlayerScore < secondPlayerScore) {
            setWinner(`${player2Name} has won the game.`)
        } else {
            setWinner(`Game has been drawn`);
        }

    }, [firstPlayerScore, secondPlayerScore]);

    return (
        <div className="bg-Peony flex flex-col text-white rounded-lg justify-center w-full items-center gap-4 pb-10">
            <audio src="/audio/result.mp3" autoPlay></audio>
            <audio src="/audio/Clipping.mp3" autoPlay></audio>
            <h1 className="text-3xl bg-Hot-Pink w-full text-center py-3 rounded-t-lg">Congratulation</h1>
            <img src={firstPlayerScore !== secondPlayerScore ? "/assets/badge.png" : "/assets/draw.png"} alt="icon" className="w-44 h-44 my-5" />
            <h3 className="w-full h-6 text-center">{winner}</h3>
            <div className="flex gap-4 flex-wrap">
                <h4>{player1Name + " Score"} = {firstPlayerScore}</h4>
                <h4>{player2Name + " Score"} = {secondPlayerScore}</h4>
            </div>
            <h4>Draw  = {draw}</h4>
            <div className="flex gap-4">
                <PlayAgainButton />
                <HomeButton />
            </div>
        </div>
    )
}

export default Result;