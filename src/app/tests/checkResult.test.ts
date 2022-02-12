import checkResult from '../helpers/checkResult';

describe('checkResult', ()=>{
  test('only fails', ()=>{
    const puzzleSequence = ['red', 'blue', 'green', 'yellow', 'blue'];
    const currentSequence = [ 'white', 'white', 'white', 'white', 'white'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([0, 0, 0, 0, 0]);
  });

  test('1 full match in first place', ()=>{
    const puzzleSequence = ['red', 'blue', 'green', 'yellow', 'blue'];
    const currentSequence = [ 'red', 'white', 'white', 'white', 'white'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 0, 0, 0, 0]);
  });

  test('1 full match in second place', ()=>{
    const puzzleSequence = ['blue', 'red', 'green', 'yellow', 'blue'];
    const currentSequence = [ 'white', 'red', 'white', 'white', 'white'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 0, 0, 0, 0]);
  });

  test('2 full', ()=>{
    const currentSequence = [ 'red', 'white', 'blue', 'white', 'white'];
    const puzzleSequence = ['red', 'blue', 'blue', 'yellow', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 0, 0, 0]);
  });

  test('3 full', ()=>{
    const currentSequence = [ 'red', 'white', 'blue', 'white', 'blue'];
    const puzzleSequence = ['red', 'blue', 'blue', 'yellow', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 0, 0]);
  });

  test('4 full', ()=>{
    const currentSequence = [ 'red', 'blue', 'blue', 'white', 'blue'];
    const puzzleSequence = ['red', 'blue', 'blue', 'yellow', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 2, 0]);
  });

  test('5 full', ()=>{
    const currentSequence = [ 'red', 'blue', 'blue', 'yellow', 'blue'];
    const puzzleSequence = ['red', 'blue', 'blue', 'yellow', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 2, 2]);
  });

  test('1 full + 1 color match', ()=>{
    const currentSequence = [ 'red', 'white', 'blue', 'white', 'white'];
    const puzzleSequence = ['red', 'blue', 'green', 'yellow', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 0, 0, 0]);
  });

  test('1 full + 2 color match', ()=>{
    const currentSequence = [ 'red', 'green', 'blue', 'white', 'white'];
    const puzzleSequence = ['red', 'blue', 'green', 'yellow', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 1, 0, 0]);
  });

  test('1 full + 3 color match', ()=>{
    const currentSequence = [ 'red', 'green', 'blue', 'white', 'yellow'];
    const puzzleSequence = ['red', 'blue', 'green', 'yellow', 'green'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 1, 1, 0]);
  });

  test('1 full + 4 color match', ()=>{
    const currentSequence = [ 'red', 'green', 'blue', 'white', 'yellow'];
    const puzzleSequence = ['red', 'blue', 'green', 'yellow', 'white'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 1, 1, 1]);
  });

  test('2 full  + 1 color match', ()=>{
    const currentSequence = [ 'red', 'yellow', 'blue', 'white', 'white'];
    const puzzleSequence = ['red', 'blue', 'blue', 'yellow', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 1, 0, 0]);
  });
  test('2 full  + 2 color match', ()=>{
    const currentSequence = [ 'red', 'yellow', 'blue', 'white', 'white'];
    const puzzleSequence = ['red', 'white', 'blue', 'yellow', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 1, 1, 0]);
  });

  test('2 full  + 3 color match', ()=>{
    const currentSequence = [ 'red', 'yellow', 'blue', 'white', 'blue'];
    const puzzleSequence = ['red', 'blue', 'blue', 'yellow', 'white'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 1, 1, 1]);
  });

  test('3 full  + 1 color match', ()=>{
    const currentSequence = [ 'red', 'yellow', 'blue', 'white', 'blue'];
    const puzzleSequence = ['red', 'yellow', 'blue', 'yellow', 'white'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 1, 0]);
  });

  test('3 full  + 2 color match', ()=>{
    const currentSequence = [ 'red', 'yellow', 'blue', 'white', 'blue'];
    const puzzleSequence = ['red', 'yellow', 'blue', 'blue', 'white'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 1, 1]);
  });

  test('1 color match', ()=>{
    const currentSequence = [ 'white', 'white', 'blue', 'white', 'white'];
    const puzzleSequence = ['red', 'blue', 'green', 'yellow', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 0, 0, 0, 0]);
  });

  test('2 color match', ()=>{
    const currentSequence = [ 'white', 'white', 'blue', 'white', 'green'];
    const puzzleSequence = ['red', 'blue', 'green', 'green', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 0, 0, 0]);
  });

  test('3 color match', ()=>{
    const currentSequence = [ 'blue', 'white', 'blue', 'white', 'green'];
    const puzzleSequence = ['red', 'blue', 'green', 'green', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 1, 0, 0]);
  });

  test('4 color match', ()=>{
    const currentSequence = [ 'blue', 'red', 'blue', 'white', 'green'];
    const puzzleSequence = ['red', 'blue', 'green', 'green', 'blue'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 1, 1, 0]);
  });

  test('5 color match', ()=>{
    const currentSequence = [ 'blue', 'red', 'blue', 'white', 'green'];
    const puzzleSequence = ['red', 'blue', 'green', 'blue', 'white'];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 1, 1, 1]);
  });

});
