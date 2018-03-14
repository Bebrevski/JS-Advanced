function move(command) {
    let availableTownsList = $('#available-towns');
    let selectedTownsList = $('#selected-towns');
    let output = $('#output');
    
    if (command === 'right'){
        let selectedItems = availableTownsList.find(':selected');
        selectedTownsList.append(selectedItems);
    } else if (command === 'left'){
      availableTownsList.append(selectedTownsList.find(':selected'));
    } else {
        output.empty();

        let allSelected = selectedTownsList
            .find('option')
            .toArray()
            .map(e => $(e).text())
            .join('; ');

        output.append(allSelected);
    }
}