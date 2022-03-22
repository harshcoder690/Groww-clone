import React from 'react'
import './InThePress.css'
import business from '../images/business.svg'
import live from '../images/live.svg'
import ys from '../images/ys.svg'
import enter from '../images/enter.svg'
import NewsSites from '../NewsSites/NewsSites'

function InThePress() {
    const newsSites = [
        {
            image: ys
        },
        {
            image: live
        },
        {
            image: enter
        },
        {
            image: business
        },
    ]
    return (
        <div>

        <div className="inthepress">
            <div className="leftLine"></div>
            <div className="headingPress">In The Press</div>
            <div className="rightLine"></div>
        </div>
        <div className="newsSites">
            {
                newsSites.map( (site) => {
                    return <NewsSites image={site.image} key={site.image}/>
                })
            }
        </div>
        </div>
    )
}

export default InThePress
