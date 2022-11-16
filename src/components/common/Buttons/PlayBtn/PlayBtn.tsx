import React from 'react';
import styles from './PlayBtn.module.scss';
import PlayBtnLight from '../../../../assets/img/playbtn1L.svg';
import PlayBtnLightReverse from '../../../../assets/img/playbtn2L.svg';
import PlayBtnDark from '../../../../assets/img/playbtn1D.svg';
import PlayBtnDarkReverse from '../../../../assets/img/playbtn2D.svg';
import PauseBtnLight from '../../../../assets/img/pauseBtn1L.svg';
import PauseBtnLightReverse from '../../../../assets/img/pauseBtn2L.svg';
import PauseBtnDark from '../../../../assets/img/pauseBtn1D.svg';
import PauseBtnDarkReverse from '../../../../assets/img/pauseBtn2D.svg';
import { IColors } from '../../../../types/types';
interface StartButtonProps {
  pause: boolean;
  dark: boolean;
  colors: IColors;
  isRevers?: boolean;
}

const PlayBtn = ({
  pause,
  dark,
  colors,
  isRevers = false,
}: StartButtonProps) => {
  return (
    <button className={styles.button}>
      {isRevers ? (
        <img
          width={'100%'}
          src={
            dark
              ? pause
                ? PauseBtnDark
                : PlayBtnDark
              : pause
              ? PauseBtnLight
              : PlayBtnLight
          }
          alt='start'
        />
      ) : (
        <img
          width={'100%'}
          src={
            dark
              ? pause
                ? PauseBtnDarkReverse
                : PlayBtnDarkReverse
              : pause
              ? PauseBtnLightReverse
              : PlayBtnLightReverse
          }
          alt='start'
        />
      )}
    </button>
  );
};

export default PlayBtn;
