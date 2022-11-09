import React, { useState } from "react";
import { Pannellum, PannellumVideo } from "pannellum-react";
import myImage from "./assets/images/floor3";

const App = () => {
  const [images, setImages] = useState("s_3_1");

  return (
    <div>
      <Pannellum
        width="100%"
        height="100vh"
        image={myImage[images]}
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
