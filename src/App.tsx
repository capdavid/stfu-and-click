import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from './styles/theme';
import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';
import GameContainer from './containers/GameContainer';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header>STFUANDCLICK.COM</Header>
            <Quote author="anonymous">It's really simple, you just need to click as fast as you can.</Quote>
            <GameContainer />
            <Footer />
        </ThemeProvider>
    );
};

export default App;
