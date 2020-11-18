import React from 'react'

function Card({name,email,id}) {
    return (
        <div className="cardMain" >
            <img src={`http://robohash.org/${id}`} style={{width:300,height:300}} />
            <div>
                 <h2>{name}</h2>
                 <p>{email}</p>
            </div>
        </div>
    )
}

export default Card
