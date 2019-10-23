import React from 'react'
import {Redirect} from 'react-router-dom'



const Logout=() => {
window.localStorage.clear()
    localStorage.clear()
    return <Redirect to='/' />;

}
export default Logout