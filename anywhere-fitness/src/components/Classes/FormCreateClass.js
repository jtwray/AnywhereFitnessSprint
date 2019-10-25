import React, {useState} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import Navigation from './../Navigation';


export const FormCreateClass=( {classList, setClassList} ) => {
    const initialClassFields={title: "",instructorId:null, categoryId: null, scheduleTime: "", address: "", city: "", state: "", zipCode: ""}
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
    axiosWithAuth().post(`/classes`,newClass)
    .then((response)=>{responseData=response.data})
    .then(()=>{console.log('responseData:',responseData)})
        setClassList( [...classList, newClass] );
        console.log( classList );
        resetForm();
    }
    return (
        <>
  <Navigation/>
            <form onSubmit={handleSubmit}>
                <label >Classname
                <input
                    name="title"
                    placeholder="Class Name"
                    onChange={handleChange}
                    value={newClass.title||""} />

                </label>


                <input
                    name="scheduleTime"
                    placeholder="Class scheduleTime"
                    onChange={handleChange}
                    value={newClass.scheduleTime||""} />

                            
                    

                <input
                    name="intensityLevel"
                    placeholder="Class intensityLevel"
                    onChange={handleChange}
                    value={newClass.intensityLevel||""} />

                <input
                    name="location"
                    placeholder="Class location"
                    onChange={handleChange}
                    value={newClass.location||""} />

                <input
                    name="registrants"
                    placeholder="Class registrants"
                    onChange={handleChange}
                    value={newClass.registrants||""} />

            <input
                name="categoryId"
                placeholder="CategorydROPDOWN"
                onChange={handleChange}
                value={newClass.categoryId||""} />
              
                <button type="submit">Submit</button>

            </form>
          

        </>
    )

}