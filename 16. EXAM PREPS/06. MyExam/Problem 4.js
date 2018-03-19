class PaymentManager {
    constructor(title) {
        this.title = title;
        this._id = '#';
    }

    render(id) {
        this._id += id;
        let outerDiv = $('#' + id);

        let table = $('<table>');
        let caption = $('<caption>').text(`${this.title} Payment Manager`);

        let tr = $('<tr>')
            .append($('<th class="name">').text('Name'))
            .append($('<th class="category">').text('Category'))
            .append($('<th class="price">').text('Price'))
            .append($('<th>').text('Actions'));
        let tHead = $('<thead>').append(tr);

        let tBody = $('<tbody class="payments">');

        let tFoot = $('<tfoot class="input-data">');
        let trFooter = $('<tr>')
            .append($('<td>').append($('<input name="name" type="text">')))
            .append($('<td>').append($('<input name="category" type="text">')))
            .append($('<td>').append($('<input name="price" type="number">')))
            .append($('<td>').append($('<button>Add</button>').click(
                this.addElement.bind(this)
            )));
        tFoot.append(trFooter);

        table.append(caption).append(tHead).append(tBody).append(tFoot);
        outerDiv.append(table);
    }

    addElement() {
        let name = $('.input-data').find('td:nth-child(1) input').val();
        let category = $('.input-data').find('td:nth-child(2) input').val();
        let number = $('.input-data').find('td:nth-child(3) input').val();

        $('.input-data').find('td:nth-child(1) input').val('');
        $('.input-data').find('td:nth-child(2) input').val('');
        $('.input-data').find('td:nth-child(3) input').val('');

        if (!(name === '' || category === '' || number === '')){
            let tBody = $(`${this._id} .payments`);

            let tr = $('<tr>')
                .append($('<td>').text(`${name}`))
                .append($('<td>').text(`${category}`))
                .append($('<td>').text(`${Number(number)}`))
                .append($('<td>').append($('<button>Delete</button>').click(
                    this.delElement
                )));

            tBody.append(tr);
        }
    }

    delElement() {
        $(this).parent().parent().remove();
    }
}