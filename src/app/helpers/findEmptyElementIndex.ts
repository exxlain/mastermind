import { emptyElement } from '../constants';
const findEmptyElementIndex = (sequence: Array<string>)=>sequence.findIndex(el=> el === emptyElement);

export default findEmptyElementIndex;
