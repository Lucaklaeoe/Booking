import { createLazyFileRoute, Navigate, useRouteContext } from '@tanstack/react-router'
import BookLokale from '../components/booklokale/BookLokale'
import Steps from '../components/booklokale/steps'
import { useState } from 'react'

export const Route = createLazyFileRoute('/BookLokale')({
  component: RouteComponent,
})

function RouteComponent() {

  const [stepper, setStepper] = useState("1");

  const context = useRouteContext({ from: "/BookLokale" });
  if(context.bookingInfo == undefined || context.bookingInfo == null || context.bookingInfo == ""){
    return(
      <div>
        <Navigate to="/"></Navigate>
      </div>
    )
  }

  return (
    <div style={{margin:"50px auto 0 auto", width:"1164px"}}>
      <Steps
        active={stepper}
      />
      <BookLokale setStepper={setStepper}/>
    </div>
  )
}
