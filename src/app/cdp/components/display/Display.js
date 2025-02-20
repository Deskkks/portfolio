import DisplayCalendario from "../displayCalendario/display"
import DisplayAnos from "../displayAnos/display"
import DisplayMeses from "../displayMeses/dispay"

const Anos = {
  id:"anos",
  Display:(<DisplayAnos/>),
  prev(setData, mes, ano, setAno){
    let a = ano-16
    setAno(ano-16)
    setData(new Date(a,0))
  },
  prox(setData, mes, ano, setAno){
    let a = ano+16
    setAno(ano+16)
    setData(new Date(a,0))

  },
  btnAno(setDisplay){
    setDisplay(Meses)
  }
}

const Meses = {
  id:"meses",
  Display:(<DisplayMeses/>)
  ,
  prev(setData, mes, ano, setAno){
    let a = ano-1
    setAno(a)
    setData(new Date(a, mes))
  },
  prox(setData, mes, ano, setAno){
    let a = ano+1
    setAno(a)
    
    setData(new Date(a, mes))
  },
  btnMes(setDisplay) {
    setDisplay(Calendario)
  },
  btnAno(setDisplay) {
    setDisplay(Anos)
  }
}

const Calendario = {
  id:"calendario",
  Display:(<DisplayCalendario/>),
  prev(setData, mes, ano){
    setData(new Date(ano, mes-1))
  },
  prox(setData, mes, ano){
    setData(new Date(ano, mes+1))
  },
  btnMes(setDisplay) {
    setDisplay(Meses)
  },
  btnAno(setDisplay){
    setDisplay(Anos)
  }
}

export default Calendario