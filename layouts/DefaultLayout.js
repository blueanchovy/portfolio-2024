import React from 'react';
import Header from '../components/Header';

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default DefaultLayout;
