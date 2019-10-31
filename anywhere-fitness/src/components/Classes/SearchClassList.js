import React, {useState, useEffect} from 'react'
import Navigation from '../Navigation';
import {allClasses} from '../../JSON/MOCK_DATAclasses'

export const SearchClassList=( props ) => {

   
    const [searchTerms, setSearchTerms]=useState("");
    const [searchResults, setSearchResults]=useState( allClasses );

   
    
    const [locale, setLocale]=useState()


   

    useEffect( () => {

      const  filterTerms=allClasses.filter( category => category.category.toLowerCase().includes( searchTerms.toLowerCase() )
        ||category.addr1.toLowerCase().includes( searchTerms.toLowerCase() )
        ||category.metro.toLowerCase().includes( searchTerms.toLowerCase() )
        )

           setSearchResults( filterTerms )
  
    }, [searchTerms,allClasses ]);

    const handleChange=( event ) => {

setSearchTerms(event.target.value)
        console.log( 'searchTerms:', searchTerms )
    }

    return (
        <>
            <form >
                <label>Search Classes near you</label>

                <input
                    name="searchTerms"
                    placeholder="search"
                    value={searchTerms}
                    onChange={handleChange} />

            </form>

            <div>
                {searchResults&&searchResults.map( item => <div key={item.key}>{item.category}--{item.addr1}</div> )}
            </div>
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
                </select>
            </div>
        </>
    )
}