import { FC } from "react";

/* Material ui */
import Chip from "@material-ui/core/Chip";

interface ChipsProps {
  items: Array<{ label: string; background: string }>;
}

const Chips: FC<ChipsProps> = ({ items }) => {
  return (
    <>
      {items.map((elem, index) => (
        <Chip
          key={index}
          style={{ backgroundColor: elem.background, fontWeight: "bold" }}
          size="small"
          label={elem.label}
        />
      ))}
    </>
  );
};

export default Chips;
