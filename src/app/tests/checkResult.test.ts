import checkResult from '../helpers/checkResult';

describe('checkResult', ()=>{
  test('only fails', ()=>{
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'gold', 'mediumBlue'];
    const currentSequence = [ 'floralWhite', 'floralWhite', 'floralWhite', 'floralWhite', 'floralWhite'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([0, 0, 0, 0, 0]);
  });

  test('1 full match in first place', ()=>{
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'gold', 'mediumBlue'];
    const currentSequence = [ 'fireBrick', 'floralWhite', 'floralWhite', 'floralWhite', 'floralWhite'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 0, 0, 0, 0]);
  });

  test('1 full match in second place', ()=>{
    const puzzleSequence = ['mediumBlue', 'fireBrick', 'forestGreen', 'gold', 'mediumBlue'];
    const currentSequence = [ 'floralWhite', 'fireBrick', 'floralWhite', 'floralWhite', 'floralWhite'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 0, 0, 0, 0]);
  });

  test('2 full', ()=>{
    const currentSequence = [ 'fireBrick', 'floralWhite', 'mediumBlue', 'floralWhite', 'floralWhite'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'mediumBlue', 'gold', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 0, 0, 0]);
  });

  test('3 full', ()=>{
    const currentSequence = [ 'fireBrick', 'floralWhite', 'mediumBlue', 'floralWhite', 'mediumBlue'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'mediumBlue', 'gold', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 0, 0]);
  });

  test('4 full', ()=>{
    const currentSequence = [ 'fireBrick', 'mediumBlue', 'mediumBlue', 'floralWhite', 'mediumBlue'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'mediumBlue', 'gold', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 2, 0]);
  });

  test('5 full', ()=>{
    const currentSequence = [ 'fireBrick', 'mediumBlue', 'mediumBlue', 'gold', 'mediumBlue'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'mediumBlue', 'gold', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 2, 2]);
  });

  test('1 full + 1 color match', ()=>{
    const currentSequence = [ 'fireBrick', 'floralWhite', 'mediumBlue', 'floralWhite', 'floralWhite'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'gold', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 0, 0, 0]);
  });

  test('1 full + 2 color match', ()=>{
    const currentSequence = [ 'fireBrick', 'forestGreen', 'mediumBlue', 'floralWhite', 'floralWhite'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'gold', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 1, 0, 0]);
  });

  test('1 full + 3 color match', ()=>{
    const currentSequence = [ 'fireBrick', 'forestGreen', 'mediumBlue', 'floralWhite', 'gold'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'gold', 'forestGreen'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 1, 1, 0]);
  });

  test('1 full + 4 color match', ()=>{
    const currentSequence = [ 'fireBrick', 'forestGreen', 'mediumBlue', 'floralWhite', 'gold'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'gold', 'floralWhite'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 1, 1, 1]);
  });

  test('2 full  + 1 color match', ()=>{
    const currentSequence = [ 'fireBrick', 'gold', 'mediumBlue', 'floralWhite', 'floralWhite'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'mediumBlue', 'gold', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 1, 0, 0]);
  });
  test('2 full  + 2 color match', ()=>{
    const currentSequence = [ 'fireBrick', 'gold', 'mediumBlue', 'floralWhite', 'floralWhite'];
    const puzzleSequence = ['fireBrick', 'floralWhite', 'mediumBlue', 'gold', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 1, 1, 0]);
  });

  test('2 full  + 3 color match', ()=>{
    const currentSequence = [ 'fireBrick', 'gold', 'mediumBlue', 'floralWhite', 'mediumBlue'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'mediumBlue', 'gold', 'floralWhite'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 1, 1, 1]);
  });

  test('3 full  + 1 color match', ()=>{
    const currentSequence = [ 'fireBrick', 'gold', 'mediumBlue', 'floralWhite', 'mediumBlue'];
    const puzzleSequence = ['fireBrick', 'gold', 'mediumBlue', 'gold', 'floralWhite'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 1, 0]);
  });

  test('3 full  + 2 color match', ()=>{
    const currentSequence = [ 'fireBrick', 'gold', 'mediumBlue', 'floralWhite', 'mediumBlue'];
    const puzzleSequence = ['fireBrick', 'gold', 'mediumBlue', 'mediumBlue', 'floralWhite'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 1, 1]);
  });

  test('1 color match', ()=>{
    const currentSequence = [ 'floralWhite', 'floralWhite', 'mediumBlue', 'floralWhite', 'floralWhite'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'gold', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 0, 0, 0, 0]);
  });

  test('2 color match', ()=>{
    const currentSequence = [ 'floralWhite', 'floralWhite', 'mediumBlue', 'floralWhite', 'forestGreen'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'forestGreen', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 0, 0, 0]);
  });

  test('3 color match', ()=>{
    const currentSequence = [ 'mediumBlue', 'floralWhite', 'mediumBlue', 'floralWhite', 'forestGreen'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'forestGreen', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 1, 0, 0]);
  });

  test('4 color match', ()=>{
    const currentSequence = [ 'mediumBlue', 'fireBrick', 'mediumBlue', 'floralWhite', 'forestGreen'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'forestGreen', 'mediumBlue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 1, 1, 0]);
  });

  test('5 color match', ()=>{
    const currentSequence = [ 'mediumBlue', 'fireBrick', 'mediumBlue', 'floralWhite', 'forestGreen'];
    const puzzleSequence = ['fireBrick', 'mediumBlue', 'forestGreen', 'mediumBlue', 'floralWhite'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 1, 1, 1]);
  });

});
