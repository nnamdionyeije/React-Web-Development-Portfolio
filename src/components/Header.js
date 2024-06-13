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


      <div className='main-header'>
        <h1> Nnamdi Onyeije</h1>
      </div>
      
      
      <div className='justify-content-center'>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      
      

      

    </header>
  );
}

export default Header;