import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { InfoTask } from "./components/InfoTask"
import { EmptyTasks } from "./components/EmptyTasks"
// import { ListTask } from "./components/ListTask"

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <InfoTask />
      <EmptyTasks />
      {/* <ListTask /> */}
    </div>
  )
}