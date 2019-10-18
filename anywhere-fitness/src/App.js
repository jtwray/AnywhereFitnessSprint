import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import {PrivateRoute} from './utils/PrivateRoute'
import {AuthProvider} from './utils/Auth';


function App() {
  return (
    <AuthProvider>

    <Router>
      <div className='App'>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />

      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
