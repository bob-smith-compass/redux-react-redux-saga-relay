import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Buttton from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemedButton from './components/themed-button/ThemedButton';


function App(props) {
  const [counter, setCounter] = useState(props.store.getState());

  const handleClick = (e) => {
    if (e.target.innerHTML === "+") {
      console.log(`Action: ${'INCREASE'}`);
      props.store.dispatch({ type: 'INCREASE' });
      setCounter(props.store.getState());
    } else if (e.target.innerHTML === "-") {
      console.log(`Action: ${'INCREASE'}`);
      props.store.dispatch({ type: 'DECREASE' });
      setCounter(props.store.getState());
    }
  };

  return (
    <>
      <style type="text/css">
        {`
         .Container {
          border: solid 1px blue;
        }

         .Row {
          border: solid 1px green;
        }
         .Col {
          border: solid 1px gray;
        }
        `}
      </style>

      <Container style={{'border': 'solid 1px red'}}>
        <Row style={{'border': 'solid 1px blue'}}>
          <Col style={{'border': 'solid 1px green'}} className=".Col">
            <h3>Redux</h3>
          </Col>
          <Col style={{'border': 'solid 1px green'}} className=".Col">
            <p>Redux State/Store {props.store.getState()}</p>
            {counter}
            {/* <p>Subscribe State/Store {props.store.subscribe( ()=> setState(props.store.getState()))}</p> */}
          </Col>
        </Row>
        <Row style={{'border': 'solid 1px blue'}}>
          <Col style={{'border': 'solid 1px green'}} className=".Col">
            <Buttton onClick={handleClick} >+</Buttton>
          </Col>
          <Col style={{'border': 'solid 1px green'}} className=".Col">
            <Buttton onClick={handleClick} >-</Buttton>
          </Col>
          <Col style={{'border': 'solid 1px green'}} className=".Col">
            <ThemedButton onClick={handleClick} >+</ThemedButton>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
