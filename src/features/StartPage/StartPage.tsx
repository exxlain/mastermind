import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { startGame } from './startPageSlice';
import styles from './StartPage.module.css';
import logo from '../../logo.svg';
import generatePuzzle from '../../app/helpers/generatePuzzle';

export function StartPage() {
  const dispatch = useAppDispatch();
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
            <Link to="/game-page">
            <button
                className={styles.button}
                aria-label="Start game"
                onClick={onStartButtonClick}
            >START</button>
            </Link>
        </section>
      </div>
  );
}
