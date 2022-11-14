import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Trash } from 'phosphor-react'

import styles from './Todo.module.css'

type TodoProps = {
  id: string
  message: string
  checked: boolean
  handleCheckedTodo: (id: string) => void
  handleDeleteTodo: (id: string) => void
}

export function Todo({
  id,
  message,
  checked,
  handleCheckedTodo,
  handleDeleteTodo
}: TodoProps) {
  return (
    <div className={styles.todo}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          name={message}
          id={id}
          defaultChecked={checked}
          onChange={() => handleCheckedTodo(id)}
        />
        <label className={checked ? styles.labelChecked : ''} htmlFor={id}>
          {message}
        </label>
      </div>

      <div className={styles.deleteIcon} onClick={() => handleDeleteTodo(id)}>
        <Trash size="1.25rem" />
      </div>
    </div>
  )
}
