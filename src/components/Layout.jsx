import React, { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg ${isDarkMode ? 'bg-body-dark' : 'bg-body-tertiary '}`}>
        <div className="container-fluid px-5 d-flex justify-content-between">
          <a className="navbar-brand" href="/">
            <i className="bi bi-book"/>
          </a>
          <div className='d-flex flex-row align-items-center'>
            <button type='button' className="btn" onClick={handleToggle} style={{fontSize: '1.5rem'}}>
              <i className={isDarkMode ? 'bi bi-toggle-on' : 'bi bi-toggle-off'} />
            </button>
            <i className={isDarkMode ? 'bi bi-moon-fill' : 'bi bi-moon'} style={{fontSize: '1rem'}} />
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Layout;