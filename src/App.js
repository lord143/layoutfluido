import React from "react";

import Global from "./styles/global";

import Home from "./pages/Home/Home";

const message =
  "A beleza está em todos os lugares.";

const dev = 
  "DEV em progresso, codando em seu tempo!!"

const data = [
  {
    id: Math.random(),
    title: dev,
    text: message,
    bgColor: "#D5CAFA"
  },  
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
