import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';


export default( {classList, setClassList} ) => {
    const initialClassFields={name: "", classtype: "", startTime: "", duration: "", level: "", location: "", registrants: ""}
    const [newClass, setNewClass]=useState( initialClassFields );
    const handleChange=( event ) => {
        setNewClass( {...newClass, [event.target.name]: event.target.value} );
    }
    const resetForm=() => {
        setNewClass( initialClassFields );
    }
    // const createClass=()=>{
    //     axios.
    // }
    const handleSubmit=( event ) => {
        event.preventDefault();
    
        setClassList( [...classList, newClass] );
        console.log( classList );
        resetForm();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >Classname
                <input
                    name="name"
                    placeholder="Class Name"
                    onChange={handleChange}
                    value={newClass.name||""} />
                </label>
        
                <input
                    name="classtype"
                    placeholder="Class type"
                    onChange={handleChange}
                    value={newClass.classtype||""} />
                <input
                    name="startTime"
                    placeholder="Class startTime"
                    onChange={handleChange}
                    value={newClass.startTime||""} />
                <input
                    name="duration"
                    placeholder="Class duration"
                    onChange={handleChange}
                    value={newClass.duration||""} />
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
  <Button variant="primary">Primary</Button>
  
            </form>
        </>
    )
}