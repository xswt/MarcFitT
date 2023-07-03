// import React, { useEffect, useState } from 'react'
// import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



// const ErrorScreen = () => {

//   const { t } = useTranslation()

//   const [tiempo, setTiempo] = useState()

//   useEffect(() => {
//      const queryParameters = new URLSearchParams(window.location.search)
//      setTiempo(queryParameters.get("tiempo"))
//   }, [])
  



//   return (
//     <div>
//       {tiempo}
//       <h1>{t("HELLO_WORLD")}</h1>
//       </div>
//   )
// }

// export default ErrorScreen



// export async function getStaticProps(context) {
//   const { locale } = context
//   return {
//     props: {
//       ...(await serverSideTranslations(locale)),
//     },
//   }
// }