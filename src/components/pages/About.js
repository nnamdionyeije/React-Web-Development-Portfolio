import React from 'react';
//import logo from ''

function About() {
    return (
        <div className='aboutPage'>
            <div class="column">
                <img class="pfp"
                        src="https://i.imgur.com/9Vnd9v3.png"
                        alt="Nnamdi Onyeije"
                        //width={(500)}
                />
                <p class="title">Nnamdi Onyeije</p>
                <div>
                    <p class='aboutText'>Hello, my name is Nnamdi Onyeije. I am a graduate of computer science and full-stack web developer with experience working on projects of various sizes both in and out of school. 
                    I am looking for a role in which I can work alongside and learn from more experienced team members.
                    My primary competencies are in MVC and MERN structured applications. When I'm not coding I enjoy running and playing beach volleyball.
                    
                    
                    </p>
                    {/* <p class='resumeText'><span><a  href='https://drive.google.com/uc?export=download&id=1Sqe_xkTNAqcNQDxKvTNwxv7EfN6GQFU-' download={"Nnamdi's Resume"}> Download my resume</a></span></p> */}
                </div>
            </div>
        </div >    
    
    );
}

export default About;