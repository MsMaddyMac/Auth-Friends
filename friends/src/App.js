import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//component imports
import FriendsForm from './components/FriendsForm';
import FriendsCard from './components/FriendsCard';




function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Friends List Coming Soon!</h1>
          </header>
          <FriendsForm />
          <FriendsCard />
        </div>
      </Router>
  );
}

export default App;
