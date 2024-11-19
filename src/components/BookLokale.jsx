import { useState } from 'react';
import { Stepper } from '@mantine/core';
import classes from './Demo.module.css';
import  './style.css';

const StepperStyle = {
    width: '700px',
}
function BookLokale() {
  const [active, setActive] = useState(1);

  return (<div>
    <Stepper style={StepperStyle} classNames={classes} active={active} onStepClick={setActive}>
      <Stepper.Step  description="Book lokale " />
      <Stepper.Step  description="Vælg tidspunkt" />
      <Stepper.Step  description="Booking færdig" />
    </Stepper>
    <div>
      <h1>Tider for den </h1>
      <div style={{display: "flex"}}>
        <div style={{display: "flex"}}>
            <h2>Grupperum - </h2>
        </div>
        <div className='time'>
            <button>08.30-09.30</button>
            <button>09.30-10.30</button>
            <button>10.30-11.30</button>
            <button>11.30-12.30</button>
            <button>12.30-13.30</button>
            <button>13.30-14.30</button>
            <button>14.30-15.30</button>
            <button>15.30-16.30</button>
        </div>
      </div>

    </div>
    </div>
  );
}

export default BookLokale