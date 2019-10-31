import React, {useState, useEffect} from 'react'
import Navigation from './../Navigation';
import {Container,Card} from '@material-ui/core';

export const Category=( props ) => {





const style=`width:300px; backgroundColor:white; borderRadius:20px;padding:.5rem;`

    return (

        <h2>
            <Navigation />
            <Container>
            <div style={style}>

            category:{props.category.metro}
            </div>
            </Container>
                
        </h2>

    )
}