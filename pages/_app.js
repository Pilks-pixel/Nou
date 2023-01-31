import '../styles/globals.css'
import {Bai_Jamjuree} from '@next/font/google'
import React, { useRef, useState } from "react";



  const baiJamjuree = Bai_Jamjuree({
    weight:['500', '700'],
    subsets: ['latin'],
  })

function MyApp({ Component, pageProps }) {
  return (
    <main className={baiJamjuree.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
