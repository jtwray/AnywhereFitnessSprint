// @ts-nocheck
import React, {useState} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import Navigation from '../Navigation';


export const FormCreateCategory=( {categoryList, setCategoryList} ) => {
    const initialCategoryFields={name: "", description: "", }
    // {/**
    //    { "id": 9, "name": "Test Category2", "description": null, "created_at": "2019-10-21T01:19:39.287Z", "updated_at": "2019-10-21T01:19:39.287Z" }
    //  */ },

    const [newCategory, setNewCategory]=useState( initialCategoryFields );


    const handleChange=( event ) => {
        setNewCategory( {...newCategory, [event.target.name]: event.target.value} );
    }
    const resetForm=() => {
        setNewCategory( initialCategoryFields );
    }
    let responseData

    const handleSubmit=( event ) => {
        event.preventDefault();
        axiosWithAuth().post( `/category`, newCategory )
            .then( ( response ) => {responseData=response.data} )
            .then( () => {console.log( 'responseData:', responseData )} )
        
        console.log( categoryList );
        resetForm();
    }
    
    return (
        <>
            <Navigation />
            <form onSubmit={handleSubmit}>
                <label >categoryname
                <input
                        name="name"
                        placeholder="category Name"
                        onChange={handleChange}
                        value={newCategory.name||""} />

                </label>


                <input
                    name="description"
                    placeholder="category description"
                    onChange={handleChange}
                    value={newCategory.description||""} />

                <button type="submit">Submit</button>

            </form>


        </>
    )

}