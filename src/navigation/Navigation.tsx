import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/context';
import Start from '../screens/start/Start';
import QuestionTask from '../screens/questionTask/QuestionTask';
import StartTask from '../screens/startTask/StartTask';
import FinalTask from './../screens/finalTask/FinalTask';

const Navigation = () => {
  const { colors, dark } = useContext(ThemeContext);
  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route
        path='/startTask/:taskNumber'
        element={<StartTask colors={colors} dark={dark} />}
      />
      <Route
        path='/questionTask/:index'
        element={<QuestionTask colors={colors} dark={dark} />}
      />
      <Route
        path='/finalTask'
        element={<FinalTask colors={colors} dark={dark} />}
      />
    </Routes>
  );
};

export default Navigation;
