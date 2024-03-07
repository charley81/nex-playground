import prisma from '@/utils/db'
import { TaskType } from '@/types/types'
import { getAllTasks } from '@/utils/actions'

export default async function TaskList() {
  const tasks = await getAllTasks()

  if (tasks.length === 0) {
    return <h2>No tasks found....</h2>
  }

  return (
    <ul>
      {tasks.map((task: TaskType) => (
        <li key={task.id}></li>
      ))}
    </ul>
  )
}
