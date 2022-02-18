import React from 'react';
import styles from './ColorBoxesList.module.css';
import ColorBox from './ColorBoxes/ColorBox';

interface IColorBoxesListProps {
  colors: Array<string>;
}
const ColorBoxesList : React.FC<IColorBoxesListProps> = ({ colors }) =>{
  return (
      <div className={styles.list}>
          {colors.map(currentColor =>(ColorBox({ color: `${currentColor}` })))}
      </div>
  );

};

export default ColorBoxesList;
