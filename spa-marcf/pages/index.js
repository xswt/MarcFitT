
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { MainScreen } from './MainScreen'
import { LandingPage } from './LandingPage'




export default function Home() {


    const [appLoad, setAppLoad] = useState(false)


    useEffect(() => {
     const queryParameters = new URLSearchParams(window.location.search)
     setAppLoad(queryParameters.get("appLoad"))
    }, [])


  if(appLoad==="true") return (
  <>
      <MainScreen></MainScreen>
  </>)

  return (<><LandingPage></LandingPage></>)


}







export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context
  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}