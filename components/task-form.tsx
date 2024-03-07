import { createTask } from '@/utils/actions'
import { Button } from './ui/button'
import { Input } from '@/components/ui/input'

export default function TaskForm() {
  return (
    <form action={createTask}>
      <div className="flex mb-16">
        <Input
          type="text"
          className="rounded-tr-none rounded-br-none"
          placeholder="type here"
          name="content"
          required
        />
        <Button type="submit" className="rounded-tl-none rounded-bl-none">
          create task
        </Button>
      </div>
    </form>
  )
}
