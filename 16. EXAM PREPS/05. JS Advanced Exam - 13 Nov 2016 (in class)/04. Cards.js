function cardDeckBuilder(selector) {

    function reverse() {
        let cards = $(selector).find('.card').toArray().reverse();

        $(selector).append(cards);

        /*
        let cards = $('.card');
        $(selector).append(cards.get().reverse());
         */
    }

    return {
        addCard(face, suit) {
            let suits = {
                C: '\u2663',
                D: '\u2666',
                H: '\u2665',
                S: '\u2660'
            };

            let card = $(`<div class="card">${face} ${suits[suit]}</div>`);
            card.click(reverse);
            $(selector).append(card);
        }
    };
}