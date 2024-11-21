import { useState } from 'react';
import { Stepper, Button } from '@mantine/core';
import classes from './Demo.module.css';
import  './style.css';
import Confirm from './popup/confirm.jsx';

const StepperStyle = {
    width: '700px',
}

function BookLokale({name}) {
  const [active, setActive] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleClick = (index) => {
    setActiveButton(index);
  };

  const openPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  
  return (<div >
    <Stepper style={StepperStyle} classNames={classes} active={active} onStepClick={setActive}>
      <Stepper.Step  description="Book lokale " />
      <Stepper.Step  description="Vælg tidspunkt" />
      <Stepper.Step  description="Booking færdig" />
    </Stepper>
    <div style={{display: "flex", justifyContent:"center"}}>
    <div>
      <h1>Tider for den </h1>
      <div style={{display: "flex", justifySelf:"center", justifyContent:"center",borderRadius: "9px",
      background: "#A5D8FF",width:"1164px"}}>
        <div style={{display: "flex"}}>
            <h2>Grupperum - {name} </h2>
        </div>
        <div className='time'>
        <Button
          variant={activeButton === 0 ? 'filled' : 'filled'}
        color={activeButton === 0 ? 'cyan' : 'green'}
        onClick={() => handleClick(0)} >08.30-09.30</Button>

        <Button  variant={activeButton === 1 ? 'filled' : 'filled'}
        color={activeButton === 1 ? 'cyan' : 'green' }
        onClick={() => handleClick(1)} >09.30-10.30</Button>

        <Button  variant={activeButton === 2 ? 'filled' : 'filled'}
        color={activeButton === 2 ? 'cyan' : 'green'}
        onClick={() => handleClick(2)} >10.30-11.30</Button>

        <Button  variant={activeButton === 3 ? 'filled' : 'filled'}
        color={activeButton === 3 ? 'cyan' : 'green'}
        onClick={() => handleClick(3)} >11.30-12.30</Button>

        <Button  variant={activeButton === 4 ? 'filled' : 'filled'}
        color={activeButton === 4? 'cyan' : 'green'}
        onClick={() => handleClick(4)} >12.30-13.30</Button>

        <Button  variant={activeButton === 5 ? 'filled' : 'filled'}
        color={activeButton === 5 ? 'cyan' : 'green'}
        onClick={() => handleClick(5)} >13.30-14.30</Button>

        <Button  variant={activeButton === 6 ? 'filled' : 'filled'}
        color={activeButton === 6 ? 'cyan' : 'green'}
        onClick={() => handleClick(6)} >13.30-14.30</Button>

        <Button  variant={activeButton === 7 ? 'filled' : 'filled'}
        color={activeButton === 7 ? 'cyan' : 'green'}
        onClick={() => handleClick(7)} >15.30-16.30</Button>

        <Button onClick={openPopup} className='BookLokale' radius={"md"} size='xl'  color="indigo">Button</Button>
        {isPopupOpen && <Confirm onClose={openPopup} />}
        </div>
      </div>

    </div>
    </div>
    </div>
  );
}

export default BookLokale