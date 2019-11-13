import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { getToken } from './utils/axiosWithAuth';
//component imports
import MyAccount from './components/MyAccount';
// import FriendsForm from './components/FriendsForm';
// import FriendsCard from './components/FriendsCard';
import PrivateRoute from '../src/components/PrivateRoute';
import LoginForm from './components/LoginForm';




function App() {
  const loggedIn = getToken();

// logout function
const logout = () => {
  localStorage.removeItem('token');
}

  return (
      <Router>
        <div className="App">
          {/* <header className="App-header">
            <h1>Friends List Coming Soon!</h1>
          </header> */}
          <nav>
            <Link to='/'>Home</Link>
            {!loggedIn && <Link to='/login'>Log In</Link>}
            {loggedIn && <Link to='/account'>My Account</Link>}
            <Link to='/' onClick={logout}>Logout</Link>
            
          </nav>
          <Route exact path='/login' component={LoginForm} />
          <Switch>
            <PrivateRoute exact path='/account' component={MyAccount} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
