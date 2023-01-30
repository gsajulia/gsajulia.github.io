import React from "react";

/* Styles */
import * as S from "./introduction.styles";

/* Images */
import profileImage from "../../assets/icons/profile/dark-profile-image.jpeg";

/* Icons */
import { ReactComponent as Graduating } from "./../../assets/icons/graduating.svg";
import { ReactComponent as Stars } from "./../../assets/icons/stars.svg";
import ReactWorld from "./../../assets/icons/react-world";
import ReactIcon from "./../../assets/icons/technologies/react";

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
        <S.Section>
          <img alt="profile" src={profileImage} />
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
        </S.Section>

        <S.Section>
          <section>
            <address>
              <Graduating width={50} height={60} />
              <p>
                {`${t("graduate")} `} {` - ${t("course")} `}
                <span>{" (2017-2022) "}</span>|
                <a href="https://www.ufsm.br/">{t("ufsm")}</a>
              </p>
            </address>

            <strong>
              <Stars width={45} height={50} />
              {t("technologies-introduction")}
            </strong>
          </section>

          <S.ReactWorldWrapper>
            <ReactIcon width="6.25rem" />
            <ReactWorld />
          </S.ReactWorldWrapper>
        </S.Section>
      </S.Container>
    </>
  );
};

export default Introduction;
