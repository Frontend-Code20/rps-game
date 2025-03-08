import { useContext, useEffect, useState } from "react";
import ButtonProgress from "./ButtonProgress";
import { DataContext } from "./dataContext";

function PlayBox({ playTime, commandFor }) {

    const { roundThrows } = useContext(DataContext);

    const [resultImage, setResultImage ] = useState(null);

    useEffect(() => {
        console.log(roundThrows);
        
        if (roundThrows.length === 2) {
            if (commandFor === "Player1") {
                setResultImage(roundThrows[0].url)
            }else{
                setResultImage(roundThrows[1].url)
            }
        }else{
            setResultImage('/assets/question.png')
        }

    }, [roundThrows, commandFor]);

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col relative w-32 mb-4">
                <img src={resultImage ? resultImage : "/assets/question.png"} alt="player1 commad" id="image1" className="rounded-lg"></img>
                <div className={true === 1 ? "image-shadow" : ""}></div>
                {playTime !== commandFor && playTime ? <div className="w-full h-full bg-black absolute top-0 opacity-75 rounded-lg"></div> : null}
            </div>
            <ButtonProgress active={commandFor === playTime ? true : false} />
            <p className="text-blue-900 font-bold text-sm">{`Press or Hold ${commandFor === "Player1" ? 'A' : 'L'}`}</p>
        </div>
    )
}

export default PlayBox;