import { useFilter } from '../hooks/useFilter'

export const Tabs = ({ filterTasks }) => {
  const { filter, changeFilter } = useFilter({ filterTasks })

  return (
    <ul className='tabs'>
      <li className='tab__item'>
        <button
          className={filter === 'all' ? 'active' : ''}
          type='button'
          onClick={() => changeFilter('all')}
        >
          Todas
        </button>
      </li>
      <li className='tab__item'>
        <button
          className={filter === 'active' ? 'active' : ''}
          type='button'
          onClick={() => changeFilter('active')}
        >
          Activas
        </button>
      </li>
      <li className='tab__item'>
        <button
          className={filter === 'completed' ? 'active' : ''}
          type='button'
          onClick={() => changeFilter('completed')}
        >
          Terminadas
        </button>
      </li>
    </ul>
  )
}
