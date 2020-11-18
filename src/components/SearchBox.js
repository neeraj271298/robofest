import React from 'react'

function SearchBox({searchName , onSearchChange}) {
    return (
        <div>
            <input className="searchBox" type="text" value={searchName} placeholder="type robot name" onChange={onSearchChange} />
        </div>
    )
}

export default SearchBox
