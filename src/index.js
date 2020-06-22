import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  Backdrop
} from '@material-ui/core'
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Suspense fallback={<Backdrop open={true} />}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </I18nextProvider>,
  document.getElementById('root')
);
