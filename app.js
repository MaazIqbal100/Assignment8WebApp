var milsec=0;
var sec=0;
var min=0;
var hour=0;
var interval;

var milsech = document.getElementById("milsec");
var sech = document.getElementById("sec");
var minh = document.getElementById("min");
var hourh = document.getElementById("hour");

function time()
{
    milsec++
    milsech.innerHTML = milsec;
    if(milsec>=100){
        sec++;
        sech.innerHTML = sec
        milsec = 0;
        if(sec>=60){
            min++;
            minh.innerHTML = min;
            sec = 0;
        }
        if(min>=60){
            hour++;
            hourh.innerHTML=hour;

        }

    }
}
function start()
{
interval = setInterval(time,10);
var star=document.getElementById("st")
st.disabled=true
}

function pause()
{
    clearInterval(interval)
    st.disabled=false;
}

function reset()
{
milsec="00";
sec="00";
min="00";
hour="00";

milsech.innerHTML = milsec;
sech.innerHTML= sec;
minh.innerHTML= min; 
hourh.innerHTML= hour;
pause();
}

function startdis(){
    document.getElementById("bt1").disabled=true
}