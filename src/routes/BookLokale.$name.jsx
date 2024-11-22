import { createFileRoute } from '@tanstack/react-router'
import BookLokale from '../components/booklokale/BookLokale'
import Steps from '../components/booklokale/steps'

export const Route = createFileRoute('/BookLokale/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Steps/>
      <BookLokale />

    </div>
  )
}
