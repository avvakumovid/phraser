import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from '../screens/start/Start';

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
    </Routes>
  );
};

export default Navigation;
