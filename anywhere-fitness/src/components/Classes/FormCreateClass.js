import React, {useState} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import Navigation from './../Navigation';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import cookie from 'react-cookies'
import {allClasses} from "../allClasses.js"

const useStyles=makeStyles( theme => ( {
    button: {
        display: 'block',
        marginTop: theme.spacing( 2 ),
    },
    formControl: {
        margin: theme.spacing( 1 ),
        minWidth: 120,
    },
} ) );

export const FormCreateClass=( {classList, setClassList} ) => {
    const initialClassFields={title: "", instructorId:Number , categoryId:Number, scheduleTime: "", address: "", city: "", state: "", zipCode: ""}
    // {/**
    //     "id": 1,
    //     "title": "Yoga",
    //     "instructorId": 1,
    //     "categoryId": 1,
    //     "scheduleTime": null,
                                                                                                                    //     "address": null,
                                                                                                                    //     "city": null,
    //     "state": null,
    //     "zipCode": null,
    //     "created_at": "2019-10-21T12:51:44.173Z",
    //     "updated_at": "2019-10-21T12:51:44.173Z"
    //  */ },
    const classes=useStyles();
    const [categoryId, setCategory]=React.useState( Number );
    const [instructorId, setInstructorId]=React.useState( Number );
    const [open, setOpen]=React.useState( false );



  
    const [newClass, setNewClass]=useState( initialClassFields );


    const handleChange=( event ) => {
        setNewClass( {...newClass, [event.target.name]: event.target.value} );
    }
    const resetForm=() => {
        setNewClass( initialClassFields );
    }
    let responseData

    const handleSubmit=( event ) => {
        event.preventDefault();
        axiosWithAuth().post( `/classes`, newClass )
            .then( ( response ) => {responseData=response.data} )
            .then( () => {console.log( 'responseData:', responseData )} )
        setClassList( [...classList, newClass, allClasses ]);
        console.log( classList );
        resetForm();
    }
    return (
        <>
            <Navigation />
            <form onSubmit={handleSubmit}>
                <label >Classname
                <input
                        name="title"
                        placeholder="Class Name *"
                        onChange={handleChange}
                        value={newClass.title||""} />

                </label>


                <input
                    name="scheduleTime"
                    placeholder="Class scheduleTime"
                    onChange={handleChange}
                    value={newClass.scheduleTime||""} />




                <input
                    name="instructorId"
                    placeholder="Class instructorId *"
                    onChange={handleChange}
                    value={newClass.instructorId||""} />

                <input
                    name="categoryId"
                    placeholder="Class categoryId*"
                    onChange={handleChange}
                    value={newClass.categoryId||""} />

                <input
                    name="registrants"
                    placeholder="Class registrants"
                    onChange={handleChange}
                    value={newClass.registrants||""} />

                
                
             



                <button type="submit">Submit</button>

            </form>


        </>
    )

}




