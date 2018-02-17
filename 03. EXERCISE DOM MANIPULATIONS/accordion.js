function toggle() {
    let onclick = document.getElementsByClassName('button')[0];
    if (onclick.textContent === 'More'){
        onclick.textContent = 'Less';

        document.getElementById('extra').style.display = 'block';
    }else {
        onclick.textContent = 'More';

        document.getElementById('extra').style.display = 'none';
    }
}