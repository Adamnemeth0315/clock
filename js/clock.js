'use strict';
const clock = document.querySelector('.time');

function showTime(){
    let dateNow = new Date();
    let time = dateNow.toLocaleTimeString('hu');
    clock.textContent = time;

    setTimeout(showTime, 1000);
    console.log(time);
}

showTime();