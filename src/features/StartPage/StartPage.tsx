import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import type { AppDispatch } from '../../app/store';
import { startGame } from './startPageSlice';
import logo from '../../logo.svg';
import generatePuzzle from '../../app/helpers/generatePuzzle';
import styles from './StartPage.module.css';
import { GAME_PAGE } from '../../app/constants/paths';

export function StartPage() {
  const dispatch: AppDispatch = useAppDispatch();
  const onStartButtonClick = ()=>{
    const puzzleSequence = generatePuzzle();
    dispatch(startGame(puzzleSequence));
  };

  return (
    <div className={styles.startPage}>
      <header className={styles.startPageHeader}>
        <img src={logo} className={styles.startPageLogo} alt="logo" />
      </header>
      <section>
        <Link to={GAME_PAGE}>
          <button
              className={styles.button}
              aria-label="Start game"
              onClick={onStartButtonClick}
          >start</button>
        </Link>
      </section>
    </div>
  );
}
