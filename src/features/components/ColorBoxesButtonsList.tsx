import React from 'react';
import styles from './ColorBoxesList.module.css';
import ColorBoxButton from './ColorBoxes/ColorBoxButton';
import { AnyAction } from '@reduxjs/toolkit';

interface IColorBoxesButtonsListProps {
  colors: Array<string>;
  selectColor: (color: string) => AnyAction;
}
const ColorBoxesButtonsList : React.FC<IColorBoxesButtonsListProps> = ({ colors, selectColor }) =>{
  return (
      <div className={styles.list}>
          {colors.map(currentColor =>
            (ColorBoxButton(
              { color: `${currentColor}`,  selectColor: selectColor },
            )))}
      </div>
  );

};

export default ColorBoxesButtonsList;
