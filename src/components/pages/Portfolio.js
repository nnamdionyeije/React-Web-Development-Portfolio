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

            

            <div className='projectsPage'>
                <h2 className='projectTitle'> My Projects</h2>
                

                <div className='main-holder'>
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
                            websiteLink="https://www.youtube.com/watch?v=x6p0X_8aBPQ"
                            projectName="InterviewBuddy"
                            githubLink="https://github.com/jmfarthin/interview_buddy"
                            img="https://github.com/jmfarthin/interview_buddy/raw/main/client/assets/images/interviewbuddy1.png"
                            alt="An image of my AI coding interview website"
                        >
                        </Project>

                    </div>

                    <div className='row justify-content-center'>
                        <Project 
                            websiteLink="https://youtu.be/Kd30NvcakUw"
                            projectName="NoSQL Social Network API"
                            githubLink="https://github.com/nnamdionyeije/NoSQL-Social-Network-API"
                            img="https://github.com/nnamdionyeije/NoSQL-Social-Network-API/raw/main/Main/assets/images/insomnia-screenshot.png"
                            alt="An image of my NoSQL Social Network API running in Insomnia"
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