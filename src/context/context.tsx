import React, { FC, ReactNode, useEffect, useState } from 'react';
import { IColors } from '../types/types';

interface IThemeContext {
  dark: boolean;
  toggleDark: () => void;
  colors: IColors;
}

const thems = {
  dark: {
    top: '#2CFFFF',
    bottom: '#704EF4',
    bg: '#0E1621',
    text: '#2CFFFF',
  },
  light: {
    top: '#704EF4',
    bottom: '#FF2CDF',
    bg: '#ffffff',
    text: '#704EF4',
  },
};

export const defaultState: IThemeContext = {
  dark: false,
  toggleDark: () => {},
  colors: thems.light,
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);
  const [colors, setColors] = useState(defaultState.colors);
  const toggleDark = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      setColors(thems.dark);
    } else {
      setColors(thems.light);
    }
  }, [dark]);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
