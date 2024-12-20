
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './lokaleBilledeStyle.css'

function LokaleBilleder({ lokale }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const lokaleImages = {
        "3.9 Open Learning": [
            "img/lokale3-9.jpg",
            "img/lokale3-9-2.jpg",
            "img/lokale3-9-3.jpg",
        ],
        "3.2": [
            "img/lokale3-2.jpg",
            "img/lokale3-2-2.jpg",
        ],
        "2.21": [
            "img/lokale-2-21.JPG",
            "img/lokale-2-21-2.JPG",
            "img/lokale-2-21-3.JPG",
            "img/lokale-2-21-4.JPG",
        ],
    };

    const images = lokaleImages[lokale] || [];

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    //hvis der ikke er noget billed fundet
    //erstat med standardbilled
    if (images.length === 0) {
        return(
            <div>
            <div style={{ width: "300px", height: "200px", display: "flex", overflow: "hidden" }}>
                <img
                    style={{ width: "300px", height: "200px" }}
                    src={"img/lokale3-9.jpg"}
                    alt={`Image of lokale empty`}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "364px", position:"relative", bottom:"100px", right:"32px" }}>
                <button  className="Chevron-Knap" onClick={handlePrev}>
                    <FaChevronLeft />
                </button>
                <button className="Chevron-Knap" onClick={handleNext}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
        )
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
                <button  className="Chevron-Knap" onClick={handlePrev}>
                    <FaChevronLeft />
                </button>
                <button className="Chevron-Knap" onClick={handleNext}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}

export default LokaleBilleder;
