import { createLazyFileRoute } from '@tanstack/react-router'
import Login from '../components/login'

export const Route = createLazyFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Login />
    </div>
  )
}
