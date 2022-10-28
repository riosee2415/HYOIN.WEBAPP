import React, { useCallback, useEffect } from "react";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import ClientLayout from "../components/ClientLayout";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import {
  ATag,
  CommonTitle,
  Image,
  RsWrapper,
  Text,
  WholeWrapper,
  Wrapper,
} from "../components/commonComponents";
import useWidth from "../hooks/useWidth";
import Theme from "../components/Theme";
import styled from "styled-components";
import Head from "next/head";
import Popup from "../components/popup/popup";
import Mainslider from "../components/slide/MainSlider";
import NursingSlider from "../components/slide/NursingSlider";
import Link from "next/link";
import { NOTICE_LIST_REQUEST } from "../reducers/notice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Empty } from "antd";
import { SwapRightOutlined } from "@ant-design/icons";
import { RECRUIT_LIST_REQUEST } from "../reducers/recruit";
import { PROGRAM_SLIDE_LIST_REQUEST } from "../reducers/program";
import Fade from "react-reveal/Fade";

const MainWrapper = styled(Wrapper)`
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
    padding-right: 30px;
    padding-left: 30px;
  }
  @media (max-width: 800px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const QuickWrapper = styled(Wrapper)`
  width: calc(100% / 5);
  background: ${Theme.white_C};
  padding: 28px;
  align-items: flex-start;
  position: relative;

  img.hover {
    display: none;
  }

  &:hover {
    background: ${Theme.subTheme2_C};
    color: ${Theme.white_C};
    cursor: pointer;

    img:first-child {
      display: none;
    }
    img.hover {
      display: block;
    }

    &:after {
      height: 0;
    }
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 1px;
    height: 60%;
    background: ${Theme.lightGrey3_C};
  }

  &:last-child:after {
    height: 0;
  }

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px 20px;

    &:after {
      width: 100%;
      height: 1px;
      bottom: 0;
      background: ${Theme.lightGrey4_C};
    }
  }
