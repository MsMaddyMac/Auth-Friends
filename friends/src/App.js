import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { getToken } from './utils/axiosWithAuth';
//component imports
import Welcome from './components/Welcome';
import MyAccount from './components/MyAccount';
import PrivateRoute from '../src/components/PrivateRoute';
import LoginForm from './components/LoginForm';
//image imports
import Logo from './images/heart.jpeg';




function App() {
  const loggedIn = getToken();

// logout function
const logout = () => {
  localStorage.removeItem('token');
}

  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={Logo} alt="Best Friends Logo"></img>
            <nav>
              <Link to='/'>Home</Link>
              {!loggedIn && <Link to='/login'>Log In</Link>}
              {loggedIn && <Link to='/account'>My Account</Link>}
              <Link to='/' onClick={logout}>Logout</Link>
            </nav>
          </header> 
          <Route exact path='/' component={Welcome} />
          <Route exact path='/login' component={LoginForm} />
          <Switch>
            <PrivateRoute exact path='/account' component={MyAccount} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
