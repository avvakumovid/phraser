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
import styles from './StartTask.module.scss';

interface StartTaskProps {
  colors: IColors;
  dark: boolean;
}

const StartTask: FC<StartTaskProps> = ({ colors, dark }) => {
  const { taskNumber } = useParams();
  const { taskNumbers } = useAppSelector(state => state.main);
  let navigate = useNavigate();

  const [pressed, setPressed] = useState(false);

  return (
    <Layout isFooter={true} isOnlyHome={true}>
      {taskNumber && taskNumbers && (
        <div className={`${styles.container}`}>
          <button
            onClick={() => {
              setPressed(true);
              setTimeout(() => {
                navigate(taskNumbers[+taskNumber].to || '/');
              }, taskNumbers[+taskNumber].duration);
            }}
          >
            <Player
              pulse={!pressed}
              isRevers={true}
              url={taskNumbers[+taskNumber].audio}
              colors={colors}
              dark={dark}
            />
          </button>
          <div>
            <GradientedText dark={dark}>Задание</GradientedText>
            <span>{taskNumbers[+taskNumber].title}</span>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default StartTask;
