import React, {useState,useEffect} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import {FormCreateClass} from "./FormCreateClass"
import {Class} from "./Class"
import Navigation from './../Navigation';

export const ClassList=( {classList, setClassList, instructor}, props ) => {

    const instructorID=instructor.id;
    useEffect( () => { 
        const getClasses=() => {
           
            let responseData;
            axiosWithAuth().get( `/${instructorID}` )
                .then( ( response ) => {responseData=response.data} )
                .then( () => {console.log( responseData )} )
                .then( () => {setClassList( responseData )} )
                .catch( error => console.error( 'Server Error', error ) );

        }
        return getClasses();

    }, [instructorID] )
    return (
      <>
        <Navigation/>
            <FormCreateClass classList={classList} setClassList={setClassList}/>
            {classList&&classList.map( cls =><Class class={cls} />)}

        </>
    )
}