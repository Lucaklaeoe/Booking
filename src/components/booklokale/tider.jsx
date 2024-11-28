import { Button } from '@mantine/core';
import { useRouteContext } from '@tanstack/react-router';

const timeStyle = {
  width: "45%",
  padding: "10px 0",
}

function Tider({setStepper, start, end, status, lokale, setActiveBooking, activeBooking, setSelectedInfo}) {
  const context = useRouteContext({ from: "/BookLokale" });
  let color = "green";
  const buttonKey = lokale + "-" + start;

  const handleClick = () => {

    if(color == "green"){
      setStepper("2");
      setActiveBooking(buttonKey);

      setSelectedInfo({lokale: lokale, startTime: start, endTime: end, isTeacher: false})

    }
    else if(color == "yellow" && context.userInfo.userdata.isTeacher){
      setStepper("2");
      setActiveBooking(buttonKey);

      setSelectedInfo({lokale: lokale, startTime: start, endTime: end, isTeacher: true})
    }
  }
  
  if(status == "optaget"){
    color = "yellow";
  }
  else if(status == "teacher"){
    color = "red";
  }
   
  return(
    <div style={timeStyle} id={buttonKey}>
      <Button
        style={{width:"100%"}}
        color={activeBooking == buttonKey ? "cyan" : color}
        onClick={() => handleClick()}> {start} - {end}
      </Button>
    </div>
  )
}

export default Tider