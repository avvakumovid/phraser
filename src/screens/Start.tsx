import React from 'react';
import StartButton from '../components/common/Buttons/StartButton/StartButton';
import Layout from '../components/layout/Layout';
import styles from './Start.module.scss';

const Start = () => {
  return (
    <Layout>
      <StartButton
        topColor='#704EF4'
        bottomColor='#FF2CDF'
        onClick={() => {
          console.log('asd');
        }}
      />
    </Layout>
  );
};

export default Start;
