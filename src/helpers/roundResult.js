
const gameRule = {
    0 : {
        throw: "rock",
        url: "/assets/rock.png"
    }, 
    1 : {
        throw: "scissor",
        url: "/assets/scissor.png"
    }, 
    2 : {
        throw: "paper",
        url: "/assets/paper.png"
    },
    4 : {
        throw: "scissor",
        url: "/assets/scissor.png"
    }, 
    5 : {
        throw: "rock",
        url: "/assets/rock.png"
    },
    6 : {
        throw: "paper",
        url: "/assets/paper.png"
    },
    7 : {
        throw: "scissor",
        url: "/assets/scissor.png"
    },
    8 : {
        throw: "rock",
        url: "/assets/rock.png"
    }, 
    9 : {
        throw: "paper",
        url: "/assets/paper.png"
    },
} 

export function getRoundResult(index){ 
    return gameRule[index];
}

export function findWinner(firstPlayerThrow, secondPlayerThrow){

    const gameRule = {
        "rock-scissor": "first",
        "rock-rock": "draw",
        "rock-paper": "first",
        "scissor-rock": "second",
        "scissor-paper": "first",
        "scissor-scissor": "draw",
        "paper-rock": "first",
        "paper-scissor": "second",
        "paper-paper": "draw",
    }  
    
    const throws = `${firstPlayerThrow}-${secondPlayerThrow}`;
    return gameRule[throws];
}