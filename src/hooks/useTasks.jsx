import { useEffect, useState } from 'react'

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const tasksFromStorage = window.localStorage.getItem('tasks')
    if (tasksFromStorage) return JSON.parse(tasksFromStorage)
    return []
  })
  const [filteredTasks, setFilteredTasks] = useState(tasks)
  const [selectedTask, setSelectedTask] = useState(null)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
    setFilteredTasks(tasks)
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  const openEditModal = (task) => {
    setSelectedTask(task)
  }

  const updateTask = (editedTaskText) => {
    setTasks(tasks.map(task => {
      if (task.id === selectedTask.id) {
        return {
          ...task,
          text: editedTaskText
        }
      }

      return task
    }))
    setSelectedTask(null)
  }

  const closeModal = () => {
    setSelectedTask(null)
  }

  const changeTaskState = (selectedTask) => {
    const newState = !selectedTask.completed
    setTasks(tasks.map(task => {
      if (task.id === selectedTask.id) {
        return {
          ...task,
          completed: newState
        }
      }
      return task
    }))
  }

  const filterTasks = (filter) => {
    if (filter === 'all') {
      setFilteredTasks(tasks)
    }

    if (filter === 'active') {
      const newTasks = tasks.filter(task => task.completed === false)
      setFilteredTasks(newTasks)
    }

    if (filter === 'completed') {
      const newTasks = tasks.filter(task => task.completed === true)
      setFilteredTasks(newTasks)
    }
  }

  return { addTask, deleteTask, openEditModal, updateTask, closeModal, changeTaskState, tasks, filterTasks, filteredTasks, selectedTask }
}
