import React, { useState } from 'react';
import classes from './App.module.scss'


function App() {
  
  const [color, setColor] = useState("rgb(161, 154, 154)")

  const [toggle, setToggle] = useState(true);
  const toggleIt = () => {
    setToggle(!toggle)
  }

  let [rotate, setRotate] = useState(0)
  
  return (
    <div className={classes.container}>
      <div className={classes.testbox} style={{backgroundColor: color }}></div>
      <button className={classes.redbutton} onClick={() => setColor("rgb(224, 21, 21)")}>RED</button>
      <button className={classes.graybutton} onClick={() => setColor("rgb(161, 154, 154)")}>GRAY</button>


      <div className={classes.testbox} onClick={toggleIt} style={toggle ? {backgroundColor: "rgb(224, 21, 21)", width: "150px", height: "150px"} : {backgroundColor: "rgb(161, 154, 154)", width: "200px", height: "200px"}}></div>
      <div className={classes.testbox} onClick={toggleIt} style={toggle ? {backgroundColor: "rgb(161, 154, 154)", width: "200px", height: "200px"} : {backgroundColor: "rgb(224, 21, 21)", width: "150px", height: "150px"}}></div>
      <button onClick={toggleIt}>Toggle</button>

      <div className={classes.testbox}  onMouseDown={() => setRotate(rotate + 45)} style={{transform: `rotate(${rotate}deg)`}}></div>
      <button onMouseDown={() => setRotate(rotate + 45)}>Rotate</button>
    </div>
  );
}

export default App;
