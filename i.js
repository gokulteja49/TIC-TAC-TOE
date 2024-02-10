let boxes = document.querySelectorAll(".box");
let resetg = document.querySelector(".r");
let msgc = document.querySelector(".msg");
let newg = document.querySelector(".new");
let turn = true;
let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [6, 7, 8],
    [2, 4, 6],
    [3, 4, 5]
];
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count +=1; console.log(count)
        console.log('clicked');
        if (turn) {
            box.innerText = "O";
            box.classList.add("O");
            turn = false;
        } else {
            box.innerText = "X";
            box.classList.add("X");
            turn = true;
        }
        
        
        box.disabled = true;
        checkWinner();
    });
});

const d =()=>{
    for(let box of boxes){
          box.disabled=true;
    }
}
const e =()=>{
    for(let box of boxes){
          box.disabled=false;
          box.innerText="";
    }
}
let msg = document.querySelector('#w');
const showwinner=(winner)=>{
   d();
   msg.innerText=`winner is ${winner}`;
   msgc.classList.remove("hide");
}
const checkWinner = () => {
    let val1, val2, val3; // Declare the variables outside the loop

    for (let pattern of winpatterns) {
        val1 = boxes[pattern[0]].innerText;
        val2 = boxes[pattern[1]].innerText;
        val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner");
                showwinner(val1);
             
            }
        } if (count === 9 && (val1 !== "X" ||val1 !== "O")) {
        console.log('draw');
        nowinner();
    }
    }

   
};

const nowinner = ()=>{
    d();
    msg.innerText="draw";
    msgc.classList.remove("hide");
}

const reset = ()=>{
  turn=true;
  count=0;
  e();
  msgc.classList.add("hide")
}

newg.addEventListener("click",reset);
resetg.addEventListener("click",reset);