/* eslint-disable react/prop-types */
import React from 'react'
import { useTranslation } from 'react-i18next';
import {
    Typography,
    Container,
    Grid
} from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PictureSlider from './imageSlider/PictureSlider'
import UserCards from './customCards/UserCards';
import TeamCard from './customCards/TeamCard';
import OutlinedPositiveButton from './buttons/OutlinedPositiveButton'
import PositiveButton from './buttons/PositiveButton'
import { makeStyles } from '@material-ui/core/styles';
import './About.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    alignText: {
        textAlign: "center"
    }
}));

export default function About() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const { t } = useTranslation();
    const getFontSize = (size) => {
        if (size && size === 1) return matches ? "5rem" : "2.5rem";
        if (size && size === 2) return matches ? "2rem" : "1.6rem";
        if (size && size === 3) return matches ? "1.8rem" : "1.4rem";
        return "1.6rem";
    }

    return (
        <React.Fragment>
            <Container className={classes.root} >
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Typography style={{
                            hyphens: "auto",
                            fontSize: getFontSize(1),
                            marginBottom: 30
                        }} align="center" variant="h1" component="h1">
                            {t('welcome')}
                        </Typography>

                        <Typography style={{
                            hyphens: "auto",
                            wordBreak: "break-word",
                            fontSize: getFontSize(2),
                            marginBottom: 30
                        }} align="center" variant="h2" component="h2">
                            {t('welcomeIntro')}
                        </Typography>
                        <h2 class="MuiTypography-root MuiTypography-h2 MuiTypography-alignCenter" style={{ 
                            wordBreak: "break-word", 
                            fontSize: "2rem", 
                            marginBottom: "30px" }}> {t('rosadogPWA')}  <a href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&amp;hl=de">{t('hier')}</a> </h2>
                        <div className={classes.alignText}>
                            <PositiveButton style={{
                                height: "54px",
                                fontSize: "15px",
                                padding: "0 28px",
                            }} label={t('registerForFree')} target="_blank" rel="noopener noreferrer" href={'https://www.app.rosadog.com/registration'} >
                            </PositiveButton>
                        </div>
                        <div className={classes.alignText}>
                            <h2 style={{
                                fontSize: getFontSize(2)
                            }}
                            >{t('or')}</h2>
                        </div>
                        <div className={classes.alignText}>
                            <OutlinedPositiveButton label={t('login')} target="_blank" rel="noopener noreferrer" href={'https://www.app.rosadog.com/login'} >
                            </OutlinedPositiveButton>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className={classes.alignText}>
                <h3 style={{
                    fontSize: getFontSize(3)
                }} dangerouslySetInnerHTML={
                    { __html: t('featuresQuestionTitle', { interpolation: { escapeValue: false } }) }
                } />
            </div>
            <PictureSlider />
            <div className="section">
            </div>
            <div className="section">
            </div>
            <div className="container">
                <div className="divider"></div>
                <div className="section">
                </div>
                <div className="section">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center teal-text"><i className="medium material-icons">date_range</i></h2>
                                <h5 className="center">
                                    {t('messageBox1Header')}</h5>

                                <h6 className="center light">{t('messageBox1')}</h6>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center teal-text"><i className="medium material-icons">pets</i></h2>
                                <h5 className="center" >{t('messageBox2Header')}</h5>

                                <h6 className="center light" >{t('messageBox2')}</h6>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center teal-text"><i className="medium material-icons">local_hospital</i>
                                </h2>
                                <h5 className="center" >
                                    {t('messageBox3Header')}</h5>

                                <h6 className="center light">{t('messageBox3')}</h6>
                            </div >
                        </div >
                    </div >
                    <div className="section">
                    </div>
                    <div className="section">
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                    </div>
                    <div className="section">
                    </div>
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 style={{ color: "#e05858" }} className="center"><i className="medium material-icons">check_circle_outline</i>
                                </h2>
                                <h5 className="center" >{t('messageBox4Header')}
                                </h5>

                                <h6 className="center light">{t('messageBox4')}</h6>
                            </div>
                        </div >
                        <div className="col s12 m1">
                        </div>
                        <div className="col s12 m6">
                            <div className="card center">
                                <div className="card-image">
                                    <picture>
                                        <img src="images/screenshots/rosadog-gesundheitstagebuch-profil.png"
                                            alt="rosadog-gesundheitstagebuch-profil" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m1">
                        </div>
                    </div>
                    <div className="section">
                    </div>
                    <div className="section">
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                    </div>
                    <div className="section">
                    </div>
                </div>
            </div>
            <Typography style={{
                hyphens: "auto",
                wordBreak: "break-word",
                fontSize: getFontSize(2),
                marginBottom: 15
            }} align="center" variant="h2" component="h2">
                {t('userStoriesTitle')}
            </Typography>
            <UserCards />
            <div className="section">
            </div>
            <div className="container">
                <div className="row">
                    <div className="divider"></div>
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="block">
                                <div className="section"></div>
                                <h5 className="center" >{t('questionBoxHeader')}</h5>
                                <div className="section"></div>
                                <h2 style={{ color: "#e05858" }} className="center"><i className="large material-icons">favorite_border</i>
                                </h2>
                            </div>
                        </div>
                        <div className="col s12 m8">
                            <div className="block">
                                <div className="section"></div>
                                <ul style={{ textAlign: 'center' }}>
                                    <li className="collection-item">
                                        <h6 >
                                            {t('questionBox1')}
                                        </h6>
                                    </li>
                                    <li>
                                        <h6 className="center teal-text"><i className="material-icons">done_all</i></h6>
                                    </li>
                                    <li className="collection-item">
                                        <h6 > {t('questionBox2')}</h6>
                                    </li>
                                    <li>
                                        <h6 className="center teal-text"><i className="material-icons">done_all</i></h6>
                                    </li>
                                    <li className="collection-item">
                                        <h6 >{t('questionBox3')}</h6>
                                    </li>
                                    <li>
                                        <h6 className="center teal-text"><i className="material-icons">done_all</i></h6>
                                    </li>
                                    <li className="collection-item">
                                        <h6 >
                                            {t('questionBox4')}
                                        </h6>

                                    </li>
                                    <li>
                                        <h6 className="center teal-text"><i className="material-icons">done_all</i></h6>
                                    </li>
                                    <li className="collection-item">
                                        <h6>{t('questionBox5')}</h6>
                                    </li>
                                    <li>
                                        <h6 className="center teal-text"><i className="material-icons">done_all</i></h6>
                                    </li>
                                    <li className="collection-item">
                                        <h6 >{t('questionBox6')}</h6>
                                    </li >
                                    <li>
                                        <h6 className="center teal-text"><i className="material-icons">done_all</i></h6>
                                    </li>
                                    <li className="collection-item">
                                        <h6 >{t('questionBox7')}</h6>
                                    </li >
                                    <li>
                                        <h6 className="center teal-text"><i className="material-icons">done_all</i></h6>
                                    </li>
                                    <li className="collection-item">
                                        <h6 >{t('questionBoxAnswer')}</h6>
                                    </li >
                                </ul >
                            </div >
                        </div >
                    </div >
                    <div className="row center">
                        <div className="col s12 m4">
                        </div>
                        <div className="col s12 m8">
                            <div className="section"></div>
                            <a href="https://www.app.rosadog.com/registration" rel="noopener noreferrer" target="_blank" className="btn-large waves-effect teal darken-3 pulse"
                            >{t('registerForFree')}
                            </a>
                        </div>
                    </div >
                    <div className="section">
                    </div>
                    <div className="section">
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                    </div>
                </div >
            </div >
            <Container >
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <TeamCard />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment >
    )
}
