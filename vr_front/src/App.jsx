import React, { useCallback, useState } from "react";
import { Pannellum, PannellumVideo } from "pannellum-react";
import myImage from "./assets/images/floor";
import styled from "styled-components";

const Box = styled.div`
  position: relative;

  padding: 0;
  margin: 0;

  & body {
    margin: 0 !important;
  }
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
  min-width: 120px;
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

const Text = styled.div`
  font-size: 14px;
`;

const BackBox = styled.div`
  width: 100px;
  min-width: 100px;
  height: 80px;
  margin: 0 10px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 50px;
  }

  @media (max-width: 800px) {
    min-width: 50px;
  }
`;

const ScrollBox = styled.div`
  width: calc(100% - 100px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: auto;

  @media (max-width: 800px) {
    width: calc(100% - 50px);
  }
`;

const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: auto;
`;

const App = () => {
  const [images, setImages] = useState("img_59_1");

  const [isView, setIsView] = useState(0);

  const [imgArr, setImgArr] = useState([
    {
      vrSource: 1,
      title: "1층",
      thumb: myImage["img_59_1"],
    },
    {
      vrSource: 2,
      title: "2층",
      thumb: myImage["img_76_1"],
    },
    {
      vrSource: 3,
      title: "4층",
      thumb: myImage["img_7_1"],
    },
    {
      vrSource: 4,
      title: "편의시설",
      thumb: myImage["img_2_1"],
    },
  ]);

  const [imgArr2, setImgArr2] = useState([
    {
      title: "1층 로비1",
      thumb: myImage["img_59_1"],
      imgValue: "img_59_1",
    },
    {
      title: "1층 로비2",
      thumb: myImage["img_60_1"],
      imgValue: "img_60_1",
    },
    {
      title: "1층 물리치료실",
      thumb: myImage["img_57_1"],
      imgValue: "img_57_1",
    },
    {
      title: "1층 주간보호 102호",
      thumb: myImage["img_65_1"],
      imgValue: "img_65_1",
    },
    {
      title: "1층 주간보호",
      thumb: myImage["img_66_1"],
      imgValue: "img_66_1",
    },
    {
      title: "1층 카페",
      thumb: myImage["img_61_1"],
      imgValue: "img_61_1",
    },
    {
      title: "1층 프로그램실",
      thumb: myImage["img_56_1"],
      imgValue: "img_56_1",
    },
  ]);

  const [imgArr3, setImgArr3] = useState([
    {
      title: "2층 로비",
      thumb: myImage["img_76_1"],
      imgValue: "img_76_1",
    },
    {
      title: "2층 휴게실",
      thumb: myImage["img_67_1"],
      imgValue: "img_67_1",
    },
    {
      title: "203호",
      thumb: myImage["img_69_1"],
      imgValue: "img_69_1",
    },
    {
      title: "203호 거실",
      thumb: myImage["img_70_1"],
      imgValue: "img_70_1",
    },
    {
      title: "203호 거실2",
      thumb: myImage["img_72_1"],
      imgValue: "img_72_1",
    },
    {
      title: "203호 거실 화장실",
      thumb: myImage["img_71_1"],
      imgValue: "img_71_1",
    },
    {
      title: "203호 거실 화장실2",
      thumb: myImage["img_18_1"],
      imgValue: "img_18_1",
    },
    {
      title: "204호",
      thumb: myImage["img_68_1"],
      imgValue: "img_68_1",
    },
  ]);

  const [imgArr4, setImgArr4] = useState([
    {
      title: "4층 로비",
      thumb: myImage["img_7_1"],
      imgValue: "img_7_1",
    },
    {
      title: "401호",
      thumb: myImage["img_4_1"],
      imgValue: "img_4_1",
    },
    {
      title: "401호 화장실",
      thumb: myImage["img_9_1"],
      imgValue: "img_9_1",
    },
    {
      title: "402호",
      thumb: myImage["img_8_1"],
      imgValue: "img_8_1",
    },
    {
      title: "405호",
      thumb: myImage["img_19_1"],
      imgValue: "img_19_1",
    },
    {
      title: "405호 거실1",
      thumb: myImage["img_15_1"],
      imgValue: "img_15_1",
    },
    {
      title: "405호 거실2",
      thumb: myImage["img_16_1"],
      imgValue: "img_16_1",
    },
    {
      title: "405호 거실3",
      thumb: myImage["img_17_1"],
      imgValue: "img_17_1",
    },
    {
      title: "405호 화장실",
      thumb: myImage["img_5_1"],
      imgValue: "img_5_1",
    },
    {
      title: "406호",
      thumb: myImage["img_6_1"],
      imgValue: "img_6_1",
    },
    {
      title: "407호",
      thumb: myImage["img_73_1"],
      imgValue: "img_73_1",
    },
    {
      title: "407호 화장실",
      thumb: myImage["img_74_1"],
      imgValue: "img_74_1",
    },
    {
      title: "409호",
      thumb: myImage["img_3_1"],
      imgValue: "img_3_1",
    },
    {
      title: "410호",
      thumb: myImage["img_75_1"],
      imgValue: "img_75_1",
    },
    {
      title: "411호",
      thumb: myImage["img_14_1"],
      imgValue: "img_14_1",
    },
    {
      title: "411호 화장실",
      thumb: myImage["img_13_1"],
      imgValue: "img_13_1",
    },
    {
      title: "412호",
      thumb: myImage["img_10_1"],
      imgValue: "img_10_1",
    },
    {
      title: "413호",
      thumb: myImage["img_12_1"],
      imgValue: "img_12_1",
    },
    {
      title: "413호 화장실",
      thumb: myImage["img_11_1"],
      imgValue: "img_11_1",
    },
  ]);

  const [imgArr5, setImgArr5] = useState([
    {
      title: "탈의실",
      thumb: myImage["img_1_1"],
      imgValue: "img_1_1",
    },
    {
      title: "샤워실",
      thumb: myImage["img_60_1"],
      imgValue: "img_60_1",
    },
    {
      title: "옥상",
      thumb: myImage["img_55_1"],
      imgValue: "img_55_1",
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
        mouseZoom={true}
        keyboardZoom={false}
        autoLoad
        showControls={false}
        autoRotate={-9}
      ></Pannellum>

      <BottomBox>
        {isView === 0 && (
          <MainBox>
            {imgArr.map((data, idx) => {
              return (
                <ImgBox
                  key={idx}
                  bgImg={`url("${data.thumb}")`}
                  onClick={() => imgChoiceHandler(data.vrSource)}
                >
                  <Text>{data.title}</Text>
                </ImgBox>
              );
            })}
          </MainBox>
        )}

        {isView === 1 && (
          <>
            <BackBox onClick={() => imgChoiceHandler(0)}>
              <img
                src={
                  "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_back.png"
                }
              />
              <Text>뒤로가기</Text>
            </BackBox>

            <ScrollBox>
              {imgArr2.map((data, idx) => {
                return (
                  <ImgBox
                    key={idx}
                    bgImg={`url("${data.thumb}")`}
                    onClick={() => setImages(data.imgValue)}
                  >
                    <Text>{data.title}</Text>
                  </ImgBox>
                );
              })}
            </ScrollBox>
          </>
        )}
        {isView === 2 && (
          <>
            <BackBox onClick={() => imgChoiceHandler(0)}>
              <img
                src={
                  "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_back.png"
                }
              />
              <Text>뒤로가기</Text>
            </BackBox>
            <ScrollBox>
              {imgArr3.map((data, idx) => {
                return (
                  <ImgBox
                    key={idx}
                    bgImg={`url("${data.thumb}")`}
                    onClick={() => setImages(data.imgValue)}
                  >
                    <Text>{data.title}</Text>
                  </ImgBox>
                );
              })}
            </ScrollBox>
          </>
        )}
        {isView === 3 && (
          <>
            <BackBox onClick={() => imgChoiceHandler(0)}>
              <img
                src={
                  "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_back.png"
                }
              />
              <Text>뒤로가기</Text>
            </BackBox>

            <ScrollBox>
              {imgArr4.map((data, idx) => {
                return (
                  <ImgBox
                    key={idx}
                    bgImg={`url("${data.thumb}")`}
                    onClick={() => setImages(data.imgValue)}
                  >
                    <Text>{data.title}</Text>
                  </ImgBox>
                );
              })}
            </ScrollBox>
          </>
        )}
        {isView === 4 && (
          <>
            <BackBox onClick={() => imgChoiceHandler(0)}>
              <img
                src={
                  "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_back.png"
                }
              />
              <Text>뒤로가기</Text>
            </BackBox>
            <ScrollBox>
              {imgArr5.map((data, idx) => {
                return (
                  <ImgBox
                    key={idx}
                    bgImg={`url("${data.thumb}")`}
                    onClick={() => setImages(data.imgValue)}
                  >
                    <Text>{data.title}</Text>
                  </ImgBox>
                );
              })}
            </ScrollBox>
          </>
        )}
      </BottomBox>
    </Box>
  );
};

export default App;
