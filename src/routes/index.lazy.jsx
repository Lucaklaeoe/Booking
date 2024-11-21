import LokaleFilter from './../components/LokaleFilter'
import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'
import { Navigate } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  //er loggede ind?
  const context = useRouteContext({ from: "/" });
  if(context.userInfo == undefined || context.userInfo == null || context.userInfo == ""){
    return(
      <div>
        <Navigate to="/login"></Navigate>
      </div>
    )    
  }

  return (
    <div>
      <LokaleFilter />
    </div>
  )
}
