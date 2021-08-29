/* Icons about project technologies */
import Javascript from "./../../assets/technologies/480px-Unofficial_JavaScript_logo_2.svg.png";
import StyledComponents from "./../../assets/technologies/styled-components.png";
import ReactIcon from "./../../assets/technologies/react.png";
import Mongo from "./../../assets/technologies/mongo.png";
import Typescript from "./../../assets/technologies/ts.png";
import Heroku from "./../../assets/technologies/heroku.png";
import Node from "./../../assets/technologies/node-js.png";
import Mongoose from "./../../assets/technologies/mongoose.png";
import Express from "./../../assets/technologies/express.png";
import R from "./../../assets/technologies/R_logo.png";
import NN from "./../../assets/technologies/neural.png";
import Shiny from "./../../assets/technologies/shiny.png";

export const tcItems = [
    { image: ReactIcon, label: "React", width: 45, height: 35, left: 0, right: 2 },
    { image: Javascript, label: "Javascript", width: 30, height: 30, left: 5, right: 10 },
    { image: StyledComponents, label: "styled-components", width: 30, height: 30, left: 5, right: 10 },
    { image: Typescript, label: "Typescript", width: 30, height: 30, left: 5, right: 10 },
    { image: Node, label: "Node.js", width: 40, height: 40, left: 0, right: 10},
    { image: Express, label: "Express", width: 60, height: 40, left: 5, right: 10 },
    { image: Mongo, label: "Mongo DB", width: 30, height: 30, left: 5, right: 10 },
    { image: Mongoose, label: "Mongoose", width: 42, height: 20, left: 0, right: 5 },
    { image: Heroku, label: "Heroku", width: 30, height: 30, left: 5, right: 10 }];

export const tcChips = [
    {label: "Frontend", background: "#FB87FD"},
    {label: "Backend", background: "#5CE1E6"},
    {label: "Design", background: "pink"}];

export const vmChips = [
    {label: "Frontend", background: "#FB87FD"}];

export const vmItems = [
    { image: ReactIcon, label: "React", width: 45, height: 35, left: 0, right: 2 },
    { image: Javascript, label: "Javascript", width: 30, height: 30, left: 5, right: 10 },
    { image: StyledComponents, label: "styled-components", width: 30, height: 30, left: 5, right: 10 }];

export const fpChips = [
    {label: "Frontend", background: "#FB87FD"},
    {label: "Data Science", background: "#e57373"},
    {label: "Design", background: "pink"},
    {label: "construction", background: "#ffcb6b", translate: true}];

export const fpItems = [
    { image: R, label: "R", width: 35, height: 30, left: 2, right: 10 },
    { image: NN, label: "Neural Network", width: 30, height: 30, left: 5, right: 10 },
    { image: Shiny, label: "R Shiny", width: 30, height: 30, left: 5, right: 10 }];
