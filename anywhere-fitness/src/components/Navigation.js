import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Dashboard from '../components/Dashboard'
import {Link} from 'react-router-dom'

const Navigation=() => {
  return (
    <Link to="/dashboard">Dashboard</Link>

  );
}
export default Navigation;  