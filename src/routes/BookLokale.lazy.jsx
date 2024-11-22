import { createLazyFileRoute } from '@tanstack/react-router'
import BookLokale from '../components/booklokale/BookLokale'
import Steps from '../components/booklokale/steps'
import { useRouteContext } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/BookLokale')({
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext({ from: "/BookLokale" });

  console.log(context.bookingInfo)

  return (
    <div>
      <Steps />
      <BookLokale />
    </div>
  )
}
