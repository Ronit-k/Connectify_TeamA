
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
let gameseq=[];
let userseq=[];
let level=0;
let started=false;

let btns =["yellow","red","purple","green"];
document.addEventListener("keypress",()=>{  
    if(started==false)
        {
         // My Code
         started = true;
         levelUp();
        }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        // My Code
        btn.classList.remove("flash");
    },400);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       // My Code
       btn.classList.remove("userflash");
    },300);
}

function levelUp(){
    // My Code
    level++;
    userseq = [];
    h3.innerText=`Level = ${level}`;
    // random button choose
    let randInx= Math.floor(Math.random()*4);
    let randColor=btns[randInx];
    let randbtn =document.querySelector(`.${randColor}`);
    //My Code
    gameFlash(randbtn);
    gameseq.push(randbtn);
}





function checkAns(idx){
    // let idx=level-1;
    
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length===gameseq.length)
            {
            //My Code
            console.log("correct");
            h2.innerHTML = "LEVEL UP!!"
            setTimeout(function(){
                h2.innerHTML = "Simon Game"
                levelUp();
            },1000);

            }
    }
    else
    {
       
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        
        h3.innerHTML=`Game Over ! Your score was <b>${level}</b><br> Press any key to start again`;
        reset();
    }
}

function btnPress()
{
    let btn =this;
    userFlash(this);
    let userColor = this.classList[1];
    // console.log(userColor);

    console.log(gameseq);
    // My Code
    userseq.push(btn);  
    userFlash(btn);
    checkAns(userseq.length - 1);   

}

let allBtns= document.querySelectorAll('.btn');

for(let btn of allBtns)
{
    // My Code
    btn.addEventListener('click',btnPress);

}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
