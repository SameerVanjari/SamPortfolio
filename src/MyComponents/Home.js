import React from 'react'
import { Link } from 'react-router-dom'
import './css/home.css'
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill } from 'react-icons/ri'

export const Home = () => {
    let styler = {
        height: "89vh",
        paddingTop: "10rem",
        paddingBottom: "calc(10rem - 4.5rem)",
        background: 'linear-gradient(to bottom, rgba(28, 23, 62, 0.8) 0%, rgba(28, 23, 62, 0.8) 100%), url("https://source.unsplash.com/1600x900/?webdevelopment,app")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover"
    }
    return (
        <>
           
            <div id="carouselExampleSlidesOnly" className="carousel slide" style={styler}>
                <div className="carousel-inner container">
                    <div className="carousel-item active">
                        <div className="row flex-lg-row align-items-center g-5 py-2">
                            <div className="col-lg-6 m-5 px-5 text-gray-100">
                                <h1 className="display-5 fw-bold lh-1 mb-3 animate__animated animate__fadeIn">Hi,<br /> I'm Sameer<br />A Web Developer</h1>
                                <p className="lead line-1 anim-typewriter ">React | Django | Full-stack Developer</p>
                                <div className="container mt-5 px-0 py-5 animate__animated animate__fadeIn">
                                    <Link to={{pathname: "https://www.instagram.com/sameer12_98/"}} target="_blank" ><RiInstagramFill size={28} className="inline-block" /></Link>
                                    <Link to={{pathname: "https://www.facebook.com/sameer.vanjari.39/"}} target="_blank" ><RiFacebookFill size={28} className="inline-block" /></Link>
                                    <Link to={{pathname: "https://github.com/SameerVanjari"}} target="_blank" ><RiGithubFill size={28} className="inline-block" /></Link>
                                    <Link to={{pathname: "https://www.linkedin.com/in/sameer-vanjari/"}} target="_blank" ><RiLinkedinFill size={28} className="inline-block" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
