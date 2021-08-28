/* Style */
import {
  LanguageContainer,
  EachProgress,
  Languages,
} from "./experience-languages.styles";

/* Material UI */
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";

/* Translation */
import { useTranslation } from "react-i18next";

type Props = {
  value: number;
};

const useStylesProgress = makeStyles<Theme, Props>((theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
  },
  bar: ({ value }) => ({
    background: `linear-gradient(90deg, #6fcbb6 ${100 - value}%, #853ff1 100%)`,
  }),
}));

function LinearProgressWithLabel({ value }: Props) {
  const classes = useStylesProgress({ value });

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          classes={{ root: classes.root, bar: classes.bar }}
          color="secondary"
          variant="determinate"
          value={value}
        />
      </Box>
      <Box color="white" minWidth={35}>
        <Typography variant="body2">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

interface LanguagesProps {
  language: Array<{ translation: string; bottom: number; value: number }>;
  children: JSX.Element;
}

const ExperienceLanguages: React.FC<LanguagesProps> = ({
  language,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <LanguageContainer>
      {children}
      {language.map((element, index) => (
        <EachProgress key={index}>
          <Typography variant="h6" style={{ marginBottom: element.bottom }}>
            {t(element.translation)}
          </Typography>
          <LinearProgressWithLabel value={element.value} />
        </EachProgress>
      ))}
    </LanguageContainer>
  );
};

export default ExperienceLanguages;
