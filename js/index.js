let hourMinutesDisplay = document.querySelector(".hour-minutes");
let secondsDisplay = document.querySelector(".seconds");
let displayTime = document.querySelector(".display-time");
let today = document.querySelector(".todayDay");
let date = document.querySelector(".dateToday");

// get time
function getTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }

    hourMinutesDisplay.textContent = h + ":" + m;
    secondsDisplay.textContent = ":" + s;
    displayTime = hourMinutesDisplay.textContent + secondsDisplay.textContent;
}
setInterval(getTime, 1000);

// get date
function getDate(){
    // get day
    let d = new Date();
    let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = d.getDay();
    today.textContent = daysOfTheWeek[day];
    
    // get date
    let dateOfTheMonth = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    if(dateOfTheMonth < 10){
        dateOfTheMonth = "0" + dateOfTheMonth
    }
    if(month < 10){
        month = "0" + month
    }

    date.textContent = ` ${dateOfTheMonth}/${month}/${year}`;
}
getDate()