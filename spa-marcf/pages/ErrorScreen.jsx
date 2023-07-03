import React from 'react'
import { useTranslation } from 'next-i18next'

const ErrorScreen = ({error}) => {

  const { t } = useTranslation()

  console.log("MENSAJE ERROR",error)

  



  return (
    <div>
     ERROR SCREEN
     <br></br>
     {error.message}
      </div>
  )
}

export default ErrorScreen




