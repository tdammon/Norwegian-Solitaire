let deck = []; //creates an array to be used as a deck.

for(i=0; i<12; i++) {
  deck.push(i+2);
  deck.push(i+15);
  deck.push(i+28);
  deck.push(i+41);
}; //adds 48 elements to the deck (1-52) not including the aces (aces are 1,14,27,40)
console.log(deck);
let validMoveCounter =4;
function shuffle(array) {
  if(validMoveCounter <4){//When no moves are left we need to reshuffle
    array.splice(0,array.length)
    holder = [];//the holder will make an array of arrays which we will map into a 1d array
    for(let i=0; i<4; i++){
      for(let j=0; j<13; j++){
        if(board[i][j] !== board[i][j+1]-1){//checks if two cards are consecutive in value
            holder[i] = board[i].splice(j+1,12-j+1);
            break;
        }
      }
   }
   console.log(holder);
   for(let i=0; i<4;i++){// pushes the elements of holder into the 1d array
     for(num of holder[i]){
       array.push(num);
     }
   }
    for(let i=0; i<array.length; i++){// removes blanks from the deck
      if (array[i] === 'X') {
        array.splice(i, 1);
        i--;
      }
    }
    for(i=0; i<array.length; i++) {//this is not changing the global deck!!
      let p = array[i];
      let j =Math.floor(Math.random()*array.length);
      array[i]=array[j];
      array[j]=p;
    };
      console.log(array);
  } else {
  for(i=0; i<array.length; i++) {
    let p = array[i];
    let j =Math.floor(Math.random()*array.length);
    array[i]=array[j];
    array[j]=p;
  };
    console.log(array);
  }
}//shuffes an array of elements

shuffle(deck);
