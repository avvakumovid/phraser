import React, { useContext, useEffect } from 'react';
import StartButton from '../../components/common/Buttons/StartButton/StartButton';
import ThemeButton from '../../components/common/Buttons/ThemeButton/ThemeButton';
import Player from '../../components/common/Player/Player';
import SuccessOrMistake from '../../components/common/SuccessOrMistake/SuccessOrMistake';
import GradientedText from '../../components/common/Text/GradientedText';
import Layout from '../../components/layout/Layout';
import { ThemeContext } from '../../context/context';
import PlayBtn from './../../components/common/Buttons/PlayBtn/PlayBtn';
import DnD from './../../components/common/DnD/DnD';
import { useDispatch } from 'react-redux';
import { setTasks } from '../../store/slice/mainSlice';
import styles from './Start.module.scss';
import { Link } from 'react-router-dom';
import QuestionButton from '../../components/common/Buttons/QuestionButton/QuestionButton';

const Start = () => {
  const { colors, dark } = useContext(ThemeContext);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Link to='/startTask/0' className={styles.container}>
        <StartButton
          onClick={() => {
            dispatch(setTasks());
          }}
          dark={dark}
          anim={false}
        />
      </Link>
      <ThemeButton />
    </Layout>
  );
};

export default Start;
