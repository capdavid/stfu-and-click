import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter, Route } from 'react-router-dom';

import { theme } from './styles/theme';

import ActiveGame from './containers/ActiveGame';
import Footer from './components/Footer';
import GameMenu from './containers/GameMenu';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header>STFUANDCLICK.COM</Header>
        <Route path="/" exact component={GameMenu} />
        <Route path="/:teamName" component={ActiveGame} />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
