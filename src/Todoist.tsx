type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  task: TaskType[]
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
        <li>
          <input type="checkbox" checked={true} />
          <span>{props.task[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={true} />
          <span>J{props.task[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={false} />
          <span>{props.task[2].title}</span>
        </li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}
