import React from 'react'
import './InvestFeatures.css'

function InvestFeatures(props) {
    return (
        <div className="investFeatures">
            <img src={props.image} alt="invest" />
            <div className="investTexts">
                <div className="text1">{props.text1}</div>
                <div className="text2">{props.text2}</div>
            </div>
        </div>
    )
}

export default InvestFeatures
