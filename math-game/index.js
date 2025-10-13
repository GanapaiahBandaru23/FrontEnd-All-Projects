let firstvalue=document.getElementById("firstvalue")
let secondvalue=document.getElementById("secondvalue")
let resultvalue=document.getElementById("result")
let checkbtn=document.getElementById("checkbtn")
let restartbtn=document.getElementById("restartbtn")

let randomNumber1 = Math.random();
let randomNumber2=Math.random();

firstvalue.value = Math.floor(randomNumber1 * 100);
secondvalue.value=Math.floor(randomNumber2*100);

checkbtn.onclick=()=>{
    
    if(resultvalue.value===""){
        alert("enter your answer")
        return;
    }
    let para=document.getElementById("para")
    let userAnswer=parseInt(resultvalue.value)
    let total=parseInt(firstvalue.value)+parseInt(secondvalue.value);
    if(userAnswer === total){
        para.textContent="✅ Correct Answer!";
        para.style.color="green"
    }
    else{
        para.textContent=`❌ Wrong Answer! Correct is ${total}`;
        para.style.color="red"
    }

}

restartbtn.onclick = () => {
  randomNumber1 = Math.floor(Math.random() * 100);
  randomNumber2 = Math.floor(Math.random() * 100);
  firstvalue.value = randomNumber1;
  secondvalue.value = randomNumber2;
  resultvalue.value = "";
  para.textContent = "";
};