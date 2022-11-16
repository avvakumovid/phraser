import React, { useContext } from 'react';
import StartButton from '../../components/common/Buttons/StartButton/StartButton';
import ThemeButton from '../../components/common/Buttons/ThemeButton/ThemeButton';
import Layout from '../../components/layout/Layout';
import { ThemeContext } from '../../context/context';
import { useDispatch } from 'react-redux';
import { setTasks } from '../../store/slice/mainSlice';
import styles from './Start.module.scss';
import { Link } from 'react-router-dom';

const Start = () => {
  const { dark } = useContext(ThemeContext);
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
