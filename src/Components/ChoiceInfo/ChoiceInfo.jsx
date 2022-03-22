import React from 'react'
import './ChoiceInfo.css'
function ChoiceInfo(props) {
    return (
        <div className="choiceInfo">
            <span><img src={props.image} alt="choice"/></span>
            <span className="rightChoiceInfo">
                <div className="firstLine"><strong>{props.firstWord}</strong>{props.heading}</div>
                <div className="secondLine">{props.secondLine}</div>
                <button>{props.buttonText}</button>
            </span>
        </div>
    )
}

export default ChoiceInfo
