class Card {
  constructor(name,value,rank,image) {
    this.name =name;
    this.value= value;
    this.rank= rank;
  }
}

const twoOfClubs = new Card(1,1,1,'2C.png');

let ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
let objectDeck = [];
let values = [];

for(let i=0;i<52;i++){
  values[i] = i+1
};

function makeDeck() {
for(let i=0;i<ranks.length;i++) {
  objectDeck[i] = new Card(ranks[i]+ 'Club',values[i],ranks[i]);
  objectDeck[i+13]= new Card(ranks[i]+'Spade',values[i+13],ranks[i]);
  objectDeck[i+26]= new Card(ranks[i]+'Heart',values[i+26],ranks[i]);
  objectDeck[i+39]= new Card(ranks[i]+'Diamond',values[i+39],ranks[i]);
}
return objectDeck;
}
