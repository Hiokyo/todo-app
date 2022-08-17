import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.css'
import './index.css'
import { StoreProvider } from './store';
import i18n from './translation/i18n';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StoreProvider>
  </React.StrictMode>
)
