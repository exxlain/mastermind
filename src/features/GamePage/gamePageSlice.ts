import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { puzzleItemsCleared, emptyElement } from '../../app/constants/constants';
import type { RootState } from '../../app/store';
import checkResult from '../../app/helpers/checkResult';
import findEmptyElementIndex from '../../app/helpers/findEmptyElementIndex';


export interface GamePageState {
  currentSequence: Array<string>;
  sequences: Array<Array<string>>;
  results: Array<Array<number>>;
  victory: boolean;
}

const initialState: GamePageState = {
  currentSequence: puzzleItemsCleared,
  sequences: [],
  results: [],
  victory: false,
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
      state.sequences.unshift(state.currentSequence);
      const result = checkResult(action.payload, state.currentSequence);
      state.results.unshift(result);
      state.currentSequence = puzzleItemsCleared;
    },
    resetResults: ()=>{
      return initialState;
    },
    getVictory: (state)=>{
      state.victory = true;
    },
  },
});

export const currentSequence = (state: RootState) => state.gamePage.currentSequence;
export const sequences = (state: RootState) => state.gamePage.sequences;
export const results = (state: RootState) => state.gamePage.results;
export const victory = (state: RootState) => state.gamePage.victory;

export const {
  pushColorToCurrentPuzzle,
  clearSelectedPlace,
  saveResult,
  resetResults,
  getVictory,
} = gamePageSlice.actions;

export default gamePageSlice.reducer;
