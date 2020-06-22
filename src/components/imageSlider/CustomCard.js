import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Card,
    Box,
    CardContent,
    CardMedia,
    CardActionArea,
    Typography,
    Modal,
    Backdrop,
    Fade
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { positiveColor } from '../../helper'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    card: {
        minHeight: "645px",
        backgroundColor: positiveColor
    },
    imageMedia: {
        clipPath: 'polygon(0 0, 100% 0%, 100% 86%, 0% 100%)',
        backgroundColor: positiveColor,
        height: "340px",
        maxWidth: "320px"
    },
    textArea: {
        backgroundColor: positiveColor
    },
    paper: {
        maxWidth: 400,
        maxHeight: 400,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const WhiteTextTypography = withStyles({
    root: {
        color: "#fafafa"
    }
})(Typography);

CustomCard.propTypes = {
    pictureAlt: PropTypes.string,
    pictureTitle: PropTypes.string,
    pictureText: PropTypes.string,
    picture: PropTypes.string,
}
export default function CustomCard(props) {
    const { t } = useTranslation();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClick = () => {
        handleOpen();

    }

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Box boxShadow={3}>
                <CardActionArea onClick={handleClick}>
                    <Card className={classes.card}>
                            <CardMedia
                                className={classes.imageMedia}
                                component="img"
                                alt={t(props.pictureAlt)} title={t(props.pictureTitle)}
                                image={props.picture}
                            />
                        <CardContent className={classes.textArea} >
                            <WhiteTextTypography gutterBottom variant="h5" component="h2">
                                {t(props.pictureTitle)}
                            </WhiteTextTypography>
                            <p style={{ color: "#fafafa", fontSize: "1.0rem" }} dangerouslySetInnerHTML={
                                { __html: t(props.pictureText, { interpolation: { escapeValue: false } }) }
                            } />
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Box>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div onClick={handleClose} className={classes.paper}>
                        <img className={classes.paper} alt={t(props.pictureAlt)} title={t(props.pictureTitle)} src={props.picture} />
                    </div>
                </Fade>
            </Modal>
        </React.Fragment>
    );



}