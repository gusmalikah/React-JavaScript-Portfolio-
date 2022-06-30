import React from "react"
import "../styles/portfolio.css"
import IMG1 from "../images/portfolio1.jpg"
import IMG2 from "../images/portfolio2.jpg"
import IMG3 from "../images/portfolio3.jpg"
import IMG4 from "../images/portfolio4.jpg"
//import IMG5 from "../images/portfolio5.png"
//import IMG6 from "../images/portfolio6.jpg"

const data =
[
    {
    id:1,
    image:IMG1,
    title:"title1",
    github:"https://github.com"
    },
    {
    id:2,
    image:IMG2,
    title:"title2",
    github:"https://github.com"
    },
    {
    id:3,
    image:IMG3,
    title:"title3",
    github:"https://github.com"
    },
    {
    id:4,
    image:IMG4,
    title:"title4",
    github:"https://github.com"
    }
]
function Portfolio() {
    return(
        <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio-container">
        {
            data.map(({id,image,title,github}) => {
                return (
        <article key={id} className="portfolio-item">
        <div className="portfolio-item-image">
        <img src={image} alt={title}/>
        </div>
        <h3>{title}</h3>
        <div className="portfolio-item-cta">
        <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
        </div>
        </article>
                )
            })
        }
        </div>
        </section>
    )
}
export default Portfolio