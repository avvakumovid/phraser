import React from 'react';
import styles from './StartButton.module.scss';
import startBtnLight from '../../../../assets/img/startBtnLight.svg';
import startBtnDark from '../../../../assets/img/startBtnDark.svg';
interface StartButtonProps {
  onClick: () => void;
  dark: boolean;
  anim: boolean;
}

const StartButton = ({ onClick, dark, anim }: StartButtonProps) => {
  return (
    <button
      className={`${styles.button} ${anim ? styles.heart : null}`}
      onClick={() => {
        onClick();
      }}
    >
      <img
        width={'100%'}
        src={dark ? startBtnDark : startBtnLight}
        alt='start'
      />
    </button>
  );
};

export default StartButton;
