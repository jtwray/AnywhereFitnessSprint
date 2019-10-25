import React from 'react'
import Navigation from './Navigation';

const ClassList=() =>
return (
    <>
    <Navigation/>
        <h2>Class List</h2>
        <div>
            <label>Sort BY:</label>{' '}
            <select>
                <option>StartTime (earliest first)</option>
                <option>StartTime (lastest first)</option>
                <option disabled>---</option>
                <option>Duration (shortest first)</option>
                <option>Duration (longest first)</option>
                <option disabled>---</option>
                <option>Title (a-z)</option>
                <option>Title (z-a)</option>
                <option>Duration (longest first)</option>
                <option disabled>---</option>
            </select></div>
    </>
)                            