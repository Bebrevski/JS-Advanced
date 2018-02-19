function attachEvents() {
    $('#items').on('click','li', function () {
        let li = $(this);
        if (li.attr('data-selected')){
           li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    });

    $('#showTownsButton').on('click', showTowns);

    function showTowns() {
        let selectedLi = $('#items li[data-selected=true]');
        let towns = selectedLi.toArray()
            .map(li => li.textContent)
            .join(', ');

        $('#selectedTowns').text('Selected towns: ' + towns);
    }
}