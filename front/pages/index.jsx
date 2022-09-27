import React from "react";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import ClientLayout from "../components/ClientLayout";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import {
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
`;

const Home = ({}) => {
  ////// GLOBAL STATE //////

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
              <QuickWrapper>
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
                  fontSize={`22px`}
                  fontWeight={`bold`}
                  margin={`14px 0 8px`}
                >
                  요양원 소개
                </Text>
                <Text fontSize={`16px`}>효인은</Text>
                <Text fontSize={`16px`}>주간, 방문 또한 가능합니다.</Text>
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
                  fontSize={`22px`}
                  fontWeight={`bold`}
                  margin={`14px 0 8px`}
                >
                  요양원-식단표
                </Text>
                <Text fontSize={`16px`}>요양원의</Text>
                <Text fontSize={`16px`}>식단표 열람이 가능합니다.</Text>
              </QuickWrapper>
              <QuickWrapper>
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_day-meal.png`}
                  width={`35px`}
                />
                <Image
                  alt="icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/main-page/icon_day-meal_h.png`}
                  width={`35px`}
                  className={`hover`}
                />
                <Text
                  fontSize={`22px`}
                  fontWeight={`bold`}
                  margin={`14px 0 8px`}
                >
                  주간보호-식단표
                </Text>
                <Text fontSize={`16px`}>주간보호의</Text>
                <Text fontSize={`16px`}>식단표 열람이 가능합니다.</Text>
              </QuickWrapper>
              <QuickWrapper>
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
                  fontSize={`22px`}
                  fontWeight={`bold`}
                  margin={`14px 0 8px`}
                >
                  공지사항
                </Text>
                <Text fontSize={`16px`}>효인의</Text>
                <Text fontSize={`16px`}>공지사항을 확인해보세요.</Text>
              </QuickWrapper>
              <QuickWrapper>
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
                  fontSize={`22px`}
                  fontWeight={`bold`}
                  margin={`14px 0 8px`}
                >
                  오시는 길
                </Text>
                <Text fontSize={`16px`}>기관방문을 원하시는 분은</Text>
                <Text fontSize={`16px`}>약도를 참고해주시기 바랍니다.</Text>
              </QuickWrapper>
            </Wrapper>
          </RsWrapper>

          <Wrapper
            bgImg={`url("")`}
            padding={`130px 0`}
            dr={`row`}
            al={`flex-start`}
            ju={`space-between`}
          >
            <Wrapper width={`50%`}></Wrapper>
            <Wrapper width={`50%`}></Wrapper>
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

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);
export default Home;
