import style from "./login.module.css"
import Button from "../components/button/button"
import Layout from "../components/layout"

export default function Login() {

  return(
    <Layout>
      <main className={style.main}>
        <div id={style.login}>
          <form action={"/api/user"} method="post">
            <div>
              <label className={style.label} name="email">E-mail:</label>
              <input
              className={style.input}
              name="email"
              autoComplete="off"
              />
            </div>
            <div>
              <label className={style.label} name="senha">Senha:</label>
              <input
              className={style.input}
              type="password"
              name="senha"
              />
            </div>
            <input type="hidden" name="app" value={"draining"}/>
            <div className={style.button}>
              <Button text={"Entrar"}/>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  )
}