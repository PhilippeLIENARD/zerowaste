import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './Page.css';
// import './styles.css';
import './css/min/styles.min.css'
import Page from './components/Page';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(<Page />, document.getElementById('root'));


// update
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

