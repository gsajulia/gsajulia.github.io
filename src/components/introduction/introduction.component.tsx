import React from "react";

/* Styles */
import {
  ContainerIntroduction,
  TextContainer,
  Container,
  SiteReference,
  SmallTextContainer,
  SmallSpan,
} from "./introduction.styles";

/* Images */
import profileImage from "../../assets/profile-image-pink.png";

/* Icons */
import { ReactComponent as Graduating } from "./../../assets/graduating.svg";
import { ReactComponent as Stars } from "./../../assets/stars.svg";

/* Material UI */
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

/* Translation */
import { useTranslation } from "react-i18next";

const Introduction: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 1450px)");

  const yearsOfExperience = (): number => {
    const date: string[] = new Date().toISOString().split("-");
    const actualYear: number = +date[0];
    let year = +2018;

    return actualYear - year - 1;
  };

  return (
    <>
      <Container>
        <ContainerIntroduction>
          {isMobile ? <img alt="profile" src={profileImage} /> : null}
          <TextContainer>
            <Typography variant="h4">{t("greetings1")},</Typography>
            <Typography variant="h4" style={{ marginBottom: 20 }}>
              {t("greetings2")}{" "}
              <span style={{ color: "#FB87FD" }}>
                {t("frontend-developer")}
              </span>
              !
            </Typography>
            <Typography variant="h6">
              {/* {`${t("about-me-1")} ${yearsOfExperience()} ${t("about-me-2")}`} */}
              {`${t("about-me-1")} 3 ${t("about-me-2")}`}
            </Typography>
          </TextContainer>
          {!isMobile ? <img alt="profile" src={profileImage} /> : null}
        </ContainerIntroduction>

        <SmallTextContainer>
          <Graduating
            style={{ width: 50, height: 60, margin: "0 10px 10px 0" }}
          />
          {`${t("graduate")} `} {` - ${t("course")} `}<SmallSpan>{" (2017-2022) "}</SmallSpan>|
          <SiteReference href="https://www.ufsm.br/">{t("ufsm")}</SiteReference>
        </SmallTextContainer>

        <SmallTextContainer>
          <Stars style={{ width: 45, height: 50, margin: "0 10px 10px 5px" }} />
          {t("technologies-introduction")}{" "}
        </SmallTextContainer>
      </Container>
    </>
  );
};

export default Introduction;
