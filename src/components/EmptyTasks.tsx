import styles from "./EmptyTasks.module.css"
import emptyTaskImage from "../assets/clipboard.svg"

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <img src={emptyTaskImage}/>
      <div className={styles.text}>
        <span className={styles.title}>Você ainda não tem tarefas cadastradas</span>
        <span className={styles.description}>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}