import React from 'react';
import './App.css';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import Main from '../main/Main.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="fh-structure">
      <Router>
        <Header></Header>

        <Main></Main>
      
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
