var cards = document.querySelectorAll('.card');
var timer = document.getElementById('clock');
var shuffleButton = document.getElementById('button');
var moveClock = document.getElementById('counter');

shuffleButton.addEventListener('click', function() {
  redeal();
});

var watch = new stopwatch(timer);

let firstCard, secondCard;
let hasClicked = false;
let shuffles = 0;
let placehold;
let startTime = false;
let moveCounter = 0;

function selectCard() {
if(!startTime){
  watch.start();
  startTime =true;
}
if(!hasClicked) {
  hasClicked = true;
  firstCard = this;
  firstCard.classList.add('border-select');
  //console.log('the value is ' + firstCard.dataset.value)
  //console.log('the order is ' + firstCard.style.order)
  return;
} else {
  hasClicked = false;
  secondCard = this;
  firstCard.classList.remove('border-select');
  //console.log('the value is ' + secondCard.dataset.value)
  //console.log('the order is ' + secondCard.style.order)
  moveCard();
}

}

function moveCard() {
  if(Number(secondCard.dataset.value == 'yellow' && getValue(secondCard))
  == firstCard.dataset.value -1 && firstCard.dataset.value != 0 && firstCard.dataset.value !=13 
  && firstCard.dataset.value != 26 && firstCard.dataset.value != 39){
    //console.log(true);
    let pos1 = firstCard.style.order;
    let pos2 = secondCard.style.order;
    firstCard.style.order = pos2;
    secondCard.style.order = pos1;
    moveCounter++;
    let formattedMoves = formatMoves(moveCounter);
    moveClock.textContent = formattedMoves;
  } else {
    return false;
  }
  if(checkForWin()){
    document.getElementById('victory').style.zIndex = '99';
  }
}

function formatMoves() {
  let totalMoves = moveCounter.toString();

  if(moveCounter < 10){
    totalMoves = '00'+ totalMoves;
  } else if(moveCounter < 100){
    totalMoves = '0' + totalMoves;
  }

  return totalMoves;
}

function checkForWin(){
  let test = 0;
  for(let i=0;i<12;i++){
    if(cards[i].style.order == cards[i+1].style.order -1
    && cards[i+13].style.order == cards[i+14].style.order -1
    && cards[i+26].style.order == cards[i+27].style.order -1
    && cards[i+39].style.order == cards[i+40].style.order -1){
      test++;
    } else{
      break;
    }
  }
  if(test === 12){
    watch.stop();
    return true;
  }
}

function getValue(card){
  var arr = document.getElementsByClassName("card");
  for(i=0;i<arr.length;i++){
    if(arr[i].style.order== card.style.order -1){
      return(arr[i].dataset.value );
    }
  }
}

let valueplace = [];

for(let i=0;i<12;i++){
  valueplace[i] = i+2
  valueplace[i+12] = i+16
  valueplace[i+24] = i+30
  valueplace[i+36] = i+44
};

(function DealCards() {
    for(i=0;i<cards.length;i++){
      if(i !== 0 && i !== 13 && i !== 26 && i !== 39 && i !== 52 && i !== 53 &&
        i !== 54 && i !== 55) {
          let randomPos = Math.floor(Math.random() * valueplace.length);
          cards[i].style.order = valueplace.splice(randomPos,1);
  }
}
})();

function redeal() {
  shuffleCards();
  cards[52].style.order= ord1;
  cards[53].style.order= ord2;
  cards[54].style.order= ord3;
  cards[55].style.order= ord4;
  for(let a=rowholder1; a<=12;a++){
    let randomPos = Math.floor(Math.random()*toBeShuffled.length);
    cards[a].style.order = toBeShuffled.splice(randomPos,1);
    console.log(toBeShuffled)
  }
  for(let b=rowholder2; b<=25;b++){
    let randomPos = Math.floor(Math.random()*toBeShuffled.length);
    cards[b].style.order = toBeShuffled.splice(randomPos,1);
    console.log(toBeShuffled)
  }
  for(let c=rowholder3; c<=38;c++){
    let randomPos = Math.floor(Math.random()*toBeShuffled.length);
    cards[c].style.order = toBeShuffled.splice(randomPos,1);
    console.log(toBeShuffled)
  }
  for(let d=rowholder4; d<=51;d++){
    let randomPos = Math.floor(Math.random()*toBeShuffled.length);
    cards[d].style.order = toBeShuffled.splice(randomPos,1);
    console.log(toBeShuffled)
  }
}

let rowholder1, rowholder2, rowholder3,rowholder4;
let ord1, ord2, ord3, ord4;
let toBeShuffled=[]

function shuffleCards() {
  for(let i=0; i<13;i++) {
    if(cards[i].style.order != cards[i+1].style.order - 1) {
      rowholder1 = i+1;
      ord1= i+1;
      for(let j=i+2;j<14;j++){
      toBeShuffled.push(j);
    }break;
    }
  }
  for(let k=13; k<26;k++) {
    if(cards[k].style.order != cards[k+1].style.order - 1) {
      rowholder2 = k+1;
      ord2 = k+2
      for(let j=k+3;j<28;j++){
        toBeShuffled.push(j)
    }break;
  }
}
  for(let l=26; l<39;l++) {
    if(cards[l].style.order != cards[l+1].style.order - 1) {
      rowholder3 = l+1;
      ord3 = l+3
      for(let j=l+4;j<42;j++){
        toBeShuffled.push(j)
    }break;
  }
}
  for(let m=39; m<52;m++) {
    if(cards[m].style.order != cards[m+1].style.order - 1) {
      rowholder4 = m+1;
      ord4 = m+4
      for(let j=m+5;j<56;j++){
        toBeShuffled.push(j);
    } return toBeShuffled;
  }
}
}
let validMoves = 4;
function moveSearch() {

  for(let i=1;i<56;i++){
    if((cards[i].dataset.value == 'yellow' &&
    (cards[i].style.order == cards[12].style.order +1 ||
     cards[i].style.order == cards[25].style.order +1 ||
     cards[i].style.order == cards[38].style.order +1 ||
     cards[i].style.order == cards[51].style.order +1)) ||
    (cards[i].dataset.value == 'yellow' &&
    (cards[i].style.order == cards[52].style.order +1 ||
     cards[i].style.order == cards[53].style.order +1 ||
     cards[i].style.order == cards[54].style.order +1 ||
     cards[i].style.order == cards[55].style.order +1))){
       validMoves--;
     }
  } console.log(validMoves);
  return validMoves;
}

cards.forEach(card => card.addEventListener('click',selectCard));
