import { puzzleItemsVariants, puzzleLength } from '../constants/constants';

const getRandomInt = ()=> Math.floor(Math.random() * puzzleLength);

const generatePuzzle = ()=>{
  return Array.from(Array(puzzleLength)).map(()=> puzzleItemsVariants[getRandomInt()]);
};

export default generatePuzzle;
