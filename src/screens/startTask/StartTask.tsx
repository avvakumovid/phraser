import React, { FC, useState, useEffect } from 'react';
import Layout from './../../components/layout/Layout';
import { useParams } from 'react-router';
import { IColors } from '../../types/types';
import Player from '../../components/common/Player/Player';
import GradientedText from '../../components/common/Text/GradientedText';
import { Link, useNavigate } from 'react-router-dom';
import { setTasks } from '../../store/slice/mainSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';

interface StartTaskProps {
  colors: IColors;
  dark: boolean;
}

const StartTask: FC<StartTaskProps> = ({ colors, dark }) => {
  const { taskNumber } = useParams();
  const { taskNumbers } = useAppSelector(state => state.main);
  let navigate = useNavigate();


 
  return (
    <Layout isFooter={true} isOnlyHome={true}>
      {taskNumber && taskNumbers && (
        <div className='flex flex-row mt-[15vh] justify-start items-center'>
          <button
            onClick={() => {
              setTimeout(() => {
                navigate(taskNumbers[+taskNumber].to || '/');
              }, taskNumbers[+taskNumber].duration);
            }}
          >
            <Player
              isRevers={true}
              url={taskNumbers[+taskNumber].audio}
              colors={colors}
              dark={dark}
            />
          </button>
          <div className='ml-5 flex flex-col'>
            <GradientedText dark={dark}>Задание</GradientedText>
            <span className='italic'>{taskNumbers[+taskNumber].title}</span>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default StartTask;
