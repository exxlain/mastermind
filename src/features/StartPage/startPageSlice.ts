import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface StartPageState {
  isGameStarted: boolean;
  puzzleSequence: Array<string>;
}

const initialState: StartPageState = {
  isGameStarted: false,
  puzzleSequence: [],
};

export const startPageSlice = createSlice({
  name: 'startPage',
  initialState,
  reducers: {
    startGame: (state,  action: PayloadAction<Array<string>>)=>{
      state.isGameStarted = true;
      state.puzzleSequence = action.payload;
    },
    resetPuzzle: ()=>{
      return initialState;
    },
  },
});
export const { startGame, resetPuzzle } = startPageSlice.actions;

export const  puzzleSequence = (state: RootState) => state.startPage.puzzleSequence;

export default startPageSlice.reducer;
