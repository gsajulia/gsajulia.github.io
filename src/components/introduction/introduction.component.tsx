import React from "react";

/* Styles */
import * as S from "./introduction.styles";

/* Images */
import profileImage from "../../assets/profile/dark-profile-image.jpeg";

/* Icons */
import { ReactComponent as Graduating } from "./../../assets/graduating.svg";
import { ReactComponent as Stars } from "./../../assets/stars.svg";
import ReactWorld from "./../../assets/react-world";

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
      <S.Container>
        <S.ContainerIntroduction>
          <S.Row>
            {isMobile ? <img alt="profile" src={profileImage} /> : null}
            <S.TextContainer>
              <Typography variant="h4">{t("greetings1")},</Typography>
              <Typography variant="h4" style={{ marginBottom: 20 }}>
                {t("greetings2")}{" "}
                <span style={{ color: "#FB87FD" }}>
                  {t("frontend-developer")}
                </span>
                !
              </Typography>
              <Typography variant="h6">
                {`${t("about-me-1")} ${yearsOfExperience()} ${t("about-me-2")}`}
              </Typography>
            </S.TextContainer>
          </S.Row>
          {!isMobile ? <img alt="profile" src={profileImage} /> : null}
        </S.ContainerIntroduction>

        <S.Row>
          <div style={{alignSelf: "center"}}>
          <S.SmallTextContainer>
            <Graduating
              style={{ width: 50, height: 60, margin: "0 10px 10px 0" }}
            />
            {`${t("graduate")} `} {` - ${t("course")} `}
            <S.SmallSpan>{" (2017-2022) "}</S.SmallSpan>|
            <S.SiteReference href="https://www.ufsm.br/">
              {t("ufsm")}
            </S.SiteReference>
          </S.SmallTextContainer>
          <S.SmallTextContainer>
          <Stars style={{ width: 45, height: 50, margin: "0 10px 10px 5px" }} />
          {t("technologies-introduction")}{" "}
        </S.SmallTextContainer>
        </div>
          <ReactWorld />
        </S.Row>

      </S.Container>
    </>
  );
};

export default Introduction;
