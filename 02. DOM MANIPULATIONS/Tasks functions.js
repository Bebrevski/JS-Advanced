function addItem() {
    let input = document.getElementById('newItemText');
    let li = document.createElement('li');
    if (input.value !== ''){
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
        if (td.textContent === inputEmail){
            let row = td.parentNode;
            let table = row.parentNode;
            table.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }
    document.getElementById('result').textContent = 'Not found.';
}