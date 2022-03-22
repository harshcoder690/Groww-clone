import React from 'react'
import PlatformCard from '../Components/PlatformCard/PlatformCard'
import dash from '../images/dash.svg'
import sync from '../images/sync.svg'
import ios from '../images/ios.png'
import android from '../images/android.png'
import web from '../images/web.png'
import InvestFeatures from '../InvestFeatures/InvestFeatures'
import './InvestAnywhere.css'
function InvestAnywhere() {
    const investFeatures = [
        {
            image: dash,
            text1: "Stay on top of everything",
            text2: "Keep track of your investments at anytime with Groww."
        },
        {
            image: sync,
            text1: "Always in Sync",
            text2: "Groww will take care of synchronizing data so you can focus on investing."
        },
]
    const platforms = [
        {
            image: ios,
            name: "IOS App"
        },
        {
            image: android,
            name: "Android App"
        },
        {
            image: web,
            name: "Web App"
        },
    ]
    return (
        <div className="investAnywhere">
            <div className="leftInvestAnywhere">
                <div className="headingOfLeft">
                    <div className="headingInvest">Invest anywhere, <span>anytime</span></div>
                    <div className="investInfo">Don’t worry about which device to use. Because we’re in every one of them.</div>
                </div>
                <div className="invests">
                    {
                        investFeatures.map( (feature) => {
                            return <InvestFeatures image={feature.image} text1={feature.text1} text2={feature.text2}/>
                        })
                    }
                </div>
            </div>
            <div className="rightInvestAnywhere">
                <div className="platfromCards">
                {
                    platforms.map( (platform) => {
                        return <PlatformCard image={platform.image} alt={platform.name}/>
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default InvestAnywhere
