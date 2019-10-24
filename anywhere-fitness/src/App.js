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


function App() {
  const [user, setUser]=useState()

  return (
    <Router>
      
      <div className='App'>
        <Route exact path='/' render={props => ( <Login user={user} setUser={setUser} /> )} />
        <Route exact path='/register' component={RegisterForm} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} user={user}/>
        <Route path="/logout" component={Logout} />
        <Route exact path="/instructor" component={Instructor}/>
        <Route exact path="/classlist/createclass" component={FormCreateClass}/>
      </div>
    </Router>
  );
}

export default App;
