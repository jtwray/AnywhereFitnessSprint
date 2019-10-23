import React from 'react';
import {Link, Route} from 'react-router-dom'
import Logout from '../components/Logout'

const Navigation=() => {

  return (
    <>

      <Route path="/logout" component={Logout} />
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/logout" >logout</Link>

    </>
  );
}
export default Navigation;  