import { Carousel, Empty } from "antd";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Wrapper, Text, CommonTitle, Image } from "../commonComponents";
import Theme from "../Theme";
import styled from "styled-components";
import useWidth from "../../hooks/useWidth";
import { useRouter } from "next/router";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

const NursingSliderWrapper = styled(Wrapper)`
  height: 700px;
  overflow: hidden;

  & .ant-carousel {
    width: 100%;
    height: 100%;
  }

  & .slick-list {
    padding: 0 !important;
  }

  & .ant-carousel .slick-slider {
    height: 100%;
    overflow: hidden;
  }

  @media (max-width: 1000px) {
    height: auto;
  }
`;

const SliderWrapper = styled(Carousel)`
  overflow: hidden;

  & .slick-list {
    width: auto;
  }
`;

const ArrowWrapper = styled(Wrapper)`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  transition: 0.5s;
  border: 1px solid ${Theme.white_C};

  & svg {
    font-size: 25px;
    color: ${Theme.white_C};
    transition: 0.5s;
  }

  &:hover {
    border: 1px solid ${Theme.subTheme10_C};
    & svg {
      color: ${Theme.subTheme10_C};
    }
  }
`;

const NursingWrapper = styled(Wrapper)`
  padding-left: 285px;

  @media (max-width: 1700px) {
    padding-left: 200px;
  }
  @media (max-width: 1500px) {
    padding-left: 150px;
  }
  @media (max-width: 1350px) {
    padding-left: 120px;
  }
  @media (max-width: 1280px) {
    padding-left: 90px;
  }
  @media (max-width: 1100px) {
    padding-left: 50px;
  }
  @media (max-width: 900px) {
    padding-left: 30px;
  }
  @media (max-width: 800px) {
    padding-left: 10px;
  }
`;

