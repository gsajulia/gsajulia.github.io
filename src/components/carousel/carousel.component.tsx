import React from "react";
import Carousel from "react-elastic-carousel";

/*  Material ui */
import useMediaQuery from '@material-ui/core/useMediaQuery';

/* Style */
import "./styles.css";

interface CarouselProps {
    [breakPoints: number]: { width: number, itemsToShow: number, itemsToScroll: number },
    items: string[]
}

const breakPoints = [
    { width: 1, itemsToShow: 1 }
];

const CarouselComponent: React.FC<CarouselProps> = (props) => {
    const isMobile = useMediaQuery('(max-width: 1500px)');

    return (
        <>
            <div className="carousel-wrapper">
                <Carousel initialActiveIndex={4} breakPoints={breakPoints} isRTL>
                    {props.items.map((item: string, index: number) => (
                        <img style={{width: isMobile ? 500 : 1050, height: isMobile ? 400 : 750}} className="image" key={index} src={item} />
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default CarouselComponent;
