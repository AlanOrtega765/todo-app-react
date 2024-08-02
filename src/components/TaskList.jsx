/* eslint-disable multiline-ternary */
import { EditIcon } from './icons/EditIcon'
import { DeleteIcon } from './icons/DeleteIcon'

export const TaskList = ({
  tasks,
  deleteTask,
  openEditModal,
  changeTaskState
}) => {
  const hasTasks = tasks.length > 0

  const onDeleteTask = (taskId) => deleteTask(taskId)

  const onEditTask = (task) => openEditModal(task)

  const toggleCompleted = (task) => changeTaskState(task)

  const getTasksList = () => {
    return (
      <ul className='list'>
        {tasks.map((task) => (
          <li key={task.id} className='list__item'>
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => toggleCompleted(task)}
            />

            <strong>{task.text}</strong>

            <div className='list__actions'>
              <button type='button' onClick={() => onEditTask(task)}>
                <EditIcon />
              </button>
              <button type='button' onClick={() => onDeleteTask(task.id)}>
                <DeleteIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return hasTasks ? (
    getTasksList()
  ) : (
    <p className='no-tasks'>No hay tareas disponibles.</p>
  )
}
