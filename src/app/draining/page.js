"use client"

import style from './home.module.css'
import SearchMap from './components/Search/search';
import Map from './components/Map/Map'
import Layout from "./components/layout"

export default async function Home() {
  
  return (
    <Layout>
      <main className={style.main}>
        <Map Search={SearchMap}/>
        <div className={style.infos}>
          <p>Em caso de enchentes, ligue:</p>
          <p><span className={style.circle}/>Defesa Civil (199): Peça ajuda imediata e saiba quais áreas são seguras ou onde encontrar abrigos.</p>
          <p><span className={style.circle}/>Corpo de Bombeiros (193): Para emergências graves, como resgates ou pessoas em perigo, esse é o número certo.</p>
          <p><span className={style.circle}/>Prefeitura Local: Acesse o site ou app da prefeitura para atualizações sobre áreas de risco e serviços de apoio.</p>
        </div>
      </main>
    </Layout> 
  )
}