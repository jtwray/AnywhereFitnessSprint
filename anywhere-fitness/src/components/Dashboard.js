import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Dashboard = props => {
  console.log(props);
  let newuserStr = JSON.parse(localStorage.getItem('currentUser'));
  const [userObj, setUserObj] = useState(newuserStr);
  const [classes, setClasses] = useState();
  console.log(('newuser:', newuserStr));
  useEffect(() => {
    axiosWithAuth()
      .get(`/user/id`, 4)
      .then(res => {
        console.log('classes:', res);
        setClasses(res.classId);
      });
  }, []);
  return (
    <>
      <Navigation />
      <h1>{userObj.username && userObj.username}'s DASHBOARD</h1>

      <Link to='/classlist'>ClassList</Link>
    </>
  );
};

export default Dashboard;
