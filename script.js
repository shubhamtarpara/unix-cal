const clockEl = document.querySelector('.time');
const buttons = document.querySelectorAll('.hour button');
let format;




setInterval(generateTime, 1000)

function generateTime() {
    format = clockEl.getAttribute('data-format')
    const date = new Date;

    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();


    if (format === '12') {
        hours = (hours > 12) ? hours % 12 : hours;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (min < 10) {
        min = "0" + min;
    }

    // min = min < 10 ? "0" + min : min
sec = sec < 10 ?  "0" + sec : sec
    // if (sec < 10) {
    //     sec = "0" + sec;
    // }

    clockEl.innerHTML = `${hours} : ${min} : ${sec}`


}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const format = button.getAttribute("data-format");
        clockEl.setAttribute("data-format", format);
        generateTime();
    });
})

var today = new Date();
const day = today.getDate()
const month = today.toLocaleDateString("default", {month: "short"});
const date = today.toLocaleDateString("default", {weekday: "long"});
const year = today.getFullYear();

document.querySelector(".month-name").innerHTML = month;
document.querySelector(".day-name").innerHTML = `${day},`;
document.querySelector(".day-number").innerHTML = `${date},`;
document.querySelector(".year").innerHTML = year;


