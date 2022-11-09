import React, { useState } from "react";
import { Pannellum, PannellumVideo } from "pannellum-react";
import myImage3 from "./assets/images/floor3";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
`;

const BottomBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.239);
`;

const ImgBox = styled.div`
  width: 120px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0);
  margin-right: 15px;
`;

const App = () => {
  const [floor3, setFloor3] = useState([myImage3]);
  const [images, setImages] = useState("s_3_1");

  const [imgArr, setImgArr] = useState([
    {
      vrSource: myImage3,
      title: "3층 머시기",
      thumb: "Image URL",
    },
    {
      vrSource: myImage3,
      title: "3층 머시기",
      thumb: "Image URL",
    },
    {
      vrSource: myImage3,
      title: "3층 머시기",
      thumb: "Image URL",
    },
  ]);

  const [isView, setIsView] = useState(false);

  console.log(floor3);

  return (
    <Box>
      <Pannellum
        width="100%"
        height="100vh"
        image={myImage3[images]}
        mouseZoom={false}
        keyboardZoom={false}
        autoLoad
        showControls={false}
        autoRotate={-9}
      ></Pannellum>

      <BottomBox>
        <ImgBox>외부</ImgBox>
        <ImgBox>asd</ImgBox>
        <ImgBox>asd</ImgBox>
        <ImgBox>asd</ImgBox>
        <ImgBox>asd</ImgBox>
      </BottomBox>
    </Box>
  );
};

export default App;
