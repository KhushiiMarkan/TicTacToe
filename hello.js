let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true;
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        count++;
        console.log(count);
        
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true; 
        }
        box.disabled=true;
        if(count==9 && !checkWinner()){
      
            console.log("Game was Draw");
            msg.innerText=`Game was Draw`;
            msgContainer.classList.remove("hide");
            disablebox();
        }
        else{
        checkWinner();
        }
    })
})
const resetGame=()=>{
    turn0=true;
    enablebox();
    msgContainer.classList.add("hide");
     
}
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;  
        box.innerText="";
    }
}
let count=0;
const showWinner=(winner)=>{
    
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebox();
    } 

const checkWinner=()=>{
    for(let pattern of win){
let pos1=boxes[pattern[0]].innerText;
let pos2=boxes[pattern[1]].innerText;
let pos3=boxes[pattern[2]].innerText;
if(pos1 !="" && pos2 !="" && pos3 !=""){
    if(pos1 === pos2 && pos2 === pos3){
        console.log("winner",pos1);
        showWinner(pos1);
    }
}
    }

}     
newgame.addEventListener("click",()=>{
    count=0;
    resetGame()
});
// count=0;
// };
resetbtn.addEventListener("click",()=>{
    resetGame();
    count=0;
});

