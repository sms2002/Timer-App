let up=document.getElementById("timerDisp");
    up.innerHTML='00h : 00m : 00s';
function timer()
{
    let hours=parseInt(document.getElementById("quantity1").value);
    let minute=parseInt(document.getElementById("quantity2").value);
    let seconds=parseInt(document.getElementById("quantity3").value);
     up=document.getElementById("timerDisp");
    up.innerHTML='00h : 00m : 00s';
    let totalSeconds=hours*3600+minute*60+seconds;
    let temp=totalSeconds;
    let beat = new Audio('nottroll.mp3');
    let timers=setInterval(()=>{
        temp--;
        hours=Math.floor(temp/3600);
        minute=Math.floor((temp%3600)/60);
        seconds=Math.floor(temp%60);
        up.innerHTML=`${hours}h : ${minute}m : ${seconds}s`;
        if(temp===0)
        {
            clearInterval(timers);
            beat.play();
            setTimeout(()=>{alert("Time Over")},1000); 
        }
    },1000);
}
