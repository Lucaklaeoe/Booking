import { createLazyFileRoute } from '@tanstack/react-router'
import BookLokale from './../components/BookLokale'

export const Route = createLazyFileRoute('/BookLokale')({
  component: RouteComponent,
})

function RouteComponent() {
 

  return (
    <div>
      
      <BookLokale />
    </div>
  )
}
