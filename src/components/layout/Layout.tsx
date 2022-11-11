import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../context/context';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const { colors } = useContext(ThemeContext);
  return (
    <div
      style={{
        color: colors.text,
      }}
      className={`w-screen h-screen text-[${colors.text}]`}
    >
      <div
        className={`max-w-2xl mx-auto my-0 bg-[${colors.bg}] h-full p-5 flex justify-center items-start`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
