import React, { useContext } from 'react';
import StartButton from '../../components/common/Buttons/StartButton/StartButton';
import ThemeButton from '../../components/common/ThemeButton/ThemeButton';
import Layout from '../../components/layout/Layout';
import { ThemeContext } from '../../context/context';

const Start = () => {
  const { colors, dark } = useContext(ThemeContext);
  return (
    <Layout>
      <StartButton
        onClick={() => {
          console.log('asd');
        }}
        dark={dark}
      />
      <ThemeButton />
      <p>asdasd</p>
    </Layout>
  );
};

export default Start;
