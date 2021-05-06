import React, {useState} from "react";
import Carousel from "react-elastic-carousel";

/* Styles */
import {ImageContainer, StyledImage} from "./carousel.styles";

import Item from "./Item";
import "./styles.css";

interface CarouselProps {
    [breakPoints: number]: {width: number, itemsToShow: number, itemsToScroll: number},
    path: string,
    items: string[]
}

const breakPoints = [
    {width: 1, itemsToShow: 1}
];

const CarouselComponent: React.FC<CarouselProps> = (props) => {
    // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    
    return (
        <>
            <div className="carousel-wrapper">
                <Carousel initialActiveIndex={4} breakPoints={breakPoints} isRTL>
                    {props.items.map((item: string, index: number) => (
                        <ImageContainer key={index}>
                            <StyledImage src={item}/>
                        </ImageContainer>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default CarouselComponent;
