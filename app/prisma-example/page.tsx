import prisma from '@/utils/db'
import { TaskType } from '@/types/types'

const prismaHandlers = async (): Promise<TaskType[]> => {
  console.log('prisma example')

  // await prisma.task.create({
  //   data: {
  //     content: 'wake up'
  //   }
  // })

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return allTasks
}

export default async function PrismaExample() {
  const tasks = await prismaHandlers()

  if (tasks.length === 0) {
    return <h2>No tasks found...</h2>
  }

  return (
    <div>
      <h1>Prisma Example</h1>
      {tasks.map(task => (
        <h2 key={task.id}>{task.content}</h2>
      ))}
    </div>
  )
}
