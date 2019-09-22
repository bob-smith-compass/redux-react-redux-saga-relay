import React from 'react';
const fetch = require('node-fetch');

const url = 'https://restcountries.eu/rest/v2/all';

const RESTCall = () => {
    let ldata = 'not yet';
    const getData = () => {
        fetch('https://restcountries.eu/rest/v2/all').then( (res) => {
            console.log(res);
            ldata = res.clone().json();
            console.log(ldata);
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
            <div>{ldata}</div>
            <button onClick={getData}>fetch data</button>
        </div>
    );
}

export default RESTCall;