import { useState } from 'react'
import './App.css'
import { Todoist } from './Todoist'

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ])

  let [filter, setFilter] = useState('all')

  let taskForTodoist = tasks

  if (filter === 'active') {
    taskForTodoist = tasks.filter((task) => task.isDone === false)
  }

  if (filter === 'completed') {
    taskForTodoist = tasks.filter((task) => task.isDone === true)
  }

  const changeFilter = (value: FilterValueType) => {
    setFilter(value)
  }

  const removeTask = (id: number) => {
    tasks = tasks.filter((task) => task.id !== id)
    setTasks(tasks)
  }

  return (
    <div className="App">
      <Todoist
        title="What to learn"
        task={taskForTodoist}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  )
}

export default App
