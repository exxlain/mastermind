import React from 'react';

import { useAppDispatch } from '../../app/hooks';
import {
  startGame,
} from './startPageSlice';
import styles from './StartPage.module.css';

export function StartPage() {
  const dispatch = useAppDispatch();

  return (
        <section>
            <button
                className={styles.button}
                aria-label="Start game"
                onClick={() => dispatch(startGame())}
            >START</button>
        </section>
  );
}
