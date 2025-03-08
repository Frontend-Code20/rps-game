import { createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [player1Name, setPlayer1Name] = useState("Player 1");
    const [player2Name, setPlayer2Name] = useState("Player 2");

    const [screen, setScreen] = useState("home");

    const [firstPlayerScore, setfirstPlayerScore] = useState(0);
    const [secondPlayerScore, setsecondPlayerScore] = useState(0);

    const [draw , setDraw] = useState(0);
    const [rounds, setRounds] = useState(0);

    const [playTime, setPlayTime] = useState("Player1");

    const [roundThrows, setRoundThrows] = useState([]);

    const [winner, setWinner] = useState(null);

    return (
        <DataContext.Provider value={{
            player1Name , setPlayer1Name, 
            player2Name, setPlayer2Name,
            screen, setScreen,
            firstPlayerScore, setfirstPlayerScore,
            secondPlayerScore, setsecondPlayerScore,
            draw, setDraw,
            rounds, setRounds,
            playTime, setPlayTime,
            roundThrows, setRoundThrows,
            winner,setWinner,
            }}> 
            {children}
        </DataContext.Provider>
    )

}