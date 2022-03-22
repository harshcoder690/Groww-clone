import React, { useState } from 'react'
import Choice from '../Choice/Choice'
import './OurProducts.css'
import Mutualfunds from '../../images/Mutualfunds.svg'
import Stocks from '../../images/stockHome.af2af225.svg'
import UsStocks from '../../images/usHome.fcb18f99.svg'
import FdHome from '../../images/fdHome.ba2c5441.svg'
import ChoiceInfo from '../ChoiceInfo/ChoiceInfo'
import stocksChoice from '../../images/stocks.png'
import mfsChoice from '../../images/mfs.png'
import usstocksChoice from '../../images/us.png'
import fdsChoice from '../../images/fds.png'

function OurProducts() {
    const features = [
        {name: "Stocks", url:Stocks, imageOfChoice:stocksChoice, firstWord:"Zero", heading:" account charges", secondLine:"You don’t have to pay a single rupee for opening a stocks account or account maintenance.", buttonText:"Create Account For Free"},
        {name: "Mutual Funds", url:Mutualfunds, imageOfChoice:mfsChoice, firstWord:"0%", heading:" commission", secondLine:"Select from 5000+ direct mutual funds and get higher return than regular funds.", buttonText:"Create Account For Free"},
        {name: "US Stocks", url:UsStocks, imageOfChoice:usstocksChoice, firstWord:"Free", heading:" account opening", secondLine:"Invest in Apple, Google, Netflix and many more US companies that you love without any brokerage fee.", buttonText:"Create Account For Free"},
        {name: "FDs", url:FdHome, imageOfChoice:fdsChoice, firstWord:"6.7%", heading:" interest rate", secondLine:"Open fixed deposits in any bank with higher interest rates without opening a bank account.", buttonText:"Create Account For Free"},
    ]
    const [selectedChoice, setSelectedChoice] = useState(features[0])
    

    const setWhichDetails = (e, index) => {
        e.preventDefault();
        features.filter((feature) => {
            return feature.name.includes(selectedChoice)
        })
        setSelectedChoice(features[index])
    }

    return (
        
        <div className="ourProducts">
            <div className="top">
                <span className="sectionTitle">OUR PRODUCTS</span>
                <span className="dialogue">Your money. Your choice</span>
            </div>
            <div className="choices">
                <button className="choiceButton" onClick={ (e) => setWhichDetails(e, 0)}><Choice name={features[0].name} url={features[0].url}/></button>
                <button className="choiceButton" onClick={ (e) => setWhichDetails(e, 1)}><Choice name={features[1].name} url={features[1].url}/></button>
                <button className="choiceButton" onClick={ (e) => setWhichDetails(e, 2)}><Choice name={features[2].name} url={features[2].url}/></button>
                <button className="choiceButton" onClick={ (e) => setWhichDetails(e, 3)}><Choice name={features[3].name} url={features[3].url}/></button>
            </div>
            {
                
            }
            <ChoiceInfo image={selectedChoice.imageOfChoice} firstWord={selectedChoice.firstWord} heading={selectedChoice.heading} secondLine={selectedChoice.secondLine} buttonText={selectedChoice.buttonText}/>
            
        </div>
    )
}

export default OurProducts
