import React from 'react';

/* Styles */
import './App.css';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import MyTheme from './MyTheme';

/* Components */
import Introduction from "./components/introduction/introduction.component";
import Header from "./components/header/header.component";

import './i18n/config';

const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={MyTheme}>
            <Header/>
            <Introduction/>
        </MuiThemeProvider>
    )
}

export default App;
