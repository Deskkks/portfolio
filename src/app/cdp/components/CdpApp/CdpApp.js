"use client"

import Diario from "../Diario/Diario"
import { useEffect, useState } from "react"
import dataContext from "../../context/data"
import Calendario from "../display/Display"


export default function App(){

  const [Display, setDisplay] = useState({})
  
  const [data, setData] = useState(new Date)
  const [ano, setAno] = useState(data.getFullYear())
  const [color, setColor] = useState("#FFFFFF")

  const cores = [
    {
      value: "podre",
      backgroundColor: "#000000"
    },
    {
      value: "pessimo",
      backgroundColor: "#8b0000"
      
    },
    {
      value: "ruim",
      backgroundColor: "#ff8800"
    },
    {
      value: "mediano",
      backgroundColor: "#e1ff00"
    },
    {
      value: "bom",
      backgroundColor: "#55ff00"
    },
    {
      value: "incrivel",
      backgroundColor: "#0062ff"
    },
    {
      value: "perfeito",
      backgroundColor: "#ff0099"
    }
  ]
  
  useEffect(() => {
    setDisplay(Calendario)
  }, [])

  return(
    <dataContext.Provider value={{data, setData, ano, setAno, Display, setDisplay, color, setColor, cores}}>
      {Display.Display}
      <Diario />
    </dataContext.Provider>
  )
}