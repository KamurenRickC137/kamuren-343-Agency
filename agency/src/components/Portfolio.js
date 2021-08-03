import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageContentHover from 'react-image-hover';

class Portfolio extends Component {

    render() {
        return(
            <>  
                <section className="portfolio">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="portfolio-title text-white mb-5 mt-4">
                                    <h1 className="title-font">
                                    Take a look at our portfolio
                                    </h1>
                                    <p className="mt-4 mb-4 title-font-2">
                                   Innovative and proficient Freelance Software Engineer with the following skills: Python, C#, Java, MySQL, GraphQL, MongoDB, Javascript, Javascript Frameworks(Angular.js, React.js & Vue.js), React-Native, Swift, Node.js, Electron.js & Cyber-security Forensics. An expert in Microsoft Technologies with strong familiarity in software engineering concepts, my strength in these areas will be very helpful in developing software applications for the company.As a Fullstack Web Developer I primarily work with MERN & MEAN Stack. 60% of my work was doing front end development, 20% back end development and the remaining 20% was dev-ops/sys admin related tasks and Cyber-security forensics.In addition to Full Stack Development, I also working on a lot of web-dev apps, android & ios apps and desktop applications.I will Over see the implementation and management of given project in given timeframe within given guidelines
                                </p>
                                </div>
                            </div>
                            {this.props.items.map(image => (
                                // show portfoilo boxes by mapping the array of images
                                <div className="col-lg-4 col-md-6 col-sm-6" key={image.id} >
                                    <div className="portfolio-thumb">
                                        <Link to={`/works/${image.id}`}>  
                                            <ImageContentHover
                                                className="center-block"
                                                image = {image.src}
                                                content={{
                                                    title: [image.title]
                                                }} 
                                                effect="fadeIn"
                                            />
                                        </Link>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.works
    }
}


export default connect(mapStateToProps) (Portfolio);