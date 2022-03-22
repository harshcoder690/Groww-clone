import React from 'react'
import './NewsSites.css'
function NewsSites(params) {
    return (
        <div className="newsSites">
            <img src={params.image} alt="news"/>
        </div>
    )
}

export default NewsSites
