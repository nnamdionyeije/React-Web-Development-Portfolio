import React from 'react';
import NavTabs from './NavTabs';

const styles = {
  headerStyle: {
    background: 'gray',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

function Header({currentPage, handlePageChange}) {
  return (
    <header className="header">


      {/* <div className='main-header'>
        <h1 class="headerName"> Nnamdi Onyeije</h1>
      </div> */}
      
      
      <div className='justify-content-center'>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>

      <div className='linked-sites'> 
        <ul className="list-inline">        
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/nnamdi-onyeije" target="_blank" rel="noopener noreferrer" class="nav-link">LinkedIn</a>
          </li>
            
            
          <li className="list-inline-item">
            <a href="https://github.com/nnamdionyeije" target="_blank" rel="noopener noreferrer" class="nav-link">GitHub</a>
          </li>      
        </ul>
      </div>
      
      
      
      

      

    </header>
  );
}

export default Header;