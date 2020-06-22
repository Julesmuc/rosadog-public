import React from 'react'
import { useTranslation } from 'react-i18next';
import {
    Grid, Typography, Container, Box, Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

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
export default function DataUsePolicyPage() {
    const classes = useStyles();
    const { t } = useTranslation();
    const disableGaConsent = () => {
        document.cookie = 'cookieconsent_status=; expires=Thu, 31 Dec 1970 23:59:59 UTC; path=/';
        const disableString = 'ga-disable-UA-167413642-1';
        window[disableString] = true;
        document.cookie = disableString + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    }
    return (
        <div className={classes.content}>
            <Container maxWidth="lg">
                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={12}>
                        <Typography className={classes.text} variant="h3" component="h3" gutterBottom>
                            {t('datausepolicy')}
                        </Typography>
                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_ContactText')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_ContactText2')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_Contact')}
                        </Typography>
                        <Typography className={classes.text} variant="h4" component="h4" gutterBottom>
                            {t('dup_Overview')}
                        </Typography>
                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewGeneral')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralText')}
                        </Typography>

                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewDataCollection')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewDataCollectionHow')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataCollectionHowText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewDataCollectionWhatFor')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataCollectionWhatForText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewDataCollectionWhatRights')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataCollectionWhatRightsText')}
                        </Typography>

                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewAnalysisTools')}
                        </Typography>
                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewAnalysisToolsHosting')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewAnalysisToolsHostingText')}
                        </Typography>

                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewGeneralInformation')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewGeneralInformationPrivacy')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralInformationPrivacyText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewGeneralInformationResponsibleBody')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralInformationResponsibleBodyText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewGeneralInformationRevocation')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralInformationRevocationText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewGeneralInformationObject')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralInformationObjectText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewGeneralInformationLodge')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralInformationLodgeText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewGeneralInformationPortability')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralInformationPortabilityText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewGeneralInformationSSL')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralInformationSSlText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewGeneralInformationDeletion')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralInformationDeletionText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewGeneralInformationRestriction')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralInformationRestrictionText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewGeneralInformationEmails')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewGeneralInformationEmailsText')}
                        </Typography>

                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewDataCollectionPurpose')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewDataCollectionVisitingWebsite')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataCollectionVisitingWebsiteText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewDataCollectionRegister')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataCollectionRegisterText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewDataCollectionRegister')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataCollectionRegisterText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewDataCollectionUsingSoftware')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataCollectionUsingSoftwareText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewDataCollectionRequests')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataCollectionRequestsText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewDataCollectionCookies')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataCollectionCookiesText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewDataCollectionServerLog')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataCollectionServerLogText')}
                        </Typography>

                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewNewsletter')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewNewsletterData')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewNewsletterDataText')}
                        </Typography>

                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewPlugins')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewPluginsGoogleWebfonts')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewPluginsGoogleWebfontsText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewPluginsCookies')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewPluginsCookiesText')}
                        </Typography>
                        <Button onClick={disableGaConsent} id="datauserevokecookie">{t('revokeCookies')}</Button>

                        <Typography component="div"> <Box fontWeight="fontWeightBold" >
                            {t('dup_OverviewPluginsCookiesGoogleAnalytics')}
                        </Box>
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewPluginsCookiesGoogleAnalyticsText')}
                        </Typography>

                        <Typography component="div">
                            {t('dup_OverviewPluginsCookiesGoogleAdwords')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewPluginsCookiesGoogleAdwordsText')}
                        </Typography>

                        <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                            {t('dup_OverviewPluginsSocialPlugins')}
                        </Typography>
                        <Typography component="div"> <Box fontWeight="fontWeightBold" >
                            {t('dup_OverviewPluginsSocialPluginsFacebook')}
                        </Box>
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewPluginsSocialPluginsFacebookText')}
                        </Typography>

                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewRights')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewRightsText')}
                        </Typography>

                        <Typography className={classes.text} variant="h4" component="h4" gutterBottom>
                            {t('dup_OverviewObjectRights')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewObjectRightsText')}
                        </Typography>

                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewDataSecurity')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDataSecurityText')}
                        </Typography>

                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewUpToDateness')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewUpToDatenessText')}
                        </Typography>


                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_OverviewDeclarationOfConsent')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_OverviewDeclarationOfConsentText')}
                        </Typography>

                        <Typography className={classes.text} variant="h4" component="h4" gutterBottom>
                            {t('dup_Consent')}
                        </Typography>
                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_ConsentText')}
                        </Typography>

                        <Typography className={classes.text} variant="h5" component="h5" gutterBottom>
                            {t('dup_ConsentWithDrawal')}
                        </Typography>

                        <Typography className={classes.textBody} variant="body2" gutterBottom>
                            {t('dup_ConsentWithDrawalText')}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}
