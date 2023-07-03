import React from 'react'
import { useTranslation } from 'next-i18next'

const ErrorScreen = () => {

  const { t } = useTranslation()



  



  return (
    <div>
      <h1>{t("HELLO_WORLD")}</h1>
      </div>
  )
}

export default ErrorScreen




