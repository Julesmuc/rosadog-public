import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    grid: {
        borderRadius: "5px",
    },

}));

function TeamCard() {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                alignItems="center"
                justify="center"
                spacing={2}
                className={classes.grid}
            >
                <Grid item >
                    <Card >
                        <CardMedia
                            component="img"
                            alt="team-rosie" title="team-rosie"
                            image="/images/team-rosie.webp"
                        />
                        <CardContent className={classes.textArea} >
                            <Typography gutterBottom variant="h5" component="h2">
                                {t('teamTitle').toUpperCase()}
                            </Typography>
                            <p style={{ color: "#5D5C61", fontSize: "1.0rem" }}  >{t('teamText')}</p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default TeamCard;
