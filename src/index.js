import reportWebVitals from './reportWebVitals';
//react
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//redux
import store from './redux/reduxStore';
//component
import App from './App';
import './index.css';


let state = store.getState();

const renderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderApp(state);

store.subscribe(() => {
  const state = store.getState();
  renderApp(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
