import React from 'react'
import { useTranslation } from 'react-i18next';
import {
    Grid, Typography, Container
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        padding: theme.spacing(8, 0, 6),
        textOverflow: "ellipsis",
    },
    text: {
        wordWrap: "break-word"
    },
    textBody: {
        whiteSpace: 'pre-line',
        textAlign: 'justify',
        wordWrap: "break-word"
    }
}));
export default function ImprintPage() {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <div className={classes.content}>
            <Container maxWidth="lg">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{t('imprint')}</title>
                <meta name="og:title" content={t('imprint')} />
                <meta name="description" content={t('imprint')} />
                <meta name="og:description" content={t('imprint')} />
            </Helmet>
                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={12}>
                        <Typography className={classes.text} variant="h3" component="h3" gutterBottom>
                            {t('imprint')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_Contact')}
                        </Typography>
                        <Typography className={classes.text} variant="h4" component="h4" gutterBottom>
                            {t('imprint_Hinweis')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('imprint_HinweisText')}
                        </Typography>
                        <a href="http://ec.europa.eu/odr" rel="noopener noreferrer"
                            target="_blank">http://ec.europa.eu/odr</a>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('imprint_HinweisText2')}
                        </Typography>
                        <a href="mailto:info@rosadog.de">info@rosadog.de</a>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('imprint_HinweisText3')}
                        </Typography>
                        <Typography className={classes.text} variant="h4" component="h4" gutterBottom>
                            {t('imprint_Disclaimer')}
                        </Typography>
                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('imprint_Disclaimer2')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('imprint_DisclaimerText')}
                        </Typography>
                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('imprint_Disclaimer3')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('imprint_DisclaimerText2')}
                        </Typography>
                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('imprint_Disclaimer4')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('imprint_DisclaimerText4')}
                        </Typography>
                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('imprint_Disclaimer5')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('imprint_DisclaimerText5')}
                        </Typography>
                        <a href="https://www.juraforum.de/impressum-generator/">JuraForum.de</a>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}
