import React from 'react'

function Scroll(props) {
    return (
        <div style={{overflow: 'scroll', borderTop: '5px solid white', height: '500px'}} >
            {props.children}
        </div>
    )
}

export default Scroll
