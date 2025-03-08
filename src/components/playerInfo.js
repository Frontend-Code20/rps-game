import { useContext } from "react";
import { DataContext } from "./dataContext";

function PlayerInfo({ score, player }) {

    const {player1Name, player2Name } = useContext(DataContext);

    return (
        <div>
            <div className="flex items-center gap-2">
                <img src={"/assets/man.png"} alt="icon" className="w-6 h-6" />
                <h4 className="text-sm">{player === "player1" ? player1Name : player2Name}</h4>
            </div>
            <h4 className="text-sm">Score: {score}</h4>
        </div>
    )
}

export default PlayerInfo;