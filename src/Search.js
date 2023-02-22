import React from 'react';
import './Search.css';


function Search(props) {
  const onChange = e => {
    props.onChange(e.target.value)
  }

  return(
    <input
     className="search"
     type="text"
     placeholder="search keyword"
     onChange={onChange}

    />

  )
}

export default Search