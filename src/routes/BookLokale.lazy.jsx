import { createLazyFileRoute } from '@tanstack/react-router'
import BookLokale from './../components/BookLokale'
import { useRouteContext } from '@tanstack/react-router'
export const Route = createLazyFileRoute('/BookLokale')({
  component: RouteComponent,
})

function RouteComponent() {
  const { params } = useRouteContext()
  const lokaleName = params.lokaleName

  return (
    <div>
      <h1> Grupperum -{lokaleName}</h1>
      <BookLokale />
    </div>
  )
}
