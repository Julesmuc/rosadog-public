import React from 'react'
import {
    ExpansionPanel, Typography, Container, ExpansionPanelSummary, ExpansionPanelDetails, Box
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';
export default function FAQ() {
    const { t } = useTranslation();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container maxWidth="lg">
            <Box component="span" m={1}>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => {
                    return (
                        <ExpansionPanel key={i} expanded={expanded === "faqTitle" + i} onChange={handleChange("faqTitle" + i)}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography >{t("faqTitle" + i)}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    {t("faqText" + i)}
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                })}
            </Box>
        </Container>
    )
}
