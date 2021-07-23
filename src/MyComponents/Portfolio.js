import React from 'react'
import { PortfolioSection } from './PortfolioSection'

export const Portfolio = (props) => {
    let styler = {
        
        paddingBottom: "calc(10rem - 4.5rem)",
        background: 'linear-gradient(to bottom, rgba(28,23, 62 , 0.8) 0%, rgba(28,23, 62 , 0.8) 100%), url("https://source.unsplash.com/1600x900/?webdevelopment,app")',
        margin:"0",
        padding:"10rem",
        maxWidth:"100%"
    }
    return (
        <div className="container py-4" style={styler}>
        <h3 className="text-center my-4 fs-1 text-shadow text-white">PORTFOLIO</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {props.projects.map((project)=>{
                return <PortfolioSection project={project} />
            }) }

            </div>
    </div>
    )
}
