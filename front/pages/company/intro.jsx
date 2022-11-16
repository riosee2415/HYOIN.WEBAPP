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
          <CommonTitle>요양원 소개</CommonTitle>
          <Wrapper
            padding={`50px 0`}
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_bg-1.png")`}
          >
            <RsWrapper>
              <Wrapper dr={`row`} ju={`space-between`}>
                <Image
                  alt="image"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_intro1.png`}
                  width={width < 700 ? `100%` : `48%`}
                  margin={width < 700 && `0 0 10px`}
                />
                <Wrapper width={width < 700 ? `100%` : `48%`} al={`flex-start`}>
                  <Fade bottom>
                    <Text
                      fontSize={width < 700 ? `25px` : `32px`}
                      fontWeight={`bold`}
                      color={Theme.subTheme3_C}
                      margin={`0 0 30px`}
                    >
                      孝를 실천하는 아름다운 사람들
                    </Text>
                    <Text fontSize={width < 700 ? `18px` : `20px`}>
                      안녕하세요?
                    </Text>
                    <Text fontSize={width < 700 ? `18px` : `20px`}>
                      오늘날 우리사회는 고령화 시대에 접어들면서
                    </Text>
                    <Text fontSize={width < 700 ? `18px` : `20px`}>
                      孝의 가치관이 변하고 맞벌이 부부의 증가, 핵가족화로 인해
                    </Text>
                    <Text
                      fontSize={width < 700 ? `18px` : `20px`}
                      fontWeight={`bold`}
                      color={Theme.subTheme10_C}
                    >
                      어르신들을 보살필때 어려움을 겪는 가정이 많아졌습니다.
                    </Text>
                  </Fade>
                </Wrapper>
              </Wrapper>
              <Wrapper
                dr={width < 700 ? `column-reverse` : `row`}
                ju={`space-between`}
                margin={`60px 0 0`}
              >
                <Wrapper width={width < 700 ? `100%` : `48%`} al={`flex-start`}>
                  <Fade bottom>
                    <Text fontSize={width < 700 ? `18px` : `20px`}>
                      효인요양원은 노인성질환 및 만성질환으로 인하여 일상생활에
                      불편하거나
                    </Text>
                    <Text fontSize={width < 700 ? `18px` : `20px`}>
                      가족부양을 받을 수 없는 어르신들에게 필요한 서비스를
                      제공하여
                    </Text>
                    <Text fontSize={width < 700 ? `18px` : `20px`}>
                      부양가족의 부담을 경감시키고, 심신기능강화 및 전신회복을
                      위하여
                    </Text>
                    <Text
                      fontSize={width < 700 ? `18px` : `20px`}
                      fontWeight={`bold`}
                      color={Theme.subTheme10_C}
                    >
                      삶의 질을 향상시키는 전문 노인의료복지시설입니다.
                    </Text>
                  </Fade>
                </Wrapper>
                <Image
                  alt="image"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_intro2.png`}
                  width={width < 700 ? `100%` : `48%`}
                  margin={width < 700 && `0 0 10px`}
                />
              </Wrapper>
            </RsWrapper>
          </Wrapper>
          <Wrapper
            padding={`50px 0`}
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_bg-2.png")`}
          >
            <RsWrapper>
              <Wrapper dr={`row`} ju={`space-between`}>
                <Image
                  alt="image"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_intro3.png`}
                  width={width < 700 ? `100%` : `48%`}
                  margin={width < 700 && `0 0 10px`}
                />
                <Wrapper width={width < 700 ? `100%` : `48%`} al={`flex-start`}>
                  <Fade bottom>
                    <Text fontSize={width < 700 ? `18px` : `20px`}>
                      1500평에 달하는 넓은 부지, 도심 속에서 산으로 둘러쌓인
                    </Text>
                    <Text fontSize={width < 700 ? `18px` : `20px`}>
                      공기 좋은 전원적인 공간, 밝고 따뜻한 최적의 공간을 갖추고
                      있으며,
                    </Text>
                    <Text fontSize={width < 700 ? `18px` : `20px`}>
                      재활운동기구를 활용한 재활운동과 산책을 통해
                    </Text>
                    <Text
                      fontSize={width < 700 ? `18px` : `20px`}
                      fontWeight={`bold`}
                      color={Theme.subTheme10_C}
                    >
                      신체적, 정신적 자존감을 회복시킬 수 있는 최적의
                      장소입니다.
                    </Text>
                  </Fade>
                </Wrapper>
              </Wrapper>
              <Wrapper
                dr={width < 700 ? `column-reverse` : `row`}
                ju={`space-between`}
                margin={`60px 0 0`}
              >
                <Wrapper width={width < 700 ? `100%` : `48%`} al={`flex-start`}>
                  <Fade bottom>
                    <Text
                      fontSize={width < 700 ? `18px` : `20px`}
                      fontWeight={`bold`}
                      color={Theme.subTheme10_C}
                    >
                      정식 '간호사'와 '영양사'가 어르신들을 위해 맞춤
                      의료서비스와
                    </Text>
                    <Text
                      fontSize={width < 700 ? `18px` : `20px`}
                      fontWeight={`bold`}
                      color={Theme.subTheme10_C}
                    >
                      영양가 높고 따뜻한 급식서비스를 제공하고 있으며
                    </Text>
                    <Text fontSize={width < 700 ? `18px` : `20px`}>
                      프로그램을 일반형, 치매특화형 프로그램으로 분리하여
                      운영하고 있습니다.
                    </Text>
                  </Fade>
                </Wrapper>
                <Image
                  alt="image"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_intro4.png`}
                  width={width < 700 ? `100%` : `48%`}
                  margin={width < 700 && `0 0 10px`}
                />
              </Wrapper>
            </RsWrapper>
          </Wrapper>

          <Wrapper
            bgColor={Theme.lightGrey6_C}
            margin={width < 900 ? `0` : `140px 0 0`}
            padding={`100px 0`}
          >
            <RsWrapper>
              <Wrapper dr={`row`}>
                <Image
                  alt="image"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_ledger.png`}
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
                      어르신들께 가족같은 마음으로 서비스를 제공하고,
                    </Text>
                    <Text>
                      대덕대학교 사회복지학과 겸임교수로 재직하고 있는 전문성을
                      갖춘 사회복지 실천가로서 어르신과
                    </Text>
                    <Text>
                      보호자 욕구에 맞는 최고의 서비스를 제공해 심리.사회적
                      안정을 지원하겠습니다.
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
                      src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo.png`}
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
