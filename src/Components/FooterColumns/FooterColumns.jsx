import React from 'react'
import './FooterColumns.css'
function FooterColumns(props) {
    const printContent = () => {
        let data = []
        
        for(let i=0;i<props.contents.length; i++){
            data.push(<span>{props.contents[i]}</span>)
        }
        return data
    }
    return (
        <div className="footerColumns">
            <div className="footerHeading">{props.heading}</div>
            <div className="columnContents">
                {printContent()}
            </div>
        </div>
    )
}

export default FooterColumns
