import React, { lazy } from 'react';
import './i18n'
import './intern';
import './main.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  CssBaseline,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
const Footer = lazy(() => import('./components/Footer'));
const EmptyMenu = lazy(() => import('./components/EmptyMenu'));
const About = lazy(() => import('./components/About'));
const DataUsePolicy = lazy(() => import('./components/DataUsePolicy'));
const FAQ = lazy(() => import('./components/FAQ'));
const Imprint = lazy(() => import('./components/Imprint'));


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    display: "flex",
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  }
}));


function App() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('rosadogTitle')}</title>
        <meta name="og:title" content={t('rosadogTitle')}/>
        <meta name="description" content={t('rosadogDescription')} />
        <meta name="og:description" content={t('rosadogDescription')} />
      </Helmet>
      <CssBaseline />
      <EmptyMenu />
      <main lang={t('localelocale')} className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Router>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/datausepolicy">
              <DataUsePolicy />
            </Route>
            <Route path="/imprint">
              <Imprint />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
        <Footer />
      </main>
    </div>
  );
}

export default App;
