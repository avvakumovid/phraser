import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LeftLight from '../../../assets/img/leftArrowL.svg';
import LeftDark from '../../../assets/img/leftArrowD.svg';
import RightLight from '../../../assets/img/rightArrowL.svg';
import RightDark from '../../../assets/img/rightArrowD.svg';
import HomeLight from '../../../assets/img/homeL.svg';
import HomeDark from '../../../assets/img/homeD.svg';

interface FooterProps {
  dark: boolean;
  linkTo: string;
  isOnlyHome?: boolean;
}

export const Footer: FC<FooterProps> = ({
  dark,
  linkTo,
  isOnlyHome = false,
}) => {
  let navigate = useNavigate();
  return (
    <div
      className={`w-full flex flex-row items-center ${
        isOnlyHome ? 'justify-center' : 'justify-between'
      }`}
    >
      {!isOnlyHome && (
        <button
          onClick={() => {
            navigate(-1);
          }}
          className='w-[20px] md:w-[30px] lg:w-[40px]'
        >
          <img width='100%' alt='left' src={dark ? LeftDark : LeftLight} />
        </button>
      )}
      <Link className='w-[20px] md:w-[30px] lg:w-[40px] ' to='/'>
        <img width='100%' alt='home' src={dark ? HomeDark : HomeLight} />
      </Link>
      {!isOnlyHome && (
        <Link className='w-[20px] md:w-[30px] lg:w-[40px]' to={linkTo}>
          <img width='100%' alt='right' src={dark ? RightDark : RightLight} />
        </Link>
      )}
    </div>
  );
};
