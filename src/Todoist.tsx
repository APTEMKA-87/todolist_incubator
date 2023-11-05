import { FilterValueType } from './App'

type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  task: TaskType[]
  removeTask: (taskId: number) => void
  changeFilter: (value: FilterValueType) => void
}

export function Todoist(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.task.map((task) => {
          return (
            <li>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
              <button
                onClick={() => {
                  props.removeTask(task.id)
                }}
              >
                X
              </button>
            </li>
          )
        })}
      </ul>
      <div>
        <button
          onClick={() => {
            props.changeFilter('all')
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            props.changeFilter('active')
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            props.changeFilter('completed')
          }}
        >
          Completed
        </button>
      </div>
    </div>
  )
}
