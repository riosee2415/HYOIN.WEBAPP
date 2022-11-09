import React, { useCallback, useState } from "react";
import { Pannellum, PannellumVideo } from "pannellum-react";
import myImage from "./assets/images/floor";
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
  margin: 0 10px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-repeat: no-repeat;
`;

const App = () => {
  const [images, setImages] = useState("img_1_1");

  const [isView, setIsView] = useState(0);

  const [imgArr, setImgArr] = useState([
    {
      vrSource: 1,
      title: "전경",
      thumb: myImage["img_1_1"],
    },
    {
      vrSource: 2,
      title: "1층",
      thumb: myImage["img_2_1"],
    },
    {
      vrSource: 3,
      title: "2층",
      thumb: myImage["img_3_1"],
    },
    {
      vrSource: 4,
      title: "3층",
      thumb: myImage["img_4_1"],
    },
  ]);

  const [imgArr2, setImgArr2] = useState([
    {
      title: "야외1",
      thumb: myImage["img_5_1"],
      imgValue: "img_5_1",
    },
    {
      title: "야외2",
      thumb: myImage["img_6_1"],
      imgValue: "img_6_1",
    },
    {
      title: "야외3",
      thumb: myImage["img_7_1"],
      imgValue: "img_7_1",
    },
    {
      title: "야외4",
      thumb: myImage["img_8_1"],
      imgValue: "img_8_1",
    },
  ]);

  const imgChoiceHandler = useCallback(
    (data) => {
      setIsView(data);
    },
    [isView]
  );

  return (
    <Box>
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

      <BottomBox>
        {isView === 0 &&
          imgArr.map((data, idx) => {
            return (
              <ImgBox
                key={idx}
                bgImg={`url("${data.thumb}")`}
                onClick={() => imgChoiceHandler(data.vrSource)}
              >
                <div>{data.title}</div>
              </ImgBox>
            );
          })}

        {isView === 1 && (
          <>
            <ImgBox
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_intro1.png")`}
              onClick={() => imgChoiceHandler(0)}
            >
              <div>뒤로가기</div>
            </ImgBox>

            {imgArr2.map((data, idx) => {
              return (
                <ImgBox
                  key={idx}
                  bgImg={`url("${data.thumb}")`}
                  onClick={() => setImages(data.imgValue)}
                >
                  <div>{data.title}</div>
                </ImgBox>
              );
            })}
          </>
        )}
      </BottomBox>
    </Box>
  );
};

export default App;
