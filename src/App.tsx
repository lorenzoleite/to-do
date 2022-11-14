import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from 'phosphor-react'

import { Header } from './components/Header'
import { TodoInfo } from './components/TodoInfo'
import { EmptyTodo } from './components/EmptyTodo'
import { Todo } from './components/Todo'

import styles from './App.module.css'

import './global.css'

export interface ITodo {
  id: string
  message: string
  isChecked: boolean
}

export function App() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [newTodo, setNewTodo] = useState<string>('')

  function handleCheckedTodo(id: string) {
    const updateTodo = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isChecked: !todo.isChecked }
      }
      return todo
    })
    setTodos(updateTodo)
  }

  function handleDeleteTodo(id: string) {
    const updateTodo = todos.filter(todo => id !== todo.id)
    setTodos(updateTodo)
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value)
  }

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault()

    setTodos([...todos, { id: uuidv4(), message: newTodo, isChecked: false }])
    setNewTodo('')
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTodo} className={styles.searchBar}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTodo}
            onChange={handleNewTodoChange}
          />
          <button type="submit">
            Criar <PlusCircle size="1rem" />
          </button>
        </form>

        <TodoInfo
          created={todos.length}
          done={todos.filter(todo => todo.isChecked === true).length}
        />

        {todos.length === 0 && <EmptyTodo />}

        {todos.length !== 0 &&
          todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                message={todo.message}
                checked={todo.isChecked}
                handleCheckedTodo={handleCheckedTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            )
          })}
      </div>
    </div>
  )
}
