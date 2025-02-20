"use client"

import Button from "../button/button";
import { useMap } from "react-leaflet";
import { useState, useEffect } from 'react';
import style from "./search.module.css"
import { fromAddress, setDefaults } from 'react-geocode';

setDefaults({
  key:"AIzaSyCUhZbPJk-7DKrMhlmArrH-45k5rgnalz8",
  language:"pt",
  region:"br"
})

export default function SearchMap() {

  const [search, setSearch] = useState("")
  const [searchRes, setSearchRes] = useState([])

  useEffect(() => {
    setSearchRes([])
    if(search.length > 5) {
      fromAddress(search)
      .then(({results}) => {
        if(results){
          for(var i=0; i< results.length; i++) {
            const newAddress = results[i].formatted_address
            setSearchRes(s => [...s, newAddress])
          }
        }
      })
      .catch(() => {
        
      })
    }
  }, [search])

  const handlesubmit = (map) => (e) => {
    e.preventDefault()
    if(searchRes[0]){
      fromAddress(searchRes[0])
      .then(({results}) => {
        const { lat, lng } = results[0].geometry.location
        const newCenter = [lat,lng]
        map.setView(newCenter)
      })
    }
  }

  const map = useMap()
  return (
    <div className={`topleft leaflet-control ${style.search}`}>
      <form onSubmit={handlesubmit(map)}>
        <div className={`leaflet-control ${style.select}`}>
          <input
            className={style.input}
            type="text"
            placeholder="Endereço"
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            autoFocus
          />
          <div className={`leaflet-control ${style.optionConteiner}`}>
            {searchRes.length > 0 && (
              searchRes.map((endereço, index) => (
                search !== endereço && (
                  <div key={index}>
                    <p onClick={() => setSearch(endereço)}>{endereço}</p>
                  </div>
                )
              ))
            )}
          </div>
        </div>
        <div className="leaflet-control">
          <Button text="Buscar"/> 
        </div>
      </form>
    </div>
  )
}