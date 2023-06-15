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
      <h1> Nnamdi Onyeije</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

    </header>
  );
}

export default Header;