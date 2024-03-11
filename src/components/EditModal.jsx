import { useState } from 'react'

export const EditModal = ({ task, updateTask, closeModal }) => {
  const [editTaskText, setEditTask] = useState(task.text)

  const handleSubmit = (event) => {
    event.preventDefault()
    updateTask(editTaskText)
  }

  const handleChange = (event) => {
    setEditTask(event.target.value)
  }

  return (
    <div className='modal'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='form__title'>Editar Tarea</h1>

        <input className='form__input' type='text' value={editTaskText} onChange={handleChange} />

        <div className='form__actions'>
          <button type='button' onClick={closeModal}>Cancelar</button>
          <button type='submit'>Confirmar</button>
        </div>
      </form>
    </div>
  )
}
