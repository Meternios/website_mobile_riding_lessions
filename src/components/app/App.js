import React from 'react';
import './App.css';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import Main from '../main/Main.js';

function App() {
  return (
    <div className="fh-structure">
      <Header></Header>

      <Main></Main>

      <Footer></Footer>
    </div>
  );
}

export default App;
