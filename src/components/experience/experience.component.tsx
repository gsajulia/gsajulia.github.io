import React, { useState } from "react";

/* Style */
import {
  Container,
  BoxBorder,
  BoxContainer,
  Languages,
  LanguagesContainer,
  TechnologiesContainer,
  ContainerTechImage,
} from "./experience.styles";

/* Material UI */
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/* Translation */
import { useTranslation } from "react-i18next";

/* Icons */
import { ReactComponent as LightLamp } from "./../../assets/light-lamp.svg";
import { ReactComponent as US } from "./../../assets/united-states.svg";
import { ReactComponent as BR } from "./../../assets/brasil.svg";

/* Components */
import ExperienceCompanies from "../experience-companies/experience-companies.component";
import ExperienceLanguages from "../experience-languages/experience-languages.component";
import TecnologiesOfElements from "../tecnologies-of-element/tecnologies-of-element.component";

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
  const [companyInfo, setCompanyInfo] = useState({
    c1: false,
    c2: false,
  });

  const [showTechnologies, setShowTechnologies] = useState(false);

  const handleClickAway = () => {
    setCompanyInfo({
      c1: false,
      c2: false,
    });
  };

  const handleHoverEnter = (actualProject: string) => {
    setCompanyInfo((prevState) => ({
      ...prevState,
      [actualProject]: true,
    }));
  };

  return (
    <>
      <Container
        onMouseLeave={() => {
          setCompanyInfo({
            c1: false,
            c2: false,
          });
        }}
      >
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          <span style={{ color: "#FB87FD" }}>{t("experience-skills")}</span>
        </Typography>

        <BoxContainer
          onMouseLeave={() => {
            setCompanyInfo({
              c1: false,
              c2: false,
            });
          }}
        >
          <ExperienceCompanies
            items={dkItems}
            constants={dkConstants}
            lampStatus={companyInfo["c1"]}
            idItem={"c1"}
            handleClickAway={handleClickAway}
            handleHoverEnter={handleHoverEnter}
          />

          <ExperienceCompanies
            items={cmItems}
            constants={cmConstants}
            lampStatus={companyInfo["c2"]}
            idItem={"c2"}
            handleClickAway={handleClickAway}
            handleHoverEnter={handleHoverEnter}
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
              onMouseLeave={handleClickAway}
            />
            {showTechnologies ? t("hide") : t("show")}
          </Button>
          {showTechnologies ? (
            <BoxBorder style={{ maxWidth: 500 }}>
              <Typography variant="h5" style={{ marginBottom: 20 }}>
                Frontend
              </Typography>
              <TechnologiesContainer>
                <TecnologiesOfElements moreSpacing items={frontendItems} />
              </TechnologiesContainer>

              <Typography variant="h5" style={{ marginBottom: 20 }}>
                Backend
              </Typography>
              <TechnologiesContainer>
                <TecnologiesOfElements moreSpacing items={backendItems} />
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
