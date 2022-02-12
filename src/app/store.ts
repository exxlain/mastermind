import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameStatusReducer from '../features/StartPage/startPageSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    gameStatus: gameStatusReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
