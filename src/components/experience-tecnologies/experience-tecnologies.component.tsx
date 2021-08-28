import React from "react";

/* Style */
import {
  ContainerTechImage,
} from "./experience-tecnologies.styles";

interface TecnologiesProps {
  items: Array<{
    image: string;
    label: string;
    width: number;
    height: number;
    left: number;
    right: number;
    background?: string;
  }>;
}

const ExperienceTecnologies: React.FC<TecnologiesProps> = ({ items }) => {
  return (
    <>
      {items.map((element, index) => (
        <ContainerTechImage key={index}>
          <img
            alt={element.label}
            style={{
              width: element.width,
              height: element.height,
              // padding right frontend
              marginRight: element.right,
              marginLeft: element?.left,
              backgroundColor: element?.background,
            }}
            src={element.image}
          />
          <div>{element.label}</div>
        </ContainerTechImage>
      ))}
    </>
  );
};

export default ExperienceTecnologies;
