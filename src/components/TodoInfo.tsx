import styles from './TodoInfo.module.css'

type TodoInfoProps = {
  created: number
}

export function TodoInfo({ created }: TodoInfoProps) {
  return (
    <div className={styles.todoInfo}>
      <div>
        <p className={styles.todoCreated}>Tarefas criadas</p>
        <span>{created}</span>
      </div>
      <div>
        <p className={styles.todoDone}>Concluídas</p>
        <span>2 de 5</span>
      </div>
    </div>
  )
}
