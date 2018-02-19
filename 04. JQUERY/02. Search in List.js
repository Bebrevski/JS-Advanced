function search() {
    let search = $('#searchText').val();
    let count = 0;

    $('#towns li').each(function() {
        if ($(this).text().indexOf(search) !== -1){
          $(this).css('font-weight', 'bold');
          count++;
        } else {
            $(this).css('font-weight', '');
        }

        $('#searchText').val('');
        $('#result').text(`${count} matches found.`)
    })
}