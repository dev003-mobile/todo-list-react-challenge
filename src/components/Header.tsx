import styles from "./Header.module.css"
import logoImage from "../assets/logo.svg"
import plusImage from "../assets/plus.svg"

export function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.image} src={logoImage} />
      <div className={styles.containerInput}>
        <textarea
          className={styles.input}
          placeholder="Adicione uma nova tarefa" 
        />
        <button className={styles.button}>
          Criar
          <img src={plusImage} />
        </button>
      </div>
    </div>
  )
}