`;

const ShadowWrapper = styled(Wrapper)`
  &:hover {
    box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const InfoBtn = styled(Wrapper)`
  width: 290px;
  height: 112px;
  background: rgba(255, 255, 255, 0.6);
  font-size: 28px;
  font-family: "S-CoreDream-6Bold";
  flex-direction: row;
  position: absolute;
  bottom: 140px;
  z-index: 5;

  @media (max-width: 900px) {
    font-size: 20px;
    height: auto;
    padding: 20px 0;
    bottom: initial;
    top: 0;
  }
`;

const InfoHover1 = styled(Wrapper)`
  height: 100%;
  padding-left: 285px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 2;

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
    padding-right: 30px;
    padding-left: 30px;
  }
  @media (max-width: 800px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const InfoHover2 = styled(Wrapper)`
  height: 100%;
  padding-right: 285px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 2;

  @media (max-width: 1700px) {
    padding-right: 200px;
  }
  @media (max-width: 1500px) {
    padding-right: 150px;
  }
  @media (max-width: 1350px) {
    padding-right: 120px;
  }
  @media (max-width: 1280px) {
    padding-right: 90px;
  }
  @media (max-width: 1100px) {
    padding-right: 50px;
  }
  @media (max-width: 900px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media (max-width: 800px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const InfoWrapper = styled(Wrapper)`
  width: 50%;
  height: 740px;
  position: relative;
  transition: 0.5s;

  &:hover {
    width: 90%;

    ${InfoBtn} {
      background: ${Theme.white_C};
    }
  }

  &:first-child:hover {
    ${InfoHover1} {
      opacity: 1;
      visibility: visible;
    }
  }

  &:last-child:hover {
    ${InfoHover2} {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    height: auto;

    ${InfoHover1} {
      opacity: 1;
      visibility: visible;
      padding: 120px 10px 80px;
    }

    ${InfoHover2} {
      opacity: 1;
      visibility: visible;
      padding: 120px 10px 80px;
    }

    &:hover {
      width: 100%;
    }
  }
`;

const GoBtn = styled(Wrapper)`
  width: 110px;
  height: 40px;
  background: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  font-weight: bold;

  &:hover {
    background: ${Theme.white_C};
  }
`;

const Home = ({}) => {
  ////// GLOBAL STATE //////
  const { noticeList } = useSelector((state) => state.notice);
  const { recruitList } = useSelector((state) => state.recruit);
  const { programSlideList } = useSelector((state) => state.program);

  ////// HOOKS //////
  const width = useWidth();
  const router = useRouter();

  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  const moveLinkHandler = useCallback((link) => {
    router.push(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const noticeDetailHandler = useCallback((data) => {
    moveLinkHandler(`/garden/notice/${data.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const recruitDetailHandler = useCallback((data) => {
    moveLinkHandler(`/garden/recruit/${data.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>효인주야간노인복지센터</title>
      </Head>

      <ClientLayout>
        <WholeWrapper>
          <Mainslider />

          <RsWrapper>
            <Wrapper
              margin={`-90px 0 0`}
              dr={`row`}
              bgColor={Theme.white_C}
              shadow={`0 6px 10px rgba(0, 0, 0, 0.1)`}
              zIndex={`10`}
            >
              <QuickWrapper onClick={() => moveLinkHandler(`/company/intro`)}>
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_intro.png`}
                  width={`35px`}
                />
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_menu_intro_h.png`}
                  width={`35px`}
                  className={`hover`}
                />
                <Text
                  fontSize={width < 900 ? `18px` : `22px`}
                  fontWeight={`bold`}
                  margin={width < 900 ? `0 0 0 10px` : `14px 0 8px`}
                >
                  요양원 소개
                </Text>
                {width < 1100 ? null : (
                  <>
                    <Text fontSize={`16px`}>효인은</Text>
                    <Text fontSize={`16px`}>주간, 방문 또한 가능합니다.</Text>
                  </>
                )}
              </QuickWrapper>
              <QuickWrapper>
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_home_meal.png`}
                  width={`35px`}
                />
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_home_meal_h.png`}
                  width={`35px`}
                  className={`hover`}
                />
                <Text
                  fontSize={width < 900 ? `18px` : `22px`}
                  fontWeight={`bold`}
                  margin={width < 900 ? `0 0 0 10px` : `14px 0 8px`}
                >
                  식단표
                </Text>
                {width < 1100 ? null : (
                  <>
                    <Text fontSize={`16px`}>효인의</Text>
                    <Text fontSize={`16px`}>식단표 열람이 가능합니다.</Text>
                  </>
                )}
              </QuickWrapper>
              <QuickWrapper
                onClick={() => moveLinkHandler(`/service/nursing?type=3`)}
              >
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_timetable.png`}
                  width={`35px`}
                />
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_timetable_h.png`}
                  width={`35px`}
                  className={`hover`}
                />
                <Text
                  fontSize={width < 900 ? `18px` : `22px`}
                  fontWeight={`bold`}
                  margin={width < 900 ? `0 0 0 10px` : `14px 0 8px`}
                >
                  프로그램 시간표
                </Text>
                {width < 1100 ? null : (
                  <>
                    <Text fontSize={`16px`}>건강한 삶을 위해</Text>
                    <Text fontSize={`16px`}>체계적인 활동을 도모합니다.</Text>
                  </>
                )}
              </QuickWrapper>
              <QuickWrapper onClick={() => moveLinkHandler(`/garden/notice`)}>
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_menu_notice.png`}
                  width={`35px`}
                />
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_menu_notice_h.png`}
                  width={`35px`}
                  className={`hover`}
                />
                <Text
                  fontSize={width < 900 ? `18px` : `22px`}
                  fontWeight={`bold`}
                  margin={width < 900 ? `0 0 0 10px` : `14px 0 8px`}
                >
                  공지사항
                </Text>
                {width < 1100 ? null : (
                  <>
                    <Text fontSize={`16px`}>효인의</Text>
                    <Text fontSize={`16px`}>공지사항을 확인해보세요.</Text>
                  </>
                )}
              </QuickWrapper>
              <QuickWrapper
                onClick={() => moveLinkHandler(`/company/location`)}
              >
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_menu_map.png`}
                  width={`35px`}
                />
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_menu_map_h.png`}
                  width={`35px`}
                  className={`hover`}
                />
                <Text
                  fontSize={width < 900 ? `18px` : `22px`}
                  fontWeight={`bold`}
                  margin={width < 900 ? `0 0 0 10px` : `14px 0 8px`}
                >
                  오시는 길
                </Text>
                {width < 1100 ? null : (
                  <>
                    <Text fontSize={`16px`}>기관방문을 원하시는 분은</Text>
                    <Text fontSize={`16px`}>약도를 참고해주시기 바랍니다.</Text>
                  </>
                )}
              </QuickWrapper>
            </Wrapper>
          </RsWrapper>

          <Wrapper
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section1.png")`}
            padding={`130px 0`}
          >
            <MainWrapper dr={`row`} al={`flex-start`}>
              <Wrapper
                al={`flex-start`}
                width={width < 1280 ? (width < 900 ? `100%` : `50%`) : `40%`}
              >
                <Fade bottom>
                  <Image
                    width={width < 900 ? `200px` : `330px`}
                    alt="logo"
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo_neo.png`}
                  />
                </Fade>
                <Fade bottom>
                  <Wrapper
                    width={`auto`}
                    borderBottom={`2px solid ${Theme.basicTheme_C}`}
                    margin={`45px 0 25px`}
                  >
                    <CommonTitle
                      fontSize={width < 900 ? `25px` : `32px`}
                      margin={`0`}
                      color={Theme.basicTheme_C}
                      lineHeight={`1.1`}
                    >
                      孝를 실천하는 아름다운 사람들
                    </CommonTitle>
                  </Wrapper>
                </Fade>
                <Fade bottom>
                  <Text fontSize={width < 900 ? `16px` : `20px`}>
                    어르신들께 가족같은 마음으로 서비스를 제공하고
                  </Text>
                  <Text fontSize={width < 900 ? `16px` : `20px`}>
                    어르신과 보호자 욕구에 맞는 최고의 서비스를 제공하여
                  </Text>
                  <Text fontSize={width < 900 ? `16px` : `20px`}>
                    심리, 사회적 안정을 지원하겠습니다.
                  </Text>
                </Fade>
              </Wrapper>
              <Image
                alt="image"
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section5.png`}
                width={width < 1280 ? (width < 900 ? `100%` : `50%`) : `60%`}
                margin={width < 900 && `15px 0 0`}
              />
            </MainWrapper>
          </Wrapper>

          <NursingSlider datum={programSlideList} />

          <Wrapper
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section3-bg.png")`}
            padding={width < 900 ? `80px 0` : `120px 0`}
          >
            <RsWrapper>
              <Fade bottom>
                <Text
                  fontSize={width < 900 ? `16px` : `20px`}
                  fontWeight={`bold`}
                  color={Theme.subTheme10_C}
                >
                  서비스 안내
                </Text>
                <Text
                  fontFamily={`"S-CoreDream-3Light"`}
                  fontSize={width < 900 ? `25px` : `32px`}
                  margin={`30px 0 0`}
                >
                  효인에서 제공하는
                </Text>
                <Text
                  fontFamily={`"S-CoreDream-6Bold"`}
                  fontSize={width < 900 ? `25px` : `32px`}
                  margin={`0 0 60px`}
                >
                  최상의 서비스를 만나보세요.
                </Text>
              </Fade>
              <Wrapper dr={`row`} ju={`space-between`}>
                <Wrapper
                  width={width < 900 ? `49%` : `calc(100% / 4.2)`}
                  margin={width < 900 && `0 0 15px`}
                  onClick={() => moveLinkHandler(`/service/nursing?type=1`)}
                >
                  <Wrapper
                    width={`76px`}
                    height={`76px`}
                    radius={`100%`}
                    bgColor={Theme.subTheme10_C}
                    color={Theme.white_C}
                    fontSize={`18px`}
                    fontWeight={`bold`}
                    margin={`0 0 -38px`}
                    zIndex={`10`}
                  >
                    요양원
                  </Wrapper>
                  <ShadowWrapper>
                    <Image
                      alt="image"
                      src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section3-thum1.png`}
                    />
                    <Wrapper
                      fontSize={width < 900 ? `18px` : `24px`}
                      fontWeight={`bold`}
                      height={`90px`}
                      bgColor={Theme.white_C}
                    >
                      맞춤형 서비스
                    </Wrapper>
                  </ShadowWrapper>
                </Wrapper>

                <Wrapper
                  width={width < 900 ? `49%` : `calc(100% / 4.2)`}
                  margin={width < 900 && `0 0 15px`}
                  onClick={() => moveLinkHandler(`/service/protection?type=1`)}
                >
                  <Wrapper
                    width={`76px`}
                    height={`76px`}
                    radius={`100%`}
                    bgColor={Theme.basicTheme_C}
                    color={Theme.white_C}
                    fontSize={`18px`}
                    fontWeight={`bold`}
                    margin={`0 0 -38px`}
                    zIndex={`10`}
                  >
                    주간보호
                  </Wrapper>
                  <ShadowWrapper>
                    <Image
                      alt="image"
                      src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section3-thum2.png`}
                    />
                    <Wrapper
                      fontSize={width < 900 ? `18px` : `24px`}
                      fontWeight={`bold`}
                      height={`90px`}
                      bgColor={Theme.white_C}
                    >
                      일반형
                    </Wrapper>
                  </ShadowWrapper>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `49%` : `calc(100% / 4.2)`}
                  margin={width < 900 && `0 0 15px`}
                  onClick={() => moveLinkHandler(`/service/protection?type=2`)}
                >
                  <Wrapper
                    width={`76px`}
                    height={`76px`}
                    radius={`100%`}
                    bgColor={Theme.basicTheme_C}
                    color={Theme.white_C}
                    fontSize={`18px`}
                    fontWeight={`bold`}
                    margin={`0 0 -38px`}
                    zIndex={`10`}
                  >
                    주간보호
                  </Wrapper>
                  <ShadowWrapper>
                    <Image
                      alt="image"
                      src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section3-thum3.png`}
                    />
                    <Wrapper
                      fontSize={width < 900 ? `18px` : `24px`}
                      fontWeight={`bold`}
                      height={`90px`}
                      bgColor={Theme.white_C}
                    >
                      치매 특화형
                    </Wrapper>
                  </ShadowWrapper>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `49%` : `calc(100% / 4.2)`}
                  margin={width < 900 && `0 0 15px`}
                >
                  <Link href={`/service/visit`}>
                    <ATag>
                      <Wrapper
                        width={`76px`}
                        height={`76px`}
                        radius={`100%`}
                        bgColor={Theme.subTheme3_C}
                        color={Theme.white_C}
                        fontSize={`18px`}
                        fontWeight={`bold`}
                        margin={`0 0 -38px`}
                        zIndex={`10`}
                      >
                        방문요양
                      </Wrapper>
                      <ShadowWrapper>
                        <Image
                          alt="image"
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section3-thum4.png`}
                        />
                        <Wrapper
                          fontSize={width < 900 ? `18px` : `24px`}
                          fontWeight={`bold`}
                          height={`90px`}
                          bgColor={Theme.white_C}
                        >
                          방문 요양 서비스
                        </Wrapper>
                      </ShadowWrapper>
                    </ATag>
                  </Link>
                </Wrapper>
              </Wrapper>
            </RsWrapper>
          </Wrapper>
          <Wrapper dr={`row`} wrap={width < 900 ? `wrap` : `nowrap`}>
            <InfoWrapper
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section4_left.png")`}
            >
              <InfoBtn right={`0`}>
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_prev_black.png`}
                  width={`16px`}
                  margin={`0 30px 8px 0`}
                />
                후원 안내
              </InfoBtn>
              <InfoHover1
                al={`flex-start`}
                bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section4_left-bg.png")`}
              >
                <Wrapper dr={`row`} ju={`flex-start`} al={`flex-end`}>
                  <Image
                    alt="thum"
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section4_left-thum.png`}
                    width={width < 900 ? `350px` : `400px`}
                  />
                  <Link href={`/happiness/support`}>
                    <a>
                      <GoBtn color={Theme.subTheme12_C}>바로가기</GoBtn>
                    </a>
                  </Link>
                </Wrapper>

                <Text
                  fontSize={width < 900 ? `16px` : `20px`}
                  fontWeight={`bold`}
                  color={Theme.subTheme13_C}
                  margin={`45px 0 22px`}
                >
                  후원 안내
                </Text>
                <Text
                  fontSize={width < 900 ? `20px` : `32px`}
                  lineHeight={`1.2`}
                  color={Theme.white_C}
                >
                  아름다운 동행, 사람이 모여
                </Text>
                <Text
                  fontSize={width < 900 ? `20px` : `32px`}
                  lineHeight={`1.2`}
                  fontWeight={`bold`}
                  color={Theme.white_C}
                >
                  따뜻한 세상을 만들어 가고 있습니다.
                </Text>
              </InfoHover1>
            </InfoWrapper>
            <InfoWrapper
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section4_right.png")`}
            >
              <InfoBtn left={`0`}>
                자원봉사 안내
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_next_black.png`}
                  width={`16px`}
                  margin={`0 0 8px 30px`}
                />
              </InfoBtn>

              <InfoHover2
                al={`flex-end`}
                bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section4_right-bg.png")`}
              >
                <Wrapper dr={`row`} ju={`flex-end`} al={`flex-end`}>
                  <Link href={`/happiness/info`}>
                    <a>
                      <GoBtn color={Theme.basicTheme_C}>바로가기</GoBtn>
                    </a>
                  </Link>
                  <Image
                    alt="thum"
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section4_right-thum.png`}
                    width={width < 900 ? `350px` : `400px`}
                  />
                </Wrapper>

                <Text
                  fontSize={width < 900 ? `16px` : `20px`}
                  fontWeight={`bold`}
                  color={Theme.subTheme4_C}
                  margin={`45px 0 22px`}
                >
                  자원봉사 안내
                </Text>
                <Text
                  fontSize={width < 900 ? `20px` : `32px`}
                  lineHeight={`1.2`}
                  color={Theme.white_C}
                >
                  자원봉사, 나와 이웃을
                </Text>
                <Text
                  fontSize={width < 900 ? `20px` : `32px`}
                  lineHeight={`1.2`}
                  color={Theme.white_C}
                >
                  자라게 하는 기쁨입니다.
                </Text>
              </InfoHover2>
            </InfoWrapper>
          </Wrapper>

          <Wrapper
            height={width < 1280 ? `auto` : `100vh`}
            attachment={`fixed`}
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section5.png")`}
          >
            <Wrapper
              height={`100%`}
              padding={width < 1280 && `80px 0`}
              bgColor={`rgba(0, 0, 0, 0.6)`}
              color={Theme.white_C}
            >
              <RsWrapper>
                <CommonTitle color={Theme.white_C} margin={`0`}>
                  알림마당
                </CommonTitle>
                <Text fontSize={`18px`} margin={`16px 0 60px`}>
                  효인 요양원의 다양한 소식을 전합니다.
                </Text>
                <Wrapper
                  dr={`row`}
                  ju={width < 1280 ? `space-around` : `space-between`}
                >
                  <Wrapper
                    width={
                      width < 1280
                        ? width < 900
                          ? `100%`
                          : `49%`
                        : `calc(100% / 3.2)`
                    }
                    ju={`flex-start`}
                    bgColor={Theme.white_C}
                    minHeight={width < 900 ? `300px` : `345px`}
                    margin={`10px 0`}
                    padding={width < 900 ? `30px 15px` : `50px`}
                    al={`flex-start`}
                    color={Theme.black_C}
                  >
                    <Wrapper
                      width={`95px`}
                      height={`36px`}
                      bgColor={Theme.subTheme10_C}
                      color={Theme.white_C}
                      fontSize={`18px`}
                      fontWeight={`bold`}
                      margin={`0 0 20px`}
                    >
                      공지사항
                    </Wrapper>
                    <Wrapper
                      al={`flex-start`}
                      padding={`0 4px`}
                      minHeight={`160px`}
                      ju={`flex-start`}
                    >
                      {noticeList && noticeList.length === 0 ? (
                        <Wrapper height={`150px`}>
                          <Empty description={false}>
                            등록된 게시글이 없습니다.
                          </Empty>
                        </Wrapper>
                      ) : (
                        noticeList &&
                        noticeList.slice(0, 4).map((data) => (
                          <Text
                            fontSize={`16px`}
                            width={`100%`}
                            isEllipsis
                            margin={`0 0 12px`}
                            isHover
                            onClick={() => noticeDetailHandler(data)}
                          >
                            {data.title}
                          </Text>
                        ))
                      )}
                    </Wrapper>
                    <Link href={`/garden/notice`}>
                      <ATag>
                        <Wrapper
                          dr={`row`}
                          ju={`space-between`}
                          fontSize={width < 900 ? `16px` : `20px`}
                          color={Theme.grey4_C}
                          isHover
                        >
                          <Text>자세히 보기</Text>
                          <SwapRightOutlined />
                        </Wrapper>
                      </ATag>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    width={
                      width < 1280
                        ? width < 900
                          ? `100%`
                          : `49%`
                        : `calc(100% / 3.2)`
                    }
                    ju={`flex-start`}
                    bgColor={Theme.white_C}
                    minHeight={width < 900 ? `300px` : `345px`}
                    margin={`10px 0`}
                    padding={width < 900 ? `30px 15px` : `50px`}
                    al={`flex-start`}
                    color={Theme.black_C}
                  >
                    <Wrapper
                      width={`95px`}
                      height={`36px`}
                      bgColor={Theme.basicTheme_C}
                      color={Theme.white_C}
                      fontSize={`18px`}
                      fontWeight={`bold`}
                      margin={`0 0 20px`}
                    >
                      채용안내
                    </Wrapper>
                    <Wrapper
                      al={`flex-start`}
                      padding={`0 4px`}
                      minHeight={`160px`}
                      ju={`flex-start`}
                    >
                      {recruitList && recruitList.length === 0 ? (
                        <Wrapper height={`150px`}>
                          <Empty description={false}>
                            등록된 게시글이 없습니다.
                          </Empty>
                        </Wrapper>
                      ) : (
                        recruitList &&
                        recruitList.slice(0, 4).map((data) => (
                          <Text
                            fontSize={`16px`}
                            width={`100%`}
                            isEllipsis
                            margin={`0 0 12px`}
                            isHover
                            onClick={() => recruitDetailHandler(data)}
                          >
                            {data.title}
                          </Text>
                        ))
                      )}
                    </Wrapper>
                    <Link href={`/garden/recruit`}>
                      <ATag>
                        <Wrapper
                          dr={`row`}
                          ju={`space-between`}
                          fontSize={width < 900 ? `16px` : `20px`}
                          color={Theme.grey4_C}
                          isHover
                        >
                          <Text>자세히 보기</Text>
                          <SwapRightOutlined />
                        </Wrapper>
                      </ATag>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    width={
                      width < 1280
                        ? width < 900
                          ? `100%`
                          : `49%`
                        : `calc(100% / 3.2)`
                    }
                    ju={`flex-start`}
                    bgColor={Theme.white_C}
                    color={Theme.black_C}
                    minHeight={width < 900 ? `300px` : `345px`}
                    margin={`10px 0`}
                    padding={width < 900 ? `30px 15px` : `50px`}
                    al={`flex-start`}
                  >
                    <Wrapper
                      width={`95px`}
                      height={`36px`}
                      bgColor={Theme.subTheme3_C}
                      color={Theme.white_C}
                      fontSize={`18px`}
                      fontWeight={`bold`}
                      margin={`0 0 20px`}
                    >
                      소통공간
                    </Wrapper>
                    <Text fontSize={width < 900 ? `16px` : `20px`}>
                      효인 요양원과 함께 하세요.
                    </Text>
                    <Wrapper
                      dr={`row`}
                      ju={`space-between`}
                      margin={`35px 0 0`}
                    >
                      <Wrapper width={`auto`}>
                        <Image
                          alt="band"
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_band.png`}
                          width={`74px`}
                        />
                        <Text margin={`10px 0 0`} fontSize={`18px`}>
                          밴드
                        </Text>
                      </Wrapper>
                      <Wrapper width={`auto`}>
                        <Image
                          alt="kakao"
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_kakao.png`}
                          width={`74px`}
                        />
                        <Text margin={`10px 0 0`} fontSize={`18px`}>
                          카카오톡
                        </Text>
                      </Wrapper>
                      <Wrapper width={`auto`}>
                        <Image
                          alt="facebook"
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_face-book.png`}
                          width={`74px`}
                        />
                        <Text margin={`10px 0 0`} fontSize={`18px`}>
                          페이스북
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </RsWrapper>
            </Wrapper>
          </Wrapper>
          <Popup />
        </WholeWrapper>
      </ClientLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // SSR Cookie Settings For Data Load/////////////////////////////////////
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    ////////////////////////////////////////////////////////////////////////
    // 구현부

    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    context.store.dispatch({
      type: NOTICE_LIST_REQUEST,
    });

    context.store.dispatch({
      type: RECRUIT_LIST_REQUEST,
    });

    context.store.dispatch({
      type: PROGRAM_SLIDE_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);
export default Home;
