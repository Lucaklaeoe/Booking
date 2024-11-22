import { Button } from '@mantine/core';
import { useState } from 'react';
import  './style.css';
function Tider() {
    const [activeButton, setActiveButton] = useState(null);
     const handleClick = (index) => {
    setActiveButton(index);
  };
    
    return(
    <div className="tider">
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
    </div>
)
}

export default Tider

