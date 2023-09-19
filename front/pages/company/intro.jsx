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
import Fade from "react-reveal/Fade";

const Intro = () => {
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
        <title>효인요양원 | 요양원 소개</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <CommonTitle>인사말</CommonTitle>
          <Wrapper
            padding={`90px 0`}
            dr={`row`}
            bgImg={`url("https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_bg-1.png")`}
          >
            <Wrapper
              display={width < 1300 ? `none` : `flex`}
              width={`50%`}
              padding={`0 30px 0 0`}
            >
              <Image
                alt="image"
                src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/facility/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%A9%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A7%E1%86%AB.png`}
              />
            </Wrapper>
            <Wrapper
              width={width < 1300 ? `100%` : `50%`}
              padding={width < 1300 ? `0 20px` : `0 0 0 30px`}
              al={`flex-start`}
              fontSize={width < 700 ? `18px` : `20px`}
            >
              <Wrapper width={width < 1300 ? `100%` : `80%`} al={`flex-start`}>
                <Wrapper
                  dr={`row`}
                  ju={`flex-start`}
                  al={`flex-end`}
                  margin={`0 0 30px`}
                >
                  <Image
                    alt="logo"
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/logo_symbol.png`}
                    width={`35px`}
                  />
                  <Text
                    fontSize={width < 700 ? `25px` : `32px`}
                    fontWeight={`bold`}
                    color={Theme.subTheme3_C}
                    margin={`0 6px`}
                    lineHeight={`1`}
                  >
                    를 실천하는 아름다운 사람들
                  </Text>
                  <Image
                    width={`180px`}
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo.png`}
                  />
                </Wrapper>
                <Text>안녕하세요? </Text>
                <Text>
                  오늘날 우리사회는 고령화 시대에 접어들면서 孝의 가치관이
                  변화했으며 맞벌이 부부의 증가 및 핵가족화로 인하여 어르신들을
                  보살필때 어려움을 겪는 가정이 많아졌습니다.
                </Text>
                <Text margin={`30px 0 0`}>
                  본원은 고령이나 노인성 질병 등으로 일상생활을 혼자서 수행하기
                  어려운 분들에게 신체활동 및 일상생활 지원 등의 서비스를
                  제공하여 노후 생활의 안정과 그 가족의 부담을 덜어줌으로써
                  국민의 삶의 질을 향상하도록 서비스를 제공 하는
                </Text>
                <Text margin={`5px 0 0`}>
                  전문노인의료복지시설
                  <Image
                    width={`120px`}
                    margin={`0 10px`}
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo.png`}
                  />
                  입니다.
                </Text>
                <Text margin={`30px 0 0`}>
                  본원은 월평동에 위치하고 월평공원과 도솔산으로 둘러쌓인
                  전원적인 공간으로 어르신들이 내 집처럼 따뜻하고 편안한 생활을
                  할 수 있도록 쾌적한 환경을 마련하고 신체적 정신적으로 안정된
                  생활를 유지할 수 있도록 , 공기 좋고 포근한 공간을 갖추고 있는
                  최적의 본원입니다.
                </Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper padding={`100px 0`}>
            <RsWrapper>
              <Wrapper dr={`row`}>
                <Image
                  alt="image"
                  src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_ledger.png`}
                  width={`236px`}
                />
                <Wrapper
                  width={width < 900 ? `100%` : `calc(100% - 236px)`}
                  padding={width < 900 ? `20px 0 0` : `0 0 0 30px`}
                  al={`flex-start`}
                  fontSize={width < 900 ? `17px` : `22px`}
                >
                  <Fade bottom>
                    <Text>
                      “孝를 실천하는 아름다운 사람들”이라는 원훈에 따라
                      어르신들께 가족 같은 마음으로 질 높은 서비스를 제공하며,
                      대덕대학교 사회복지학과 겸임교수로 재직하고 있는 전문성을
                      갖춘 사회복지 실천가로서 어르신과 보호자 욕구에 맞는
                      최고의 서비스를 제공해 심리적 사회적 안정을
                      지원하겠습니다.
                    </Text>
                  </Fade>
                  <Wrapper
                    dr={`row`}
                    ju={`space-between`}
                    fontSize={width < 900 ? `18px` : `24px`}
                    fontWeight={`bold`}
                    margin={`60px 0 0`}
                  >
                    <Wrapper width={`auto`} al={`flex-start`}>
                      <Text>효인요양원 원장</Text>
                      <Text>대덕대학교 사회복지학과 겸임교수</Text>
                      <Text margin={width < 900 ? `30px 0 20px` : `40px 0 0`}>
                        이 진 숙
                      </Text>
                    </Wrapper>

                    <Image
                      alt="logo"
                      src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo.png`}
                      width={width < 900 ? `120px` : `163px`}
                    />
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </RsWrapper>
          </Wrapper>
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

export default Intro;
