import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Buttton from 'react-bootstrap/Button';


function App(props) {

  const handleClick = (e) => {
    if(e.target.innerHTML==="+") {
      console.log(`Action: ${'INCREASE'}`);
      props.store.dispatch({type: 'INCREASE'});
    } else if(e.target.innerHTML==="-") {
      console.log(`Action: ${'INCREASE'}`);
      props.store.dispatch({type: 'DECREASE'});
    }
  };

  return (
    <>
    <h3>Redux</h3>
    <p>Redux State/Store {props.store.getState()}</p>
    <Buttton onClick={handleClick} className="btn primary">+</Buttton>
    <Buttton onClick={handleClick} className="btn primary">-</Buttton>
    
    </>
  );
}

export default App;
