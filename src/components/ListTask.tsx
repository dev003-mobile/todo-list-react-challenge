import { useState } from "react"
import styles from "./ListTask.module.css"
import { Trash, Check } from "@phosphor-icons/react"

type Props = {
  task: string
  isSelected?: boolean
  onRemove?: () => void
}

export function ListTask({ task, isSelected = false, onRemove} : Props) {
  const [selectedTask, setSelectedTask] = useState<boolean>(isSelected)

  function handleSelectedTask() {
    setSelectedTask((prevState) => prevState = !(prevState))
  }
  
  return (
    <div className={styles.listTask}>
      <div className={styles.task}>
        <div className={styles.containerStart}>
          <div
            onClick={handleSelectedTask}
            className={ selectedTask ? styles.checkboxSelected : styles.checkbox}
          >
            <Check className={ selectedTask ? styles.checkIconSelected : styles.checkIcon}/>
          </div>
          <span className={selectedTask ? styles.titleSelected : styles.title}> { task } </span>
        </div>
        <Trash className={styles.trash} onClick={onRemove}/>
      </div>
    </div>
  )
}