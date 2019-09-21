import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Buttton from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemedButton from './components/themed-button/ThemedButton';


function App(props) {

  const handleClick = (e) => {
    if (e.target.innerHTML === "+") {
      console.log(`Action: ${'INCREASE'}`);
      props.store.dispatch({ type: 'INCREASE' });
    } else if (e.target.innerHTML === "-") {
      console.log(`Action: ${'INCREASE'}`);
      props.store.dispatch({ type: 'DECREASE' });
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

      <Container style={{'border': 'solid 1px gray'}}>
        <Row>
          <Col className=".Col">
            <h3>Redux</h3>
          </Col>
          <Col className=".Col">
            <p>Redux State/Store {props.store.getState()}</p>
          </Col>
        </Row>
        <Row>
          <Col className=".Col">
            <Buttton onClick={handleClick} >+</Buttton>
          </Col>
          <Col className=".Col">
            <Buttton onClick={handleClick} >-</Buttton>
          </Col>
          <Col className=".Col">
            <ThemedButton onClick={handleClick} >+</ThemedButton>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
