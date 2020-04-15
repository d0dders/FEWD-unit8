const searchBox = document.getElementById('search');
let cards = document.getElementsByClassName('card');

searchBox.addEventListener('keyup', () => {
    const searchString = searchBox.value;
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let cardName = card.lastElementChild.firstElementChild;
    
        if(!cardName.innerText.toLowerCase().includes(searchString.toLowerCase())) {
            cards.item(i).style.display = 'none';
        } else {
            cards.item(i).style.display = 'flex';
        }
    }
});