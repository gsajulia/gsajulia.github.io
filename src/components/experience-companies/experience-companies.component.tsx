import React from "react";

/* Style */
import {
  BoxBorder,
  SmallSpan,
  TitleContainer,
  AboutContainer
} from "./experience-companies.styles";

/* Material UI */
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
//import useMediaQuery from '@mui/material/useMediaQuery';

/* Translation */
import { useTranslation } from "react-i18next";
import withStyles from "@material-ui/core/styles/withStyles";

/* Component */
import Chips from "../chips/chips.component";
import IdeaOfTechnologies from "../lamp-of-tech/lamp-of-tech.component";

//const matches = useMediaQuery('(min-width:700px)');

const AboutTypography = withStyles({
  root: {
    color: "#e0e0e0",
    marginTop: 20,
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  rootChip: {
    display: "flex",
    marginBottom: 20,
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

interface CompaniesProps {
  items: Array<{
    image: string;
    label: string;
    width: number;
    height: number;
    left: number;
    right: number;
  }>;
  constants: {
    roleLabel: string;
    name: string;
    periodLabel: string;
    aboutLabel: string;
    chip: Array<{ label: string; background: string }>;
  };
  lampStatus: boolean;
  handleClickAway: () => void;
  handleHoverEnter: (actualProject: string) => void;
  idItem: string;
  internship: boolean;
  actual: boolean;
}

const ExperienceCompanies: React.FC<CompaniesProps> = ({
  constants,
  lampStatus,
  handleClickAway,
  items,
  handleHoverEnter,
  idItem,
  internship,
  actual
}) => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <BoxBorder>
      <TitleContainer>
        <div style={{display: "flex", flexDirection: "row"}}>
          <Typography variant="h5" style={{ marginBottom: 20, marginRight: 20 }}>
            {t(constants.roleLabel)}
          </Typography>
          {actual && <Chips items={[{label: t("actual"),
          color: '#000',
          background: "#00FF9F"}]}/>}
        </div>
        
        <IdeaOfTechnologies
          items={items}
          lampStatus={lampStatus}
          idItem={idItem}
          handleClickAway={handleClickAway}
          handleHoverEnter={handleHoverEnter}
          moreSpacing={false}
        />

      </TitleContainer>
      
      <Typography variant="body1" style={{ marginBottom: 20 }}>
        {constants.name} {internship && <SmallSpan>({t("internship")})</SmallSpan>}
      </Typography>
      <div className={classes.rootChip}>
        <Chips items={constants.chip !== undefined ? constants.chip : []} />
      </div>
      <SmallSpan>{t(constants.periodLabel)}</SmallSpan>
      <AboutContainer>
        <AboutTypography variant="body1">
          {t(constants.aboutLabel)}
        </AboutTypography>
      </AboutContainer>
    </BoxBorder>
  );
};

export default ExperienceCompanies;
