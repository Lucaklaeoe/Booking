import { useState } from 'react';
import { Stepper, Button } from '@mantine/core';
import classes from './Demo.module.css';
import  './style.css';

const StepperStyle = {
    width: '700px',
}
function BookLokale() {
  const [active, setActive] = useState(1);

  return (<div >
    <Stepper style={StepperStyle} classNames={classes} active={active} onStepClick={setActive}>
      <Stepper.Step  description="Book lokale " />
      <Stepper.Step  description="Vælg tidspunkt" />
      <Stepper.Step  description="Booking færdig" />
    </Stepper>
    <div>
      <h1>Tider for den </h1>
      <div style={{display: "flex", justifySelf:"center", justifyContent:"center",borderRadius: "9px",
      background: "#A5D8FF",width:"1164px"}}>
        <div style={{display: "flex"}}>
            <h2>Grupperum - </h2>
        </div>
        <div className='time'>
        <Button variant="filled" color="green">08.30-09.30</Button>
        <Button variant="filled" color="green">09.30-10.30</Button>
        <Button variant="filled" color="green">10.30-11.30</Button>
        <Button variant="filled" color="green">11.30-12.30</Button>
        <Button variant="filled" color="green">12.30-13.30</Button>
        <Button variant="filled" color="green">13.30-14.30</Button>
        <Button variant="filled" color="green">13.30-14.30</Button>
        <Button variant="filled" color="green">15.30-16.30</Button>
        <Button className='BookLokale' radius={"md"} size='xl' variant="filled" color="indigo">Button</Button>;
        </div>
      </div>

    </div>
    </div>
  );
}

export default BookLokale