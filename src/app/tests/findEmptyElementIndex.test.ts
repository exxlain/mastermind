import findEmptyElementIndex from './../helpers/findEmptyElementIndex';

describe('findEmptyElementIndex', ()=>{
  test('empty element exists', ()=>{
    const checkedArray =   ['red', 'none', 'none', 'none', 'none'];
    expect(findEmptyElementIndex(checkedArray)).toEqual(1);
  });
  test('none empty elements', ()=>{
    const checkedArray =   ['red', 'red', 'red', 'red', 'red'];
    expect(findEmptyElementIndex(checkedArray)).toEqual(-1);
  });
});
