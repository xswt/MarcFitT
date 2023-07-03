import React from 'react'
import { useTranslation } from 'next-i18next'

export const MainScreen = () => {

  const { t } = useTranslation()



  return (
    <div>
        <h1>{t("HELLO_WORLD")}</h1>
    </div>
  )
}
