import React, {useState,useEffect} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import {Category} from "./Category"
import Navigation from './../Navigation';
// import axios from 'axios'
import {FormCreateCategory} from './FormCreateCategory';
export const CategoryList=( {categoryList, setCategoryList, instructor}, props ) => {

   
    useEffect( () => { 
        const getCategories=() => {
           
            let responseData;
            axiosWithAuth().get( `/category` )
                .then( ( response ) => {responseData=response.data;
                console.log( responseData )} )
                .then( () => {setCategoryList( responseData )} )
                .catch( error => console.error( 'Ser', error ) );

        }
        return getCategories();

    }, [] )
    return (
      <>
  
            <FormCreateCategory categoryList={categoryList} setCategoryList={setCategoryList}/>
            {categoryList&&categoryList.map( cls =><Category category={cls} />)}

        </>
    )
}