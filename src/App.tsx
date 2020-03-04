import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { theme } from './styles/theme';

import ActiveGame from './containers/ActiveGame';
import Footer from './components/Footer';
import GameMenu from './containers/GameMenu';
import Header from './components/Header';
import TeamNotFound from './components/TeamNotFound';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header>STFUANDCLICK.COM</Header>
        <Switch>
          <Route path="/" exact component={GameMenu} />
          <Route path="/team-not-found" exact component={TeamNotFound} />
          <Route path="/:teamName" component={ActiveGame} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
