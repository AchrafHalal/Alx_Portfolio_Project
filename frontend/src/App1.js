import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, FilterP, Available } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
        </div>
        <Router>
          <Routes>
            <Route path="/filterP" component={FilterP} />
            <Route path="/" exact component={Available} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
