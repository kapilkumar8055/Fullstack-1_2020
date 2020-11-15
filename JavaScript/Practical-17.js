const time = document.getElementById("time");
const greeting  = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);

showtime();
showgreeting();
getName();

function showtime(){
    window.today = new Date();
    console.log(today);
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todayDate = today.toDateString();

    let amPm = hour>12?'PM':'AM';
    
    hour = hour%12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showtime,1000);

    function addZero(n){
        return ((n>=10?'':'0')+n);
    }

    date.innerHTML =`${todayDate}`;
}

function showgreeting(){
    // let hour = today.getHours();
    // console.log(today);
    if(today.getHours()>=6 && today.getHours()<12){
        greeting.innerHTML = 'Good Morning';
        document.body.style.backgroundImage = "url('../images/morning.jpg')";
        
    }
    if(today.getHours()>=12 && today.getHours()<18){
        greeting.innerHTML = 'Good Afternoon';
        document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
    }
    if(today.getHours()>=18 && today.getHours()<22){
        greeting.innerHTML = 'Good Evening';
        document.body.style.backgroundImage = "url('../images/evening.jpg')";
        document.body.style.color="white";
    }
    if(today.getHours()>=22){
        greeting.innerHTML = 'Good Night';
        document.body.style.backgroundImage = "url('../images/night.jpg')";
        document.body.style.color="white";
    }
    setTimeout(showgreeting,1000);
}

function getName(){
    if(localStorage.getItem('myData')===null){
        name.innerHTML = "[Enter Name]";
    }
    else{
        name.innerHTML = localStorage.getItem('myData');
    }
}

function setName(e){
    if(e.type==="keypress"){
        if(e.keyCode==13){
            localStorage.setItem('myData',e.target.innerHTML);
            name.blur();
        }
    }
    else{
        localStorage.setItem('myData',e.target.innerHTML);
    }
}