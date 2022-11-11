import React, { FC, ReactNode, useEffect, useState } from 'react';

interface IThemeContext {
  dark: boolean;
  toggleDark: () => void;
  colors: {
    top: string;
    bottom: string;
    bg: string;
    text: string;
  };
}

const thems = {
  dark: {
    top: '#2CFFFF',
    bottom: '#704EF4',
    bg: '#0E1621',
    text: '#704EF4',
  },
  light: {
    top: '#704EF4',
    bottom: '#FF2CDF',
    bg: '#ffffff',
    text: '#FF2CDF',
  },
};

export const defaultState: IThemeContext = {
  dark: true,
  toggleDark: () => {},
  colors: thems.dark,
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
    console.log(dark);
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
