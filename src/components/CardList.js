import React from 'react'
import Card from './Card'

function CardList(props) {



    return (

        props.robotsArray.map((user) => {
            return (
                <Card key = {user.id} 
                      name = {user.name}
                      email = {user.email}
                      id = {user.id}
                />
            )
        })
    )
}

export default CardList
