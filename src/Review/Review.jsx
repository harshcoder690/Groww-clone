import React from 'react'
import './Review.css'
import ankit from '../images/ankit.png'
import amit from '../images/amitImg.jpeg'
import roopa from '../images/roopa.jpg'
import ReviewCard from '../ReviewCard/ReviewCard'

function Review() {
    const comments = [
        {
            image: ankit,
            stars: 5,
            reviewText: "“Groww.in was the platform where I first got onboard to MF and I would have to say, even for a beginner like me it made things quite easier to explore and invest.",
            reviewer: "Ankit Puri",
            company: "Product Specialist, Google"
        },
        {
            image: amit,
            stars: 5,
            reviewText: "“Actually, the UI is extremely simple and easy for users to adapt, that’s what makes it unique. Many of my referrals have also joined and enjoying GROWW.",
            reviewer: "Amit Sharma",
            company: "Solutions Architect, Amazon Web Services"
        },
        {
            image: roopa,
            stars: 5,
            reviewText: "“If you are one of those who would like to take control of how you save, use Groww. It’s ridiculously easy portal. It just took me 5 mins to set up and invest.",
            reviewer: "Roopa Ambekar",
            company: "Product Specialist, Google"
        },
    ]

    return (
        <div className="reviews">
            <div className="reviewHeader">
                <div className="reviewLeftHeader">
                    <div className="reviewHeading">Creating proud investors</div>
                    <div className="reviewSecondLine">You can feel the pride of being a Groww investor in their words.</div>
                </div>
                <div className="reviewRightHeader">
                    <a className="viewMore" href="groww.in">View More →</a>
                </div>
            </div>
            <div className="all-reviews">
                {
                    comments.map( (it) => {
                        return <ReviewCard image={it.image} stars={it.stars} reviewText={it.reviewText} reviewer={it.reviewer} company={it.company} key={it.reviewer}/>
                    })
                }
            </div>
        </div>
        
    )
}

export default Review
