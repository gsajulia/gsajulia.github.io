import React from "react";
import Carousel from "react-elastic-carousel";

import "./styles.css";

interface CarouselProps {
    [breakPoints: number]: { width: number, itemsToShow: number, itemsToScroll: number },
    items: string[]
}

const breakPoints = [
    { width: 1, itemsToShow: 1 }
];

const CarouselComponent: React.FC<CarouselProps> = (props) => {
    return (
        <>
            <div className="carousel-wrapper">
                <Carousel initialActiveIndex={4} breakPoints={breakPoints} isRTL>
                    {props.items.map((item: string, index: number) => (
                        <img className="image" key={index} src={item} />
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default CarouselComponent;
