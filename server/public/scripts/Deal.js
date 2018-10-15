let row1 =[1,];//Placing an Ace and a Blank in row1
let row2 =[14,];
let row3 =[27,];
let row4 =[40,];
let board = [row1,row2,row3,row4] //creates a board with 4 rows
let deal = (array1,array2,array3,array4,array5) => {
  array2.push('X');
  array3.push('X');
  array4.push('X');
  array5.push('X');
  for(i=0; i<12;i++){
    while(array2.length <14){
      array2.push(array1[i]);
      i++;
    } while(array3.length <14){
      array3.push(array1[i]);
      i++;
    } while(array4.length<14){
      array4.push(array1[i]);
      i++;
    } while(array5.length<14){
    array5.push(array1[i]);
    i++;
  }
  }; //puts 12 cards into each row
  console.log(array2);
  console.log(array3);
  console.log(array4);
  console.log(array5);
}
deal(deck,row1,row2,row3,row4);
console.log(board);
