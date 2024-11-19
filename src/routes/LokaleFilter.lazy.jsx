import { createLazyFileRoute } from '@tanstack/react-router'
import LokaleFilter from './../components/LokaleFilter'

export const Route = createLazyFileRoute('/LokaleFilter')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <LokaleFilter />
    </div>
  )
}
