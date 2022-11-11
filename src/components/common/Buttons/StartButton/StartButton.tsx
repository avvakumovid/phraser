import React from 'react';
import styles from './StartButton.module.scss';
import startBtnLight from '../../../../assets/img/startBtnLight.svg';
import startBtnDark from '../../../../assets/img/startBtnDark.svg';
interface StartButtonProps {
  onClick: () => void;
  dark: boolean;
}

const StartButton = ({ onClick, dark }: StartButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img
        width={'100%'}
        src={dark ? startBtnDark : startBtnLight}
        alt='s'
        style={{ fill: 'url(#sun-gradient)' }}
      />
    </button>
  );
};

export default StartButton;
