import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

import App from './components/app';

axios.get('/api/contests')
    .then(resp => {
        ReactDOM.render(
            <App initialContests={resp.data.contests} />,
            document.getElementById('root'));

    }).catch(console.error);


