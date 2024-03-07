import { Trash2 } from 'lucide-react'

export default function DeleteForm({ id }: { id: string }) {
  return (
    <div>
      <Trash2 className="text-red-600 hover:cursor-pointer" />
    </div>
  )
}
