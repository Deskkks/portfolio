"use client"

import { useEffect, useState } from "react"
import styles from "./header.module.css"

export default function Header({scrollPosition}) {

  const [color, setColor] = useState("#D7D8FC")
  const [newColor, setNewColor] = useState("#D7D8FC")
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    let screenHeight = window.innerHeight
    let scroll = scrollPosition+54
    console.log("screen: ", screenHeight, "scroll: ", scrollPosition)
    if(opacity === 1){
      if(scroll < screenHeight){
        setColor("#D7D8FC")
        setOpacity(0)
      }
      if(scroll >= screenHeight*2 && scroll < screenHeight*3){//54
        setColor("#FFD9D9")
        setOpacity(0)
      }
    }
    if(opacity === 0){//54
      if(scroll >= screenHeight && scroll < screenHeight*2){
        setNewColor("#C4B4D4")
        setOpacity(1)
      }
      if(scroll > screenHeight*3){
        setNewColor("#E2ACAC")
        setOpacity(1)
      }
    }

  }, [scrollPosition])

  return(
    <header>
      <nav className={styles.nav}>
        <p onClick={() => scrollTo(0, window.innerHeight)}>Sobre</p>
        <p onClick={() => scrollTo(0, window.innerHeight*2)}>Projeto CDP</p>
        <p onClick={() => scrollTo(0, window.innerHeight*3)}>Projeto Draining</p>
      </nav>
      <div className={styles.conteiner}style={{backgroundImage: `linear-gradient(to right, ${color}, #6D70FB 120%)`}}>
      </div>
      <div className={styles.conteiner}style={{backgroundImage: `linear-gradient(to right, ${newColor}, #6D70FB 120%)`, opacity:opacity}}>
      </div>
    </header>
  )
}