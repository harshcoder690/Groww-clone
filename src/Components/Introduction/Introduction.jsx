import React from 'react'
import Feature from '../Feature/Feature'
import './Introduction.css'
import Mutualfunds from '../../images/Mutualfunds.svg'
import Stocks from '../../images/stockHome.af2af225.svg'
import OptionsHome from '../../images/optionHome.5e98a896.svg'
import UsStocks from '../../images/usHome.fcb18f99.svg'
import IpoHome from '../../images/ipoHome.b071ba94.svg'
import FdHome from '../../images/fdHome.ba2c5441.svg'
import TextLoop from "react-text-loop";
function Introduction() {
      const features = [
          {name: "Mutual Funds", url:Mutualfunds},
          {name: "Stocks", url:Stocks},
          {name: "Futures & Options", url:OptionsHome},
          {name: "US Stocks", url:UsStocks},
          {name: "IPO", url:IpoHome},
          {name: "Fixed Deposits", url:FdHome},
      ]
    return (
        <div className="introSection">
            <div className="leftIntro">
                <div className="firstRow">
                    <span>Invest in </span>
                    <span>
                        <TextLoop>
                            <span style={{color:"#5367FF"}}>Stocks</span>
                            <span style={{color:"#5367FF"}}>FDs</span>
                            <span style={{color:"#EB5B3C"}}>US Stocks</span>
                            <span style={{color:"#00D09C"}}>Mutual Funds</span>
                            <span style={{color:"#FFB61B"}}>Future & Options</span>
                            <span style={{color:"#D2AB66"}}>IPO</span>
                        </TextLoop>
                    </span>
                </div>
                <div className="secondRow">
                    <span>Trusted by <strong>Millions</strong> of Indians. Start investing</span>
                </div>
                <div className="thirdRow">
                    <span>today.</span>
                </div>
                <div className="getStarted">
                    <button>Get Started</button>
                </div>
            </div>
            <div className="rightIntro">
                {
                   features.map( (feature) => {
                      return <Feature name={feature.name} url={feature.url} key={feature.name}/>
                   }) 
                }
            </div>
        </div>
    )
}

export default Introduction
