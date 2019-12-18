let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

let week = document.querySelector('.week-face')
let day = document.querySelector('.day-face')
let month = document.querySelector('.month-face')

let weekName = { 
    0: 'вс',
    1: 'пн',
    2: 'вт',
    3: 'ср',
    4: 'чт',
    5: 'пт',
    6: 'сб',
}
let monthName = { 
    0: 'янв',
    1: 'фев',
    2: 'март',
    3: 'апр',
    4: 'май',
    5: 'июнь',
    6: 'июль',
    7: 'авг',
    8: 'сен',
    9: 'окт',
    10: 'ноя',
    11: 'дек',
}

function clockOn() { 
    let now = new Date();
    let hAngle = now.getHours() * 30 + now.getMinutes() * 0.5 ;
    let mAngle = now.getMinutes() * 6 +now.getSeconds() * 0.1 ;
    let sAngle = now.getSeconds() * 6;
  
    let weekFace = now.getDay(); // день недели
    let monthFace = now.getMonth();// месяц от 0 до 11
    let dayFace = now.getDate(); //день месяца от 1 до 31
  
    week.innerText = weekName[weekFace];
    day.innerText = dayFace; 
    month.innerText = monthName[monthFace]
    if(weekFace == 6) { 
        week.classList.add('saturday');
        day.classList.add('saturday');
    }
    else {  
        week.classList.remove('saturday'); 
        day.classList.remove('saturday');
    }
    if(weekFace == 0 ) { 
        week.classList.add('sunday');
        day.classList.add('sunday');
    }
    else {  
        week.classList.remove('sunday'); 
        day.classList.remove('sunday');
    }

    hour.style.transform = `rotate(${hAngle}deg)`;
    minute.style.transform = `rotate(${mAngle}deg)`;
    second.style.transform = `rotate(${sAngle}deg)`;
    setTimeout( clockOn, 1000);
}; 
clockOn ();

