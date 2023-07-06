import '@/styles/globals.css'
import '@/styles/ownStyleVars/globalStyle.css';
import { appWithTranslation } from 'next-i18next'
import { ErrorBoundary } from "react-error-boundary";
import ErrorScreen from './ErrorScreen';
import { GlobalContextProvider } from '@/context/GlobalContext';



function fallbackRender({ error }) {
  return (
    <ErrorScreen error={error}></ErrorScreen>
  );
}

const App = ({ Component, pageProps }) => (
  <GlobalContextProvider>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <Component {...pageProps} />
    </ErrorBoundary>
  </GlobalContextProvider>
)

export default appWithTranslation(App)

