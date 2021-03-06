let deadline = "2020-8-12"

function getTimeremaining(endTime) {
    // Date.parse(endTime) -- получаем количество милисекунд прошедших с 1 янв 1970 года
    // Date.parse(new Date()) -- получаем количество милисекунд прошедшич с 1 янв 1970 года до сейчас , new Date - новая дата
    let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60))
        return {
            "total" : t,
            "hours": hours,
            "minutes":minutes,
            "seconds": seconds
        } 
    // получили часы, минуты, секунды до дедлайна, который изначально указан
}
function setClock(id, endTime) { // 1 параметр - id таймера, 2 -дедлайн
    let timer = document.getElementById(id),
        hours = timer.querySelector(".hours"),  // в таймере должны быть элементы с классами hours minutes и seconds, в них будет заноситься время
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds"),
        timeInterval = setInterval(updateClock,1000) // раз в секунду обновляем таймер


    function updateClock() {
        let t = getTimeremaining(endTime)
        if(t.hours >= 10){
            hours.textContent = t.hours
        } else {
            hours.textContent = "0" + t.hours
        }

        if(t.minutes >= 10){
            minutes.textContent = t.minutes
        } else {
            minutes.textContent = "0" + t.minutes
        }

        if(t.seconds >= 10){
            seconds.textContent = t.seconds
        } else {
            seconds.textContent = "0" + t.seconds
        }
        if(t.total <= 0 ) { // проверка на то, чтобы таймер не был меньше нуля и во время остановился
            clearInterval(timeInterval)
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
}

setClock("timer",deadline)

