import React,{useState,useEffect} from 'react'



export  const InstructorCard=()=>{
                
 const initialClassListState=[{name: "", classtype: "", startTime: "", duration: "", level: "", location: "", registrants: ""},]
 const initialPunchPassState=[{classname:"",id:"",punches:""},]
//  const initialInstructorState=({classList:[] ,punchpasses:"",id:1})
 
 const [punchpasses,setPunchPasses]=useState(initialPunchPassState)
 const [classList,setClassList]=useState(initialClassListState)
 
 
 
 
    
    return(
        <>
        <div>
            
           InstructorCard
            </div>
        </>
    )
}