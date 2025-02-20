import styles from './erros.module.css'

export default function Erros({erros}) {
  return(
    <div>
      {erros.length > 0 && (
        erros.map(erro => (
          <div className={styles.error}>
            {erro}
          </div>
        ))
      )}
    </div>
  )
}