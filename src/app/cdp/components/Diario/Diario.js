"use client"

import { useContext, useState } from "react"
import styles from "./diario.module.css"
import dataContext from "../../context/data";
import Button from "../button/button";

export default function Diario() {

  const {setColor, cores, data} = useContext(dataContext);
  let mes = data.getMonth()

  const [checkmarks, setCheckmarks] = useState (
    [
      {
        value:cores[0].value,
        styles:{
          backgroundColor:cores[0].backgroundColor,
          opacity: 0.3,
          cursor: "pointer"
        }
      },
      {
        value:cores[1].value,
        styles:{
          backgroundColor:cores[1].backgroundColor,
          opacity: 0.3,
          cursor: "pointer"
        }
        
      },
      {
        value:cores[2].value,
        styles:{
          backgroundColor:cores[2].backgroundColor,
          opacity: 0.3,
          cursor: "pointer"
        }
      },
      {
        value:cores[3].value,
        styles:{
          backgroundColor:cores[3].backgroundColor,
          opacity: 0.3,
          cursor: "pointer"
        }
      },
      {
        value:cores[4].value,
        styles:{
          backgroundColor:cores[4].backgroundColor,
          opacity: 0.3,
          cursor: "pointer"
        }
      },
      {
        value:cores[5].value,
        styles:{
          backgroundColor:cores[5].backgroundColor,
          opacity: 0.3,
          cursor: "pointer"
        }
      },
      {
        value:cores[6].value,
        styles:{
          backgroundColor:cores[6].backgroundColor,
          opacity: 0.3,
          cursor: "pointer"
        }
      }
    ]
  )

  function handleHover(value) {
    const newCheckmarks = checkmarks.map((check) => {
      if(check.styles.opacity === 1){
        return check
      }
      if(check.value === value){
        return {
          ...check,
          styles: {
            ...check.styles,
            opacity:0.6
          }
        }
      }
      return {
        ...check,
        styles: {
          ...check.styles,
          opacity:0.3
        }
      }
    })
    setCheckmarks(newCheckmarks)
  }

  function handleHoverOff(value) {
    const newCheckmarks = checkmarks.map((check) => {
      if(check.styles.opacity === 0.6){
        if(check.value === value){
          return {
            ...check,
            styles: {
              ...check.styles,
              opacity:0.3
            }
          }
        }
      }
      return check
    })
    setCheckmarks(newCheckmarks)
  }

  function handleClick(value){
    const newCheckmarks = checkmarks.map((check) => {
      if(check.styles.opacity === 1){
        setColor("#FFFFFF")
        return {
          ...check,
          styles: {
            ...check.styles,
            opacity:0.3
          }
        }
      }
      if(check.value === value){
        setColor(check.styles.backgroundColor)
        return {
          ...check,
          styles: {
            ...check.styles,
            opacity:1
          }
        }
      }
      return check
    })
    setCheckmarks(newCheckmarks)
  }

  return(
    <div className={styles.conteiner}>
      <form action="/api/cdp" method="post" className={styles.form}>
        {
          checkmarks.map((check, key) => (
            <label key={key}>
              <input className={styles.input} type="radio" name="classe" value={check.value}/>
              <span
                className={styles.checkmark}
                onMouseEnter={() => handleHover(check.value)}
                onMouseOut={() => handleHoverOff(check.value)}
                onClick={() => handleClick(check.value)}
                style={check.styles}
              />
            </label>
          ))
        }
        <div className={styles.text}>
          <textarea name="descricao" cols="30" rows="10" placeholder="descreva seu dia"/>
        </div>
        <input type="hidden" name="data" value={`${data.getFullYear()}, ${mes+1}, ${data.getDate()}`}/>
        <div type="submit" className={styles.button}>
          <Button>
            Salvar
          </Button>
        </div>
      </form>
    </div>
  )
}