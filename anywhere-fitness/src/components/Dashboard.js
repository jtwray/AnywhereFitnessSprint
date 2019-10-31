import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios'

const Dashboard = props => {
  console.log(props);
  let newuserStr = JSON.parse(localStorage.getItem('currentUser'));
  const [userObj, setUserObj] = useState(newuserStr);
  const [classes, setClasses] = useState();
  const [categories, setCategories] = useState();

  console.log(('newuser:', newuserStr));
  useEffect(() => {
    
    axios.get( `https://lambda-fitness-anywhere.herokuapp.com/api/category` )
      .then(res => {
        console.log('categories:', res);
        setCategories(res);
      });
  }, []);


  
  return (
    <>
      <Navigation />
      <h1>{userObj==null? userObj:userObj.username}'s DASHBOARD</h1>
      
<p><NavLink to='/searchclasslist'>SearchClassList</NavLink></p>
<p><NavLink to='/searchcategorylist'>SearchCategoryList</NavLink></p>
<p><NavLink to='/searchcategorylist'>SearchCategoryList</NavLink></p>
    </>
  );
};

export default Dashboard;
