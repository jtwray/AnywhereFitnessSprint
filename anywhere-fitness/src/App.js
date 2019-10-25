import React,{useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import RegisterForm from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import {Instructor} from './components/PunchPass/PunchPass';
import {FormCreateClass} from './components/Classes/FormCreateClass';
import Navigation from './components/Navigation';


function App() {
  const [user, setUser]=useState()
  const [welcome, setWelcome]=useState()
  

  return (
    <Router>
      
      <div className='App'>
      
        <Route exact path='/' render={props => ( <Login user={user} setWelcome={setWelcome} setUser={setUser} /> )} />
        <Route exact path='/register' component={RegisterForm} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} welcome={welcome} user={user}/>
        <PrivateRoute exact path='/navigation' component={Navigation} user={user}/>

        <PrivateRoute path="/logout" component={Logout} />
        <PrivateRoute exact path="/instructor" component={Instructor}/>
        <PrivateRoute exact path="/classlist/createclass" component={FormCreateClass}/>
      </div>
    </Router>
  );
}

export default App;
