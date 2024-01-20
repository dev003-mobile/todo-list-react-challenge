import { Task } from "./Task"
import styles from "./InfoTask.module.css"

export function InfoTask() {
  return (
    <div className={styles.infoTask}>
      <Task title="Tarefas criadas" taskCounter={0}/>
      <Task title="Concluídas" taskCounter={0} type="SECONDARY"/>
    </div>
  )
}