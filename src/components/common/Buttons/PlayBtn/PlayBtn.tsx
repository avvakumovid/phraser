import React, { useState } from 'react';
import styles from './PlayBtn.module.scss';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
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
      {/* <svg width='0' height='0'>
        <linearGradient id='gradient' x1='100%' y1='100%' x2='100%' y2='0%'>
          <stop stopColor={colors.top} offset='0%' />
          <stop stopColor={colors.bottom} offset='100%' />
        </linearGradient>
      </svg> */}
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
        // <>
        //   {pause ? (
        //     <AiOutlinePauseCircle
        //       size={'100%'}
        //       style={{ fill: 'url(#gradient)' }}
        //     />
        //   ) : (
        //     <AiOutlinePlayCircle
        //       size={'100%'}
        //       style={{ fill: 'url(#gradient)' }}
        //     />
        //   )}
        // </>
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
        // <>
        //   {pause ? (
        //     <AiOutlinePauseCircle
        //       size={'100%'}
        //       style={{ fill: 'url(#gradient)' }}
        //     />
        //   ) : (
        //     <AiOutlinePlayCircle
        //       size={'100%'}
        //       style={{ fill: 'url(#gradient)' }}
        //     />
        //   )}
        // </>
      )}
    </button>
  );
};

export default PlayBtn;
