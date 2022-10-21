import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { TodoInfo } from './components/TodoInfo'
import { EmptyTodo } from './components/EmptyTodo'
import { Todo } from './components/Todo'

import styles from './App.module.css'

import './global.css'

export function App() {
  const todos = [
    {
      id: 1,
      message:
        'Fazer arroz. Duis vel sed fames integer. Duis vel sed fames integer. Duis vel sed fames integer. Duis vel sed fames integer. Duis vel sed fames integer. Duis vel sed fames integer. Duis vel sed fames integer. Duis vel sed fames integer. Duis vel sed fames integer. Duis vel sed fames integer. Duis vel sed fames integer.',
      checked: false
    },
    {
      id: 2,
      message:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: false
    },
    { id: 3, message: 'Fazer feijão', checked: false }
  ]
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SearchBar />

        <TodoInfo created={todos.length} />

        {todos.length === 0 && <EmptyTodo />}

        {todos.length !== 0 &&
          todos.map(todo => {
            return (
              <div key={todo.id}>
                <Todo message={todo.message} checked={todo.checked} />
              </div>
            )
          })}
      </div>
    </div>
  )
}
