import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DefaultLayout = ({ children }) => (
  <>
    {/* <Header /> */}
    {children}
    <Footer />
  </>
);

export default DefaultLayout;
