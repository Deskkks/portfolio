"use client"

import { useEffect, useState } from "react"
import style from '../../dashboard/admin.module.css'
import Button from "../button/button"

export default function Card() {

  const [data, setData] = useState([{}])

  async function onSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)

    fetch('/api/bueiro', {
      method: 'POST',
      body: formData,
    })
    .then(res => {
      if(res.type === Array){
        res.json().then(data => {
          setData(data)
        })
      }
    })
    .catch(() => {
    })
  }

  function getData() {
    fetch("/api/bueiro")
    .then(res => {
      res.json().then(data => {
        setData(data)
      })
    })
    .catch(() => {
    })
  }

  useEffect(() =>{
    getData();
  }, [])

  useEffect(() => {
    if(data.length <= 16) {
      document.documentElement.style.setProperty("--padding--card", "12px")
    }else {
      document.documentElement.style.setProperty("--padding--card", "0px")
    }
  }, [data])
  
  return(
    <>
      <div className={style.conteinerTitle}>
          <form className={style.form} onSubmit={onSubmit} method="post">
          <input
            className={style.input}
            type="text"
            autoComplete="off"
            name="search"
          />
          <Button text="Buscar"/>
        </form>
      </div>
      <div className={style.conteinerCard}>
        {console.log(data)}
        {
          data.length > 0 && (
            data.map((bueiro,index) => (
              <div className={style.card} key={index}>
                <p>Endereço: {bueiro.logradouro}, {bueiro.numero}, {bueiro.cidade} - {bueiro.UF}, {bueiro.cep}</p>
                <p>Situação: {bueiro.situacao}</p>
              </div>
            ))
          )
        }
      </div>
    </>
  )
}