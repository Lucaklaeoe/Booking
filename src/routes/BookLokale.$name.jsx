import { createFileRoute } from '@tanstack/react-router'
import BookLokale from '../components/BookLokale'
import Confirm from '../components/popup/confirm'

export const Route = createFileRoute('/BookLokale/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  const {name} =Route.useParams()
  return (
    <div>
      
      <BookLokale name={name} />
      <Confirm name={name}/>
    </div>
  )
}
