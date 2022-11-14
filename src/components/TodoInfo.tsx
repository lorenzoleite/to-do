import styles from './TodoInfo.module.css'

type TodoInfoProps = {
  created: number
  done: number
}

export function TodoInfo({ created, done }: TodoInfoProps) {
  return (
    <div className={styles.todoInfo}>
      <div>
        <p className={styles.todoCreated}>Tarefas criadas</p>
        <span>{created}</span>
      </div>
      <div>
        <p className={styles.todoDone}>Concluídas</p>
        <span>
          {done} de {created}
        </span>
      </div>
    </div>
  )
}
