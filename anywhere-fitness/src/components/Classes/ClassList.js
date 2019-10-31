import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import {FormCreateClass} from "./FormCreateClass"
import {Class} from "./Class"
import Navigation from './../Navigation';
import axios from 'axios'
import {allClasses} from "../allClasses.js"

export const ClassList=( {instructor}, props ) => {


    const initialClassListState=[{},]
    const initialCategoryListState=[{},]
    const initialPunchPassState=[{classname: "", id: "", punches: ""},]
    const initialInstructorState=( {classList: [], punchpasses: "", id: 1} )

    const [punchpasses, setPunchPasses]=useState( initialPunchPassState )
    const [classList, setClassList]=useState( initialClassListState )
    const [categoryList, setCategoryList]=useState( initialCategoryListState )
    const mapClassList=classList => classList.map( cls => <Class class={cls} /> )
    useEffect( () => {
        const getClasses=() => {

            let responseData;
   
            axiosWithAuth().get( `classes` )
                .then( ( response ) => {responseData=response.data} )
                .then( () => {console.log( responseData )} )
                .then( () => {setClassList( ...classList, allClasses )} )
                .catch( error => console.error( 'Server Error', error ) );

        }
        return getClasses();
       
    }, [classList] )
    return (
        <>

            <FormCreateClass classList={classList} setClassList={setClassList} mapClassList={mapClassList}/>
            {classList&&mapClassList(classList)}

        </>
    )
}