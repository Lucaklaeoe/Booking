import { createFileRoute } from '@tanstack/react-router'
import BookLokale from '../components/BookLokale'

export const Route = createFileRoute('/BookLokale/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  const {name} =Route.useParams()
  return (
    <div>
      
      <BookLokale name={name} />
    </div>
  )
}
