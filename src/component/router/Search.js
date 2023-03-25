import '../../css/router/Search.css';
import Data from '../../server/Data.json';
import { useState, useEffect } from 'react';
import queryString from 'query-string';


function Search() {

    useEffect(() => {
        console.log('search!')
        console.log(window.location)
        console.log(window.location.href)
        console.log(window.location.search)
        const queryObj = queryString.parse(window.location.search)
        const query = queryObj.query
        console.log('query')
        console.log(query)
    }, [])

    return (
        <div id='search'>
            <div id='search-header'>
                <a>쇼핑</a>
            </div>
            <div id='search-result-list'>

            </div>
        </div>
    )
}

export default Search;