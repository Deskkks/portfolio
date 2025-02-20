"use client"

import { useContext, useEffect, useState } from "react"
import styles from './display.module.css'
import dataContext from "../../context/data"
import Cabecalho from "../cabecalho/cabecalho"

export default function DisplayCalendario(){
  
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  const [calendarioInfos, setCalendarioInfos] = useState([])
  const [classes, setClasses] = useState([])
  
  const {data, setAno, ano, color, cores} = useContext(dataContext);

  let mes = data.getMonth()

  var dataAtual = new Date()
  let diaHoje = dataAtual.getDate()
  var mesAtaul = dataAtual.getMonth()
  var anoAtual = dataAtual.getFullYear()

  function getData() {
    fetch("/api/cdp")
    .then(res => {
      res.json().then(data => {
        setClasses(data)
      })
    })
    .catch(() => {
      console.log("erro")
    })
  }

  useEffect(() =>{
    getData();
  }, [])

  function montarCalendario(){
    let ultimoDia = new Date(ano, mes + 1, 0).getDate()
    let primeiroDiaSemana = new Date(ano, mes, 0).getDay()

    if(calendarioInfos.length > 0){
      setCalendarioInfos([])
    }

    for(let i = -primeiroDiaSemana; i < (42-primeiroDiaSemana); i++){
      

      let diaCalendario = new Date(ano, mes, i).getDate()
      let esteMes
      let selecionado
      let backgroundColor = "#FFFFFF"
      let textColor = "black"

      if(i >= 1 && i <= ultimoDia ){
        esteMes = true

        if(diaCalendario === diaHoje && mes === mesAtaul && ano === anoAtual){
          selecionado = true
          backgroundColor = color
        }
        
        classes.map(classe => {
          let classeData = new Date(classe.data)

          console.log(classeData.getMonth(), mes)
          if(classeData.getDate() === diaCalendario && classeData.getMonth() === mes && classeData.getFullYear() === ano){
            
            cores.map(cor => {
              if(classe.classe === cor.value){
                backgroundColor = cor.backgroundColor 
              }
            })
          }
        })

      }
      if(
        backgroundColor === "#ff8800" ||
        backgroundColor === "#e1ff00" ||
        backgroundColor === "#55ff00" || 
        backgroundColor === "#FFFFFF"
      ){
        textColor = "black"
      }else{
        textColor = "white"
      }
      setCalendarioInfos( e => [...e, {
        dia:diaCalendario,
        mesAtual:esteMes,
        selecionado:selecionado,
        styles:{
          backgroundColor: backgroundColor,
          color: textColor
        }
      }])
    }

  }

  useEffect(() => {
    setAno(data.getFullYear())
    montarCalendario()
  }, [data])

  useEffect(() =>{
    montarCalendario()
  },[color])

  useEffect(() => {
    montarCalendario()
  }, [classes])

  return(
    <div className={styles.conteiner}>
      <Cabecalho meses={meses}/>
      <div className={styles.semanas}>
        <div className={styles.diasSemana}>
          <div>
            <p>dom</p>
          </div>
          <div>
            <p>seg</p>
          </div>
          <div>
            <p>ter</p>
          </div>
          <div>
            <p>qua</p>
          </div>
          <div>
            <p>qui</p>
          </div>
          <div>
            <p>sex</p>
          </div>
          <div>
            <p>sab</p>
          </div>
        </div>
        {
          classes.length > 0 &&(
            <div className={styles.dias}>
              {
                calendarioInfos ? (
                  calendarioInfos.map((dia, key) => (
                    <div key={key} style={dia.styles}>
                      {
                        dia.mesAtual ? (
                          dia.selecionado ? (
                            <p className={styles.selecionado}>
                              {dia.dia}<i></i>
                            </p>
                          ) : (
                            <p>
                              {dia.dia}
                            </p>
                          )
                        ) : (
                          <p className={styles.outroMes}>
                            {dia.dia}
                          </p>
                        ) 
                      }
                    </div>
                  ))
                ) : (
                  <div className={styles.dias}></div> //landing page
                )
              }
            </div>
          )
        }
      </div>
    </div>
  )
}