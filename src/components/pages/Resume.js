import React from 'react';

function Resume() {
    return (
        <div className='resumePage'>
            <h2> Resume</h2>

            <p>Download my <span><a className='' href='https://drive.google.com/uc?export=download&id=1epjivlaQt9GkYNJjV92Bdam9MR6nTZjy' download={"Nnamdi's Resume"}>resume</a></span></p>

            <h3>Front-end Proficiencies</h3>
            <ul className='list-group'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React</li>
            </ul>

            <h3>Back-end Proficiencies</h3>
            <ul className='list-group'>
                <li>APIs</li>
                <li >Node</li>
                <li >Express</li>
                <li >MongoDB</li>
            </ul>
        </div>    
    
    );
}

export default Resume;