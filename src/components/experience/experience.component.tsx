import React, { useState } from "react";

/* Style */
import {
    Container,
    BoxBorder,
    BoxContainer,
    SmallSpan,
    TitleContainer,
    IdeaContainer,
    ContainerImage,
    LanguageContainer,
    EachProgress,
    Languages
} from "./experience.styles";

/* Material UI */
import Typography from "@material-ui/core/Typography";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

/* Translation */
import { useTranslation } from "react-i18next";
import withStyles from "@material-ui/core/styles/withStyles";

/* Icons */
import { ReactComponent as Lamp } from "./../../assets/lamp.svg";
import { ReactComponent as LightLamp } from "./../../assets/light-lamp.svg";
import { ReactComponent as US } from "./../../assets/united-states.svg";
import { ReactComponent as BR } from "./../../assets/brasil.svg";

/* Icons about project technologies */
import HighCharts from "./../../assets/technologies/highcharts.png";
import Sass from "./../../assets/technologies/sass.png";
import Handlebars from "./../../assets/technologies/handlebars.png";
import Javascript from "./../../assets/technologies/480px-Unofficial_JavaScript_logo_2.svg.png";
import StyledComponents from "../../assets/technologies/styled-components.png";
import ReactVis from "../../assets/technologies/react-vis.png";
import ReactIcon from "../../assets/technologies/react.png";
import { Theme } from "@material-ui/core";

type Props = {
    value: number;
  };

const AboutTypography = withStyles({
    root: {
        color: "#e0e0e0",
        marginTop: 20
    }
})(Typography);

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: 200,
        display: "flex",
        justifyContent: "flex-end"
    },
    dropdown: {
        position: 'absolute',
        top: 60,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        color: "#424242",
    }
}));

const useStylesProgress = makeStyles<Theme, Props>((theme) => ({
    root: {
        height: 5,
        borderRadius: 5
      },
      bar: ({ value }) => ({
        background: `linear-gradient(90deg, #6fcbb6 ${100 - value}%, #792df0 100%)`
      })
}));

function LinearProgressWithLabel({ value }: Props) {
    const classes = useStylesProgress({ value });

    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress classes={{ root: classes.root, bar: classes.bar }} color="secondary" variant="determinate" value={value} />
            </Box>
            <Box color="white" minWidth={35}>
                <Typography variant="body2">{`${Math.round(
                    value,
                )}%`}
                </Typography>
            </Box>
        </Box>
    );
}

