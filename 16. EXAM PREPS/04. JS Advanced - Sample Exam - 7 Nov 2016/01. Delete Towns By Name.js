function attachEvents() {

    $('#btnDelete').on('click', function () {
        let input = $('#townName').val();
        $('#townName').val('');

        let towns = $('#towns').find('option').toArray();

        let found = false;
        for (let town of towns) {
            if (town.textContent === input) {
                found = true;
                $(town).remove();
            }
        }

        if (found) {
            $('#result').text(`${input} deleted.`);
        } else {
            $('#result').text(`${input} not found.`);
        }
    });

}