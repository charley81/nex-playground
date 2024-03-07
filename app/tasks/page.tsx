import TaskForm from '@/components/tasks/task-form'
import TaskList from '@/components/tasks/task-list'

export default function TasksPage() {
  return (
    <div className=" max-w-xl mx-auto">
      <TaskForm />
      <TaskList />
    </div>
  )
}
