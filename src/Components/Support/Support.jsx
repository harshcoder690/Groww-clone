import React from 'react'
import support from '../../images/support.png'
import './Support.css'
function Support() {
    return (
        <div className="support">
            <div className="supportLeft">
                <div className="supportHeading">
                    We're with you, at every step
                </div>
                <div className="supportInfo">
                    For any query you have, find the answer quickly on our Help & Support. Need a little more help? We’re happy to talk via call or chat.
                </div>
                <div className="buttonForSupport">
                    <button className="supportButton">
                        Get in Touch
                    </button>
                </div>
                
            </div>
            <div className="supportRight">
                <img src={support} alt="support"></img>
            </div>
        </div>
    )
}

export default Support
