import React, { useContext, MouseEvent } from 'react';
import { ThemeContext } from '../../../../context/context';
import { BsMoonStars, BsSun } from 'react-icons/bs';

function ThemeButton() {
  const { dark, toggleDark, colors } = useContext(ThemeContext);
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleDark();
  };

  return dark ? (
    <button onClick={handleOnClick}>
      <svg width='0' height='0'>
        <linearGradient id='sun-gradient' x1='100%' y1='100%' x2='100%' y2='0%'>
          <stop stopColor={colors.top} offset='0%' />
          <stop stopColor={colors.bottom} offset='100%' />
        </linearGradient>
      </svg>
      <BsSun style={{ fill: 'url(#sun-gradient)' }} />
    </button>
  ) : (
    <button onClick={handleOnClick}>
      <svg width='0' height='0'>
        <linearGradient id='moon-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor={colors.top} offset='0%' />
          <stop stopColor={colors.bottom} offset='100%' />
        </linearGradient>
      </svg>
      <BsMoonStars style={{ fill: 'url(#moon-gradient)' }} />
    </button>
  );
}

export default ThemeButton;
