'use client'
import { Trash2 } from 'lucide-react'
import { deleteTask } from '@/utils/actions'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} className="flex items-center justify-center">
      <Trash2 className="text-red-600 hover:cursor-pointer" />
    </button>
  )
}

export default function DeleteForm({ id }: { id: string }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  )
}
