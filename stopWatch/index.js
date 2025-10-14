let displayContent=document.getElementById("displayContent")
let strBtnEl=document.getElementById("strBtn")
let stopBtnEl=document.getElementById("stopBtn")
let restartBtnEl=document.getElementById("restartBtn")

let milliSeconds=0;
let seconds=0;
let minutes=0;

let timerId=null;
function updateDisplay(){
    let min=minutes<10 ? "0" +minutes :minutes;
    let sec=seconds<10 ? "0"+seconds:seconds;
    let ms=milliSeconds< 10 ? "0"+milliSeconds : milliSeconds;
    displayContent.textContent=`${min}:${sec}:${ms}`;
}

strBtnEl.addEventListener("click",()=>{
    if(timerId!==null) return null;
    timerId=setInterval(()=>{
        milliSeconds++;
        if (milliSeconds===100){
            milliSeconds=0;
            seconds++;
            if(seconds===60){
                seconds=0;
                minutes++;
            }
        }
        updateDisplay()
    },10)
})

stopBtnEl.addEventListener("click",()=>{
    clearInterval(timerId)
    timerId=null;
})

restartBtnEl.addEventListener("click",()=>{
    clearInterval(timerId)
    timerId=null;
    milliSeconds=0;
    seconds=0;
    minutes=0;
    updateDisplay();
})