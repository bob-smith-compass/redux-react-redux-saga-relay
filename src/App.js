import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Buttton from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemedButton from './components/themed-button/ThemedButton';
import Disease from './components/disease/Disease';


function App(props) {
  const [disease, setDisease] = useState(props.store.getState());

  const handleClick = (e) => {
    if (e.target.innerHTML === "+") {
      console.log(`Action: ${'ADDDISEASE'}`);
      props.store.dispatch({ type: 'ADDDISEASE', disease: 'Blood pressure' });
      setDisease(props.store.getState());
    } else if (e.target.innerHTML === "-") {
      console.log(`Action: ${'ADDSYMPTOM'}`);
      props.store.dispatch({ type: 'ADDSYMPTOM' });
      setDisease(props.store.getState());
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
            <h3>Redux State/Store</h3>
            <p>{JSON.stringify(props.store.getState())}</p>
          </Col>
          <Col style={{'border': 'solid 1px green'}} className=".Col">
            {/* {JSON.stringify(disease)} */}
            {disease.diagnoses.map( (e, i) => <Disease key={i} disease={e} />)}
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
