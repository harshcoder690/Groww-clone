import React from 'react'
import './ReviewCard.css'

function ReviewCard(props) {
    
    const printStars = () => {
        let content = [] ;
        for(let i=0; i<parseInt(props.stars);i++){
            content.push(<i className="fa fa-star material-icons" style={{color: "gold"}} key={Math.random()}></i>)
        }
        return content
    }
    return (
        <div className="reviewCard">
            <div className="imageAndCard">
                <div className="review-image">
                    <img src={props.image} alt="reviewer"/>
                </div>
                <div className="stars">
                    <div>{printStars()}</div>
                 </div>
            </div>
            
            <div className="reviewText">
                <span>{props.reviewText}</span>
            </div>
            <div className="reviewerCompany">
                <span>{props.reviewer}</span>
                <span>{props.company}</span>
            </div>
        </div>
    )
}

export default ReviewCard
