function notify(message) {
    document.getElementById('notification').textContent = message;
    document.getElementById('notification').style.display = 'block';

    setTimeout(showMessage, 2000);

    function showMessage() {
        document.getElementById('notification').textContent = '';
        document.getElementById('notification').style.display = 'none';
    }
}