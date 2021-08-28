import { FC } from "react";

/* Style */
import {
  SmallSpan,
  IdeaContainer,
  ContainerImage,
} from "./idea-of-tech.styles";

/* Material UI */
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import makeStyles from "@material-ui/core/styles/makeStyles";

/* Component */
import TecnologiesOfElements from "../tecnologies-of-element/tecnologies-of-element.component";

/* Icons */
import { ReactComponent as Lamp } from "./../../assets/lamp.svg";
import { ReactComponent as LightLamp } from "./../../assets/light-lamp.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 200,
    height: 70,
    display: "flex",
    justifyContent: "flex-end",
  },
  dropdown: {
    position: "absolute",
    top: 60,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    color: "#424242",
  }
}));


interface lampProps {
  items: Array<{
    image: string;
    label: string;
    width: number;
    height: number;
    left: number;
    right: number;
  }>;
  lampStatus: boolean;
  handleClickAway: () => void;
  handleHoverEnter: (actualProject: string) => void;
  moreSpacing: boolean;
  idItem: string;
}

const IdeaOfTechnologies: FC<lampProps> = ({lampStatus, handleClickAway, handleHoverEnter, items, moreSpacing, idItem}) => {
  const classes = useStyles();

  return lampStatus ? (
    <>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <div className={classes.root}>
          <LightLamp
            style={{ width: 50, height: 50 }}
            onMouseLeave={handleClickAway}
          />
          <div className={classes.dropdown}>
            <TecnologiesOfElements moreSpacing={moreSpacing} items={items} />
          </div>
        </div>
      </ClickAwayListener>
    </>
  ) : (
    <IdeaContainer onMouseEnter={() => handleHoverEnter(idItem)}>
      <Lamp
        style={{
          width: 40,
          height: 40,
          fill: "#e0e0e0",
          marginBottom: 5,
        }}
      />
      <SmallSpan> + info</SmallSpan>
    </IdeaContainer>
  );
};

export default IdeaOfTechnologies;
