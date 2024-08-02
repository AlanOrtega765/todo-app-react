import { useEffect, useState } from 'react'

export const useFilter = ({ filterTasks }) => {
  const [filter, setFilter] = useState('all')

  const changeFilter = (filterText) => setFilter(filterText)

  useEffect(() => {
    filterTasks(filter)
  }, [filter])

  return { changeFilter, filter }
}
