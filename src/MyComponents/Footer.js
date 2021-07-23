import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    let styler = {
        position: "relative",
        
    }
    return (
        <div className="text-center bg-dark py-4 text-white" style={styler}>
            <Link to=""><p className="inline-block ">&copy;Sameer Portfolio</p></Link>
            <p className="float-right text-gray-400"><strong>Email: </strong>ssv6132@gmail.com<br/><strong>Ph: </strong>+91 7768955586</p>
        </div>
    )
}

