import React from 'react';
import './App.css';


import Registration from './components/Registration/Registration';
function App() {
  return (
    <div className="App">
      <br/>
      <h1 className="hea">Currency Converter</h1>
      <br/>
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;
