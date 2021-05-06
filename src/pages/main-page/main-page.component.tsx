import React from 'react';

/* Styles */
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import MyTheme from './../../MyTheme';

/* Components */
import Header from "./../../components/header/header.component";
import Introduction from "./../../components/introduction/introduction.component";
import Experience from "../../components/experience/experience.component";
import Projects from "./../../components/projects/projects.component";
// import './i18n/config';

const MainPage: React.FC = () => {
    return (
    <MuiThemeProvider theme={MyTheme}>
        <Header/>
        <a id="introduction"/>
            <Introduction/>
        <a id="experience"/>
            <Experience/>
        <a id="projects"/>
            <Projects/>
    </MuiThemeProvider>
)
}

export default MainPage;