let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let body = document.querySelector("body");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }  
})

function gameFlash(btn) {
    btn.classList.add("flash");
   setTimeout(function () {
    btn.classList.remove("flash")
   }, 1000);
}


function userFlash(btn) {
    btn.classList.add("userflash");
   setTimeout(function () {
    btn.classList.remove("userflash")
   }, 1000);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
   gameFlash(randbtn);  
}
function checkAns() {
    let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            levelUp();
        }
    }else {
        h2.innerText = `Game Over ! Press any key to start`;
    }
}

function bntPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}

let allBtns = document.querySelectorAll (".btn");
for (btn of allBtns) {
    btn.addEventListener("click", bntPress);
}


