import React, {useState, useEffect} from 'react';
import {allClasses} from '../../JSON/MOCK_DATAclasses'


export const SearchCategoryList=() => {

    let initialSR=[]
    //searchterm will save the data from the search input on every occurance of the change event
    const [searchTerms, setSearchTerms]=useState( "" )
    const [searchResults, setSearchResults]=useState( initialSR )
    //search results is used to set the search result

    useEffect( () => {
        const results=allClasses.filter( category => category.category.toLowerCase().includes( searchTerms.toLowerCase() )
            ||category.addr1.toLowerCase().includes( searchTerms.toLowerCase() )
            ||category.metro.toLowerCase().includes( searchTerms.toLowerCase() )
        );
        setSearchResults( results )

    }, [searchTerms] )

    const handleChange=( event ) => {

        setSearchTerms( ( event.target.value ) )
        setSearchResults( Array.from( allClasses ) )
    }


    return (

        <>
            <form>
                <input
                    id="category"
                    type="text"
                    name="searchTerms"
                    placeholder="search 🔍🔍"
                    value={searchTerms}
                    onChange={( event ) => handleChange( event )}
                />
            </form>
            <div>
                {searchResults&&searchResults.map( ( item ) => {
                    return ( <div key={item.key}>{item.category}
                        <ul>
                            <li>
                                {item.addr1}
                            </li>
                            <li>

                                {item.addr2&&item.addr2}
                            </li>
                            <li>

                                {item.metro&&item.metro}
                            </li>

                        </ul>
                    </div> )
                } )}
            </div>


        </>
    )
} // the array to be sorted
var list=['Delta', 'alpha', 'CHARLIE', 'bravo'];


let mappedList=list.map( ( element, idx ) => {
    return ( {index: idx, value: element.toLowerCase()}
    )
} )


mappedList.sort( ( a, b ) => {
    return a.value>b.value? ( 1 )
        :a.value<b.value? ( -1 )
            :( 0 )
} )
const resultList=mappedList.map( el => list[el.index] )
// temporary array holds objects with position and sort-value
// var mapped=list.map( function ( el, i ) {
//     return {index: i, value: el.toLowerCase()};)
// // sorting the mapped array containing the reduced values
// mapped.sort( function ( a, b ) {
//     if( a.value>b.value ) {
//         return 1;
//     }
//     if( a.value<b.value ) {
//         return -1;
//     }
//     return 0;
// } );


// container for the resulting order
// var result=mapped.map( function ( el ) {
//     return list[el.index];
// } );


// var list=['Delta', 'alpha', 'CHARLIE', 'bravo'];

// const mappedList=( list ) => {
//     let mapped=list.map( ( element, idx ) => {
//         return ( {index: idx, value: element.toLowerCase()}
//         )
//     } )
// }

// mappedList.sort( ( a, b ) => {
//     a.value>b.value?return ( 1 )
//     : a.value<b.value? return ( -1 )
//      : return ( 0 )
// } )
