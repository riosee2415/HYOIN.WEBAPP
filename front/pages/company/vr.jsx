import React from "react";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import { WholeWrapper } from "../../components/commonComponents";
// import { Pannellum } from "@georgedrpg/pannellum-react-next";
import "@georgedrpg/pannellum-react-next/es/css/video-js.css";
import "@georgedrpg/pannellum-react-next/es/css/pannellum.css";
import "@georgedrpg/pannellum-react-next/es/css/style-textInfo.css";
const Pannellum = React.lazy(() => import("@georgedrpg/pannellum-react-next"));
import Theme from "../../components/Theme";

const Vr = () => {
  ////// GLOBAL STATE //////
  ////// HOOKS //////
  const width = useWidth();
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////
  // https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/vr/3d+img.jpeg

  return (
    <>
      <Head>
        <title>효인주야간노인복지센터 | 시설 3D 안내</title>
      </Head>
      <WholeWrapper>
        <Pannellum
          width="100%"
          height="500px"
          image="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/vr/3d+img.jpeg"
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          showZoomCtrl={false}
        ></Pannellum>
      </WholeWrapper>
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

export default Vr;
