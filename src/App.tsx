import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Index';
import Navbar from './Components/Navbar';
import GlobalStyles from './Styles/global';

const App = () => (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
);

export default App;
