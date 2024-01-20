import styles from "./Task.module.css"

type TaskType = "PRIMARY" | "SECONDARY"

type Props = {
  title: string
  taskCounter: number
  type?: TaskType
}

export function Task({ title, taskCounter, type = "PRIMARY" } : Props) {
  return (
    <div className={styles.task}>
      <span  className={ type === "PRIMARY" ? styles.primaryTitle : styles.secondaryTitle}> { title } </span>
      <div> { taskCounter } </div>
    </div>
  )
}