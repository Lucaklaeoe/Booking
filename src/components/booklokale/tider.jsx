import { Button } from '@mantine/core';

const timeStyle = {
  width: "45%",
  padding: "10px 0",
}

function Tider({setStepper, start, end, status}) {
  const handleClick = (index) => {
    setStepper("2");
  };


  const color = "green";
  if(status == "optaget"){
    color = "yellow";
  }
  else if(status == "teacher"){
    color = "red";
  }
   
  return(
    <div style={timeStyle}>
      <Button
        style={{width:"100%"}}
        color={color}
        onClick={() => handleClick()}> {start} - {end}
      </Button>
    </div>
  )
}

export default Tider