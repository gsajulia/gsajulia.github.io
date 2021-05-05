import React from 'react';

/* Styles */
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import MyTheme from './../../MyTheme';

/* Components */
import Header from "./../../components/header/header.component";
import Introduction from "./../../components/introduction/introduction.component";
import Experience from "../../components/experience/experience.component";
// import './i18n/config';

const MainPage: React.FC = () => {
    return (
    <MuiThemeProvider theme={MyTheme}>
        <Header/>
        <a id="introduction">
            <Introduction/>
        </a>
        <a id="experience">
            <Experience/>
        </a>
    </MuiThemeProvider>
)
}

export default MainPage;