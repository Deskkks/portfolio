import Link from "next/link";
import Layout from "./components/layout"
import styles from "./home.module.css"
import Button from "./components/button/button";

export default function Home(){
  return(
    <Layout>
      <main className={styles.main}>
        <div className={styles.conteiner}>
          <div>
            <p>Marque como foi seus dias.</p>
            <p>Relembre como foi seu ano.</p>
          </div>
          <div className={styles.button}>
            <Link href="cdp/calendario"><Button>Cadastrar</Button></Link>
          </div>
        </div>
      </main>
    </Layout>
    
  )
}