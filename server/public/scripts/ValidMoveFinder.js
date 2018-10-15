
let moveFinder = (arr) => {
  validMoveCounter = 4;
  for(let i=0; i<4; i++){
    for(let j=0; j<14; j++){
      if(arr[i][j] === 'X'&& (arr[i][j-1] === 13 || arr[i][j-1] === 26 || arr[i][j-1] === 39 || arr[i][j-1] === 52)) {
        validMoveCounter--;
      } else if(arr[i][j]=== 'X' && arr[i][j-1] ==='X') {
        validMoveCounter--;
      }
    }
  }
  console.log(`There are ${validMoveCounter} valid moves!`)
}
