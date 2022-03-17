import React from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import {
  pushColorToCurrentPuzzle,
  saveResult,
  clearSelectedPlace,
  getVictory,
  currentSequence,
  sequences,
  results,
  resetResults,
  victory,
} from './gamePageSlice';
import {
  puzzleSequence,
  resetPuzzle,
} from '../StartPage/startPageSlice';
import { puzzleItemsVariants } from '../../app/constants/constants';
import { START_PAGE } from '../../app/constants/paths';
import findEmptyElementIndex from '../../app/helpers/findEmptyElementIndex';

import ColorBoxesSelectedList from '../components/ColorBoxesSelectedList';
import ColorBoxesList from './../components/ColorBoxesList';
import ColorBoxesButtonsList from './../components/ColorBoxesButtonsList';
import styles from './GamePage.module.css';
import Fireworks from './../components/Fireworks/Fireworks';

export function GamePage() {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate =  useNavigate();
  const puzzleFromGame = useAppSelector(puzzleSequence);
  const currentSequenceSelection = useAppSelector(currentSequence);
  const currentSequences = useAppSelector(sequences);
  const currentResults = useAppSelector(results);
  const victoryState = useAppSelector(victory);

  const onCheckButtonClick = ()=>{
    if (currentSequenceSelection.join() === puzzleFromGame.join()){
      dispatch(getVictory());
    }
    dispatch(saveResult(puzzleFromGame));
  };
  const onRestartButtonClick = ()=>{
    dispatch(resetResults());
  };
  const onBackButtonClick = ()=>{
    dispatch(resetResults());
    dispatch(resetPuzzle());
    navigate(START_PAGE);
  };

  return (
    <>
      {victoryState && <Fireworks/>}
      <div className={styles.page}>
        <header className={styles.header}>
          <button
            className={styles.headerButton}
            aria-label="Go to start page"
            onClick={onBackButtonClick}
          >
            Go to start page
          </button>
          <button
            className={styles.headerButton}
            aria-label="Try again"
            onClick={onRestartButtonClick}
          >
            Restart
          </button>
        </header>
        <section className={styles.selectVariantsWrapper}>
          {<ColorBoxesButtonsList colors={puzzleItemsVariants} selectColor={pushColorToCurrentPuzzle}/>}
          {<ColorBoxesSelectedList colors={currentSequenceSelection} clearSelectedPlace={clearSelectedPlace}/>}
        </section>
        <button
          className={styles.checkButton}
          aria-label="Check your sequence"
          onClick={onCheckButtonClick}
          disabled={findEmptyElementIndex(currentSequenceSelection) !== -1}
        >
          Check
        </button>
        <section className={styles.results}>
          <p className={styles.resultsText}>Your results:</p>
          {currentSequences.map((sequence, index)=>(<ColorBoxesList colors={sequence} results={currentResults[index]} key={nanoid()}/>))}
        </section>
      </div>
     </>
  );
}
