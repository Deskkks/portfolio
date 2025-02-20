"use client"

import { useContext, useEffect, useState } from "react"
import dataContext from "../../context/data";
import Cabecalho from "../cabecalho/cabecalho";
import styles from "../displayMeses/display.module.css"

export default function DisplayAnos() {

  const [anos, setAnos] = useState([])
  const {ano, setAno, Display, setDisplay} = useContext(dataContext);
  let anosC = []

  useEffect(()=>{
    let anoCalendario = ano-8
    if(anosC.length > 0){
      anosC = []
    }
    for(let i=0; i<16;i++, anoCalendario++){
      anosC.push(anoCalendario)
    }
    setAnos(anosC)
  },[ano])
  
  return(
    <div className={styles.conteiner}>
      <Cabecalho/>
      <div className={styles.conteinerCard}>
        {
          anos.map((ano, key) =>(
            <div className={styles.card} key={key} onClick={() => {
              setAno(ano)
              Display.btnAno(setDisplay)
            }}>
              {ano}
            </div>
          ))
        }
      </div>
    </div>
  )
}