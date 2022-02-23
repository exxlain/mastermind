import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { StartPage } from '../features/StartPage/StartPage';
import { GamePage } from '../features/GamePage/GamePage';
import { START_PAGE, GAME_PAGE } from './constants/paths';

const Router = ()=> {
  return (
    <Routes>
        <Route path={START_PAGE} element={<StartPage />}/>
        <Route path={GAME_PAGE} element={<GamePage />}/>
    </Routes>
  );

};

export default Router;
