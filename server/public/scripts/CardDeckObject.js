let objectDeck = [];

let cardRank = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

let cardValue = [];

for(i=1; i<53; i++){
  cardValue[i] =i;
}

class Card {
  constructor(rank,value) {
    this.rank = rank;
    this.value = value;
  }
}

let deckCreator = () => {
  for(i=0;i<cardRank.length;i++){
    objectDeck[i] = new Card(cardRank[i],cardValue[i]);
    objectDeck[i+13] = new Card(cardRank[i],cardValue[i+13]);
    objectDeck[i+26] = new Card(cardRank[i],cardValue[i+26]);
    objectDeck[i+39] = new Card(cardRank[i],cardValue[i+39]);
  }
}
