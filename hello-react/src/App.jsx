// import { useState } from 'react';
import './App.css';
import ParentComponent from './components/ParentComponent';
// import StopWatch from './components/StopWatch';
// import TutUseEffect from './components/tutUseEffect';

import TodoList from './components/TodoList';

function App() {
  // const [componentShowFlag, setComponentShowFlag] = useState(true);
  // const [count, setCount] = useState(0);
  // function handleClick() {
  //   setComponentShowFlag((componentShowFlag) => !componentShowFlag);
  // }
  // function handleClickChangeProps() {
  //   setCount((count) => count + 1);
  // }
  return (
    <div className="App">
      <ParentComponent />
      {/* <TodoList /> */}
      {/* <StopWatch /> */}
      {/* {componentShowFlag ? (
        <TutUseEffect count={count} />
      ) : (
        <p>adam namayesh</p>
      )}
      <button onClick={handleClick}>click</button>
      <button onClick={handleClickChangeProps}>changeProps</button> */}
    </div>
  );
}

export default App;
