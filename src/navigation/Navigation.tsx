import React from 'react';

import Start from './../screens/Start';
import { Route, Routes } from 'react-router-dom';

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
    </Routes>
  );
};

export default Navigation;
