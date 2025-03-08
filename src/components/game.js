import React, { useContext } from "react";
import PlayGame from './playGame'
import Home from "./Home";
import Result from "./result";
import { DataContext } from "./dataContext";

function Game() {

    const { screen } = useContext(DataContext);

    return (
        <div className="relative h-full bg-Pool w-full flex justify-center items-center bg-[url(../public/assets/back.jpg)] bg-cover bg-no-repeat bg-center">
            <audio src={"/audio/bgmusic.mp3"} autoPlay loop id="backSound"></audio>
            <div className="w-full z-10 md:w-1/2 lg:w-2/6">
                {screen === "startGame" ? <PlayGame /> :
                    screen === "result" ? <Result /> :
                        <Home />}
            </div>
            <div className="w-full h-full absolute bg-yellow-800 opacity-70"></div>
        </div>
    )

}
export default Game; 