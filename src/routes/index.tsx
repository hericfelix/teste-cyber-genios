import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TablePage from '../pages/TablePage';

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<TablePage />} />
    </Routes>
  );
};

export default Router;
