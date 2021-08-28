import React, { useState } from "react";

/* Style */
import {
  Container,
  BoxBorder,
  BoxContainer,
  LanguageContainer,
  EachProgress,
  Languages,
  LanguagesContainer,
  TechnologiesContainer,
  ContainerTechImage,
} from "./experience.styles";

/* Material UI */
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import { Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";

/* Translation */
import { useTranslation } from "react-i18next";

/* Icons */
import { ReactComponent as Lamp } from "./../../assets/lamp.svg";
import { ReactComponent as LightLamp } from "./../../assets/light-lamp.svg";
import { ReactComponent as US } from "./../../assets/united-states.svg";
import { ReactComponent as BR } from "./../../assets/brasil.svg";

/* Components */
import ExperienceCompanies from "../experience-companies/experience-companies.component";
import ExperienceLanguages from "../experience-languages/experience-languages.component";

/* Icons about project technologies */
import { ReactComponent as MySQL } from "./../../assets/technologies/MySQL-Logo.svg";

import {
  dkItems,
  cmItems,
  english,
  frontendItems,
  backendItems,
  dkConstants,
  cmConstants,
  portuguese,
} from "./constants";

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [lampStatusDK, setLampStatusDK] = useState(false);
  const [lampStatusCM, setLampStatusCM] = useState(false);

  const [showTechnologies, setShowTechnologies] = useState(false);

  const handleClickAwayDK = (value: boolean) => {
    setLampStatusDK(value);
  };

  const handleClickAwayCM = (value: boolean) => {
    setLampStatusCM(value);
  };

  return (
    <>
      <Container
        onMouseLeave={() => {
          setLampStatusDK(false);
          setLampStatusCM(false);
        }}
      >
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          <span style={{ color: "#FB87FD" }}>{t("experience-skills")}</span>
        </Typography>

        <BoxContainer
          onMouseLeave={() => {
            setLampStatusDK(false);
            setLampStatusCM(false);
          }}
        >
          <ExperienceCompanies
            items={dkItems}
            constants={dkConstants}
            lampStatus={lampStatusDK}
            handleClickAway={handleClickAwayDK}
          />

          <ExperienceCompanies
            items={cmItems}
            constants={cmConstants}
            lampStatus={lampStatusCM}
            handleClickAway={handleClickAwayCM}
          />
        </BoxContainer>

        <LanguagesContainer>
          <Typography variant="h5" style={{ marginBottom: 30 }}>
            {t("languages")}
          </Typography>
          <Languages>
            <ExperienceLanguages language={english}>
              <US style={{ width: 50, height: 50, margin: "0 0 30px 0" }} />
            </ExperienceLanguages>
            <ExperienceLanguages language={portuguese}>
              <BR style={{ width: 50, height: 50, margin: "0 0 30px 0" }} />
            </ExperienceLanguages>
          </Languages>
        </LanguagesContainer>

        <LanguagesContainer>
          <Typography variant="h5" style={{ marginBottom: 30 }}>
            {t("all-technologies")}
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "#1f1c21", border: "1px solid #B485FF" }}
            onClick={() => {
              setShowTechnologies(!showTechnologies);
            }}
            color="secondary"
          >
            <LightLamp
              style={{ width: 40, height: 40, marginRight: 20 }}
              onMouseLeave={() => setLampStatusCM(false)}
            />{" "}
            {showTechnologies ? t("hide") : t("show")}
          </Button>
          {showTechnologies ? (
            <BoxBorder style={{ maxWidth: 500 }}>
              <Typography variant="h5" style={{ marginBottom: 20 }}>
                Frontend
              </Typography>
              <TechnologiesContainer>
                {frontendItems.map((element, index) => (
                  <ContainerTechImage key={index}>
                    <img
                      alt={element.label}
                      style={{
                        width: element.width,
                        height: element.height,
                        paddingRight: element.right,
                      }}
                      src={element.image}
                    />
                    <div>{element.label}</div>
                  </ContainerTechImage>
                ))}
              </TechnologiesContainer>
              <Typography variant="h5" style={{ marginBottom: 20 }}>
                Backend
              </Typography>
              <TechnologiesContainer>
                {backendItems.map((element, index) => (
                  <ContainerTechImage key={index}>
                    <img
                      alt={element.label}
                      style={{
                        width: element.width,
                        height: element.height,
                        marginRight: element.right,
                        marginLeft: element.left,
                        backgroundColor: element?.background,
                      }}
                      src={element.image}
                    />
                    <div>{element.label}</div>
                  </ContainerTechImage>
                ))}
                <ContainerTechImage>
                  <MySQL
                    style={{
                      width: 52,
                      height: 50,
                      marginRight: 5,
                    }}
                  />
                  <div>MySQL</div>
                </ContainerTechImage>
              </TechnologiesContainer>
            </BoxBorder>
          ) : null}
        </LanguagesContainer>
      </Container>
    </>
  );
};

export default Experience;
