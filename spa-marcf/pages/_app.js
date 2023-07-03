import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { ErrorBoundary } from "react-error-boundary";
import ErrorScreen from './ErrorScreen';


function fallbackRender({ error }) {
  return (
    <ErrorScreen error={error}></ErrorScreen>
  );
}

const App = ({ Component, pageProps }) => (
  <ErrorBoundary fallbackRender={fallbackRender}>
    <Component {...pageProps} />
  </ErrorBoundary>
)

export default appWithTranslation(App)

