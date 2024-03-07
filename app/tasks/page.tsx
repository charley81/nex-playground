import TaskForm from '@/components/task-form'
import TaskList from '@/components/task-list'

export default function TasksPage() {
  return (
    <div className=" max-w-xl mx-auto">
      <TaskForm />
      <TaskList />
    </div>
  )
}
