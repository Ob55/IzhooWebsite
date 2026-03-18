import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="page" style={{ paddingTop: '72px', minHeight: 'calc(100vh - 72px)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
