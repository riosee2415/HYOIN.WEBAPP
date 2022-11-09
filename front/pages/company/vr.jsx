import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import { WholeWrapper, Wrapper } from "../../components/commonComponents";

import Theme from "../../components/Theme";

const Vr = () => {
  ////// GLOBAL STATE //////
  const [view, setView] = useState(false);

  ////// HOOKS //////
  const width = useWidth();
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////
  // https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/vr/3d+img.jpeg

  useEffect(() => {
    setTimeout(() => {
      setView(true);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>효인주야간노인복지센터 | 시설 3D 안내</title>
      </Head>
      <WholeWrapper>
        <Wrapper height={`100vh`}>
          <iframe
            width={`100%`}
            height={`100%`}
            style={{ border: `none` }}
            src={"http://localhost:3030/"}
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          />
        </Wrapper>
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
