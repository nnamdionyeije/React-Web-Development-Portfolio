import React from 'react';
//import logo from ''

function About() {
    return (
        <div className='aboutPage'>
            <h2>About me</h2>

            <div class="row">
                <div class="left-column">
                    <img 
                        src="https://i.imgur.com/1mUBEHb.jpg"
                        alt="new"
                        width={(400)}
                    />
                </div>
                <div class="right-column">
                    <div>
                        <p class='aboutText'>My name is Nnamdi Onyeije. I am a graduate of computer science and full-stack web developer with experience working on projects of various sizes both in and out of school. 
                        I am looking for a role in which I can work alongside and learn from more experienced team members.
                        My primary competencies are in MVC and MERN structured applications. When I'm not coding I enjoy running and playing beach volleyball.
                        
                        
                        </p>
                        <p class='resumeText'><span><a  href='https://drive.google.com/uc?export=download&id=1Sqe_xkTNAqcNQDxKvTNwxv7EfN6GQFU-' download={"Nnamdi's Resume"}> Download my resume</a></span></p>
                    </div>
                    

                    

                </div>
            </div>
        </div >    
    
    );
}

export default About;