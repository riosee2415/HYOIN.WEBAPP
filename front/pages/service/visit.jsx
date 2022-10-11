import React, { useState } from "react";
import ClientLayout from "../../components/ClientLayout";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import {
  CommonTitle,
  RsWrapper,
  WholeWrapper,
  Wrapper,
  Text,
} from "../../components/commonComponents";
import SubBanner from "../../components/SubBanner";
import styled from "styled-components";
import Theme from "../../components/Theme";

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid ${Theme.subTheme10_C};
  border-radius: 100%;
  margin: 0 16px 0 0;
`;

const ListText = styled(Text)`
  display: list-item;
  margin: 0 0 0 24px;
  font-size: 22px;

  &::marker {
    color: ${Theme.subTheme10_C};
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const Nursing = () => {
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
        <title>효인주야간노인복지센터 | 방문요양</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper padding={`0 0 120px`}>
            <CommonTitle>방문요양</CommonTitle>
            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              fontSize={width < 900 ? `20px` : `28px`}
              fontWeight={`bold`}
            >
              <Circle /> 서비스
            </Wrapper>
            <Wrapper margin={`40px 0 30px`} al={`flex-start`}>
              <ListText>
                요양보호사가 수급자 가정 등을 방문하여 어르신 개별 욕구에 따른
                신체활동 및 가사활동, 인지활동, 산책, 말벗과 같은 정서 지원 등을
                제공
              </ListText>
            </Wrapper>

            <Wrapper
              dr={`row`}
              borderTop={`1px solid ${Theme.subTheme10_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              fontSize={width < 900 ? `16px` : `22px`}
              fontWeight={`bold`}
              display={width < 900 ? `none` : `flex`}
            >
              <Wrapper
                height={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`
                }
                bgColor={Theme.subTheme9_C}
                borderLeft={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`1px solid ${Theme.lightGrey2_C}`}
              >
                서비스
              </Wrapper>
              <Wrapper
                height={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 250px)`
                    : `calc(100% - 350px)`
                }
                bgColor={Theme.subTheme9_C}
                borderLeft={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`1px solid ${Theme.lightGrey2_C}`}
              >
                내용
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`
                }
                bgColor={Theme.lightGrey4_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                이용자 관리
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 250px)`
                    : `calc(100% - 350px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                이용 신청 상담, 이용 상담, 사례관리 등
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`
                }
                bgColor={Theme.lightGrey4_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                신체활동 지원
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 250px)`
                    : `calc(100% - 350px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text>
                  세면 도움, 구강 관리, 머리감기, 목욕 · 옷 갈아입히기,
                </Text>
                <Text>
                  화장실 이용하기, 식사, 이동 도움, 체위 변경, 복약도움
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`
                }
                bgColor={Theme.lightGrey4_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                인지활동 지원
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 250px)`
                    : `calc(100% - 350px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                인지자극 활동, 일상생활 함께하기
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`
                }
                bgColor={Theme.lightGrey4_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                정서 지원
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 250px)`
                    : `calc(100% - 350px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                의사소통 도움(발음 연습, 필담 등), 말벗 및 격려
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`
                }
                bgColor={Theme.lightGrey4_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                일상생활 지원, 환경 관리
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 250px)`
                    : `calc(100% - 350px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                취사, 생활환경 관리
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`
                }
                bgColor={Theme.lightGrey4_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                개인활동 지원
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 250px)`
                    : `calc(100% - 350px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                외출시 동행(병원 동행, 산책 도움 등)
              </Wrapper>
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

export default Nursing;
