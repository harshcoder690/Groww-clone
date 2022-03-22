import React from 'react'
import facebook from '../../images/fb.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import twitter from '../../images/twitter.svg'
import telegram from '../../images/telegram.svg'
import yt from '../../images/yt.svg'
import growLogo from '../../images/logo-light-groww.svg'
import appStore from '../../images/appStore.svg'
import googlePlay from '../../images/googlePlay.svg'
import './Footer.css'
import FooterColumns from '../FooterColumns/FooterColumns'
function Footer() {
    const columnsAndContent = [
        {
            heading: "PRODUCTS",
            contents: ["Stocks", "Futures & Options", "Mutual Funds", "Fixed Deposit", "US Stocks"]
        },
        {
            heading: "GROWW",
            contents: ["About Us", "Pricing", "Blog", "Media & Press", "Careers", "Help and Support"]
        },
        {
            heading: "QUICK LINKS",
            contents: ["AMC Mutual Funds", "Calculators", "Glossary", "Open Demat Account", "Groww Digest", "Sitemap"]
        },
    ]

    const yearNow = () => {
        let year = new Date();
        return year.getFullYear()
    }
    return (
        <div className="footer">
            <div className="topFooter">
                <div className="contactUs">
                    <img src={growLogo} alt="groww"/>
                    <div className="address">
                        <span>No.11, 2nd floor, 80 FT Road</span>
                        <span>4th Block, S.T Bed, Koramangala</span>
                        <span>Bengaluru – 560034</span>
                        <span>Contact Us</span>
                        <div className="socialMedia">
                            <img src={facebook} alt="facebook"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={yt} alt="yt"/>
                            <img src={instagram} alt="instagram"/>
                            <img src={linkedin} alt="linkedin"/>
                            <img src={telegram} alt="telegram"/>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    {
                        columnsAndContent.map( (it) => {
                        return <FooterColumns heading={it.heading} contents={it.contents}/>
                        })
                    }
                </div>
            </div>
            
            <div className="horizontalRow">
            </div>
            <div className="bottomFooter">
                <div className="copyRight">
                        &copy; 2016-{yearNow()} Groww. All rights reserved, Built with <span className="heart"> ♥ </span> in India
                </div>
        
                <div className="footerBottomImages">
                    <img src={appStore} alt="appStore"/>
                    <img src={googlePlay} alt="googlePlay"/>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
