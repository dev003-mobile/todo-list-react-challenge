import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { InfoTask } from "./components/InfoTask"

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <InfoTask />
    </div>
  )
}