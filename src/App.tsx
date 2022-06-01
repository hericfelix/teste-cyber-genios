import React from 'react';

import './App.css';
import CarCard from './components/CarCard';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Input from './components/Input';
import Table from './components/Table';
import { useCars } from './providers/cars';

function App() {
  const { cars } = useCars();
  return <Header />;
}

export default App;
