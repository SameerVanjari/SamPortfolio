import React from 'react'
import { DiAws, DiDjango, DiHtml5, DiJava, DiMongodb, DiPython, DiReact, DiSqllite } from 'react-icons/di'
import {SiFlask} from 'react-icons/si'
import { ProgressBar } from 'react-bootstrap'



export const About = () => {
    let styler = {
        height: "90vh",
        paddingBottom: "calc(10rem - 4.5rem)",
        background: 'linear-gradient(to bottom, rgba(28,23, 62 , 0.8) 0%, rgba(28,23, 62 , 0.8) 100%), url("https://source.unsplash.com/1600x900/?webdevelopment,app")',
    }
    return (
        <>
            <div className="bg-dark text-gray-100">
                {/* <div className="container col-xxl-8 px-4 py-5" >
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://source.unsplash.com/760x540/?nature,water" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            
                        </div>
                    </div>
                </div> */}
                <div className="container" style={styler}>
                    <div className="row py-5 justify-content-center">
                        <div className="col-lg-3 mt-5 mx-4">
                            <img src={require("../portfolio/SameerPic.jpg").default} className="d-block mx-lg-auto img-fluid rounded-circle my-2 shadow-lg mb-5 bg-body rounded" alt="Sameer Vanjari" width="700" height="500" loading="lazy" />
                            <p classsName="my-3"><strong>Sameer Vanjari</strong></p>
                            <p classsName=""><strong>Graduate 2021</strong><br />Govt. College Of Engg.,Jalgaon</p>
                        </div>
                        <div className="col-lg-5 mx-4 mt-3">
                            <h1 className="display-5 fw-bold lh-1 mb-3 my-4">About Me</h1>
                            <p className="lead my-4">I am Web Design enthusiast an love to design for web application and websites. Though from Mechanical Engg. background I love to create for the web and mobile. </p>
                            <p className="lead my-4">I am a Fresher and also work Freelance for local institutions on their Websites.</p>

                        </div>

                    </div>
                </div>


                <div className="container-lg py-3">
                    <h2 className="display-5 fw-bold lh-1 mb-3 my-4 mx-5">Skills</h2>

                    <div className="container-lg">
                        <div className="container mx-5">
                            <ul>
                                <li>
                                    <blockquote className="blockquote">
                                        <a className="streched-link mb-0" data-bs-toggle="collapse" href="#collapseDatabase" role="button" aria-expanded="false" aria-controls="collapseDatabase">
                                            Databases
                                        </a>
                                        <p className="blockquote-footer"></p>
                                        <footer className="blockquote-footer">Databases like Mongodb, SQL and cloud platforms as AWS and Firebase.</footer>
                                    </blockquote>
                                </li>
                                <div className="collapse" id="collapseDatabase">
                                    <div className="card card-body text-dark">

                                        <h2 className="fw-bold" > <DiMongodb size={48} className="inline-block mx-auto mx-3" color="blue" />Mongodb</h2>
                                        <ProgressBar variant="success" now={30} className="m-4" />

                                        <h2 className="fw-bold" > <DiSqllite size={48} className="inline-block mx-auto mx-3" color="blue" />Sqllite</h2>
                                        <ProgressBar variant="success" now={40} className="m-4" />
                                        <h2 className="fw-bold" > <DiAws size={48} className="inline-block mx-auto mx-3" color="blue" />AWS</h2>
                                        <ProgressBar variant="success" now={40} className="m-4" />

                                    </div>
                                </div>
                                <li>
                                    <blockquote className="blockqoute">
                                        <a className="streched-link mb-0" data-bs-toggle="collapse" href="#collapseLanguage" role="button" aria-expanded="false" aria-controls="collapseLanguage">
                                            Language
                                        </a>
                                        <p className="blockquote-footer"></p>
                                        <footer className="blockquote-footer">Programming languages and technologies that are important.</footer>
                                    </blockquote>
                                </li>
                                <div className="collapse" id="collapseLanguage">
                                    <div className="card card-body text-dark">

                                        <h2 className="fw-bold" > <DiHtml5 size={48} className="inline-block mx-auto" color="blue" />Html5</h2>
                                        <ProgressBar variant="success" now={50} className="m-4" />

                                        <h2 className="fw-bold" > <DiPython size={48} className="inline-block mx-auto" color="blue" />Python</h2>
                                        <ProgressBar variant="success" now={70} className="m-4" />

                                        <h2 className="fw-bold" > <DiJava size={48} className="inline-block mx-auto" color="blue" />Java</h2>
                                        <ProgressBar variant="success" now={50} className="m-4" />

                                    </div>
                                </div>

                                <li>
                                    <blockquote className="blockquote">
                                        <a className="streched-link mb-0" data-bs-toggle="collapse" href="#collapseFramework" role="button" aria-expanded="false" aria-controls="collapseFramework">
                                            Framework
                                        </a>
                                        <p className="blockquote-footer"></p>
                                        <footer className="blockquote-footer">Framework which help building frontend and backend for Websitess and Web Applications.</footer>
                                    </blockquote>
                                </li>
                                <div className="collapse" id="collapseFramework">
                                    <div className="card card-body text-dark">

                                        <h2 className="fw-bold" > <DiReact size={48} className="inline-block mx-auto" color="blue" />React</h2>
                                        <ProgressBar variant="success" now={50} className="m-4" />

                                        <h2 className="fw-bold" > <SiFlask size={48} className="inline-block mx-auto" color="blue" />Flask</h2>
                                        <ProgressBar variant="success" now={60} className="m-4" />

                                        <h2 className="fw-bold" > <DiDjango size={48} className="inline-block mx-auto" color="blue" />Django</h2>
                                        <ProgressBar variant="success" now={60} className="m-4" />

                                    </div>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
