import { Button } from '@mantine/core';
import { useState } from 'react';

const TiderStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '30px',
  margin: '0 30px 30px 30px',
}
const h2Style = {
  gridColumn: '1/3',
}

function Tider() {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (index) => {
    setActiveButton(index);
  };
   
  return(
    <div style={TiderStyle}>
      <h2 style={h2Style}>Ledige tider</h2>
      <Button
        color={activeButton === 0 ? 'cyan' : 'green'}
        onClick={() => handleClick(0)} >08.30-09.30
      </Button>

      <Button 
        color={activeButton === 1 ? 'cyan' : 'green' }
        onClick={() => handleClick(1)} >09.30-10.30
      </Button>

      <Button 
        color={activeButton === 2 ? 'cyan' : 'green'}
        onClick={() => handleClick(2)} >10.30-11.30
      </Button>

      <Button 
        color={activeButton === 3 ? 'cyan' : 'green'}
        onClick={() => handleClick(3)} >11.30-12.30
      </Button>

      <Button 
        color={activeButton === 4? 'cyan' : 'green'}
        onClick={() => handleClick(4)} >12.30-13.30
      </Button>

      <Button 
        color={activeButton === 5 ? 'cyan' : 'green'}
        onClick={() => handleClick(5)} >13.30-14.30
      </Button>

      <Button 
        color={activeButton === 6 ? 'cyan' : 'green'}
        onClick={() => handleClick(6)} >13.30-14.30
      </Button>

      <Button 
        color={activeButton === 7 ? 'cyan' : 'green'}
        onClick={() => handleClick(7)} >15.30-16.30
      </Button>
    </div>
  )
}

export default Tider