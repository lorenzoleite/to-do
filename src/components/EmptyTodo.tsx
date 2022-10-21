import { ClipboardText } from 'phosphor-react'

import styles from './EmptyTodo.module.css'

export function EmptyTodo() {
  return (
    <div className={styles.emptyTodo}>
      <ClipboardText size="3.5rem" color="var(--gray-400)" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
