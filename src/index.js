import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frame from './Containers/Frame';
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './Containers/Home'

ReactDOM.render(
  <BrowserRouter>
    {/* <Route exact path='/'><Redirect to="/_/_/_/_" /></Route> */}
    <Route exact path="/" component={Home}><Redirect to="/1" /> </Route>
    <Route exact path="/:userId" component={Frame} />
    <Route exact path='/:userId/:postId' component={Frame} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();