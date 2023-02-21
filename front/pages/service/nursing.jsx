import React, { useCallback } from "react";
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
} from "../../components/commonComponents";
import SubBanner from "../../components/SubBanner";
import styled from "styled-components";
import Theme from "../../components/Theme";
import Daily from "../../components/nursing/Daily";
import Unit from "../../components/nursing/Unit";
import Monthly from "../../components/nursing/Monthly";
import { PROGRAM_WEEK_LIST_REQUEST } from "../../reducers/program";
import { useRouter } from "next/router";
import Diet from "../../components/nursing/Diet";
import Monthly2 from "../../components/nursing/Monthly2";

const Tab = styled(Wrapper)`
  width: auto;
  padding: 16px 20px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.isActive ? Theme.white_C : Theme.grey2_C)};
  background: ${(props) =>
    props.isActive ? Theme.subTheme10_C : Theme.lightGrey4_C};
  cursor: pointer;
  position: relative;

  &:hover {
    background: ${Theme.subTheme10_C};
    color: ${Theme.white_C};
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 1px;
    height: 40%;
    background: ${Theme.grey2_C};
  }

  &:last-child:after {
    height: 0;
  }

  @media (max-width: 700px) {
    width: calc(100% / 2);
    font-size: 15px;
    padding: 16px 0;

    &:nth-child(2n):after {
      height: 0;
    }
  }
`;

const Nursing = () => {
  ////// GLOBAL STATE //////
  ////// HOOKS //////
  const width = useWidth();
  const router = useRouter();

  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  const pageChangeToggle = useCallback((type) => {
    router.replace(`/service/nursing?type=${type}`);
  }, []);

  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>효인요양원 | 요양원</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper>
            <CommonTitle>요양원</CommonTitle>

            <Wrapper dr={`row`}>
              <Tab
                onClick={() => pageChangeToggle(1)}
                isActive={
                  (router && router.query.type === "1") ||
                  router.query.type === undefined
                }
              >
                맞춤 서비스(Unit Care)
              </Tab>
              <Tab
                onClick={() => pageChangeToggle(2)}
                isActive={router && router.query.type === "2"}
              >
                일일생활시간표
              </Tab>
              <Tab
                onClick={() => pageChangeToggle(3)}
                isActive={router && router.query.type === "3"}
              >
                월간 프로그램 시간표
              </Tab>
              <Tab
                onClick={() => pageChangeToggle(4)}
                isActive={router && router.query.type === "4"}
              >
                주간 식단표
              </Tab>
            </Wrapper>

            {router && router.query.type === "1" ? (
              <Unit />
            ) : router.query.type === "2" ? (
              <Daily />
            ) : router.query.type === "3" ? (
              <Monthly2 />
            ) : router.query.type === "4" ? (
              <Diet />
            ) : (
              <Unit />
            )}
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

    context.store.dispatch({
      type: PROGRAM_WEEK_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Nursing;
