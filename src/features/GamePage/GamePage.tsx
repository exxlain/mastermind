import React from 'react';
import { nanoid } from 'nanoid';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import {
  pushColorToCurrentPuzzle,
  saveResult,
  clearSelectedPlace,
  currentSequence,
  sequences,
  results,
} from './gamePageSlice';
import { puzzleSequence } from '../StartPage/startPageSlice';
import { puzzleItemsVariants } from '../../app/constants';
import findEmptyElementIndex from '../../app/helpers/findEmptyElementIndex';

import ColorBoxesSelectedList from '../components/ColorBoxesSelectedList';
import ColorBoxesList from './../components/ColorBoxesList';
import ColorBoxesButtonsList from './../components/ColorBoxesButtonsList';
import styles from './GamePage.module.css';

export function GamePage() {
  const dispatch: AppDispatch = useAppDispatch();
  const currentSequenceSelection = useAppSelector(currentSequence);
  const currentSequences = useAppSelector(sequences);
  const currentResults = useAppSelector(results);
  const puzzle = useAppSelector(puzzleSequence);
  const onCheckButtonClick = ()=>{
    dispatch(saveResult(puzzle));
  };
  return (
    <div className={styles.page}>
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
