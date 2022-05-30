import React from 'react';

import './App.css';
import Header from './components/Header';
import Input from './components/Input';

function App() {
  return (
    <div>
      <Input name="Nome" placeholder="Coloque seu nome aqui" label="Nome" />
    </div>
  );
}

export default App;
