import React from 'react'
import './PlatformCard.css'
function PlatformCard(props) {
    return (
        <div className="platformCard">
            <img src={props.image} alt="name"/>
        </div>
    )
}

export default PlatformCard
