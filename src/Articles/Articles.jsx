import React from 'react'
import Blog from '../Blog/Blog'
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'
import './Articles.css'
function Articles() {
    const blogs = [
        {
            image: blog1,
            title: "How to Select/Pick Stocks for Intraday"
        },
        {
            image: blog2,
            title: "Beginners Guide to Mutual Funds"
        },
        {
            image: blog3,
            title: "How to Diversify in the Time of Market Volatility"
        },
    ]
    
    return (
        <div className="articles">
            <div className="heading">Keep learning. Keep growing</div>
            <div className="blogs">
                {
                    blogs.map( (blog) => {
                        return <Blog image={blog.image} title={blog.title} key={blog.title}/>
                    })
                }
            </div>
            <div className="viewEverything">
                <a className="viewAll" href="groww.in">View all articles →</a>
            </div>
            
        </div>
    )
}

export default Articles
