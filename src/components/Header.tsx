import { ChangeEvent, FormEvent } from "react"
import styles from "./Header.module.css"
import logoImage from "../assets/logo.svg"
import plusImage from "../assets/plus.svg"

type Props = {
  value: string
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function Header({ value, onSubmit, onChange } : Props) {

  function handleOnInvalidMessage(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Campo obrigatório")  
  }

  return (
    <div className={styles.header}>
      <img className={styles.image} src={logoImage} />
      <form className={styles.form} onSubmit={onSubmit}>
        <textarea
          required
          value={value}
          onChange={onChange}
          className={styles.input}
          onInvalid={handleOnInvalidMessage}
          placeholder="Adicione uma nova tarefa" 
        />
        <button type="submit" className={styles.button}>
          Criar
          <img src={plusImage} />
        </button>
      </form>
    </div>
  )
}