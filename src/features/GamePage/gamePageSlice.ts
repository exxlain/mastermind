import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { puzzleItemsCleared, emptyElement } from '../../app/constants/constants';
import type { RootState } from '../../app/store';
import checkResult from '../../app/helpers/checkResult';
import findEmptyElementIndex from '../../app/helpers/findEmptyElementIndex';


export interface GamePageState {
  currentSequence: Array<string>;
  sequences: Array<Array<string>>;
  results: Array<Array<number>>;
}

const initialState: GamePageState = {
  currentSequence: puzzleItemsCleared,
  sequences: [],
  results: [],
};

const gamePageSlice = createSlice({
  name: 'gamePage',
  initialState,
  reducers: {
    pushColorToCurrentPuzzle(state, action: PayloadAction<string>){
      const emptyIndex = findEmptyElementIndex(state.currentSequence);
      state.currentSequence[emptyIndex] = action.payload;
    },
    clearSelectedPlace(state, action: PayloadAction<number>){
      state.currentSequence[action.payload] = emptyElement;
    },
    saveResult(state, action: PayloadAction<Array<string>>){
      state.sequences.push(state.currentSequence);
      const result = checkResult(action.payload, state.currentSequence);
      state.results.push(result);
      state.currentSequence = puzzleItemsCleared;
    },
    resetResults: ()=>{
      return initialState;
    },
  },
});

export const currentSequence = (state: RootState) => state.gamePage.currentSequence;
export const sequences = (state: RootState) => state.gamePage.sequences;
export const results = (state: RootState) => state.gamePage.results;

export const {
  pushColorToCurrentPuzzle,
  clearSelectedPlace,
  saveResult,
  resetResults,
} = gamePageSlice.actions;
export default gamePageSlice.reducer;
