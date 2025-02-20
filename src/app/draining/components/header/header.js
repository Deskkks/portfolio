import styles from "./header.module.css"
import Button from "../button/button";
import Link from "next/link";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Header() {

  const cookieStore = await cookies()
  const login = cookieStore.get('login')

  return(
    <header className={styles.header}>
      <Link href={"/draining"}>
        <div className={styles.logo}>
          <Image
            src={"/logo.jpg"}
            width={300}
            height={300}
            alt="Logo draining"
          />
          <div>
            <h1>Draining</h1>
            <h2>System</h2>
          </div>
        </div>
      </Link>
      <div className={styles.conteiner}>
        { login ? (
          <>
            <Link className={styles.button} href={"/draining/dashboard"}>
              <Button text={"DashBoard"}/>
            </Link>
            <Link href={"/api/user/logout"} className={styles.button}>
              <Button text={"Sair"}/>
            </Link>
          </>
        ) : (
          <Link href={"draining/login"} className={styles.button}>
            <Button text={"Entrar"}/>
          </Link>
        )}
        <Link href={"/draining/sobre"} className={styles.button}>
          <Button text={"Sobre"}/>
        </Link>
      </div>
  </header>
  )
}