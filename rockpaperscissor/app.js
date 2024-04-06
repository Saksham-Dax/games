let userscore= 0;
let compscore= 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const copt = document.querySelector("#copt");
const uopt = document.querySelector("#uopt");
const uscore= document.querySelector("#userscore");
const cscore= document.querySelector("#compscore");

const gencompchoice = ()=>{
    const options = ["rock", "paper","scissors"];
    return options[Math.floor(Math.random()*3)];
}

const drawgame=()=>{
    // console.log("draw");
    message.innerText = "Game Draw";
    message.style.backgroundColor = "grey";
}

const showwinner =(userwin)=>{
    if(userwin){
        // console.log("won");
        userscore++;
        uscore.innerText=userscore;
        message.innerText = "You Win!";
        message.style.backgroundColor = "rgb(93, 129, 93)";
    }
    else{
        // console.log("lose");
        compscore++;
        cscore.innerText=compscore;
        message.innerText = "You Lose";
        message.style.backgroundColor = "rgb(230, 71, 71)";
    }
}

const playgame=(userchoice)=>{
    // console.log("user choice = " , userchoice)
    const compchoice = gencompchoice();
    // console.log("comp choice = " , compchoice)

    if(userchoice=== compchoice){
        drawgame();
        uopt.innerText=userchoice;
        copt.innerText=compchoice;
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            // paper,scissors
            userwin = compchoice === "paper" ? false :true;
        }
        else if(userchoice === "paper"){
            // rock , scissors
            userwin = compchoice === "scissors"? false: true;
        }
        else{
            // rock , paper
            userwin = compchoice === "rock" ? false: true;
        }
        uopt.innerText=userchoice;
        copt.innerText=compchoice;
        showwinner(userwin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=> {
        const userchoice = choice.getAttribute('id')
        // console.log(userchoice,"choice was clicked");
        playgame(userchoice);
    });
});