import { FC } from "react";

/* Components */
import CarouselComponent from "../carousel/carousel.component";

/* Styles */
import {
  Box,
  BoxContainer,
  TitleContainer,
  SiteReference,
  TextContainer,
  ContainerImage,
} from "./projects.styles";

/* Icons */
import { ReactComponent as Lamp } from "./../../assets/lamp.svg";
import { ReactComponent as LightLamp } from "./../../assets/light-lamp.svg";

/* Material UI */
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

/* Components */
import Chips from "../chips/chips.component";
import IdeaOfTechnologies from "../lamp-of-tech/lamp-of-tech.component";

/* Translation */
import { useTranslation } from "react-i18next";

/* Icons */
import Github from "./../../assets/technologies/github.png";
import { ReactComponent as Stars } from "./../../assets/stars.svg";

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
  chips?: Array<{ label: string; background: string }>;
  github: { exist: boolean; url?: string; urlName?: string };
}

const Projects: FC<ProjectsProps> = ({
  handleClickAway,
  handleHoverEnter,
  projectInfo,
  actualProject,
  projectInfoItems,
  text,
  website,
  github,
  carrouselItems,
  chips,
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
            <IdeaOfTechnologies
              items={projectInfoItems}
              lampStatus={projectInfo[actualProject]}
              handleClickAway={handleClickAway}
              idItem={actualProject}
              handleHoverEnter={handleHoverEnter}
              moreSpacing={false}
            />
          </TitleContainer>
          {website.exist ? (
            <ContainerImage>
              <Stars
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                }}
              />
              <SiteReference href={website?.url}>
                {website?.urlName}
              </SiteReference>
            </ContainerImage>
          ) : null}
          {github.exist ? (
            <ContainerImage>
              <img
                alt="GithubIcon"
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                }}
                src={Github}
              />
              <SiteReference href={github?.url}>
                {github?.urlName}
              </SiteReference>
            </ContainerImage>
          ) : null}
          <AboutTypography variant="body1">
            {t(text.description)}
          </AboutTypography>
          <div className={classes.rootChip}>
            <Chips items={chips !== undefined ? chips : []} />
          </div>
        </TextContainer>

        <CarouselComponent items={carrouselItems} />
      </Box>
    </BoxContainer>
  );
};

export default Projects;
