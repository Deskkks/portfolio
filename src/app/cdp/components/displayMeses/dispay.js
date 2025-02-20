import { useContext } from "react";
import dataContext from "../../context/data";
import Cabecalho from "../cabecalho/cabecalho";
import styles from "./display.module.css"

export default function DisplayMeses() {
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro', 'Fevereiro', 'Março', 'Abril']

  const {ano, setData, Display, setDisplay} = useContext(dataContext);

  return(
    <div className={styles.conteiner}>
      <Cabecalho meses={meses}/>
      <div className={styles.conteinerCard}>
        {
          meses.map((mes, key) => (
            key > 11 ? (
              <div className={`${styles.card} ${styles.outroMes}`} key={key} onClick={() => {
                console.log(new Date(ano, key, 1))
                setData(new Date(ano, key, 1))
                Display.btnMes(setDisplay)
              }}>
                {mes}
              </div>
            ) : (
              <div className={styles.card} key={key} onClick={() => {
                setData(new Date(ano, key))
                Display.btnMes(setDisplay)
              }}>
                {mes}
              </div>
            )
          ))
        }
        </div>
    </div>
  )
}