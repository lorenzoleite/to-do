import { PlusCircle } from 'phosphor-react'

import styles from './SearchBar.module.css'

export function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size="1rem" />
      </button>
    </div>
  )
}
