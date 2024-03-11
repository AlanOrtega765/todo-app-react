import { useState } from 'react'
import { PlusIcon } from '../components/icons/PlusIcon'

export const TaskForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTask = {
      id: crypto.randomUUID(),
      text: inputValue,
      completed: false
    }
    addTask(newTask)
    setInputValue('')
  }

  const handleChange = (event) => {
    const newInputValue = event.target.value
    setInputValue(newInputValue)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='form__input' type='text' placeholder='Agregar nueva tarea' value={inputValue} onChange={handleChange} />
      <button className='form__button' type='submit'>
        <PlusIcon />
      </button>
    </form>
  )
}
