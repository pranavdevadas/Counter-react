import './App.css';
import React, {useState} from 'react';
import Counter from './counter'
function App() {
  let [state, setState] = useState(false)
  return (
    <div className="App">
      <h1 onClick={() => setState(!state)}>Show / Hide Counter</h1>
      {state && <Counter/>}
    </div>
  );
}

export default App;
