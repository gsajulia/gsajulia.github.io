import React from 'react';

/* Styles */
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import MyTheme from './../../MyTheme';
import { Footer, SmallTextContainer, SiteReference, SiteReferenceContainer } from "./main-page.styles";

/* Icons */
import { ReactComponent as Stars } from "./../../assets/stars.svg";

/* Components */
import Header from "./../../components/header/header.component";
import Introduction from "./../../components/introduction/introduction.component";
import Experience from "../../components/experience/experience.component";
import Projects from "./../../components/projects/projects.component";
// import './i18n/config';

/* Translation */
import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <MuiThemeProvider theme={MyTheme}>
            <Header />
            <a id="introduction" />
            <Introduction />
            <a id="experience" />
            <Experience />
            <a id="projects" />
            <Projects />
            <Footer>
                <SmallTextContainer>
                    <Stars style={{ width: 45, height: 50, margin: "0 10px 10px 5px" }} />
                    {`${t("developed-by")} Júlia Gabriela Santi Acosta`}
                </SmallTextContainer>
                <SiteReferenceContainer>
                    <div>
                        {`${t("icons-made-by")} `}
                        <SiteReference href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</SiteReference>{` ${t("and")} `}
                        <SiteReference href="https://www.freepik.com" title="Freepik">Freepik</SiteReference>{` ${t("from")} `}
                        <SiteReference href="https://www.flaticon.com/" title="Flaticon">Flaticon</SiteReference>
                    </div>
                </SiteReferenceContainer>
            </Footer>
        </MuiThemeProvider>
    )
}

export default MainPage;