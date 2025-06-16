import React from 'react';
import classes from './MyButton.module.css'
const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children/*реакт не знает куда добавлять вложенные элементы аналогия slot в vue */}
    </button>
  );
};

export default MyButton;