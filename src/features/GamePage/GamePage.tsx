import React from 'react';

import {
  pushColorToCurrentPuzzle,
  currentSequence,
  clearSelectedPlace,
} from './gamePageSlice';
import styles from './GamePage.module.css';
//import ColorBoxesList from './../components/ColorBoxesList';
import ColorBoxesButtonsList from './../components/ColorBoxesButtonsList';
import { puzzleItemsVariants } from '../../app/constants';
import { useAppSelector } from '../../app/hooks';
import ColorBoxesSelectedList from '../components/ColorBoxesSelectedList';

export function GamePage() {
  const currentSequenceSelection = useAppSelector(currentSequence);

  return (
    <section className={styles.pickup}>
      {<ColorBoxesButtonsList colors={puzzleItemsVariants} selectColor={pushColorToCurrentPuzzle}/>}
      {<ColorBoxesSelectedList colors={currentSequenceSelection} clearSelectedPlace={clearSelectedPlace}/>}
    </section>
  );
}
