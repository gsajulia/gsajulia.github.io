import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import withStyles from "@material-ui/core/styles/withStyles";

/* Icons */
import {ReactComponent as Github} from "./../../assets/github.svg";
import {ReactComponent as Linkedin} from "./../../assets/linkedin.svg";
import {ReactComponent as US} from "./../../assets/united-states.svg";
import {ReactComponent as BR} from "./../../assets/brasil.svg";

/* Translation */
import {useTranslation} from 'react-i18next';

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

    const {color, ...other} = props;
    const classes = useStyles(props);
    const {t, i18n} = useTranslation();

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
                <Typography className={classes.title} variant="h6" noWrap>
                    {t('title')}
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.sectionDesktop}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Github style={{width: 30, height: 30, fill: "#fff"}}/>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Linkedin style={{width: 30, height: 30, fill: "#fff"}}/>
                    </IconButton>
                    { actualLanguage === "pt" ?
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
        </AppBar>);
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