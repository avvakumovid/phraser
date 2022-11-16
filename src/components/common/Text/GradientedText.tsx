import React, { FC } from 'react';
import styles from './GradientedText.module.scss';
interface IGradientedTextProps {
  children?: string;
  dark: boolean;
}

const GradientedText: FC<IGradientedTextProps> = ({ children, dark }) => {
  return (
    <span className={`${styles.text} ${dark ? styles.dark : styles.light}`}>
      {children}
    </span>
  );
};

export default GradientedText;
