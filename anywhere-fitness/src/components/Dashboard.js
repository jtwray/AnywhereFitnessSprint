import React from 'react'
import app from "../base"

const Dashboard =() =>{
    return(
        <>
        <h1>Dashboard</h1>
        <button onClick={()=> app.auth().signOut()}>Sign out</button>
        </>
    )
}

export default Dashboard;