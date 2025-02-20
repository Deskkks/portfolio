import { PiHouseBold } from "react-icons/pi";
import styles from "./button.module.css"
import Link from "next/link";

export default function Button() {
  return(
    <div className={styles.conteiner}>
      <Link href={"/"}>
        <div className={styles.button}>
          <PiHouseBold />
        </div>
      </Link>
    </div>
  )
}