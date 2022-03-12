import findEmptyElementIndex from './../helpers/findEmptyElementIndex';

describe('findEmptyElementIndex', ()=>{
  test('empty element exists', ()=>{
    const checkedArray =   ['fireBrick', 'none', 'none', 'none', 'none'];
    expect(findEmptyElementIndex(checkedArray)).toEqual(1);
  });
  test('none empty elements', ()=>{
    const checkedArray =   ['fireBrick', 'fireBrick', 'fireBrick', 'fireBrick', 'fireBrick'];
    expect(findEmptyElementIndex(checkedArray)).toEqual(-1);
  });
});
