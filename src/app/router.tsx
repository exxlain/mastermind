import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { StartPage } from '../features/StartPage/StartPage';
import { GamePage } from '../features/GamePage/GamePage';

const Router = ()=> {
  return (
    <Routes>
        <Route path="" element={<StartPage />}/>
        <Route path="/game-page" element={<GamePage />}/>
    </Routes>
  );

};

export default Router;
