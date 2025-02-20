import style from "./admin.module.css"
import Layout from "../components/layout"
import Card from "../components/card/Card"

export default function Admin() {

  return(
    <Layout>
      <main className={style.main}>
        <div className={style.conteiner}>          
          <Card/>
        </div>
      </main>
    </Layout>
  )
}