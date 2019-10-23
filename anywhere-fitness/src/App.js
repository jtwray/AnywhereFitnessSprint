import React,{useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import RegisterForm from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout'
function App() {
  const initialUserState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    roleId: 1
  };
  const [newUser, setnewUser] = useState(initialUserState);
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={RegisterForm} initialUserState={initialUserState}/>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  );
}

export default App;
