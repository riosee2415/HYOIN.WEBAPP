import React from "react";
import { Pannellum, PannellumVideo } from "pannellum-react";
import MyImage from "./assets/images/3_1.jpg";

const App = () => {
  return (
    <div>
      <Pannellum
        width="100%"
        height="100vh"
        image={`images/3_1.jpg`}
        mouseZoom={false}
        keyboardZoom={false}
        autoLoad
        showControls={false}
        autoRotate={-9}
      ></Pannellum>
    </div>
  );
};

export default App;
