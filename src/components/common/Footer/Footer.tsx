import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LeftLight from '../../../assets/img/leftArrowL.svg';
import LeftDark from '../../../assets/img/leftArrowD.svg';
import RightLight from '../../../assets/img/rightArrowL.svg';
import RightDark from '../../../assets/img/rightArrowD.svg';
import HomeLight from '../../../assets/img/homeL.svg';
import HomeDark from '../../../assets/img/homeD.svg';
import styles from './Footer.module.scss';
interface FooterProps {
  dark: boolean;
  linkTo: string;
  isOnlyHome?: boolean;
  onRightClick?: () => void;
}

export const Footer: FC<FooterProps> = ({
  dark,
  linkTo,
  isOnlyHome = false,
  onRightClick = () => {},
}) => {
  let navigate = useNavigate();
  return (
    <div
      className={` ${styles.container} ${
        isOnlyHome ? 'justify-center' : 'justify-between'
      }`}
    >
      {!isOnlyHome && (
        <button
          onClick={() => {
            navigate(-1);
          }}
          className={styles.icon}
        >
          <img width='100%' alt='left' src={dark ? LeftDark : LeftLight} />
        </button>
      )}
      <Link className={styles.icon} to='/'>
        <img width='100%' alt='home' src={dark ? HomeDark : HomeLight} />
      </Link>
      {!isOnlyHome && (
        <Link
          onClick={() => {
            onRightClick();
          }}
          className={styles.icon}
          to={linkTo}
        >
          <img width='100%' alt='right' src={dark ? RightDark : RightLight} />
        </Link>
      )}
    </div>
  );
};
