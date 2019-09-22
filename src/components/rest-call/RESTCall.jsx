import React, {useState} from 'react';
const fetch = require('node-fetch');

const url = 'https://restcountries.eu/rest/v2/all';

const RESTCall = () => {
    const [countries, setCountries] = useState('not yet');
    const getData = () => {
        setCountries({name: 'USA'});
        fetch('https://restcountries.eu/rest/v2/all').then( (res) => {
            console.log(res);
            // ldata = res.clone().json();
            // console.log(ldata);
            // setCountries(ldata);
            // setCountries(res.clone().json());
            setCountries({name: 'USA'});
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
          .then(json => console.log(json));
    };

    return (
        <div>
            {url}
            <div>{JSON.stringify(countries)}</div>
            <button onClick={getData}>fetch data</button>
        </div>
    );
}

export default RESTCall;