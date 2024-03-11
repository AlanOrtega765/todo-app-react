import { useEffect, useState } from 'react'

export const Tabs = ({ filterTasks }) => {
  const [tab, setTab] = useState('all')

  const changeFilter = (filterText) => {
    setTab(filterText)
  }

  useEffect(() => {
    filterTasks(tab)
  }, [tab])

  return (
    <ul className='tabs'>
      <li className='tab__item'>
        <button className={tab === 'all' ? 'active' : ''} type='button' onClick={() => changeFilter('all')}>Todas</button>
      </li>
      <li className='tab__item'>
        <button className={tab === 'active' ? 'active' : ''} type='button' onClick={() => changeFilter('active')}>Activas</button>
      </li>
      <li className='tab__item'>
        <button className={tab === 'completed' ? 'active' : ''} type='button' onClick={() => changeFilter('completed')}>Terminadas</button>
      </li>
    </ul>
  )
}
