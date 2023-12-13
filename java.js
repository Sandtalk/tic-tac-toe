let boxes=document.querySelectorAll(".box");
let rstBut=document.querySelector(".reset");
let winnertag=document.querySelector(".winnertag");



let turn=true;
boxes.forEach((box) => {
    box.onclick=function(){
        if (turn) {
            box.innerText="X";
            turn=false;
        }else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    }
})  
let winnerCombo=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const checkWinner=() =>{
    for(winner of winnerCombo){
        let pos1=boxes[winner[0]].innerText;
        let pos2=boxes[winner[1]].innerText;
        let pos3=boxes[winner[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2 === pos3){
                winnertag.style.display="block";
                winnertag.innerText=`${pos1} is the Winner!`;
                boxes.forEach((box) => {
                    box.disabled=true;
                })
            }
        }
        
    }

}

rstBut.onclick=function(){
    turn=true;
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
        winnertag.style.display="none";

    }
}

