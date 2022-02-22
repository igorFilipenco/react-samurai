import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//app
import App from './App';
//actions
import { addPost } from './contract/actions';
//styles
import './index.css';


export const renderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}