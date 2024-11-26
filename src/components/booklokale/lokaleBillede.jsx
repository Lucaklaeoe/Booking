import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function LokaleBilleder ({}) {
    const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "lokale3-9.jpg",
    "lokale3-9-2.jpg",
    "lokale3-9-3.jpg",
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

    
    
    return (
    <div>
        <div style={{width: "300px",height: "200px",display: "flex", overflow: "hidden",}}>
        <img style={{ width: "300px" , height: "200px"}} src={images[currentIndex]} alt="" />
        </div>
        <div style={{display:"flex", justifyContent:"space-between", width:"300px"}}>
        <button onClick={handlePrev}> <FaChevronLeft />  </button>
        <button onClick={handleNext}> <FaChevronRight /> </button>
        </div>
        </div>
    )
}

export default LokaleBilleder