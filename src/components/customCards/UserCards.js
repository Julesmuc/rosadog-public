import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import tabs from './tabContent'
import { positiveSecondColor, negativeSecondColor } from '../../helper';
import { useTranslation } from 'react-i18next';
const color = "linear-gradient(to bottom, " + positiveSecondColor + ", #3f757a, #819eab, #fafafa, #fafafa)";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grid: {
    borderRadius: "5px",
    backgroundImage: color,
  },
  card: {
    maxWidth: "320px",
    minHeight: "555px",
    backgroundColor: negativeSecondColor,

  },
  imageMedia: {
    clipPath: 'polygon(0 0, 100% 0%, 100% 86%, 0% 100%)',
    backgroundColor: negativeSecondColor,
    maxWidth: "320px",
    height: "160px",
  },
  textArea: {
    backgroundColor: negativeSecondColor
  },
}));


const WhiteTextTypography = withStyles({
  root: {
    color: "#fafafa",
    textAlign: "center"
  }
})(Typography);

function UserCards() {
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
        {tabs.map((imageObj, i) => {
          return (
            <Grid key={imageObj + i} item sm={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.imageMedia}
                  component="img"
                  alt={imageObj.alt} title={imageObj.titleIMG}
                  image={imageObj.image}
                />
                <CardContent className={classes.textArea} >
                  <WhiteTextTypography gutterBottom variant="h5" component="h2">
                   {t(imageObj.title)}
                  </WhiteTextTypography>
                  <p style={{ color: "#fafafa", fontSize: "1.0rem" }}dangerouslySetInnerHTML={
                      { __html: t(imageObj.text) }
                    } />
                </CardContent>
              </Card>
            </Grid>)
        })}
      </Grid>
    </div>
  );
}

export default UserCards;
