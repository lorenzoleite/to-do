import { Trash } from 'phosphor-react'

import styles from './Todo.module.css'

type TodoProps = {
  message: string
  checked: boolean
}

export function Todo({ message, checked }: TodoProps) {
  return (
    <div className={styles.todo}>
      <div className={styles.checkbox}>
        <input type="checkbox" name="" id="todo-id" />
        <label htmlFor="todo-id" className="radio-label">
          {message}
        </label>
      </div>

      <div className={styles.deleteIcon}>
        <Trash size="1.25rem" />
      </div>
    </div>
  )
}
