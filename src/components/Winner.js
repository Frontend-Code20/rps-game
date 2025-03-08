import { useContext, useEffect, useState } from "react";
import { DataContext } from "./dataContext";

function Winner() {

    const { winner, player1Name, player2Name } = useContext(DataContext);

    const [winnerResult, setWinnerResult] = useState('');

    useEffect(() => {

        if(winner === "first"){
            setWinnerResult(`${player1Name} Won`);
        }else if(winner === "second"){
            setWinnerResult(`${player2Name} Won`);
        }else if(winner === "draw"){
            setWinnerResult('Match Draw')
        }else{
            setWinnerResult('')
        }

    }, [winner, player1Name, player2Name]);

    return (
        <>
            {<div className="w-full text-center h-6">{winnerResult}</div>}
        </>
    )
}

export default Winner;