import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Redux imports
import { applyMiddleware, createStore } from 'redux';
// react-redux imports
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//component imports
import reducer from './reducers';

const store = createStore(
    reducer, 
    (applyMiddleware(thunk))
  );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


