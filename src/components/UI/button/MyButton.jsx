import React from 'react';
import classes from './MyButton.module.css'
const MyButton = (props) => {
  return (
    <button className={classes.myBtn}>
      {props.children/*реакт не знает куда добавлять вложенные элементы аналогия slot в vue */}
    </button>
  );
};

export default MyButton;