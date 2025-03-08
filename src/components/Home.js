import React, { useContext, useEffect, useRef } from "react";
import InputField from "./inputField";
import Select from "./select";
import { DataContext } from "./dataContext";

function Home() {

    const { setScreen } = useContext(DataContext);
    const { setPlayer1Name, setPlayer2Name, setRounds } = useContext(DataContext);

    const formRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {  

        const form = formRef.current;
        const handlePlay = (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const firstPlayer = formData.get('player-one');
            const secondPlayer = formData.get('player-two');
            const rounds = formData.get('rounds');
            setPlayer1Name(firstPlayer);
            setPlayer2Name(secondPlayer);
            setScreen("startGame"); 
            setRounds(rounds);
        }
        const button = buttonRef.current;
        button?.addEventListener('click', handlePlay);
        
        return () => {
            button?.removeEventListener('click', handlePlay);
        }
    })

    return (
        <div className="flex justify-center items-center flex-col gap-5 w-full bg-Peony rounded-lg pb-20">
            <audio src="/audio/bgmusic.mp3" autoPlay />
            <h1 className="text-3xl bg-Hot-Pink w-full rounded-s-lg rounded-e-lg text-center py-4 text-white">Rock, Paper, Scissors</h1>
            <img src={"/assets/rps.png"} alt="logo" className="w-40 h-40" />
            <form action="/" className="flex flex-col gap-2 w-full px-6" ref={formRef}>
                <InputField placeholder={"Player 1 Name"} name={"player-one"}/>
                <InputField placeholder={"Player 2 Name"} name={"player-two"} />
                <Select list={[3, 5, 7, 10, 12, 15, 18, 20, 25, 30]} label={"Rounds: "} name={"rounds"}/>
                <button className="bg-blue-700 h-10 rounded-lg text-xl text-white mt-4" type="submit" value={"Play"} ref={buttonRef} >Play</button>
            </form>
        </div>
    )
}
export default Home; 