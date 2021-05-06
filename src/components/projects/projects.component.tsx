import React, {useState} from "react";
import Carousel from "react-elastic-carousel";
// import Item from "./Item";

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
    SiteReference
} from "./projects.styles";

/* Icons */
import {ReactComponent as Lamp} from "./../../assets/lamp.svg";
import {ReactComponent as LightLamp} from "./../../assets/light-lamp.svg";

/* Icons about project technologies */
import Javascript from "./../../assets/480px-Unofficial_JavaScript_logo_2.svg.png";
import StyledComponents from "./../../assets/styled-components.png";
import ReactIcon from "./../../assets/react.png";
import Mongo from "./../../assets/mongo.png";
import Typescript from "./../../assets/ts.png";
import Heroku from "./../../assets/heroku.png";
import Node from "./../../assets/node-js.png";

/* Time Control images */
import TCLogin from "./../../assets/login.png";
import TCRegister from "./../../assets/register.png";
import TCChildScreen from "./../../assets/childs-interface.png";
import TCConfigurationScreen from "./../../assets/main-interface.png";

/* Material UI */
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

/* Translation */
import {useTranslation} from "react-i18next";
import {Image} from "semantic-ui-react";

const AboutTypography = withStyles({
    root: {
        color: "#e0e0e0",
        margin: "20px 0 20px 0"
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
        bottom: 80,
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
    const [projectInfo, setProjectInfo] = useState({p1: false});
    const path = "./../../assets/";
    //const items = ["login.png", "register.png", "child-interface.png", "main-interface.png"];
    const items = [TCRegister, TCConfigurationScreen, TCChildScreen, TCLogin]

    const {t} = useTranslation();

    const classes = useStyles();

    const handleClickAwayP1 = () => {
        setProjectInfo({p1: false});
    };

    return (

        <>
            <Container onMouseLeave={() => {
                setProjectInfo({p1: false});
            }}>

                <Typography variant="h4" style={{marginBottom: 20}}>
                    <span style={{color: "#00FF9F"}}>{t("projects")}</span>
                </Typography>
                <BoxContainer onMouseLeave={() => {
                    setProjectInfo({p1: false});
                }}>
                    <Box onMouseLeave={() => {
                        setProjectInfo({p1: false});
                    }}>
                        <TitleContainer>
                            <Typography variant="h5" style={{marginBottom: 20}}>
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
                                            <LightLamp style={{width: 50, height: 50}}
                                                       onMouseLeave={() => setProjectInfo({p1: false})}/>
                                            {projectInfo.p1 ? (
                                                <div className={classes.dropdown}>
                                                    <ContainerImage>
                                                        <img style={{width: 45, height: 35, paddingRight: 2}}
                                                             src={ReactIcon}/>
                                                        <div>React</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{
                                                            width: 30,
                                                            height: 30,
                                                            marginRight: 10,
                                                            marginLeft: 5
                                                        }} src={Javascript}/>
                                                        <div>Javascript</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{
                                                            width: 30,
                                                            height: 30,
                                                            marginRight: 10,
                                                            marginLeft: 5
                                                        }} src={StyledComponents}/>
                                                        <div>styled-components</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{
                                                            width: 30,
                                                            height: 30,
                                                            marginRight: 10,
                                                            marginLeft: 5
                                                        }} src={Typescript}/>
                                                        <div>Typescript</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{
                                                            width: 30,
                                                            height: 30,
                                                            marginRight: 10,
                                                            marginLeft: 5
                                                        }} src={Node}/>
                                                        <div>Node.js</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{
                                                            width: 30,
                                                            height: 30,
                                                            marginRight: 10,
                                                            marginLeft: 5
                                                        }} src={Mongo}/>
                                                        <div>Mongo DB</div>
                                                    </ContainerImage>
                                                    <ContainerImage>
                                                        <img style={{
                                                            width: 30,
                                                            height: 30,
                                                            marginRight: 10,
                                                            marginLeft: 5
                                                        }} src={Heroku}/>
                                                        <div>Heroku</div>
                                                    </ContainerImage>
                                                </div>
                                            ) : null}
                                        </div>
                                    </ClickAwayListener>
                                </> :
                                <IdeaContainer onMouseEnter={() => setProjectInfo({p1: true})}>
                                    <Lamp style={{width: 40, height: 40, fill: "#e0e0e0", marginBottom: 5}}/>
                                    <SmallSpan> + info</SmallSpan>
                                </IdeaContainer>}
                        </TitleContainer>
                        <SiteReference
                            href="https://game-time-control.herokuapp.com/"> game-time-control.herokuapp.com </SiteReference>
                        <AboutTypography variant="body1">
                            {t("time-control-description")}
                        </AboutTypography>

                        <CarouselComponent path={path} items={items}/>
                    </Box>
                </BoxContainer>
            </Container>
        </>
    )
}

export default Projects;