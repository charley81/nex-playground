'use server'

import prisma from './db'
import { revalidatePath } from 'next/cache'

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export const createTask = async (formData: FormData) => {
  const content = formData.get('content') as string

  await prisma.task.create({
    data: {
      content
    }
  })

  revalidatePath('/tasks')
}

export const deleteTask = async (formData: FormData) => {
  const id = formData.get('id') as string

  await prisma.task.delete({
    where: { id }
  })
  revalidatePath('/tasks')
}
