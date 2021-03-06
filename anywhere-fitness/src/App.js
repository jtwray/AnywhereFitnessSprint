import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import RegisterForm from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import ClassForm from './components/ClassForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={RegisterForm} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route exact path='/ClassForm' component={ClassForm} />
      </div>
    </Router>
  );
}

export default App;
