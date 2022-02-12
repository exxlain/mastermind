import { createSlice } from '@reduxjs/toolkit';


interface GameStatus {
  isGameStarted: boolean;
}

const initialState: GameStatus = {
  isGameStarted: false,
};

const gameStatusSlice = createSlice({
  name: 'gameStatus',
  initialState,
  reducers: {
    startGame(state){
      state.isGameStarted = true;
    },

  },
});

export const { startGame } = gameStatusSlice.actions;
export default gameStatusSlice.reducer;
