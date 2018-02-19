function initializeTable() {
    $('#createLink').click(function () {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        addRow(country, capital);
    });

    addRow('Bulgaria', 'Sofia');
    addRow('Germany', 'Berlin');
    addRow('Russia', 'Moscow');

    function addRow(country, capital) {
        let tr = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital));

        let upLink = $('<a href="#">[Up]</a>').click(goUp);
        let downLink = $('<a href="#">[Down]</a>').click(goDown);
        let deleteLink = $('<a href="#">[Delete]</a>').click(deleteItem);

        tr.append($('<td>')
            .append(upLink)
            .append(' ')
            .append(downLink)
            .append(' ')
            .append(deleteLink));

        $('#countriesTable').append(tr);

        fixRows();
    }

    function goUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.prev().insertAfter(row);
            row.fadeIn();
            fixRows();
        });
    }

    function goDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.next().insertBefore(row);
            row.fadeIn();
            fixRows();
        });
    }

    function deleteItem() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.remove();
            fixRows();
        });
    }

    function fixRows() {
        let rows = $('#countriesTable tr').toArray();
        $(rows).find('td a').show();
        $(rows[2]).find('td a:contains("Up")').hide();
        $(rows[rows.length - 1]).find('td a:contains("Down")').hide();
    }

}