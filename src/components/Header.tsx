import styles from "./Header.module.css"
import logoImage from "../assets/logo.svg"

export function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.image} src={logoImage} />
    </div>
  )
}