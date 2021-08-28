import { FC } from "react";

/* Components */
import CarouselComponent from "../carousel/carousel.component";

/* Styles */
import {
  Box,
  Container,
  BoxContainer,
  ContainerImage,
  SmallSpan,
  IdeaContainer,
  TitleContainer,
  SiteReference,
  TextContainer,
} from "./projects.styles";

/* Icons */
import { ReactComponent as Lamp } from "./../../assets/lamp.svg";
import { ReactComponent as LightLamp } from "./../../assets/light-lamp.svg";

/* Material UI */
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Chip from "@material-ui/core/Chip";

/* Components */
import ExperienceTecnologies from "../experience-tecnologies/experience-tecnologies.component";

/* Translation */
import { useTranslation } from "react-i18next";

const AboutTypography = withStyles({
  root: {
    color: "#e0e0e0",
    margin: "20px 0 40px 0",
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 200,
    display: "flex",
    justifyContent: "flex-end",
  },
  dropdown: {
    position: "absolute",
    top: 60,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    color: "#424242",
  },
  rootChip: {
    display: "flex",
    marginBottom: 20,
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

interface ProjectsProps {
  carrouselItems: Array<string>;
  handleClickAway: () => void;
  handleHoverEnter: (actualProject: string) => void;
  projectInfo: { p1: boolean; p2: boolean };
  projectInfoItems: Array<{
    image: string;
    label: string;
    width: number;
    height: number;
    left: number;
    right: number;
    background?: string;
  }>;
  actualProject: string;
  text: { title: string; description: string };
  website: { exist: boolean; url?: string; urlName?: string };
}

const Projects: FC<ProjectsProps> = ({
  handleClickAway,
  handleHoverEnter,
  projectInfo,
  actualProject,
  projectInfoItems,
  text,
  website,
  carrouselItems,
}) => {
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <BoxContainer onMouseLeave={handleClickAway}>
      <Box onMouseLeave={handleClickAway}>
        <TextContainer>
          <TitleContainer>
            <Typography variant="h4" style={{ marginBottom: 20 }}>
              {text?.title}
            </Typography>
            {projectInfo[actualProject] ? (
              <>
                <ClickAwayListener
                  mouseEvent="onMouseDown"
                  touchEvent="onTouchStart"
                  onClickAway={handleClickAway}
                >
                  <div className={classes.root}>
                    <LightLamp
                      style={{ width: 50, height: 50 }}
                      onMouseLeave={handleClickAway}
                    />

                    {projectInfo[actualProject] ? (
                      <div className={classes.dropdown}>
                        <ExperienceTecnologies
                          moreSpacing={false}
                          items={projectInfoItems}
                        />
                      </div>
                    ) : null}
                  </div>
                </ClickAwayListener>
              </>
            ) : (
              <IdeaContainer
                onMouseEnter={() => handleHoverEnter(actualProject)}
              >
                <Lamp
                  style={{
                    width: 40,
                    height: 40,
                    fill: "#e0e0e0",
                    marginBottom: 5,
                  }}
                />
                <SmallSpan> + info</SmallSpan>
              </IdeaContainer>
            )}
          </TitleContainer>
          {website.exist ? (
            <SiteReference href={website?.url}>
              {website?.urlName}
            </SiteReference>
          ) : null}
          <AboutTypography variant="body1">
            {t(text.description)}
          </AboutTypography>
          <div className={classes.rootChip}>
            <Chip
              style={{ backgroundColor: "#FB87FD", fontWeight: "bold" }}
              size="small"
              label="Frontend"
            />
            <Chip
              style={{ backgroundColor: "pink", fontWeight: "bold" }}
              size="small"
              label="Design"
            />
          </div>
        </TextContainer>

        <CarouselComponent items={carrouselItems} />
      </Box>
    </BoxContainer>
  );
};

export default Projects;
