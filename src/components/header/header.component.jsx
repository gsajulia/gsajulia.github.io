import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

/* Material UI */
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import {Button} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import withStyles from "@material-ui/core/styles/withStyles";

/* Icons */
import {ReactComponent as Github} from "./../../assets/github.svg";
import {ReactComponent as Linkedin} from "./../../assets/linkedin.svg";
import {ReactComponent as US} from "./../../assets/united-states.svg";
import {ReactComponent as BR} from "./../../assets/brasil.svg";
import {ReactComponent as Tech} from "../../assets/tech.svg";

/* Translation */
import {useTranslation} from 'react-i18next';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    appBar: {
        background: (props) =>
            props.color === "transparent"
                ? "transparent" : "#000"
    },
    tab: {
        color: "#fff",
        fontWeight: "bold"
    },
    offset: theme.mixins.toolbar
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

function MyAppBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [actualLanguage, setActualLanguage] = React.useState("en");
    const [value, setValue] = React.useState(1);

    const {color, ...other} = props;
    const classes = useStyles(props);
    const {t, i18n} = useTranslation();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = lng => {
        setActualLanguage(lng);
        i18n.changeLanguage(lng).then(r => console.log(r));
    };

    return (
        <AppBar className={classes.appBar} position="fixed" {...other}>
            <Toolbar>
                {/*<IconButton*/}
                {/*    edge="start"*/}
                {/*    className={classes.menuButton}*/}
                {/*    color="inherit"*/}
                {/*    aria-label="open drawer"*/}
                {/*>*/}
                {/*    <MenuIcon />*/}
                {/*</IconButton>*/}
                <Tech style={{width: 50, height: 50, marginRight: 30}}/>
                {/*<Typography className={classes.title} variant="h6" noWrap>*/}
                {/*    J*/}
                {/*</Typography>*/}
                <Paper style={{background: "transparent"}} square>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab className={classes.tab} label={t("about")} to="#introduction" component={Link}/>
                        <Tab className={classes.tab} label={t("experience")} to="#experience" component={Link}/>
                        <Tab className={classes.tab} label={t("projects")} to="#projects" component={Link}/>
                    </Tabs>
                </Paper>
                <div className={classes.grow}/>
                <div className={classes.sectionDesktop}>
                    <IconButton component={Button} onClick={() => window.open("https://github.com/gsajulia")} aria-label="show 4 new mails"
                                color="inherit">
                        <Github style={{width: 30, height: 30, fill: "#fff"}}/>
                    </IconButton>
                    <IconButton component={Button} onClick={() => window.open("https://www.linkedin.com/in/j%C3%BAlia-gabriela-santi-acosta-78393ba9/")} aria-label="show 17 new notifications" color="inherit">
                        <Linkedin style={{width: 30, height: 30, fill: "#fff"}}/>
                    </IconButton>
                    {actualLanguage === "pt" ?
                        <IconButton aria-label="show 17 new notifications" color="inherit"
                                    component={Button} onClick={handleClick}>
                            <BR style={{width: 30, height: 30}}/>
                        </IconButton> :
                        <IconButton aria-label="show 17 new notifications" color="inherit"
                                    component={Button} onClick={handleClick}>
                            <US style={{width: 30, height: 30}}/>
                        </IconButton>}
                    <StyledMenu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => changeLanguage("pt")}>{t('portuguese')}</MenuItem>
                        <MenuItem onClick={() => changeLanguage("en")}>{t('english')}</MenuItem>
                    </StyledMenu>
                </div>
            </Toolbar>
        </AppBar>
    );
}

MyAppBar.propTypes = {
    color: PropTypes.oneOf(['transparent', 'colorful']).isRequired,
};

const Header: React.FC = () => {
    const [userHasScrolled, setUserHasScrolled] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        window.onscroll = () => {
            setUserHasScrolled(window.pageYOffset)
        }

    }, []);

    return (
        <>
            <MyAppBar color={userHasScrolled ? "colorful" : "transparent"}/>
            <div className={classes.offset}/>
        </>
    )

}

export default Header;