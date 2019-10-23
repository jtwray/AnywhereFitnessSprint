import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from './Navigation'



 const Dashboard = (props)=>{

    
    return(

        <>
        <Navigation/>
        <h1>DASHBOARD</h1>
        <Link to="/classList" >ClassList</Link>
        </>
    )
}

export default Dashboard    