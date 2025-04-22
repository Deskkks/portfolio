import styles from "./header.module.css"
import Button from "../button/button";
import Link from "next/link";
import Image from "next/image";

export default async function Header() {

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
        <Link className={styles.button} href={"/draining/dashboard"}>
          <Button text={"DashBoard"}/>
        </Link>
        <Link href={"/draining/sobre"} className={styles.button}>
          <Button text={"Sobre"}/>
        </Link>
      </div>
  </header>
  )
}