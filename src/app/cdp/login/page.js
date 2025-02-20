import Button from "../components/button/button"
import Layout from "../components/layout"
import styles from "./login.module.css"

export default function Login(){
  return(
    <Layout>
      <main className={styles.main}>
        <div className={styles.login}>
          <form action={"/api/user"} method="post">
            <div>
              <label className={styles.label} name="email">E-mail:</label>
              <input
              className={styles.input}
              name="email"
              autoComplete="off"
              />
            </div>
            <div>
              <label className={styles.label} name="senha">Senha:</label>
              <input
              className={styles.input}
              type="password"
              name="senha"
              />
            </div>
            <input type="hidden" value={"cdp"} name="app"/>
            <button className={styles.button}>
              <Button>
                Entrar
              </Button>
            </button>
          </form>
        </div>
      </main>
    </Layout>
  )
}