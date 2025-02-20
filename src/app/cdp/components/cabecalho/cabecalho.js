"use client"

import { useContext, useEffect } from "react"
import styles from "./cabecalho.module.css"
import dataContext from "../../context/data"
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import Button from "../button/button";

export default function Cabecalho({meses}){

  const {data, setData, ano, setAno, Display, setDisplay} = useContext(dataContext);
  
  let mes = data.getMonth()

  return(
    <div className={styles.conteiner}>
      <div className={styles.cabecalho}> 
        <div onClick={() => Display.prev(setData, mes, ano, setAno)} className={styles.button}>
          <Button>
            <FaArrowLeftLong />
          </Button>
        </div>
        <div className={styles.infos}>
          <div onClick={() => Display.btnMes(setDisplay)}>
            {
              meses && (
                <p>{meses[mes]}</p>
              )
            }
          </div>
          <div onClick={() => Display.btnAno(setDisplay)}>
            <p>{ano}</p>
          </div>
        </div>
        <div onClick={() => Display.prox(setData, mes, ano, setAno)} className={styles.button}>
          <Button>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}