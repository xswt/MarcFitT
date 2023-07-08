import React from 'react'
import LoadingScreenStyle from './LoadingScreen.module.css'
import Image from 'next/image'
import imagenBall from '../../public/images/loadingLogo.jpg'




const LoadingScreen = () => {

  
  return (
    <main className={LoadingScreenStyle.mainBox} >
         <div className={LoadingScreenStyle.boxBall}>
         <Image
            src={imagenBall}
            alt="WPT"
            style={{width:"100%", height:"100%"}}
         /> 
         </div>
         <div className={LoadingScreenStyle.boxBallLine}>
         </div>
    </main>
  )
}

export default LoadingScreen