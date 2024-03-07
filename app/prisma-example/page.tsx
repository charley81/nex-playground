import { getAllTasks } from '@/utils/actions'

export default async function PrismaExample() {
  const tasks = await getAllTasks()

  if (tasks.length === 0) {
    return <h2 className="text-4xl mb-8">No tasks found...</h2>
  }

  return (
    <div>
      <h1 className="text-4xl mb-8">Prisma Example</h1>
      {tasks.map(task => (
        <h2 key={task.id}>{task.content}</h2>
      ))}
    </div>
  )
}
