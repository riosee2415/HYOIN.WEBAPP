import React, { useCallback, useEffect, useState } from "react";
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
import Dementia from "../../components/protection/Dementia";
import { useRouter } from "next/router";
import Monthly from "../../components/nursing/Monthly";
import { WEEK_PROGRAM_WEEK_LIST_REQUEST } from "../../reducers/weekProgram";
import Normal from "../../components/protection/Normal";
import { MOVE_SERVICE_LIST_REQUEST } from "../../reducers/moveService";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import WeekMenu from "../../components/nursing/WeekMenu";
import DementiaSpecial from "../../components/protection/DementiaSpecial";

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

const Protection = () => {
  ////// GLOBAL STATE //////

  ////// HOOKS //////
  const width = useWidth();
  const router = useRouter();
  const dispatch = useDispatch();

  ////// REDUX //////
  ////// USEEFFECT //////

  useEffect(() => {
    dispatch({
      type: WEEK_PROGRAM_WEEK_LIST_REQUEST,
      date: {
        searchMonth: moment().format("YYYY-mm"),
      },
    });
  }, [router.query]);

  ////// TOGGLE //////
  const pageChangeToggle = useCallback((type) => {
    router.replace(`/service/protection?type=${type}`);
  }, []);

  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>효인요양원 | 주간보호</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper>
            <CommonTitle>주간보호</CommonTitle>

            <Wrapper dr={`row`}>
              <Tab
                onClick={() => pageChangeToggle(1)}
                isActive={
                  (router && router.query.type === "1") ||
                  router.query.type === undefined
                }
              >
                일반형
              </Tab>
              {/* <Tab
                onClick={() => pageChangeToggle(2)}
                isActive={router && router.query.type === "2"}
              >
                치매 특화형
              </Tab> */}
              <Tab
                onClick={() => pageChangeToggle(3)}
                isActive={router && router.query.type === "3"}
              >
                프로그램 시간표
              </Tab>
              <Tab
                onClick={() => pageChangeToggle(4)}
                isActive={router && router.query.type === "4"}
              >
                이동서비스 시간표
              </Tab>
              <Tab
                onClick={() => pageChangeToggle(5)}
                isActive={router && router.query.type === "5"}
              >
                주간보호 식단표
              </Tab>
            </Wrapper>

            {router && router.query.type === "1" ? (
              <Normal />
            ) : // ) : router.query.type === "2" ? (
            //   <DementiaSpecial />
            router.query.type === "3" ? (
              <Monthly />
            ) : router.query.type === "4" ? (
              <Dementia />
            ) : router.query.type === "5" ? (
              <WeekMenu />
            ) : (
              <Normal />
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

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Protection;
