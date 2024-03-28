import React from 'react';
import { Footer, Blog, Available, Services, Header } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Available />
        <Services />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
