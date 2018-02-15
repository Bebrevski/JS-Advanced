function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = Number(num1) + Number(num2);
    document.getElementById('sum').value = sum;
}

function showText() {
    document.getElementById('text').style.display = 'inline';
    document.getElementById('more').style.display = 'none';

}

function extractText() {
    let data = document.querySelectorAll('#items li');
    let result = document.getElementById('result');
    for (let line of data) {
        result.textContent += line.textContent + '\n';
    }
}

function colorize() {
    let data = document.querySelectorAll('tr');
    for (let i = 1; i < data.length; i += 2) {
        data[i].style.backgroundColor = 'Teal';
    }
}

function countdown(sec) {
    let box = document.getElementById('time');
    let intervalID = setInterval(decrement, 1000);

    function decrement() {
        sec--;
        let minutes = Math.trunc(sec / 60);
        let seconds = sec % 60;
        let time = minutes  + ':' + (seconds < 10 ? '0' + seconds : seconds);
        box.value = time;

    }
}

function extractText(id) {
    let data = document.getElementById('content').textContent;
    let pattern = /\((.+?)\)/g;
    let record = [];
    let match =  pattern.exec(data);

    while (match){
        record.push(match[1]);

        match =  pattern.exec(data);
    }

    return record.join('; ');
}

function sum() {
    let data = document.querySelectorAll('td');
    let sum = 0;

    for (let i = 1; i < data.length; i += 2) {
        sum += Number(data[i].textContent);
    }
    document.getElementById('sum').textContent = sum.toString();
}
