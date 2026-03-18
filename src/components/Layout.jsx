import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="page" style={{ paddingTop: '92px', minHeight: 'calc(100vh - 92px)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