const NursingSlider = ({
  datum,
  //
  arrow = true,
  effect = `scrollx`, // scrollx or fade
  //
  autoplay = false,
  //
  //
  row = 1,
  line = 1, // Row 슬라이드 행 수
  //
}) => {
  const [slideDatum, setSlideDatum] = useState(null);
  const [isDots, setIsDots] = useState(0);

  const width = useWidth();
  const slideRef = useRef();
  const router = useRouter();

  ////// HANDLER //////
  const moveLinkHandler = useCallback((link) => {
    router.push(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const moveSlideHandler = (isNext) => {
    if (isNext) {
      if (datum.length !== isDots) {
        setIsDots(isDots + 1);
      } else {
        setIsDots(0);
      }

      for (let i = 0; i < slideDatum.length; i++) {
        if (slideRef.current) {
          slideRef.current.next();
        }
      }
    } else {
      if (isDots !== 0) {
        setIsDots(isDots - 1);
      } else {
        setIsDots(datum.length - 1);
      }

      for (let i = 0; i < slideDatum.length; i++) {
        if (slideRef.current) {
          slideRef.current.prev();
        }
      }
    }
  };

  useEffect(() => {
    if (datum) {
      let tempArr = [];
      let totalArr = [];

      for (let i = 0; i < datum.length; i++) {
        tempArr.push(datum[i]);
        if (tempArr.length === row * line) {
          totalArr.push(tempArr);
          tempArr = [];
        }
      }

      if (tempArr.length !== 0) {
        let index = tempArr.length;
        for (let i = 0; i < row * line - index; i++) {
          tempArr.push("");
        }
        totalArr.push(tempArr);
      }

      setSlideDatum(totalArr);
    }
  }, [datum]);

  if (!slideDatum) {
    return null;
  }

  return (
    <NursingSliderWrapper dr={`row`} al={`flex-start`}>
      <Wrapper
        width={width < 1350 ? (width < 1000 ? `100%` : `450px`) : `630px`}
        bgColor={Theme.basicTheme_C}
      >
        <NursingWrapper
          bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section2_bg.png")`}
          position={`relative`}
          padding={width < 900 ? `80px 0` : `150px 0`}
        >
          <Image
            position={`absolute`}
            top={`0`}
            left={`0`}
            alt="logo"
            src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section2_title.png`}
            width={`70%`}
          />
          <Wrapper
            height={width < 900 ? `300px` : `400px`}
            ju={`space-between`}
            color={Theme.white_C}
            padding={width < 900 ? `0 10px` : `0 50px 0 0`}
          >
            <Wrapper al={`flex-start`}>
              <Fade bottom>
                <CommonTitle color={Theme.white_C} margin={`0`}>
                  요양원
                </CommonTitle>
                <Text fontSize={`18px`} margin={`40px 0`}>
                  가족을 돌보는 마음으로 이동지원서비스, 급식(간식)서비스,
                  개인위생서비스, 목욕서비스, 이미용서비스를 지원하고 있습니다.
                </Text>
              </Fade>
              <Wrapper
                width={`auto`}
                fontSize={`18px`}
                fontWeight={`bold`}
                borderBottom={`2px solid ${Theme.white_C}`}
                isHover
                onClick={() => moveLinkHandler(`/service/nursing?type=3`)}
              >
                자세히
              </Wrapper>
            </Wrapper>
            {arrow && (
              <Wrapper
                dr={`row`}
                ju={`flex-end`}
                zIndex={`10`}
                cursor={`pointer`}
                margin={width < 900 && `0 0 15px`}
              >
                <ArrowWrapper
                  margin={`0 10px 0 0`}
                  className={`before`}
                  onClick={() => moveSlideHandler(false)}
                >
                  <LeftOutlined />
                </ArrowWrapper>

                <ArrowWrapper
                  className={`next`}
                  onClick={() => moveSlideHandler(true)}
                >
                  <RightOutlined />
                </ArrowWrapper>
              </Wrapper>
            )}
          </Wrapper>
        </NursingWrapper>
      </Wrapper>
      <Wrapper
        width={
          width < 1350
            ? width < 1000
              ? `100%`
              : `calc(100% - 450px)`
            : `calc(100% - 630px)`
        }
        padding={width < 900 ? `50px 0` : `150px 0`}
        bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section2_bg2.png")`}
      >
        <Wrapper
          height={width < 1000 ? `220px` : `400px`}
          overflow={slideDatum && slideDatum.length < 1 && `hidden`}
        >
          {slideDatum.length === 0 ? (
            <Wrapper height={`400px`} display={`flex !important`}>
              <Empty description="조회된 사진이 없습니다." />
            </Wrapper>
          ) : (
            <SliderWrapper
              effect={effect}
              dots={false}
              infinite={true}
              slidesToShow={width < 1200 ? 1 : 2} // 한 화면에 몇개의 슬라이드가 보여지는지 결정
              ref={slideRef}
              autoplay={autoplay}
              centerMode={true} // 양쪽에 겹쳐서 보이는 디자인
              centerPadding={width < 1000 ? `30px` : `100px`} // 얼만큼 겹쳐 보일건지 결정
              slide={true} // fade or slide
              variableWidth={false} // 각각 다른 크기를 지정할 수 있음
              initialSlide={0} // 초기에 몇번째 슬라이드를 보여줄 것인지 결정
              draggable={true}
            >
              {slideDatum.map((data, idx) => {
                return (
                  <Wrapper
                    key={idx}
                    height={width < 1000 ? `220px` : `400px`}
                    position={`relative`}
                    padding={`0 20px`}
                    display={`flex !important`}
                    overflow={`hidden`}
                    // onClick={() => {
                    //   router.push(`/service?type=1&detail=${data[0].id}`);
                    // }}
                  >
                    <Image
                      alt="thumnail"
                      src={data[0].imagePath}
                      height={`100%`}
                    />
                  </Wrapper>
                );
              })}
            </SliderWrapper>
          )}
        </Wrapper>
      </Wrapper>
    </NursingSliderWrapper>
  );
};

export default React.memo(NursingSlider);
