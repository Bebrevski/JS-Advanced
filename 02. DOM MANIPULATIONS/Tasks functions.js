function addItem() {
    let input = document.getElementById('newItemText');
    let li = document.createElement('li');
    if (input.value !== '') {
        li.textContent = input.value;
        document.getElementById('items').appendChild(li);
        input.value = '';
    }
}

function addItem() {
    let input = document.getElementById('newText');
    let li = document.createElement('li');

    li.innerHTML = input.value + ' ' + '<a href="#">[Delete]</a>';
    document.getElementById('items').appendChild(li);

    li.children[0].addEventListener('click', deleteItem);

    input.value = '';

    function deleteItem() {
        let li = this.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
}

function deleteByEmail() {
    let inputEmail = document.getElementsByName('email')[0].value;
    let data = document.querySelectorAll('#customers tr td:nth-child(2)');

    for (let td of data) {
        if (td.textContent === inputEmail) {
            let row = td.parentNode;
            let table = row.parentNode;
            table.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }
    document.getElementById('result').textContent = 'Not found.';
}

function stopwatch() {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let result = document.getElementById('time');
    let intervalId, time;

    startBtn.addEventListener('click', function () {
        time = -1;
        incrementTime();
        intervalId = setInterval(incrementTime, 1000);
        stopBtn.disabled = false;
        startBtn.disabled = true;
    });

    stopBtn.addEventListener('click', function () {
        clearInterval(intervalId);
        stopBtn.disabled = true;
        startBtn.disabled = false;
    });

    function incrementTime() {
        time++;
        result.textContent = ('0' + Math.trunc(time / 60)).slice(-2) + ':' + ('0' + time % 60).slice(-2);
    }
}

function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', getPower);
    gradient.addEventListener('mouseout', removeText);

    function getPower() {
        let percent = Math.trunc(event.offsetX / (event.target.clientWidth - 1) * 100);
        result.textContent = percent + '%'
    }

    function removeText() {
        result.textContent = '';
    }
}

function focus() {
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener('focus', function () {
            input.parentNode.className = 'focused';
        });
        input.addEventListener('blur', function () {
            input.parentNode.className = '';
        })
    }
}

function validate() {
    let validator = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/g;
    let inputEmail = document.getElementById('email');

    inputEmail.addEventListener('change', onChange);

    function onChange() { // or event.target
        if (validator.test(inputEmail.value)){
            inputEmail.removeAttribute('class');
        }else {
            inputEmail.className = 'error';
        }
    }
}