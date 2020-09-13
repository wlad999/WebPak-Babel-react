import Log from "./log";
import Calc from "./calc";

const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3));

//npm install --save-dev webpack webpack-cli

//запуск
//npx webpack
//for prodaction mode

//npx webpack --mode development
//for development mode

//"scripts": {
//    "start":"webpack"}
