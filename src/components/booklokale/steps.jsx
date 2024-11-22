import { Stepper } from '@mantine/core';
import classes from './Demo.module.css';
const StepperStyle = {
    width: '700px',
}

function Steps ({active}) {
    return (
        <div>
            <Stepper style={StepperStyle} classNames={classes} active={active}>
                <Stepper.Step  description="Valg af sal og lokale" />
                <Stepper.Step  description="Vælg tidspunkt" />
                <Stepper.Step  description="Booking færdig" />
            </Stepper>
        </div>
    )
}

export default Steps