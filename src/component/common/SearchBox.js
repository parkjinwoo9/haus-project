

import x from '../../images/x.png';
import '../../css/common/SearchBox.css';
import inputSearch from '../../images/inputSearch.png';
import { useState } from 'react';

function SearchBox (props){

    const [query,setQuery] = useState('');

    const searchClothes = (e) => {
        alert('검색')
        e.preventDefault()
        if(query.trim()===''){
            alert('검색어를 입력하세요')
            return
        }
        window.location.href=`/search?query=${query}`;
    }

    const inputChange = (e) => {
        setQuery(e.target.value)
        console.log(e.target.value)
    }

    const out = () => {
        props.setShow(false)
    }

    return(
        <div id='search-box'>
            <div id='search-box-out'>
                <button onClick={()=>out()}><img src={x}/></button>
            </div>
            <div id='search-input'>
                <label>
                    <input onChange={inputChange}className='inputTag' type='text' placeholder="검색" />
                    <button onClick={searchClothes}><img src={inputSearch} /></button>
                </label>
            </div>
        </div>
    )
}

export default SearchBox;