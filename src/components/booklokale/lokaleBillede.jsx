
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function LokaleBilleder({ lokale }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const lokaleImages = {
        "3.9 Open Learning": [
            "lokale3-9.jpg",
            "lokale3-9-2.jpg",
            "lokale3-9-3.jpg",
        ],
        "3.2": [
            "lokale3-2.jpg",
            "lokale3-2-2.jpg",
        ],
    };

    const images = lokaleImages[lokale] || [];

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    if (images.length === 0) {
        return <div> </div>;
    }

    return (
        <div>
            <div style={{ width: "300px", height: "200px", display: "flex", overflow: "hidden" }}>
                <img
                    style={{ width: "300px", height: "200px" }}
                    src={images[currentIndex]}
                    alt={`Image of lokale ${lokale}`}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "364px", position:"relative", bottom:"100px", right:"32px" }}>
                <button onClick={handlePrev} style={{background: "transparent", border: "none"}}>
                    <FaChevronLeft />
                </button>
                <button onClick={handleNext}style={{background:"transparent", border:"none"}}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}

export default LokaleBilleder;
