let gameSeq = [];
let userSeq= [];

let high = 0;
let level = 0;
let started = false; 

let color = ["yellow", "red", "green", "blue"];

let h2 =document.querySelector('h2');
let h3 =document.querySelector('h3');

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("Game Started");
    started = true;
    levelUp();
    }
});

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let rndInd = Math.floor(Math.random()*4);
    let rndColor = color[rndInd];
    let rndBtn = document.querySelector(`.${rndColor}`);
    // console.log(rndInd);
    // console.log(rndColor);
    // console.log(rndBtn);
    gameSeq.push(rndColor);
    console.log(gameSeq);
    btnFlash(rndBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },200)
}
function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash")
    },200)
}

function btnPress(){
    let btn = this; //jo press kiye woh
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let AllBtns = document.querySelectorAll(".btn");
for (let btn of AllBtns){
    btn.addEventListener("click",btnPress);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=(`Game Over! Your score was <b>${level}</b><br> Press Any Key to Start`);
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="#1A1A2E";
        },150);
        highScore();
        reset();
    }
}
function reset(){
    started = false;
    userSeq=[];
    gameSeq=[];
    level = 0;
}

function highScore(){
    high = Math.max(high, level); 
    h3.innerHTML = `Highest Score : ${high}`;
}