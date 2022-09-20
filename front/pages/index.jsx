import React from "react";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import ClientLayout from "../components/ClientLayout";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import { Image, WholeWrapper, Wrapper } from "../components/commonComponents";
import useWidth from "../hooks/useWidth";
import Theme from "../components/Theme";
import styled from "styled-components";
import Head from "next/head";
import Popup from "../components/popup/popup";
import Mainslider from "../components/slide/MainSlider";
import ToastEditorComponent from "../components/editor/ToastEditorComponent";
import SubBanner from "../components/SubBanner";

const Home = ({}) => {
  const width = useWidth();
  ////// GLOBAL STATE //////

  ////// HOOKS //////
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  const getEditContent = (contentValue) => {
    console.log(contentValue);
  };

  return (
    <>
      <Head>
        <title>페이지 이름을 적어주세요</title>
      </Head>

      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <Mainslider />

          <ToastEditorComponent
            action={getEditContent}
            // placeholder="placeholder"
          />

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
