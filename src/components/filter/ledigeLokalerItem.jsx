import { Button } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

const LokaleStyle = {
    borderRadius:"2px",
    background: "white",
    color: "black",
    display:"flex",
    padding:"0 26px",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"15px"
}

function LedigeLokalerItem({lokale}) {
  const navigate = useNavigate({from: "/"})

  const handleClick = () => {
    navigate({to:'/BookLokale/$name',params:{name:lokale.name}})
  };

  return (
    <div key={lokale.id} style={LokaleStyle}>
        <h3>{lokale.name}</h3>
        <p>08:00 - 17:00</p>
        
        <Button component='a' onClick={handleClick} variant="filled" size="md">Book lokale </Button>
    </div>
  )
}

export default LedigeLokalerItem;