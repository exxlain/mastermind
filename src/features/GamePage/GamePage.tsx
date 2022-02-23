import React from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import {
  pushColorToCurrentPuzzle,
  saveResult,
  clearSelectedPlace,
  currentSequence,
  sequences,
  results,
  resetResults,
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

export function GamePage() {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate =  useNavigate();
  const currentSequenceSelection = useAppSelector(currentSequence);
  const currentSequences = useAppSelector(sequences);
  const currentResults = useAppSelector(results);
  const puzzle = useAppSelector(puzzleSequence);
  const onCheckButtonClick = ()=>{
    dispatch(saveResult(puzzle));
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
    <div className={styles.page}>
    <div className={styles.buttonsWrapper}>
      <button
        className={styles.backButton}
        aria-label="Go to start page"
        onClick={onBackButtonClick}
      >
        Go back
      </button>
        <button
            className={styles.backButton}
            aria-label="Try again"
            onClick={onRestartButtonClick}
        >
            Restart
        </button>
      </div>
      {<ColorBoxesButtonsList colors={puzzleItemsVariants} selectColor={pushColorToCurrentPuzzle}/>}
      {<ColorBoxesSelectedList colors={currentSequenceSelection} clearSelectedPlace={clearSelectedPlace}/>}
      <button
        className={styles.button}
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
  );
}
