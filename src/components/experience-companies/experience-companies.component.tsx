import React from "react";

/* Style */
import {
    BoxBorder,
    SmallSpan,
    TitleContainer,
    IdeaContainer,
    ContainerImage,
} from "./experience-companies.styles";

/* Material UI */
import Typography from "@material-ui/core/Typography";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chip from '@material-ui/core/Chip';

/* Translation */
import { useTranslation } from "react-i18next";
import withStyles from "@material-ui/core/styles/withStyles";

/* Icons */
import { ReactComponent as Lamp } from "./../../assets/lamp.svg";
import { ReactComponent as LightLamp } from "./../../assets/light-lamp.svg";


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

interface CompaniesProps {
    items: Array<{ image: string, label: string, width: number, height: number, left: number, right: number }>,
    constants: { roleLabel: string, name: string, periodLabel: string, aboutLabel: string, chip: Array<{ id: number, name: string }> },
    lampStatus: boolean,
    handleClickAway: (value: boolean) => void
}


const ExperienceCompanies: React.FC<CompaniesProps> = (props) => {
    const { t } = useTranslation();

    const classes = useStyles();

    return (
        <BoxBorder>
            <TitleContainer>
                <Typography variant="h5" style={{ marginBottom: 20 }}>
                    {t(props.constants.roleLabel)}
                </Typography>

                {props.lampStatus ?
                    <>
                        <ClickAwayListener
                            mouseEvent="onMouseDown"
                            touchEvent="onTouchStart"
                            onClickAway={() => props.handleClickAway(false)}
                        >
                            <div className={classes.root}>
                                <LightLamp style={{ width: 50, height: 50 }}
                                    onMouseLeave={() => props.handleClickAway(false)} />
                                <div className={classes.dropdown}>
                                    {props.items.map((element, index) => (
                                        <ContainerImage key={index}>
                                            <img alt={element.label} style={{ width: element.width, height: element.height, paddingRight: element.right, paddingLeft: element.left }} src={element.image} />
                                            <div>{element.label}</div>
                                        </ContainerImage>)
                                    )}
                                </div>
                            </div>
                        </ClickAwayListener>
                    </> :
                    <IdeaContainer onMouseEnter={() => props.handleClickAway(true)}>
                        <Lamp style={{ width: 40, height: 40, fill: "#e0e0e0", marginBottom: 5 }} />
                        <SmallSpan> + info</SmallSpan>
                    </IdeaContainer>}
            </TitleContainer>
            <Typography variant="body1" style={{ marginBottom: 20 }}>
                {props.constants.name} <SmallSpan>({t("internship")})</SmallSpan>
            </Typography>
            <div className={classes.rootChip}>
                {props.constants.chip.map((elem) => (
                    <Chip key={elem.id}
                        style={{ backgroundColor: elem.id === 1 ? "#FB87FD" : elem.id === 2 ? "#5CE1E6" : "pink", fontWeight: "bold" }}
                        size="small"
                        label={elem.name} />
                ))}
            </div>
            <SmallSpan>
                {t(props.constants.periodLabel)}
            </SmallSpan>
            <AboutTypography variant="body1">
                {t(props.constants.aboutLabel)}
            </AboutTypography>
        </BoxBorder>
    )
}

export default ExperienceCompanies;