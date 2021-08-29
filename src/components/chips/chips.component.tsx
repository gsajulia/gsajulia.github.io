import { FC } from "react";

/* Material ui */
import Chip from "@material-ui/core/Chip";

/* Translation */
import { useTranslation } from "react-i18next";

interface ChipsProps {
  items: Array<{ label: string; background: string, translate?: boolean }>;
}

const Chips: FC<ChipsProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <>
      {items.map((elem, index) => (
        <Chip
          key={index}
          style={{ backgroundColor: elem.background, fontWeight: "bold" }}
          size="small"
          label={elem.translate ? t(elem.label) : elem.label}
        />
      ))}
    </>
  );
};

export default Chips;
