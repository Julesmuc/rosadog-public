/* eslint-disable react/prop-types */
import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Link

} from '@material-ui/core';
import {
    Settings as SettingsIcon,
} from "@material-ui/icons";

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles(() => ({

    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
}));

const LangMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const { t } = useTranslation();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);

    };
    const handleClose2 = () => {
        setAnchorEl(null);
        setAnchorEl2(null);
    };
    return (
        <div>
            <IconButton aria-controls="simple-menu" aria-haspopup="true"
                onClick={handleClick} >
                <SettingsIcon></SettingsIcon>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component={Link} href="/" color="inherit" onClick={handleClose}>{t('home')}</MenuItem>
                <MenuItem component={Link} href="https://www.app.rosadog.com/registration" color="inherit" onClick={handleClose}>{t('register')}</MenuItem>
                <MenuItem component={Link} href="https://www.app.rosadog.com/login" color="inherit" onClick={handleClose}>{t('login')}</MenuItem>
            </Menu>
            <Menu
                id="simple-menu-language"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
            >
            </Menu>
        </div >
    )
}

const EmptyMenu = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="absolute">
                <Toolbar style={{ backgroundColor: "#abd4cf" }}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        <Link href="/" className="item">
                            <img src="images/rosadog-gesundheitstagebuch-logo.png" alt="rosadog-gesundheitstagebuch-logo" style={{ width: "7em" }} />
                        </Link>
                    </Typography>
                    <LangMenu />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default EmptyMenu;
