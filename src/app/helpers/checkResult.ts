const checkResult = (puzzleSequence: Array<string>, currentSequence: Array<string>): Array<number> =>{
  const resultArr: Array<number> =  [];
  const newPuzzleArr: Array<string> =  [];
  const newCurrentArr: Array<string> =  [];

  currentSequence.forEach((currentEl, index)=>{
    if (currentEl === puzzleSequence[index]) {
      resultArr.push(2);
    } else {
      newPuzzleArr.push(puzzleSequence[index]);
      newCurrentArr.push(currentEl);
    }
  });

  newCurrentArr.forEach((currentEl)=>{
    const currentMatchIndex = newPuzzleArr.findIndex(puzzleEl => currentEl === puzzleEl);
    if (currentMatchIndex !== -1){
      resultArr.push(1);
      newPuzzleArr.splice(currentMatchIndex, 1);
    } else {
      resultArr.push(0);
    }
  });
  const  sortedArr = resultArr.sort((a, b) => b - a );
  return  sortedArr;
};

export default checkResult;
