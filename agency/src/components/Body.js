import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import '../App.scss';



const Body = () => {

    return(
        <>
            <section className="about-us-area text-white">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="about-us-text-area mb-5 mt-5">
                                <h2 className="about-us-text title-font-3">
                                    We specialize in Freelance Software Engineering
                                    <br/>
                                    & Cybersecurity Forensics
                                </h2>
                                <p className="mt-4 mb-4 title-font-2">
                                    I have worked  on automating of vulnerability assessment framework for network device configurations, Web Application security Testing, Network Penetration Testing, Cyber-security forensics,
                                    <br/>
                                    I am an expert at applying profound programming skills to solve complex challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Portfolio/>

            <section className="lead">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="lead-title text-white mb-5 mt-4">
                                <h1 className="title-font">
                                Let's work together
                                </h1>
                                <p className="mt-4 mb-4 title-font-2">
                                Scaling-up your business 
                                is our mission!
                                </p>
                                <Link to="/contact">
                                    <button className="btn text-white">
                                        Contact
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Body;