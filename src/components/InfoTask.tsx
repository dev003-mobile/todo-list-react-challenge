import { Task } from "./Task"
import styles from "./InfoTask.module.css"

type Props = {
  taskCreated: number
  completedTask: number
}

export function InfoTask({ taskCreated, completedTask} : Props) {
  return (
    <div className={styles.infoTask}>
      <Task title="Tarefas criadas" taskCounter={taskCreated}/>
      <Task title="Concluídas" taskCounter={completedTask} type="SECONDARY"/>
    </div>
  )
}