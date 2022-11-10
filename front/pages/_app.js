import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import Theme from "../components/Theme";
import GlobalStyles from "../components/GlobalStyles";
import wrapper from "../store/configureStore";
import WidthProvider from "../components/WidthProvider";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ACCEPT_LOG_CREATE_REQUEST } from "../reducers/accept";

const Fourleaf = ({ Component }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const getIpClient = useCallback(async () => {
    const isCheck = sessionStorage.getItem("QSIDSPDSDQDAQSTEFA");

    if (!isCheck && router.pathname.indexOf("admin") === -1) {
      try {
        const ipData = await fetch("https://geolocation-db.com/json/");
        const locationIp = await ipData.json();

        sessionStorage.setItem(
          "QSIDSPDSDQDAQSTEFA",
          "ISDGSAWDCASDHERGEKIJCSDMK"
        );

        dispatch({
          type: ACCEPT_LOG_CREATE_REQUEST,
          data: {
            ip: locationIp.IPv4,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    getIpClient();
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Head>
        <title>효인주야간노인복지센터 | administrator</title>

        <meta name="author" content="4LEAF SOFTWARE <4leaf.ysh@gmail.com>" />
        {/* <!-- OG tag  --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="효인주야간노인복지센터" />
        <meta property="og:site_name" content="효인주야간노인복지센터" />
        <meta property="og:url" content="https://www.sample.com/" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image" content="./og_img.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.sample.com" />

        <meta
          name="keywords"
          content="효인요양원, 효인주간보호, 효인방문요양,, 대전요양원, 대전주간보호, 대전방문요양, 서구요양원, 유성구요양원, 충남요양원, 세종요양원, 계룡요양원, 신축요양원, 신축주간보호, 신축방문요양, 대전효인요양원, 대전효인주간보호, 대전효인방문요양, 효인주야간노인복지센터"
        />
        <meta
          property="og:keywords"
          content="효인요양원, 효인주간보호, 효인방문요양,, 대전요양원, 대전주간보호, 대전방문요양, 서구요양원, 유성구요양원, 충남요양원, 세종요양원, 계룡요양원, 신축요양원, 신축주간보호, 신축방문요양, 대전효인요양원, 대전효인주간보호, 대전효인방문요양, 효인주야간노인복지센터"
        />

        <meta
          name="description"
          content={
            "효를 실천하는 사람들, 효인요양원/주간보호/방문요양, 1500평 신축 단독건물, 전문인력 24시간 상주, 대전 시내권, 도심 속 자연과 함께하는 노후생활"
          }
        />
        <meta
          property="og:description"
          content={
            "효를 실천하는 사람들, 효인요양원/주간보호/방문요양, 1500평 신축 단독건물, 전문인력 24시간 상주, 대전 시내권, 도심 속 자연과 함께하는 노후생활"
          }
        />

        {/* 프리텐다드 폰트 */}
        <link
          href="https://webfontworld.github.io/pretendard/Pretendard.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"
        />
      </Head>
      <Component />
    </ThemeProvider>
  );
};
Fourleaf.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Fourleaf);
