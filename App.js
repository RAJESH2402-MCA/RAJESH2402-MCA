import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <section>
    <div className="App">
      
      <Header />
      
     
      <div className="main-content"> 
     <div className="top"> <Nav /></div>
      <Article />
      </div>
      <Footer />
    </div>
    </section>
  );
}

export default App;