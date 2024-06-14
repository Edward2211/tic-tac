let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#re-set");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnO=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
   
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="X";
            turnO=false;
        }
        else{
            box.innerText="O";
            turnO=true;;
        }
    box.disabled=true;
    checkWinner();
    });
});
const showWinner =(winner) =>{
    msg.innerText =`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        
            let pos1Val = boxes [pattern[0]].innerText;
            let pos2Val = boxes [pattern[1]].innerText;
            let pos3Val = boxes [pattern[2]].innerText;

            if(pos1Val !=""&& pos2Val !=""&& pos3Val !=""){
                if(pos1Val===pos2Val&& pos2Val===pos3Val)
                    console.log("winner",pos1Val);
                    showWinner(pos1Val);
            }
        }
}