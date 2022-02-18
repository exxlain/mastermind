import React from 'react';
import { nanoid } from 'nanoid';

import styles from './ColorBox.module.css';


interface IColorBoxProps {
  color: string;
}
const ColorBox : React.FC<IColorBoxProps> = ({ color }) =>{
  return (
        <div
          className={styles.box}
          style={{ backgroundColor: `${color}` }}
          key={nanoid()}
        />
  );
};

export default ColorBox;
