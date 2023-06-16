import React from 'react';


function Portfolio() {

    
    function Project(props) {
        return (
            <div className='col-md-5 single-project'>
                <div className='card-header'>  
                    <div>
                        <a href={props.websiteLink} className='projectLink'>
                            {props.projectName}
                        </a>

                        <a href={props.githubLink} className='githubLink'>
                            Github Link
                        </a>
                    </div>

                    <img src={props.img} alt={props.alt} width="100%"></img>
                </div>
            </div>
        )
    }



    return (
        
        <div>

            <h2 className='projectTitle'> My Projects</h2>

            <div className='projectsPage'>
            

            <div className='main-holder'>
                <div className='row justify-content-center'>
                    <Project 
                        websiteLink="https://youtu.be/Kd30NvcakUw"
                        projectName="NoSQL Social Network API"
                        githubLink="https://github.com/nnamdionyeije/NoSQL-Social-Network-API"
                        img="https://github.com/nnamdionyeije/MVC-Tech-Blog/raw/main/assets/images/homepage-screenshot.png"
                        alt="An image of my NoSQL Social Network API front page"
                    > 
                    </Project>
                    <Project 
                        websiteLink="https://nnamdionyeije.github.io/Web-API-Coding-Quiz/"
                        projectName="Web API Coding Quiz"
                        githubLink="https://github.com/nnamdionyeije/Web-API-Coding-Quiz"
                        img="https://github.com/nnamdionyeije/Web-API-Coding-Quiz/raw/main/assets/images/coding-quiz-screenshot.png"
                        alt="An image of my coding quiz"
                    >
                    </Project>
                </div>
                
                <div className='row justify-content-center'>
                    <Project 
                        websiteLink="https://protected-mesa-32753.herokuapp.com/"
                        projectName="Feast Findr"
                        githubLink="https://github.com/jmfarthin/Feast-Findr"
                        img="https://github.com/jmfarthin/Feast-Findr/raw/main/public/images/FeastFindr1.png"
                        alt="An image of my Feast Findr project"
                    > 
                    </Project>
                    <Project 
                        websiteLink="https://nnamdionyeije.github.io/Weather-Dashboard/"
                        projectName="Weather Dashboard"
                        githubLink="https://github.com/nnamdionyeije/Weather-Dashboard"
                        img="https://github.com/nnamdionyeije/Weather-Dashboard/raw/main/assets/images/weather-dashboard-screenshot.png"
                        alt="An image of my API driven weather dashboard"
                    >
                    </Project>

                </div>
            </div>

        </div> 
        </div>
        
        
           
    
    );
}

export default Portfolio;