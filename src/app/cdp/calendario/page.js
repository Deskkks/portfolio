import styles from "./calendario.module.css"
import Layout from "../components/layout"
import CdpApp from "../components/CdpApp/CdpApp"

export default function App(){
  return(
    <Layout>
      <main className={styles.main}>
        <div className={styles.conteiner}>
          <CdpApp/>
        </div>
      </main>
    </Layout>
  )
}