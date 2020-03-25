import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../components/App';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: 'top right',
  offset: '50px',
  transition: 'scale'
}

const Application = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <App/>
    </Provider>
  </AlertProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application/>,
    document.body.appendChild(document.createElement('div')),
  )
});