function createCard(card, suit) {

    const VALID_CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const VALID_SUITS = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (VALID_CARDS.indexOf(card) === -1 || !VALID_SUITS.hasOwnProperty(suit)){
      throw new Error('Invalid input data!');
    }

    return {
        card,
        suit,
        toString: () => {return card + VALID_SUITS[suit]}
    }
}

console.log('' + createCard('A', 'S'));
console.log('' + createCard('10', 'H'));
console.log('' + createCard('1', 'C'));
console.log('' + createCard('2', 'Q'));