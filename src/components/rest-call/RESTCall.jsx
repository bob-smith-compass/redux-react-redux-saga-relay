import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const fetch = require('node-fetch');

const url = 'https://restcountries.eu/rest/v2/all';

const RESTCall = () => {
    const [countries, setCountries] = useState('not yet');
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    const getData = () => {
        // setCountries({name: 'USA'}); // WORKS
        fetch('https://restcountries.eu/rest/v2/all').then( (res) => {
            console.log(res); // Pending Promise
            
            // ldata = res.clone().json();
            // console.log(ldata);
            // setCountries(ldata);

            // setCountries(res.clone().json().them( (json) => {
            //     return json;
            // })); // need Stream API

        });
        /**
         * Streams
         * Node way
         */
        // fetch('https://restcountries.eu/rest/v2/all'
        // //   "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
        // ).then(res => {
        //   const dest = fs.createWriteStream("./octocat.png");
        //   res.body.pipe(dest);
        // });
        fetch("https://api.github.com/users/github")
          .then(res => res.clone().json())
          .then(json => {
              setCountries(json);
              console.log(json);
            });
    };

    return (
      <Container>
        <Row>{url}</Row>
        <Row>
          <span>Text area (regular)</span>
          <textarea value={JSON.stringify(countries)} onChange={handleChange} />
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Control type="text"></Form.Control>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
            </Form>
            <Button onClick={getData}>fetch data</Button>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="countiesForm.CountryTextArea">
                <Form.Label>Countries</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  value={JSON.stringify(countries)}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
}

export default RESTCall;