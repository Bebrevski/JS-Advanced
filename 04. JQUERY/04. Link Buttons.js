function attachEvents() {
    $('a.button').on('click', function () {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    })
}