let move = (arr,selection) => {
  let place = 0;
  let place1= 0;
  let index = -1;
  let index1 =-1;
  if(selection >1 && selection <53 && selection !== 14 && selection !== 27 && selection !== 40 && typeof selection === 'number'){
    for(let i=0; i<4;i++) {//finds the index of the card one less than selection
      index = arr[i].indexOf(selection-1);
      place = i;
      if(index > -1) {
        break;
      }
    }
    for(let j=0; j<4;j++) {//finds the index of the  selection
      index1 = arr[j].indexOf(selection);
      place1 = j;
      if(index1 > -1){
        break;
      }
    }
    if(arr[place][index+1]==='X'){//checks if the card to be moved is a blank
      arr[place][index+1]= selection;// moves selection to the blank
      arr[place1][index1]='X';//moves the blank to the former selection position
    console.log(arr);
    } else {
      console.log('Not A Legal Move');
      console.log(arr);
      }
  } else {
    console.log('Invalid Selection');
    console.log(arr);
    }
    moveFinder(arr);
}
