import React from 'react'
import Navbar from './Comonents/Navbar';
import Hero from './Comonents/Hero';
import HeadlineCards from './Comonents/HeadlineCards';
import { Food } from './Comonents/Food';
import Category from './Comonents/Category';
import Middle from './Comonents/Middle';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Middle />
    </div>
  );
}

export default App;
