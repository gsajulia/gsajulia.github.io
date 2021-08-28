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
  handleHover: (value: boolean) => void;
}

const IdeaOfTechnologies: FC<lampProps> = ({lampStatus, handleHover, items}) => {
  const classes = useStyles();

  return lampStatus ? (
    <>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={() => handleHover(false)}
      >
        <div className={classes.root}>
          <LightLamp
            style={{ width: 50, height: 50 }}
            onMouseLeave={() => handleHover(false)}
          />
          <div className={classes.dropdown}>
            {items.map((element, index) => (
              <ContainerImage key={index}>
                <img
                  alt={element.label}
                  style={{
                    width: element.width,
                    height: element.height,
                    paddingRight: element.right,
                    paddingLeft: element.left,
                  }}
                  src={element.image}
                />
                <div>{element.label}</div>
              </ContainerImage>
            ))}
          </div>
        </div>
      </ClickAwayListener>
    </>
  ) : (
    <IdeaContainer onMouseEnter={() => handleHover(true)}>
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
