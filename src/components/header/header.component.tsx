import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

/* Material UI */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import { Button, Tooltip } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import withStyles from "@material-ui/core/styles/withStyles";

/* Icons */
import { ReactComponent as Github } from "./../../assets/icons/github.svg";
import { ReactComponent as Linkedin } from "./../../assets/icons/linkedin.svg";
import { ReactComponent as US } from "./../../assets/icons/united-states.svg";
import { ReactComponent as BR } from "./../../assets/icons/brasil.svg";

/* Translation */
import { useTranslation } from 'react-i18next';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

/* Styles */
import useStyles from './header.styles';

interface StyledMenuProps {
    id: string,
    anchorEl: any,
    keepMounted: boolean,
    open: boolean,
    onClose: () => void
}


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: StyledMenuProps) => (
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

const Header: React.FC = () => {
    const [userHasScrolled, setUserHasScrolled] = useState(0);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [actualLanguage, setActualLanguage] = React.useState("en");
    const [value, setValue] = React.useState(0);

    const { t, i18n } = useTranslation();
    const classes = useStyles();

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (lng: string) => {
        setActualLanguage(lng);
        i18n.changeLanguage(lng).then(r => console.log(r));
    };

    useEffect(() => {
        window.onscroll = () => {
            setUserHasScrolled(window.pageYOffset)
        }

    }, []);


    return (
        <>
            <AppBar style={{ background: userHasScrolled ? "#000" : "transparent" }}>
                <Toolbar>
                    <Paper style={{ background: "transparent" }} square>
                        <Tabs
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}
                            aria-label="disabled tabs example"
                        >
                            <Tab className={classes.tab}  label={t("about")} to="#introduction" component={Link} />
                            <Tab className={classes.tab} label={t("experience")} to="#experience" component={Link} />
                            <Tab className={classes.tab} label={t("projects")} to="#projects" component={Link} />
                        </Tabs>
                    </Paper>
                    <div className={classes.grow} />
                        <IconButton component={Button} onClick={() => window.open("https://github.com/gsajulia")} aria-label="show 4 new mails"
                            color="inherit">
                            <Github style={{ width: 30, height: 30, fill: "#fff" }} />
                        </IconButton>
                        <IconButton component={Button} onClick={() => window.open("https://www.linkedin.com/in/j%C3%BAlia-gabriela-santi-acosta-78393ba9/")} aria-label="show 17 new notifications" color="inherit">
                            <Linkedin style={{ width: 30, height: 30, fill: "#fff" }} />
                        </IconButton>
                        <div>
                            <IconButton aria-label="show 17 new notifications" color="inherit"
                                component={Button} onClick={() => changeLanguage("en")}>
                                <US style={{ width: 30, height: 30 }} />
                            </IconButton>
                            <IconButton aria-label="show 17 new notifications" color="inherit"
                                component={Button} onClick={() => changeLanguage("pt")}>
                                <BR style={{ width: 30, height: 30 }} />
                            </IconButton>
                        </div>

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
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </>
    )

}

export default Header;