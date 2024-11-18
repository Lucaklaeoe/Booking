import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/ownBooking')({
  component: ownBooking,
})

function ownBooking() {

  return (
    <div>
      <h3>Welcome Home!!!!</h3>
    </div>
  );
}
