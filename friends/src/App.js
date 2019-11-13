import React from 'react';
import './App.css';
// Redux imports
import { applyMiddleware, createStore } from 'redux';
// react-redux imports
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//component imports
import reducer from './reducers';
import FriendsForm from './components/FriendsForm';
// import FriendsList from './components/FriendsList';


const store = createStore(
  reducer, 
  (applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Friends List Coming Soon!</h1>
        </header>
        <FriendsForm />
        {/* <FriendsList /> */}
      </div>
    </Provider>
  );
}

export default App;
