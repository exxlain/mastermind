import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import startPageReducer from '../features/StartPage/startPageSlice';
import gamePageReducer from '../features/GamePage/gamePageSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    startPage: startPageReducer,
    gamePage: gamePageReducer,
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
