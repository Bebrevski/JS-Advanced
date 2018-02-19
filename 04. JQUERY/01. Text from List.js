function extractText() {
    let result = $('#items li').toArray().map(li => li.textContent).join(', ');

    $('#result').text(result);
}