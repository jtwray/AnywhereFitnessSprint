import React,{useState,useEffect} from 'react'
import Navigation from './../Navigation';

export  const Class=(props)=>{







    return(
        
        <h2>
              <Navigation   />
            class:{props.class.name}
            </h2>
        
    )
}