function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);

    function convertDays() {
        let days = document.getElementById('days').value;
        document.getElementById('hours').value = days * 24;
        document.getElementById('minutes').value = days * 1440;
        document.getElementById('seconds').value = days * 86400;
    }

    function convertHours() {
        let hours = document.getElementById('hours').value;
        document.getElementById('days').value = hours / 24;
        document.getElementById('minutes').value = hours * 60;
        document.getElementById('seconds').value = hours * 3600;
    }

    function convertMinutes() {
        let minutes = document.getElementById('minutes').value;
        document.getElementById('days').value = minutes / (60 * 24);
        document.getElementById('hours').value = minutes / 60;
        document.getElementById('seconds').value = minutes * 60;
    }

    function convertSeconds() {
        let seconds = document.getElementById('seconds').value;
        document.getElementById('days').value = seconds / (60 * 60 * 24);
        document.getElementById('hours').value = Math.round(seconds / 3600);
        document.getElementById('minutes').value = seconds / 60;
    }
}