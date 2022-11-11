import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import { ThemeProvider } from './context/context';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
