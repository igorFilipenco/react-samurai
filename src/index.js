import reportWebVitals from './reportWebVitals';
import store from '../src/redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

let state = store.getState();

const renderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderApp(state);

store.subscribe(renderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
