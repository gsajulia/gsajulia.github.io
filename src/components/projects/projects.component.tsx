import React, { useState } from "react";

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
    TextContainer
} from "./projects.styles";

/* Icons */
import { ReactComponent as Lamp } from "./../../assets/lamp.svg";
import { ReactComponent as LightLamp } from "./../../assets/light-lamp.svg";

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
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Chip from '@material-ui/core/Chip';

/* Translation */
import { useTranslation } from "react-i18next";

import { tcItems, vmItems } from "./constants";

const AboutTypography = withStyles({
    root: {
        color: "#e0e0e0",
        margin: "20px 0 40px 0"
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
    },
    rootChip: {
        display: 'flex',
        marginBottom: 20,
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const Projects: React.FC = () => {
    const [projectInfo, setProjectInfo] = useState({
        p1: false,
        p2: false
    });

    const items = [TCRegister, TCConfigurationScreen, TCChildScreen, TCLogin];
    const vacinemeItems = [VMAddInfo, VMChoose, VMRegister];

    const { t } = useTranslation();

    const classes = useStyles();

    const handleClickAwayP1 = () => {
        setProjectInfo({
            p1: false,
            p2: false
        });
    };

    return (

        <>
            <Container onMouseLeave={() => {
                setProjectInfo({
                    p1: false,
                    p2: false
                });
            }}>

                <Typography variant="h4" style={{ marginBottom: 20 }}>
                    <span style={{ color: "#FB87FD" }}>{t("projects")}</span>
                </Typography>
                <BoxContainer onMouseLeave={() => {
                    setProjectInfo({
                        p1: false,
                        p2: false
                    });
                }}>
                    <Box onMouseLeave={() => {
                        setProjectInfo({
                            p1: false,
                            p2: false
                        });
                    }}>
                        <TextContainer>
                            <TitleContainer>
                                <Typography variant="h4" style={{ marginBottom: 20 }}>
                                    Time Control
                            </Typography>
                                {projectInfo.p1 ?
                                    <>
                                        <ClickAwayListener
                                            mouseEvent="onMouseDown"
                                            touchEvent="onTouchStart"
                                            onClickAway={handleClickAwayP1}
                                        >
                                            <div className={classes.root}>
                                                <LightLamp style={{ width: 50, height: 50 }}
                                                    onMouseLeave={() => setProjectInfo({
                                                        p1: false,
                                                        p2: false
                                                    })} />
                                                {projectInfo.p1 ? (
                                                    <div className={classes.dropdown}>
                                                        {tcItems.map((element, index) => {
                                                            return (
                                                                <ContainerImage key={index}>
                                                                    <img alt={element.label} style={{
                                                                        width: element.width,
                                                                        height: element.height,
                                                                        marginRight: element.right,
                                                                        marginLeft: element.left
                                                                    }} src={element.image} />
                                                                    <div>{element.label}</div>
                                                                </ContainerImage>
                                                            )
                                                        })}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </ClickAwayListener>
                                    </> :
                                    <IdeaContainer onMouseEnter={() => setProjectInfo({
                                        p1: true,
                                        p2: false
                                    })}>
                                        <Lamp style={{ width: 40, height: 40, fill: "#e0e0e0", marginBottom: 5 }} />
                                        <SmallSpan> + info</SmallSpan>
                                    </IdeaContainer>}
                            </TitleContainer>
                            <SiteReference
                                href="https://game-time-control.herokuapp.com/"> game-time-control.herokuapp.com </SiteReference>
                            <AboutTypography variant="body1">
                                {t("time-control-description")}
                            </AboutTypography>
                            <div className={classes.rootChip}>
                                <Chip style={{ backgroundColor: "#FB87FD", fontWeight: "bold" }} size="small" label="Frontend" />
                                <Chip style={{ backgroundColor: "#5CE1E6", fontWeight: "bold" }} size="small" label="Backend" />
                                <Chip style={{ backgroundColor: "pink", fontWeight: "bold" }} size="small" label="Design" />
                            </div>
                        </TextContainer>

                        <CarouselComponent items={items} />
                    </Box>
                </BoxContainer>
                <BoxContainer onMouseLeave={() => {
                    setProjectInfo({
                        p1: false,
                        p2: false
                    });
                }}>
                    <Box onMouseLeave={() => {
                        setProjectInfo({
                            p1: false,
                            p2: false
                        });
                    }}>
                        <TextContainer>
                            <TitleContainer>
                                <Typography variant="h4" style={{ marginBottom: 20 }}>
                                    Vacinemesm
                            </Typography>
                                {projectInfo.p2 ?
                                    <>
                                        <ClickAwayListener
                                            mouseEvent="onMouseDown"
                                            touchEvent="onTouchStart"
                                            onClickAway={handleClickAwayP1}
                                        >
                                            <div className={classes.root}>
                                                <LightLamp style={{ width: 50, height: 50 }}
                                                    onMouseLeave={() => setProjectInfo({
                                                        p1: false,
                                                        p2: false
                                                    })} />
                                                {projectInfo.p2 ? (
                                                    <div className={classes.dropdown}>
                                                        {vmItems.map((element, index) => {
                                                            return (
                                                                <ContainerImage key={index}>
                                                                    <img alt={element.label} style={{
                                                                        width: element.width,
                                                                        height: element.height,
                                                                        marginRight: element.right,
                                                                        marginLeft: element.left
                                                                    }} src={element.image} />
                                                                    <div>{element.label}</div>
                                                                </ContainerImage>
                                                            )
                                                        })}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </ClickAwayListener>
                                    </> :
                                    <IdeaContainer onMouseEnter={() => setProjectInfo({
                                        p1: false,
                                        p2: true
                                    })}>
                                        <Lamp style={{ width: 40, height: 40, fill: "#e0e0e0", marginBottom: 5 }} />
                                        <SmallSpan> + info</SmallSpan>
                                    </IdeaContainer>}
                            </TitleContainer>
                            <AboutTypography variant="body1">
                                {t("vacineme-description")}
                            </AboutTypography>
                            <div className={classes.rootChip}>
                                <Chip style={{ backgroundColor: "#FB87FD", fontWeight: "bold" }} size="small" label="Frontend" />
                                <Chip style={{ backgroundColor: "pink", fontWeight: "bold" }} size="small" label="Design" />
                            </div>
                        </TextContainer>

                        <CarouselComponent items={vacinemeItems} />
                    </Box>
                </BoxContainer>
            </Container>
        </>
    )
}

export default Projects;