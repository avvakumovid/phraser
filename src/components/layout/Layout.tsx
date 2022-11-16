import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../context/context';
import styles from './Layout.module.scss';
import { Footer } from './../common/Footer/Footer';
interface ILayout {
  children: ReactNode;
  isFooter?: boolean;
  linkTo?: string;
  isOnlyHome?: boolean;
  onRightClick?: () => void;
}

const Layout = ({
  children,
  isFooter = false,
  linkTo = '/',
  isOnlyHome = false,
  onRightClick = () => {},
}: ILayout) => {
  const { colors, dark } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.wrapper}`}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <div className={`${styles.children}`}>
        {children}
        {isFooter && (
          <Footer
            dark={dark}
            linkTo={linkTo}
            isOnlyHome={isOnlyHome}
            onRightClick={onRightClick}
          />
        )}
      </div>
    </div>
  );
};

export default Layout;
