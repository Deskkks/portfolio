import Link from "next/link";
import styles from "./header.module.css"
import { cookies } from "next/headers";

export default async function Header(){

  const cookieStore = await cookies()
  const login = cookieStore.get('login')

  return(
    <header className={styles.header}>
      <div>
        <Link href="/cdp"><h1>Calendario de emoções</h1></Link>
      </div>
      <nav className={styles.nav}>
        <div>
          <Link href="/cdp/sobre">Sobre</Link>
          {
            login ? (
              <>
                <Link href="/cdp/calendario">Calendario</Link>
                <Link href="/api/user/logout">Sair</Link>
              </>
            ) : (
              <>
                <Link href="/cdp/login">Login</Link>
                <Link href="registro">Registrar</Link>
              </>
            )
          }
        </div>
      </nav>
    </header>
  )
}