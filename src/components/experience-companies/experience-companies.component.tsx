import React from "react";

/* Style */
import {
  BoxBorder,
  SmallSpan,
  TitleContainer,
} from "./experience-companies.styles";

/* Material UI */
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

/* Translation */
import { useTranslation } from "react-i18next";
import withStyles from "@material-ui/core/styles/withStyles";

/* Component */
import Chips from "../chips/chips.component";
import IdeaOfTechnologies from "../idea-of-tech/idea-of-tech.component";

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
  handleClickAway: (value: boolean) => void;
}

const ExperienceCompanies: React.FC<CompaniesProps> = ({
  constants,
  lampStatus,
  handleClickAway,
  items,
}) => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <BoxBorder>
      <TitleContainer>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          {t(constants.roleLabel)}
        </Typography>
        
        <IdeaOfTechnologies
          items={items}
          lampStatus={lampStatus}
          handleHover={handleClickAway}
        />
      </TitleContainer>
      <Typography variant="body1" style={{ marginBottom: 20 }}>
        {constants.name} <SmallSpan>({t("internship")})</SmallSpan>
      </Typography>
      <div className={classes.rootChip}>
        <Chips items={constants.chip !== undefined ? constants.chip : []} />
      </div>
      <SmallSpan>{t(constants.periodLabel)}</SmallSpan>
      <AboutTypography variant="body1">
        {t(constants.aboutLabel)}
      </AboutTypography>
    </BoxBorder>
  );
};

export default ExperienceCompanies;
