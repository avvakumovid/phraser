import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/context';
import Start from '../screens/start/Start';
import QuestionTask from '../screens/questionTask/QuestionTask';
import StartTask from '../screens/startTask/StartTask';
import FinalTask from './../screens/finalTask/FinalTask';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles.css';

const Navigation = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut');
  }, [location, displayLocation]);
  const { colors, dark } = useContext(ThemeContext);
  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
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
    </div>
  );
};

export default Navigation;
