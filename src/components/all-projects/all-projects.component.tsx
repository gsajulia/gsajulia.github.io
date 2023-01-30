import React, { useState } from "react";

/* Styles */
import { Container } from "./all-projects.styles";

/* Time Control images */
import TCLogin from "./../../assets/icons/time-control/login.png";
import TCRegister from "./../../assets/icons/time-control/register.png";
import TCChildScreen from "./../../assets/icons/time-control/childs-interface.png";
import TCConfigurationScreen from "./../../assets/icons/time-control/main-interface.png";

/* Vacineme images */
import VMRegister from "./../../assets/icons/vaccine-project/register-user.png";
import VMAddInfo from "./../../assets/icons/vaccine-project/add-vaccine-info.png";
import VMChoose from "./../../assets/icons/vaccine-project/choose-cpf.png";

/* Foraminifera predictor */
import FPHome from "./../../assets/icons/foraminifera-predictor/Home.png";

/* Material UI */
import { Typography } from "@material-ui/core";
/* Components */
import Projects from "./../projects/projects.component";

/* Translation */
import { useTranslation } from "react-i18next";

import {
  tcItems,
  tcChips,
  vmItems,
  vmChips,
  fpItems,
  fpChips,
} from "./constants";

const AllProjects: React.FC = () => {
  const [projectInfo, setProjectInfo] = useState({
    p1: false,
    p2: false,
    p3: false,
  });

  const timecontrolitems = [
    TCRegister,
    TCConfigurationScreen,
    TCChildScreen,
    TCLogin,
  ];

  const foraminiferaPredictorItems = [FPHome];

  const vacinemeItems = [VMAddInfo, VMChoose, VMRegister];

  const { t } = useTranslation();

  const handleClickAway = () => {
    setProjectInfo({
      p1: false,
      p2: false,
      p3: false,
    });
  };

  const handleHoverEnter = (actualProject: string) => {
    setProjectInfo((prevState) => ({
      ...prevState,
      [actualProject]: true,
    }));
  };

  return (
    <>
      <Container>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          <span style={{ color: "#FB87FD" }}>{t("projects")}</span>
        </Typography>

        <Projects
          carrouselItems={timecontrolitems}
          handleClickAway={handleClickAway}
          handleHoverEnter={handleHoverEnter}
          projectInfo={projectInfo}
          projectInfoItems={tcItems}
          actualProject="p1"
          text={{
            title: "Time Control",
            description: "time-control-description",
          }}
          website={{
            exist: true,
            url: "https://game-time-control.herokuapp.com/",
            urlName: "game-time-control.herokuapp.com",
          }}
          github={{
            exist: false
          }}
          chips={tcChips}
        />

        <Projects
          carrouselItems={foraminiferaPredictorItems}
          handleClickAway={handleClickAway}
          handleHoverEnter={handleHoverEnter}
          projectInfo={projectInfo}
          projectInfoItems={fpItems}
          actualProject="p3"
          text={{
            title: "Foraminifera Predictor",
            description: "foraminifera-period",
          }}
          website={{ exist: false }}
          github={{
            exist: true,
            url: "https://github.com/gsajulia/TCC-foraminifera-predictor",
            urlName: "gsajulia/TCC-foraminifera-predictor",
          }}
          chips={fpChips}
        />

        <Projects
          carrouselItems={vacinemeItems}
          handleClickAway={handleClickAway}
          handleHoverEnter={handleHoverEnter}
          projectInfo={projectInfo}
          projectInfoItems={vmItems}
          actualProject="p2"
          text={{ title: "Vacinemesm", description: "vacineme-description" }}
          website={{ exist: false }}
          github={{
            exist: false
          }}
          chips={vmChips}
        />
      </Container>
    </>
  );
};

export default AllProjects;
