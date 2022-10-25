import React from "react";
import ClientLayout from "../../components/ClientLayout";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import {
  CommonTitle,
  Image,
  RsWrapper,
  SpanText,
  Text,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";
import SubBanner from "../../components/SubBanner";
import Theme from "../../components/Theme";
import styled from "styled-components";
import { useState } from "react";
import Facility1Slider from "../../components/slide/Facility1Slider";

const ListText = styled(Text)`
  display: list-item;
  margin: ${(props) => props.margin || `0 0 16px 24px`};
  font-size: 22px;

  &::marker {
    color: ${Theme.subTheme10_C};
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const Btn = styled(Wrapper)`
  width: calc(100% / 7);
  height: 80px;
  background: ${Theme.lightGrey4_C};
  border: 1px solid ${Theme.lightGrey2_C};
  font-size: 22px;
  position: relative;

  ${(props) =>
    props.isActive &&
    `
    &:before {
    content: "";
    position: absolute;
    bottom: -18px;
    width: 0px;
    height: 0px;
    border-top: 18px solid ${Theme.subTheme10_C};
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    z-index: 10;
  }

    background: ${Theme.subTheme10_C};
    border: 1px solid ${Theme.subTheme10_C};
    color: ${Theme.white_C};
  `}

  &:hover {
    background: ${Theme.subTheme10_C};
    border: 1px solid ${Theme.subTheme10_C};
    color: ${Theme.white_C};
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 14px;
    height: 60px;
  }
`;

const Facility = () => {
  ////// GLOBAL STATE //////
  const [currentTab, setCurrentTab] = useState(0);
  ////// HOOKS //////
  const width = useWidth();
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>효인주야간노인복지센터 | 시설 개요</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper padding={`0 0 100px`}>
            <CommonTitle>시설 개요</CommonTitle>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                시설 개요
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`}>
              <Wrapper width={width < 1280 ? `100%` : `50%`}>
                <Wrapper
                  dr={`row`}
                  bgColor={Theme.lightGrey4_C}
                  borderTop={`1px solid ${Theme.subTheme10_C}`}
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                >
                  <Wrapper
                    minHeight={width < 900 ? `50px` : `80px`}
                    width={width < 900 ? `100%` : `135px`}
                    fontSize={width < 900 ? `16px` : `22px`}
                    borderLeft={`1px solid ${Theme.lightGrey2_C}`}
                    borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    6F
                  </Wrapper>
                  <Wrapper
                    minHeight={`80px`}
                    width={width < 900 ? `100%` : `calc(100% - 135px)`}
                    bgColor={Theme.white_C}
                    fontSize={width < 900 ? `16px` : `20px`}
                    borderLeft={`1px solid ${Theme.lightGrey2_C}`}
                    borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    운동시설│루프가든
                  </Wrapper>
                </Wrapper>
                <Wrapper dr={`row`} bgColor={Theme.lightGrey4_C}>
                  <Wrapper
                    minHeight={width < 900 ? `50px` : `80px`}
                    width={width < 900 ? `100%` : `135px`}
                    fontSize={width < 900 ? `16px` : `22px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    5F
                  </Wrapper>
                  <Wrapper
                    minHeight={`80px`}
                    width={width < 900 ? `100%` : `calc(100% - 135px)`}
                    bgColor={Theme.white_C}
                    fontSize={width < 900 ? `16px` : `20px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    <Text>요양원 생활실 501~513│비상재해대피시설</Text>
                    <Text>거실 501, 503, 505</Text>
                  </Wrapper>
                </Wrapper>
                <Wrapper dr={`row`} bgColor={Theme.lightGrey4_C}>
                  <Wrapper
                    minHeight={width < 900 ? `50px` : `80px`}
                    width={width < 900 ? `100%` : `135px`}
                    fontSize={width < 900 ? `16px` : `22px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    4F
                  </Wrapper>
                  <Wrapper
                    minHeight={`80px`}
                    width={width < 900 ? `100%` : `calc(100% - 135px)`}
                    bgColor={Theme.white_C}
                    fontSize={width < 900 ? `16px` : `20px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    <Text>요양원 생활실 401~413│비상재해대피시설</Text>
                    <Text>거실 401, 403, 405</Text>
                  </Wrapper>
                </Wrapper>
                <Wrapper dr={`row`} bgColor={Theme.lightGrey4_C}>
                  <Wrapper
                    minHeight={width < 900 ? `50px` : `80px`}
                    width={width < 900 ? `100%` : `135px`}
                    fontSize={width < 900 ? `16px` : `22px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    3F
                  </Wrapper>
                  <Wrapper
                    minHeight={`80px`}
                    width={width < 900 ? `100%` : `calc(100% - 135px)`}
                    bgColor={Theme.white_C}
                    fontSize={width < 900 ? `16px` : `20px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    <Text>요양원 생활실 301~313│비상재해대피시설</Text>
                    <Text>거실 301, 303, 305</Text>
                  </Wrapper>
                </Wrapper>
                <Wrapper dr={`row`} bgColor={Theme.lightGrey4_C}>
                  <Wrapper
                    minHeight={width < 900 ? `50px` : `80px`}
                    width={width < 900 ? `100%` : `135px`}
                    fontSize={width < 900 ? `16px` : `22px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    2F
                  </Wrapper>
                  <Wrapper
                    minHeight={`80px`}
                    width={width < 900 ? `100%` : `calc(100% - 135px)`}
                    bgColor={Theme.white_C}
                    fontSize={width < 900 ? `16px` : `20px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    <Text>요양원 생활실 201~213│비상재해대피시설</Text>
                    <Text>거실 201, 203, 205</Text>
                  </Wrapper>
                </Wrapper>
                <Wrapper dr={`row`} bgColor={Theme.lightGrey4_C}>
                  <Wrapper
                    minHeight={width < 900 ? `50px` : `80px`}
                    width={width < 900 ? `100%` : `135px`}
                    fontSize={width < 900 ? `16px` : `22px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    1F
                  </Wrapper>
                  <Wrapper
                    minHeight={`80px`}
                    width={width < 900 ? `100%` : `calc(100% - 135px)`}
                    bgColor={Theme.white_C}
                    fontSize={width < 900 ? `16px` : `20px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    <Text>주간보호│조리실│식당│휴게실(cafe)│물리치료실</Text>
                    <Text>
                      프로그램실│원장 · 간호사실│세탁실│자원봉사실│사무실
                    </Text>
                  </Wrapper>
                </Wrapper>
                <Wrapper dr={`row`} bgColor={Theme.lightGrey4_C}>
                  <Wrapper
                    minHeight={width < 900 ? `50px` : `80px`}
                    width={width < 900 ? `100%` : `135px`}
                    fontSize={width < 900 ? `16px` : `22px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    야외시설
                  </Wrapper>
                  <Wrapper
                    minHeight={`80px`}
                    width={width < 900 ? `100%` : `calc(100% - 135px)`}
                    bgColor={Theme.white_C}
                    fontSize={width < 900 ? `16px` : `20px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    야외정원│산책로│주차장
                  </Wrapper>
                </Wrapper>
              </Wrapper>
              <Wrapper
                width={width < 1280 ? `100%` : `50%`}
                padding={width < 1280 ? `20px 0 0` : `0 0 0 60px`}
                al={`flex-start`}
              >
                <Image
                  alt="image"
                  radius={`10px`}
                  margin={`0 0 20px`}
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/img_section5.png`}
                />
                <ListText>
                  <SpanText fontWeight={`bold`}>위치 :</SpanText>
                  &nbsp;대전광역시 서구 계룡로264번길 52(월평동, 효인요양원)
                </ListText>
                <ListText>
                  <SpanText fontWeight={`bold`}>제공서비스 :</SpanText>
                  &nbsp;입소시설(요양원) 및 재가시설(주간보호, 방문요양)
                </ListText>
                <ListText>
                  <Text>
                    <SpanText fontWeight={`bold`}>정원 :</SpanText>&nbsp;입소
                    00명(*수시로 변경),
                  </Text>
                  <Text>주간보호 61명(일반형 00명, 치매전담형 00명)</Text>
                </ListText>
                <ListText>
                  <SpanText fontWeight={`bold`}>규모 :</SpanText>
                  &nbsp;지상 5층(대지 2,467m^2 / 건물면적 5,023,62m^2)
                </ListText>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`100px 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                시설 안내
              </Text>
            </Wrapper>

            <Wrapper dr={`row`}>
              <Btn onClick={() => setCurrentTab(0)} isActive={currentTab === 0}>
                1F
              </Btn>
              <Btn onClick={() => setCurrentTab(1)} isActive={currentTab === 1}>
                2F
              </Btn>
              <Btn onClick={() => setCurrentTab(2)} isActive={currentTab === 2}>
                3F
              </Btn>
              <Btn onClick={() => setCurrentTab(3)} isActive={currentTab === 3}>
                4F
              </Btn>
              <Btn onClick={() => setCurrentTab(4)} isActive={currentTab === 4}>
                5F
              </Btn>
              <Btn onClick={() => setCurrentTab(5)} isActive={currentTab === 5}>
                6F
              </Btn>
              <Btn onClick={() => setCurrentTab(6)} isActive={currentTab === 6}>
                야외시설
              </Btn>
            </Wrapper>

            {currentTab === 0 && <Facility1Slider />}

            <Wrapper dr={`row`} ju={`flex-start`} margin={`100px 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                시설 갤러리
              </Text>
            </Wrapper>
          </RsWrapper>
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

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Facility;
