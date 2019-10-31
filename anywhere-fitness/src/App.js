import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import RegisterForm from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import {Instructor} from './components/PunchPass/PunchPass';
import {FormCreateClass} from './components/Classes/FormCreateClass';
import {FormCreateCategory} from './components/Categories/FormCreateCategory'
import Navigation from './components/Navigation';
import {CategoryList} from './components/Categories/CategoryList'
import {ClassList} from './components/Classes/ClassList'
import {SearchClassList} from './components/Classes/SearchClassList'
import {SearchCategoryList} from  './components/Classes/SearchCategoryList'
import useReactRouter from 'use-react-router'
import {axiosWithAuth} from './utils/axiosWithAuth';
import axios from 'axios'


function App() {
  const {history}=useReactRouter();
  const [user, setUser]=useState();
  const [welcome, setWelcome]=useState();
  const [resultData, setResultData]=useState();
  const [loginData, setLoginData]=useState( {
    username: '',
    password: '', isInstructor: false
  } );

  const login=( loginData ) => {

    axiosWithAuth().post(
      '/auth/login',
      loginData
    )
      .then( res => {
        console.log( res, loginData );
        localStorage.setItem( 'token', JSON.stringify( res.data.token ) );
        localStorage.setItem( 'currentUser', JSON.stringify( res.data.user ) );
        setLoginData( {username: '', password: ''} );
        history.push( '/dashboard' )
        setResultData( res );
        setUser( res.data.user );
        console.log( 'res.data.user:', res.data.user );
        setWelcome( resultData.message )
      } ) /* fill in place holder!!! */

      .catch( err => console.error( err ) );

  }


  return (

    <div className='App'>
      <Route
        exact
        path='/'
        render={props => (
          <Login user={user} setWelcome={setWelcome} login={login} setUser={setUser} loginData={loginData} setLoginData={setLoginData} />
        )}
      />
      <Route exact path='/register' component={RegisterForm} />
      <PrivateRoute
        exact
        path='/dashboard'
        component={Dashboard}
        welcome={welcome}
        user={user}
      />
      <PrivateRoute
        exact
        path='/navigation'
        component={Navigation}
        user={user}
      />

      <PrivateRoute path='/logout' component={Logout} />
      <PrivateRoute exact path='/instructor' component={Instructor} />
      <PrivateRoute
        exact
        path='/classlist'
        component={ClassList}
      />
      <PrivateRoute
        exact
        path='/searchclasslist'
        component={SearchClassList}
      />
      <PrivateRoute
        exact
        path='/searchcategorylist'
        component={SearchCategoryList}
      />
      <PrivateRoute
        exact
        path='/categorylist'
        component={CategoryList}
      />
      <PrivateRoute
        exact
        path='/classlist/createclass'
        component={FormCreateClass}
      />

      <PrivateRoute
        exact
        path='/categorylist/createcategory'
        component={FormCreateCategory}
      />
    </div>

  );
}

export default App;