import React from 'react';
import './App.css';
//component imports
import FriendsForm from './components/FriendsForm';
// import FriendsList from './components/FriendsList';




function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Friends List Coming Soon!</h1>
        </header>
        <FriendsForm />
        {/* <FriendsList /> */}
      </div>
  );
}

export default App;
