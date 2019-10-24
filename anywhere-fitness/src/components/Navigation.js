import React from 'react';
import {Link, Route} from 'react-router-dom'
import Logout from '../components/Logout'

const Navigation=() => {

  return (
    <>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/logout" >logout</Link>
      <Link to='/instructor'>Instructor</Link>
<Link to='/classlist/createclass'>create class</Link>
    </>
  );
}
export default Navigation;  


