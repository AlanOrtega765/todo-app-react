import './assets/css/app.css'
import { Tabs } from './components/Tabs'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { EditModal } from './components/EditModal'
import { useTasks } from './hooks/useTasks'

export const App = () => {
  const {
    tasks,
    selectedTask,
    addTask,
    updateTask,
    closeModal,
    deleteTask,
    openEditModal,
    changeTaskState,
    filterTasks,
    filteredTasks
  } = useTasks()

  return (
    <>
      <header>
        <h1>Todo App</h1>
        <TaskForm addTask={addTask} />
      </header>

      <main>
        <div className='container'>
          <h4>{tasks.length} Tareas</h4>
          <Tabs filterTasks={filterTasks} />
        </div>
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          openEditModal={openEditModal}
          changeTaskState={changeTaskState}
        />
      </main>

      {
        selectedTask && (
          <EditModal
            task={selectedTask}
            updateTask={updateTask}
            closeModal={closeModal}
          />
        )
      }
    </>
  )
}
