import React from 'react';
import logo from './logo.svg';
import './App.css';


function App(props) {
  return (
    <>
    <h3>Redux</h3>
    <p>Redux State/Store {props.store.getState()}</p>
    
    </>
  );
}

export default App;
