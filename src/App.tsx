import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { ListTask } from "./components/ListTask"
import { InfoTask } from "./components/InfoTask"
import { EmptyTasks } from "./components/EmptyTasks"
import { ChangeEvent, FormEvent, useState } from "react"

type Task = {
  task: string
  isSelected?: boolean
}

export function App() {
  const [taskList, setTaskList] = useState<Array<Task>>([])
  const [task, setTask] = useState<Task>({task: "", isSelected: false})
  const [taskCreatedCounter, setTaskCreatedCounter] = useState<number>(0)

  function handleNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    setTask({task: event.target.value})
    event.target.setCustomValidity("")
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    setTaskList((prevState) => [...prevState, task])
    setTask({task: "", isSelected: false})
    setTaskCreatedCounter((prevState) => prevState + 1)
  }

  function handleRemoveTask(index: number) {
    setTaskList((prevState) => prevState.filter((_, key) => key !== index))
    setTaskCreatedCounter((prevState) => prevState - 1)
  }

  return (
    <div className={styles.wrapper}>
      <Header 
        value={task?.task}
        onChange={handleNewTask}
        onSubmit={handleCreateNewTask}
      />

      <InfoTask 
        taskCreated={taskCreatedCounter}
        completedTask={0}
      />

      { taskList.length === 0  && <EmptyTasks /> }

      { taskList.length !== 0 && taskList.map((item, index) => {
        return <ListTask 
          key={index.toString()}
          task={item.task}
          isSelected={item.isSelected}
          onRemove={() => handleRemoveTask(index)}
        />
      })}
    </div>
  )
}