import React from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import styles from './ColorBox.module.css';
import { nanoid } from 'nanoid';
import { useAppDispatch } from '../../../app/hooks';
import { colorSymbolMap } from '../../../app/constants/constants';


interface IColorBoxSelectedProps {
  color: string;
  clearSelectedPlace: (color: number) => AnyAction;
  index: number;
}
const ColorBoxSelected : React.FC<IColorBoxSelectedProps> = ({ color, clearSelectedPlace, index }) =>{
  const dispatch = useAppDispatch();

  return (
        <button
          className={styles.box}
          onClick={() => (dispatch(clearSelectedPlace(index)))}
          style={{ backgroundColor: `${color === 'none' ? 'transparent' : color}` }}
          key={nanoid()}
        >{colorSymbolMap[color as keyof typeof colorSymbolMap]}</button>
  );
};

export default ColorBoxSelected;
