import { Stepper } from '@mantine/core';
import classes from './Demo.module.css';
import { useState } from 'react';
const StepperStyle = {
    width: '700px',
}

function Steps () {
  const [active, setActive] = useState(0);

    return (
        <div>
            <Stepper style={StepperStyle} classNames={classes} active={active} onStepClick={setActive}>
                <Stepper.Step  description="Book lokale " />
                <Stepper.Step  description="Vælg tidspunkt" />
                <Stepper.Step  description="Booking færdig" />
            </Stepper>
        </div>
        
    )

}

export default Steps