const timer = (deadline) => {

    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    //ниже блок добавления дней, в видео Александр сказал можно побаловаться
    const timerDays = document.createElement("span");
    const twoPoints = document.createElement("span");
    timerDays.textContent = "";
    twoPoints.textContent = " :";
    timerDays.setAttribute('id', 'timer-days');
    document.querySelector('.timer-numbers').prepend(twoPoints);
    document.querySelector('.timer-numbers').prepend(timerDays);

    const getTimerRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();

        let timeRemaning = (dateStop - dateNow) / 1000;
        let seconds = Math.floor(timeRemaning % 60);
        let minutes = Math.floor((timeRemaning / 60) % 60);
        let hours = Math.floor(((timeRemaning / 60) / 60) % 60);
        let days = Math.floor(((timeRemaning / 60) / 60) / 24);

        return { timeRemaning, days, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime = getTimerRemaining();

        if (getTime.timeRemaning > 0) {
            if (getTime.hours < 10) {
                timerHours.textContent = '0' + getTime.hours;
            } else { timerHours.textContent = getTime.hours; }
            if (getTime.minutes < 10) {
                timerMinutes.textContent = '0' + getTime.minutes;
            } else { timerMinutes.textContent = getTime.minutes; }
            if (getTime.seconds < 10) {
                timerSeconds.textContent = '0' + getTime.seconds;
            } else { timerSeconds.textContent = getTime.seconds; }
            if (getTime.days < 10) {
                timerDays.textContent = '0' + getTime.days;
            } else { timerDays.textContent = getTime.days; }

        }
        //if (getTime.timeRemaning > 0) { setTimeout(updateClock, 1000) }
    }

    // updateClock();

    if (getTimerRemaining().timeRemaning > 0) {
        setInterval(updateClock, 1000, deadline)
    } else {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        timerDays.textContent = '00';
    }
}

export default timer;