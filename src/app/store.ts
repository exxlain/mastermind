import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import startPageReducer, { StartPageState } from '../features/StartPage/startPageSlice';
import gamePageReducer, { GamePageState } from '../features/GamePage/gamePageSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['gamePage', 'startPage'],
  storage,
};


export interface IAppState {
  startPage: StartPageState,
  gamePage: GamePageState,
}

export const rootReducer =  combineReducers<IAppState>({
  startPage: startPageReducer,
  gamePage: gamePageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
