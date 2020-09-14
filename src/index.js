import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";

const App = () => <h1>This is Webpack React app!!!</h1>;

ReactDOM.render(<App />, document.getElementById("root"));

//npm install --save-dev webpack webpack-cli

//запуск
//npx webpack
//for prodaction mode

//npx webpack --mode development
//for development mode

//"scripts": {
//    "start":"webpack"}
