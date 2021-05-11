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

/* Icons about project technologies */
import Javascript from "./../../assets/technologies/480px-Unofficial_JavaScript_logo_2.svg.png";
import StyledComponents from "./../../assets/technologies/styled-components.png";
import ReactIcon from "./../../assets/technologies/react.png";
import Mongo from "./../../assets/technologies/mongo.png";
import Typescript from "./../../assets/technologies/ts.png";
import Heroku from "./../../assets/technologies/heroku.png";
import Node from "./../../assets/technologies/node-js.png";

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

/* Translation */
import { useTranslation } from "react-i18next";
import { Image } from "semantic-ui-react";

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
                                <Typography variant="h5" style={{ marginBottom: 20 }}>
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
                                                        <ContainerImage>
                                                            <img style={{ width: 45, height: 35, paddingRight: 2 }}
                                                                src={ReactIcon} />
                                                            <div>React</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={Javascript} />
                                                            <div>Javascript</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={StyledComponents} />
                                                            <div>styled-components</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={Typescript} />
                                                            <div>Typescript</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={Node} />
                                                            <div>Node.js</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={Mongo} />
                                                            <div>Mongo DB</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={Heroku} />
                                                            <div>Heroku</div>
                                                        </ContainerImage>
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
                                <Typography variant="h5" style={{ marginBottom: 20 }}>
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
                                                        <ContainerImage>
                                                            <img style={{ width: 45, height: 35, paddingRight: 2 }}
                                                                src={ReactIcon} />
                                                            <div>React</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={Javascript} />
                                                            <div>Javascript</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={StyledComponents} />
                                                            <div>styled-components</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={Typescript} />
                                                            <div>Typescript</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={Node} />
                                                            <div>Node.js</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={Mongo} />
                                                            <div>Mongo DB</div>
                                                        </ContainerImage>
                                                        <ContainerImage>
                                                            <img style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10,
                                                                marginLeft: 5
                                                            }} src={Heroku} />
                                                            <div>Heroku</div>
                                                        </ContainerImage>
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
                        </TextContainer>

                        <CarouselComponent items={vacinemeItems} />
                    </Box>
                </BoxContainer>
            </Container>
        </>
    )
}

export default Projects;