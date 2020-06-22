import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import {
    Grid,
    Typography,
    Box,
    IconButton,
    Link,
    Container,
    SvgIcon
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from "@material-ui/icons/Mail";
import { HelpOutlineOutlined, Gavel } from '@material-ui/icons';
import { headerColor, positiveColor } from "../helper";


const useStyles = makeStyles((theme) => ({
    footerInner: {
        backgroundColor: "rgb(171, 212, 207)",
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },

    infoIcon: {
        color: `${theme.palette.common.white} !important`,
        backgroundColor: positiveColor + " !important"
    }
}));

function Footer() {
    const classes = useStyles();
    const mediaMatch = window.matchMedia ? window.matchMedia('(min-width: 500px)') : {};
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });

    const style = {
        marginTop: 'auto',
        width: "100%",
        backgroundColor: headerColor
    }
    const styleInherit = {
        position: "inherit",
        marginTop: "2rem",
        backgroundColor: headerColor
    }
    const getSize = () => {
        return matches ? "medium" : "small";
    }
    const getVariant = () => {
        return matches ? "h6" : "body1";
    }
    const { t } = useTranslation();
    return (
        <footer style={matches ? style : styleInherit} >
            <Container maxWidth="xl">
                <div className={classes.footerInner}>
                    <Grid container spacing={2} justify="space-evenly">
                        <Grid item xs={12} md={6} lg={4}>
                            <Box display="flex" justifyContent="center" flexDirection="column">
                                <Box display="flex" mb={1}>
                                    <Typography variant={getVariant()} paragraph className="text-white">
                                        {t('Contact')}
                                    </Typography>
                                </Box>
                                <Box display="flex" mb={1}>
                                    <Box mr={2}>
                                        <IconButton
                                            size={getSize()}
                                            className={classes.infoIcon}
                                            tabIndex={-1}
                                            disabled
                                        >
                                            <MailIcon />
                                        </IconButton>
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                    >
                                        <Link variant={getVariant()} color="inherit" href={'mailto:info@rosadog.de?subject=rosadog%20' + t("Contact") + ''} >
                                            info@rosadog.de
                                    </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} >
                            <Typography variant={getVariant()} paragraph color="textPrimary">
                                {t('links')}
                            </Typography>
                            <ul style={{ listStyleType: "none" }}>
                                <li>
                                    <Box display="flex" mb={1}>
                                        <Box mr={2}>
                                            <SvgIcon className="svg-icon" viewBox="0 0 20 20" >
                                                <path d="M10,1.445c-4.726,0-8.555,3.829-8.555,8.555c0,4.725,3.829,8.555,8.555,8.555c4.725,0,8.555-3.83,8.555-8.555C18.555,5.274,14.725,1.445,10,1.445 M10,17.654c-4.221,0-7.654-3.434-7.654-7.654c0-4.221,3.433-7.654,7.654-7.654c4.222,0,7.654,3.433,7.654,7.654C17.654,14.221,14.222,17.654,10,17.654 M14.39,10c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,9.55,14.39,9.752,14.39,10 M14.39,12.702c0,0.247-0.203,0.449-0.45,0.449H6.06c-0.248,0-0.45-0.202-0.45-0.449c0-0.248,0.203-0.451,0.45-0.451h7.879C14.187,12.251,14.39,12.454,14.39,12.702 M14.39,7.298c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,6.848,14.39,7.051,14.39,7.298"></path>
                                            </SvgIcon>
                                        </Box>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Link variant="subtitle1" color="textSecondary" target="_blank" rel="noopener" href={t("feedbackLink")} >
                                                {t('feedbackTextLong')}
                                            </Link>
                                        </Box>
                                    </Box>
                                </li>
                                <li>
                                    <Box display="flex" mb={1}>
                                        <Box mr={2}>
                                            <SvgIcon className="svg-icon" viewBox="0 0 20 20" >
                                                <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                                            </SvgIcon>
                                        </Box>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Link variant="subtitle1" color="textSecondary" target="_blank" rel="noopener" href={t("https://www.facebook.com/rosadogdiary")} >
                                                {t('facebook')}
                                            </Link>
                                        </Box>
                                    </Box>
                                </li>
                                <li>
                                    <Box display="flex" mb={1}>
                                        <Box mr={2}>
                                            <SvgIcon className="svg-icon" viewBox="0 0 20 20" >
                                                <path fill="none" d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
                                            </SvgIcon>
                                        </Box>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Link variant="subtitle1" color="textSecondary" target="_blank" rel="noopener" href={t("https://www.instagram.com/rosadogdiary/")} >
                                                {t('instragram')}
                                            </Link>
                                        </Box>
                                    </Box>
                                </li>
                                <li>
                                    <Box display="flex" mb={1}>
                                        <Box mr={2}>
                                            <SvgIcon className="svg-icon" viewBox="0 0 20 20" >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </SvgIcon>
                                        </Box>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Link variant="subtitle1" color="textSecondary" target="_blank" rel="noopener" href={t("https://www.linkedin.com/company/rosadog/about/")} >
                                                {t('linkedin')}
                                            </Link>
                                        </Box>
                                    </Box>
                                </li>
                                <li>
                                    <Box display="flex" mb={1}>
                                        <Box mr={2}>
                                            <HelpOutlineOutlined style={{ color: positiveColor }} />
                                        </Box>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Link target="_blank" href="/faq" variant="subtitle1" color="textSecondary">
                                                {t('faq')}
                                            </Link>
                                        </Box>
                                    </Box>
                                </li>

                                <li><Box display="flex" mb={1}>
                                    <Box mr={2}>
                                        <Gavel style={{ color: positiveColor }} />
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                    >
                                        <Link href="/datausepolicy" variant="subtitle1" color="textSecondary">
                                            {t('datausepolicy')}
                                        </Link>
                                    </Box>
                                </Box>
                                </li>
                                <li >
                                    <Box display="flex" mb={1}>
                                        <Box mr={2}>
                                            <SvgIcon className="svg-icon" viewBox="0 0 20 20" >
                                                <path fill="none" d="M17.222,5.041l-4.443-4.414c-0.152-0.151-0.356-0.235-0.571-0.235h-8.86c-0.444,0-0.807,0.361-0.807,0.808v17.602c0,0.448,0.363,0.808,0.807,0.808h13.303c0.448,0,0.808-0.36,0.808-0.808V5.615C17.459,5.399,17.373,5.192,17.222,5.041zM15.843,17.993H4.157V2.007h7.72l3.966,3.942V17.993z"></path>
                                                <path fill="none" d="M5.112,7.3c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808c0-0.447-0.363-0.808-0.808-0.808H5.92C5.475,6.492,5.112,6.853,5.112,7.3z"></path>
                                                <path fill="none" d="M5.92,5.331h4.342c0.445,0,0.808-0.361,0.808-0.808c0-0.446-0.363-0.808-0.808-0.808H5.92c-0.444,0-0.808,0.361-0.808,0.808C5.112,4.97,5.475,5.331,5.92,5.331z"></path>
                                                <path fill="none" d="M13.997,9.218H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,9.58,14.442,9.218,13.997,9.218z"></path>
                                                <path fill="none" d="M13.997,11.944H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,12.306,14.442,11.944,13.997,11.944z"></path>
                                                <path fill="none" d="M13.997,14.67H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.447,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,15.032,14.442,14.67,13.997,14.67z"></path>
                                            </SvgIcon>
                                        </Box>
                                        <Box>
                                            <Link href="/imprint" variant="subtitle1" color="textSecondary">
                                                {t('impressum')}
                                            </Link>
                                        </Box>
                                    </Box>
                                </li>
                                <li><Box display="flex" mb={1}>
                                    <Box mr={2}>
                                        <SvgIcon className="svg-icon" viewBox="0 0 20 20" >
                                            <polygon fill="none" points="18.198,7.95 3.168,7.95 3.168,8.634 9.317,9.727 9.317,19.564 12.05,19.564 12.05,9.727 18.198,8.634 "></polygon>
                                            <path fill="none" d="M2.485,10.057v-3.41H2.473l0.012-4.845h1.366c0.378,0,0.683-0.306,0.683-0.683c0-0.378-0.306-0.683-0.683-0.683H1.119c-0.378,0-0.683,0.306-0.683,0.683c0,0.378,0.306,0.683,0.683,0.683h0.683v4.845C1.406,6.788,1.119,7.163,1.119,7.609v2.733c0,0.566,0.459,1.025,1.025,1.025c0.053,0,0.105-0.008,0.157-0.016l-0.499,5.481l5.9,2.733h0.931C8.634,13.266,5.234,10.458,2.485,10.057z"></path>
                                            <path fill="none" d="M18.169,6.584c-0.303-3.896-3.202-6.149-7.486-6.149c-4.282,0-7.183,2.252-7.484,6.149H18.169z M15.463,3.187c0.024,0.351-0.103,0.709-0.394,0.977c-0.535,0.495-1.405,0.495-1.94,0c-0.29-0.268-0.418-0.626-0.394-0.977C13.513,3.827,14.683,3.827,15.463,3.187z"></path>
                                            <path fill="none" d="M18.887,10.056c-2.749,0.398-6.154,3.206-6.154,9.508h0.933l5.899-2.733L18.887,10.056z"></path>
                                        </SvgIcon>
                                    </Box>
                                    <Box>
                                        <Link target="_blank" rel="noreferrer" href="https://www.julianschroeter.com" variant="subtitle1" color="textSecondary">
                                            {t('built by')} www.julianschroeter.com
                                    </Link>
                                    </Box>
                                </Box>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;