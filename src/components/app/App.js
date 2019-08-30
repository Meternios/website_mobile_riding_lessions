import React from 'react';
import './App.css';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import Main from '../main/Main.js';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../assets/react-toolbox/theme.css';
import theme from '../../assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="fh-structure">
        <Router>
          <Header></Header>

          <Main></Main>
        
          <Footer></Footer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
