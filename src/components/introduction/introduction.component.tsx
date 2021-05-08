import React from 'react';

/* Styles */
import {
    ContainerIntroduction,
    TextContainer,
    Container
} from './introduction.styles';

/* Images */
import profileImage from "../../assets/profile-image-pink.png";

/* Material UI */
import Typography from "@material-ui/core/Typography";

/* Translation */
import {useTranslation} from "react-i18next";

const Introduction: React.FC = () => {
    const {t} = useTranslation();

    return (
        <>
            <Container>
                <ContainerIntroduction>
                    <TextContainer>
                        <Typography variant="h4">
                            {t("greetings1")},
                        </Typography>
                        <Typography variant="h4" style={{marginBottom: 20}}>
                            {t("greetings2")} <span style={{color: "#FB87FD"}}>{t("frontend-developer")}</span>!
                        </Typography>
                        <Typography variant="h6">
                            {t("about-me-1")}
                        </Typography>
                    </TextContainer>
                    <img alt="profile image" src={profileImage}/>
                </ContainerIntroduction>
            </Container>
        </>
    )

}

export default Introduction;