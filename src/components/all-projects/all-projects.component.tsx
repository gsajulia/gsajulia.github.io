import React, { useState } from "react";

/* Styles */
import {
  Container
} from "./all-projects.styles";

/* Time Control images */
import TCLogin from "./../../assets/time-control/login.png";
import TCRegister from "./../../assets/time-control/register.png";
import TCChildScreen from "./../../assets/time-control/childs-interface.png";
import TCConfigurationScreen from "./../../assets/time-control/main-interface.png";

/* Vacineme images */
import VMRegister from "./../../assets/vaccine-project/register-user.png";
import VMAddInfo from "./../../assets/vaccine-project/add-vaccine-info.png";
import VMChoose from "./../../assets/vaccine-project/choose-cpf.png";

/* Material UI */
import { Typography } from "@material-ui/core";
/* Components */
import Projects from "./../projects/projects.component";

/* Translation */
import { useTranslation } from "react-i18next";

import { tcItems, tcChips, vmItems, vmChips } from "./constants";

const AllProjects: React.FC = () => {
const [projectInfo, setProjectInfo] = useState({
    p1: false,
    p2: false,
});

  const timecontrolitems = [TCRegister, TCConfigurationScreen, TCChildScreen, TCLogin];
  const vacinemeItems = [VMAddInfo, VMChoose, VMRegister];

  const { t } = useTranslation();

  const handleClickAway = () => {
    setProjectInfo({
      p1: false,
      p2: false,
    });
  };

  const handleHoverEnter = (actualProject: string) => {
    setProjectInfo(prevState => ({
      ...prevState,
      [actualProject]: true
  }));
  };

  return (
    <>
      <Container
        onMouseLeave={() => {
          setProjectInfo({
            p1: false,
            p2: false,
          });
        }}
      >
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
          text={{title: "Time Control", description: "time-control-description"}}
          website={{exist: true, url: "https://game-time-control.herokuapp.com/", urlName: "game-time-control.herokuapp.com"}}
          chips={tcChips}/>

        <Projects 
          carrouselItems={vacinemeItems}
          handleClickAway={handleClickAway}
          handleHoverEnter={handleHoverEnter}
          projectInfo={projectInfo}
          projectInfoItems={vmItems}
          actualProject="p2"
          text={{title: "Vacinemesm", description: "vacineme-description"}}
          website={{exist: false}}
          chips={vmChips}/>
      </Container>
    </>
  );
};

export default AllProjects;
