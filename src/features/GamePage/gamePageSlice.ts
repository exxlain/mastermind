import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { puzzleItemsCleared } from '../../app/constants';
import type { RootState } from '../../app/store';


interface GamePage {
  currentSequence: Array<string>;
}

const initialState: GamePage = {
  currentSequence: puzzleItemsCleared,
};

const gamePageSlice = createSlice({
  name: 'gamePage',
  initialState,
  reducers: {
    pushColorToCurrentPuzzle(state, action: PayloadAction<string>){
      const emptyIndex = state.currentSequence.findIndex(el=> el === 'none');
      state.currentSequence[emptyIndex] = action.payload;
    },
    clearSelectedPlace(state, action: PayloadAction<number>){
      state.currentSequence[action.payload] = 'none';
    },
  },
});
export const currentSequence = (state: RootState) => state.gamePage.currentSequence;

export const { pushColorToCurrentPuzzle, clearSelectedPlace } = gamePageSlice.actions;
export default gamePageSlice.reducer;
