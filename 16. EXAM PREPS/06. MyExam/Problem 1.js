function addProduct() {
    let products = $('#add-product').find('input').toArray();

    let product = $(products[0]).val();
    $(products[0]).val('');
    let price = Number($(products[1]).val());
    $(products[1]).val('');

    let element = $('<tr>');
    if (product !== '' && price !== 0) {
        element
            .append($(`<td>${product}</td>`))
            .append($(`<td>${price}</td>`));
    } else {
      return;
    }

    $('#product-list').append(element);
    let total = $('tfoot tr').find('td:last-child').text();
    total = Number(total) + price;
    $('tfoot tr').find('td:last-child').text(total);
}