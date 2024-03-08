import { TaskType } from '@/types/types'
import { getAllTasks } from '@/utils/actions'
import Link from 'next/link'
import DeleteForm from './delete-form'
import { Pencil } from 'lucide-react'

export default async function TaskList() {
  const tasks = await getAllTasks()

  if (tasks.length === 0) {
    return <h2>No tasks found....</h2>
  }

  return (
    <ul>
      {tasks.map((task: TaskType) => (
        <li
          key={task.id}
          className="flex justify-between items-center p-4 border mb-4 rounded-lg shadow-lg"
        >
          <h2
            className={`text-lg capitalize ${task.completed && 'line-through'}`}
          >
            {task.content}
          </h2>

          <div className="flex items-center gap-4">
            <Link href={`/tasks/${task.id}`}>
              <Pencil className="text-gray-700" />
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  )
}
