function tableBuilder(selector) {
    let outerDiv = $(selector);

    function createTable(columnNames) {
        outerDiv.html('');
        let newTable = $('<table>');
        let newRow = $('<tr>');

        for (let col of columnNames) {
            let newHeader = $('<th>').text(`${col}`);
            newRow.append(newHeader);
        }

        newRow.append($('<th>').text('Action'));
        newTable.append(newRow);
        outerDiv.append(newTable);
    }

    function fillData(dataRows) {
        for (let row of dataRows) {
            let newRow = $('<tr>');

            for (let col of row) {
                let newData = $('<td>').text(`${col}`);
                newRow.append(newData);
            }

            let table = outerDiv.find('table');
            newRow.append($('<td>')
                .append($('<button>').text('Delete').on('click', remove)));
            table.append(newRow);
        }

        function remove() {
            $(this)
                .parent()
                .parent()
                .remove();
        }
    }

    return {createTable, fillData};
}