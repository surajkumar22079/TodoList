import React from 'react';
import Board from './components/Board';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="container py-4 px-4 d-flex flex-column min-vh-100 mw-100"> 
      <Navbar />
      <div className="flex-grow-1">
        <Board />
      </div>
      <Footer />
    </div>
  );
}