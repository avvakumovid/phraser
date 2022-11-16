import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../context/context';
import styles from './Layout.module.scss';
interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const { colors } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.wrapper}`}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <div className={`${styles.children}`}>{children}</div>
    </div>
  );
};

export default Layout;
