console.log("Welcome to Tic Tac Toe");
let music = new Audio ("background.mp3");
let turnmusic = new Audio("turn.mp3");
let turn ="X";
let isgameover = false;
turnmusic.loop = isgameover;
music.loop = true;
document.addEventListener("click", () => {
    music.play(0- 50);
    
}, { once: true });

const changeTurn = ()=> {
    turnmusic.currentTime = 0;
    turnmusic.play();
    return turn === "X"?"O": "X";
}

const checkWin = () => {
   
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
        (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
        (boxtext[e[0]].innerText !== "") ) {
        document.querySelector('.Turn').innerText = boxtext[e[0]].innerText + " Won ";
        document.querySelector('.imgbox img').style.width = "200px";
        isgameover = true;
        
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''  && !isgameover) {
            boxtext.innerText = turn;
            checkWin();
            if(!isgameover){
                 turn = changeTurn();
            document.getElementsByClassName("Turn")[0].innerText = "turn for " + turn;
            }
        }
    })

})
let reset = document.getElementById("reset");

reset.addEventListener('click', (e)=>{
    let boxtext = document.querySelectorAll('.boxtext');
    boxtext.forEach(element => {
        element.innerText = "";
    });
    turn ="X";
    isgameover =false;
    document.getElementsByClassName("Turn")[0].innerText = "turn for " + turn;

    document.querySelector('.imgbox img').style.width = "0";
})
