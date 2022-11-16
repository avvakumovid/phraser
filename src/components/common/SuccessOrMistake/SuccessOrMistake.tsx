import React, { FC, useEffect, useState } from 'react';
import styles from './SuccessOrMistake.module.scss';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdNotInterested } from 'react-icons/md';
import { IColors } from '../../../types/types';

interface SuccessOrMistakeProps {
  isSuccess: boolean;
  colors: IColors;
  show: boolean;
}

const SuccessOrMistake: FC<SuccessOrMistakeProps> = ({
  isSuccess,
  colors,
  show,
}) => {
  return (
    <div className={`${styles.success}`}>
      <svg width='0' height='0'>
        <linearGradient id='gradient' x1='100%' y1='100%' x2='100%' y2='0%'>
          <stop stopColor={colors.top} offset='0%' />
          <stop stopColor={colors.bottom} offset='100%' />
        </linearGradient>
      </svg>
      {isSuccess ? (
        <AiOutlineCheck size={'100%'} style={{ fill: 'url(#gradient)' }} />
      ) : (
        <MdNotInterested size={'100%'} style={{ fill: 'url(#gradient)' }} />
      )}
    </div>
  );
};

export default SuccessOrMistake;
