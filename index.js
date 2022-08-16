// two variable only number
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const question = document.getElementById("question");

let scoreEl = document.getElementById("score");

question.innerText = `What is ${num1}multiply by ${num2}`;

let score = JSON.parse(localStorage.getItem("score"));

if(! score ){
    score = 0;
}
 
scoreEl.innerText =`score: ${score}`


const correctANS = num1* num2;

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

formEl.addEventListener("submit",()=>{

    const userANS = +inputEl.value;
    if(userANS ===correctANS){
        score++;
        updateLocalsorage()
    }else{
        score--
    updateLocalsorage()
    }
})

// locolstorage
function updateLocalsorage(){
    localStorage.setItem("score",JSON.stringify(score));
}
