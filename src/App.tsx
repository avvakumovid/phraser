import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import { ThemeProvider } from './context/context';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <Navigation />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
