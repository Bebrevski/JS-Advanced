function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    let newOption = `<option value="${value}">${text}</option>`;

    let dropdownMenu = document.getElementById('menu');
    dropdownMenu.innerHTML += newOption;

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}