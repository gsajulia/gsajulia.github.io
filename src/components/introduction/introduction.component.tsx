import React from 'react';

/* Styles */
import {
    ContainerIntroduction,
    TextContainer,
    Container,
    SiteReference,
    SmallTextContainer
} from './introduction.styles';

/* Images */
import profileImage from "../../assets/profile-image-pink.png";

/* Icons */
import { ReactComponent as Graduating } from "./../../assets/graduating.svg";
import { ReactComponent as Stars } from "./../../assets/stars.svg";

/* Material UI */
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';

/* Translation */
import { useTranslation } from "react-i18next";

const Introduction: React.FC = () => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width: 700px)');

    return (
        <>
            <Container>
                {isMobile ?
                    <ContainerIntroduction>
                        <img alt="profile image" src={profileImage} />
                        <TextContainer>
                            <Typography variant="h4">
                                {t("greetings1")},
                        </Typography>
                            <Typography variant="h4" style={{ marginBottom: 20 }}>
                                {t("greetings2")} <span style={{ color: "#FB87FD" }}>{t("frontend-developer")}</span>!
                        </Typography>
                            <Typography variant="h6">
                                {t("about-me-1")}
                            </Typography>
                        </TextContainer>

                    </ContainerIntroduction> :
                    <ContainerIntroduction>
                        <TextContainer>
                            <Typography variant="h4">
                                {t("greetings1")},
                                </Typography>
                            <Typography variant="h4" style={{ marginBottom: 20 }}>
                                {t("greetings2")} <span style={{ color: "#FB87FD" }}>{t("frontend-developer")}</span>!
                                </Typography>
                            <Typography variant="h6">
                                {t("about-me-1")}
                            </Typography>
                        </TextContainer>

                        <img alt="profile image" src={profileImage} />
                    </ContainerIntroduction>}
                <SmallTextContainer>
                    <Graduating style={{ width: 50, height: 60, margin: "0 10px 10px 0" }} />
                    {`${t("graduating")} - `}
                    <SiteReference href="https://www.ufsm.br/">
                        {t("ufsm")}
                    </SiteReference>
                </SmallTextContainer>
                <SmallTextContainer>
                    <Stars style={{ width: 45, height: 50, margin: "0 10px 10px 5px" }} />
                    {t("technologies-introduction")} </SmallTextContainer>

            </Container>
        </>
    )

}

export default Introduction;