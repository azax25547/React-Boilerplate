import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const template = (
    <div>
    <h3>This is a React Boilerplate</h3>
    <p>This is a simple boilerplate for your react project.
    Clone this repository and start coding....
    </p>
    </div>
)

ReactDOM.render(template ,document.getElementById("app"));

