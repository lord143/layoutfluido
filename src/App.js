import React from "react";

import Global from "./styles/global";

import Home from "./pages/Home/Home";

const lorem =
  "A beleza está em todos os lugares.";

const dev = 
  "DEV em progresso, codando em seu tempo"

const data = [
  {
    id: Math.random(),
    title: dev,
    text: lorem,
    bgColor: "#D5CAFA"
  },
  {
    id: Math.random(),
    title: dev,
    text: lorem,
    bgColor: "#EDA9A9"
  },
  {
    id: Math.random(),
    title: dev,
    text: lorem,
    bgColor: "#F2EE8D"
  },
  {
    id: Math.random(),
    title: dev,
    text: lorem,
    bgColor: "#9FEACD"
  }
];

function App() {
  return (
    <>
      <Global />
      <Home boxData={data} />
    </>
  );
}

export default App;
