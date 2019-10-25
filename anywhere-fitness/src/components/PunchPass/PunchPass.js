import React,{useState,useEffect} from 'react'
import {InstructorCard} from "../Instructor/InstructorCard"
import Navigation from './../Navigation';

  export const Instructor=()=>{
                
 const initialClassListState=[{name: "", classtype: "", startTime: "", duration: "", level: "", location: "", registrants: ""},]
 const initialPunchPassState=[{classname:"",id:"",punches:""},]
 const initialInstructorState=({classList:[] ,punchpasses:"",id:1})
 
 const [punchpasses,setPunchPasses]=useState(initialPunchPassState)
 const [classList,setClassList]=useState(initialClassListState)
 
 
 
 const createPunchPass=(pass)=>{ setPunchPasses(pass)
    }

 


const [instructor,setInstructor]=useState(initialInstructorState)

    return(
        <>
          <Navigation/>
        <InstructorCard instructor={instructor} classList={classList} setClassList={setClassList} />
        </>
    )
}