const Experience: React.FC = () => {
    const { t } = useTranslation();
    const [lampStatusDK, setLampStatusDK] = useState(false);
    const [lampStatusCM, setLampStatusCM] = useState(false);
    const classes = useStyles();

    const handleClickAwayDK = () => {
        setLampStatusDK(false);
    };

    const handleClickAwayCM = () => {
        setLampStatusCM(false);
    };

    return (
        <>
            <Container onMouseLeave={() => {
                setLampStatusDK(false);
                setLampStatusCM(false);
            }}>
                <Typography variant="h4" style={{ marginBottom: 20 }}>
                    <span style={{ color: "#FB87FD" }}>{t("experience-skills")}</span>
                </Typography>
                <BoxContainer onMouseLeave={() => {
                    setLampStatusDK(false);
                    setLampStatusCM(false);
                }}>
                    <BoxBorder>
                        <TitleContainer>
                            <Typography variant="h5" style={{ marginBottom: 20 }}>
                                {t("frontend-developer")}
                            </Typography>
                            {lampStatusDK ?
                                <>
                                    <ClickAwayListener
                                        mouseEvent="onMouseDown"
                                        touchEvent="onTouchStart"
                                        onClickAway={handleClickAwayDK}
                                    >
                                        <div className={classes.root}>
                                            <LightLamp style={{ width: 50, height: 50 }}
                                                onMouseLeave={() => setLampStatusDK(false)} />
                                            {lampStatusDK ? (
                                                <div className={classes.dropdown}>
                                                    <ContainerImage>
                                                        <img style={{ width: 45, height: 35, paddingRight: 2 }} src={ReactIcon} />
                                                        <div>React</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{ width: 30, height: 30, marginRight: 10, marginLeft: 5 }} src={Javascript} />
                                                        <div>Javascript</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{ width: 30, height: 30, marginRight: 10, marginLeft: 5 }} src={StyledComponents} />
                                                        <div>styled-components</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{ width: 30, height: 30, marginRight: 10, marginLeft: 5 }} src={ReactVis} />
                                                        <div>react-vis</div>
                                                    </ContainerImage>
                                                </div>
                                            ) : null}
                                        </div>
                                    </ClickAwayListener>
                                </> :
                                <IdeaContainer onMouseEnter={() => setLampStatusDK(true)}>
                                    <Lamp style={{ width: 40, height: 40, fill: "#e0e0e0", marginBottom: 5 }} />
                                    <SmallSpan> + info</SmallSpan>
                                </IdeaContainer>}
                        </TitleContainer>
                        <Typography variant="body1" style={{ marginBottom: 20 }}>
                            Drakkar <SmallSpan>({t("internship")})</SmallSpan>
                        </Typography>
                        <SmallSpan>
                            {t("drakkar-period")}
                        </SmallSpan>
                        <AboutTypography variant="body1">
                            {t("about-drakkar")}
                        </AboutTypography>
                    </BoxBorder>

                    <BoxBorder>
                        <TitleContainer>
                            <Typography variant="h5" style={{ marginBottom: 20 }}>
                                {t("frontend-developer")}
                            </Typography>
                            {lampStatusCM ?
                                <>
                                    <ClickAwayListener
                                        mouseEvent="onMouseDown"
                                        touchEvent="onTouchStart"
                                        onClickAway={handleClickAwayCM}
                                    >
                                        <div className={classes.root}>
                                            <LightLamp style={{ width: 50, height: 50 }}
                                                onMouseLeave={() => setLampStatusCM(false)} />
                                            {lampStatusCM ? (
                                                <div className={classes.dropdown}>
                                                    <ContainerImage>
                                                        <img style={{ width: 45, height: 35, paddingRight: 2 }} src={ReactIcon} />
                                                        <div>React</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{ width: 30, height: 30, marginRight: 10, marginLeft: 5 }} src={Javascript} />
                                                        <div>Javascript</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{ width: 30, height: 30, paddingRight: 10, marginLeft: 5 }} src={HighCharts} />
                                                        <div>Highcharts</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{ width: 30, height: 30, paddingRight: 10, marginLeft: 5 }} src={Sass} />
                                                        <div>Sass</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{ width: 30, height: 30, paddingRight: 10, marginLeft: 5 }} src={Handlebars} />
                                                        <div>Handlebars</div>
                                                    </ContainerImage>
                                                </div>
                                            ) : null}
                                        </div>
                                    </ClickAwayListener>
                                </> :
                                <IdeaContainer onMouseEnter={() => setLampStatusCM(true)}>
                                    <Lamp style={{ width: 40, height: 40, fill: "#e0e0e0", marginBottom: 5 }} />
                                    <SmallSpan> + info</SmallSpan>
                                </IdeaContainer>}
                        </TitleContainer>
                        <Typography variant="body1" style={{ marginBottom: 20 }}>
                            COWMED <SmallSpan>({t("internship")})</SmallSpan>
                        </Typography>
                        <SmallSpan>
                            {t("cowmed-period")}
                        </SmallSpan>
                        <AboutTypography variant="body1">
                            {t("about-drakkar")}
                        </AboutTypography>
                    </BoxBorder>
                </BoxContainer>
                <Typography variant="h5" style={{ marginBottom: 20 }}>
                    {t("languages")}
                </Typography>
                <Languages>
                    <LanguageContainer>
                        <US style={{ width: 50, height: 50, margin: "0 0 30px 0" }} />
                        <EachProgress>
                            <Typography variant="h6" style={{ marginBottom: 30 }}>
                                {t("listening")}
                            </Typography>
                            <LinearProgressWithLabel value={90} />
                        </EachProgress>
                        <EachProgress>
                            <Typography variant="h6" style={{ marginBottom: 30 }}>
                                {t("speaking")}
                            </Typography>
                            <LinearProgressWithLabel value={80} />
                        </EachProgress>
                        <EachProgress>
                            <Typography variant="h6" style={{ marginBottom: 30 }}>
                                {t("reading")}
                            </Typography>
                            <LinearProgressWithLabel value={80} />
                        </EachProgress>
                        <EachProgress>
                            <Typography variant="h6" style={{ marginBottom: 30 }}>
                                {t("writing")}
                            </Typography>
                            <LinearProgressWithLabel value={60} />
                        </EachProgress>
                    </LanguageContainer>
                    <LanguageContainer>
                        <BR style={{ width: 50, height: 50, margin: "0 0 30px 0" }} />
                        <EachProgress>
                            <Typography variant="h6" style={{ marginBottom: 30 }}>
                                {t("listening")}
                            </Typography>
                            <LinearProgressWithLabel value={100} />
                        </EachProgress>
                        <EachProgress>
                            <Typography variant="h6" style={{ marginBottom: 30 }}>
                                {t("speaking")}
                            </Typography>
                            <LinearProgressWithLabel value={100} />
                        </EachProgress>
                        <EachProgress>
                            <Typography variant="h6" style={{ marginBottom: 30 }}>
                                {t("reading")}
                            </Typography>
                            <LinearProgressWithLabel value={100} />
                        </EachProgress>
                        <EachProgress>
                            <Typography variant="h6" style={{ marginBottom: 30 }}>
                                {t("writing")}
                            </Typography>
                            <LinearProgressWithLabel value={100} />
                        </EachProgress>
                    </LanguageContainer>
                </Languages>
            </Container>
        </>
    )
}

export default Experience;