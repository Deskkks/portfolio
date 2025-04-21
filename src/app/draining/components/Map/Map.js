"use client"

import "leaflet/dist/leaflet.css"
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import style from "./map.module.css"
import L from "leaflet"
import { MapContainer, Marker, TileLayer, ZoomControl } from 'react-leaflet'
import { fromAddress } from 'react-geocode';
import { useEffect, useState } from 'react';

export default function Map({Search}){
  
  const [data, setData] = useState([])
  const [bueiros, setBueiros] = useState([])

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

  var IconTest = L.Icon.extend({
    options: {
      iconSize: [20, 30],
      iconAnchor: [10, 30]
    }
  })

  var IconV = new IconTest({iconUrl: "markerV.png"})
  var IconM = new IconTest({iconUrl: "markerM.png"})
  var IconC = new IconTest({iconUrl: "markerC.png"})

  useEffect(() => {
    if(data.length > 0){
      data.map((bueiro) => {
        fromAddress(`${bueiro.logradouro}, ${bueiro.numero}, ${bueiro.cidade} - ${bueiro.UF}, ${bueiro.cep}`)
        .then(({results}) => {
          var icon
          if(bueiro.situacao === "vazio"){
            icon = IconV
          }
          if(bueiro.situacao === "medio"){
            icon = IconM
          }
          if(bueiro.situacao === "cheio"){
            icon = IconC
          }
          const { lat, lng } = results[0].geometry.location
          const newMarker = [lat,lng]
          setBueiros(l => [...l, {position:newMarker, icon:icon}])
        })
      })
    }
  }, [data])
  
  return(
    <div className={style.map}>
      <MapContainer center={[-23.547754, -46.648428]} zoom={14} doubleClickZoom={false} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        {
          bueiros.length > 0 && (
            bueiros.map((bueiro, index) => ( 
              <Marker icon={bueiro.icon} position={bueiro.position} key={index}></Marker>
            ))
          )
        }
        {
          Search && <Search/>
        }
      </MapContainer>
    </div>
  )
}