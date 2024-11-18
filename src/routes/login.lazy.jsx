import { createLazyFileRoute } from '@tanstack/react-router'
import Login from '../components/login'

export const Route = createLazyFileRoute('/login')({
  component: RouteComponent,
})

const loginStyle = {
  display: "flex",
  marginLeft: "138px",
  marginRight: "612px",
  marginTop: "181px",
  backgroundColor: "#D0EBFF",
}

function RouteComponent() {
  return (
    <div>
      <container style={loginStyle}>
        <Login />
      <img style={{ width: "449px" , height: "427px" , marginTop: "15px"}} src="../../public/img/login-illustation.png" alt="Illustation" />
      </container>
      
    </div>
  )
}
