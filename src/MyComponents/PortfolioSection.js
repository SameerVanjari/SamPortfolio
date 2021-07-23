import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import {Link} from 'react-router-dom'

export const PortfolioSection = ({project}) => {
    return (
        <div className="col">
            <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={project.img} className="card-img-top hover04" alt="cabin" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{project.cardTitle} </h5>
                    <p className="card-text mb-2">{project.cardDesc}</p>
                    <Link className="streched-link fst-italic text-primary" to={{ pathname: project.url }} target="_blank" >Learn More<BsArrowRight className="inline-block mx-2" /></Link>
                </div>
            </div>

        </div>
    )
}
