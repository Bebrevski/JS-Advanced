function attachEvents() {
    $('#btnDelete').click(() => {
        $('#towns').find(':selected').remove();
    });

    $('#btnAdd').click(() => {
        let input = $('#newItem').val();
        $('#newItem').val('');

        if (input !== ''){
            $('#towns').append($(`<option>${input}</option>`));
        }
    })
}