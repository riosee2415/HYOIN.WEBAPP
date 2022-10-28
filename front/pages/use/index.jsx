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

const Index = () => {
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
        <title>효인주야간노인복지센터 | 이용안내</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />

          <RsWrapper>
            <CommonTitle>이용안내</CommonTitle>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                시설 입소 대상 어르신
              </Text>
            </Wrapper>

            <Wrapper
              padding={`25px`}
              border={`1px solid ${Theme.subTheme2_C}`}
              bgColor={Theme.subTheme9_C}
              radius={`20px`}
              margin={`0 0 100px`}
            >
              <Fade bottom>
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                  textAlign={`center`}
                >
                  <SpanText fontWeight={`600`}>
                    65세 이상 노인 또는 65세 미만
                  </SpanText>
                  으로서 노인성 질환으로&nbsp;
                  <SpanText fontWeight={`600`}>
                    스스로 일상생활을 수행하기 어렵고,
                  </SpanText>
                </Text>
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                  textAlign={`center`}
                >
                  <SpanText fontWeight={`600`}>
                    장기요양 판정위원회에서 1~2등급 또는 3~5등급(시설급여)
                    판정을 받은 어르신
                  </SpanText>
                  주간보호 이용 자격
                </Text>
              </Fade>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                시설 입소 대상이 될 수 없는 어르신
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`} margin={`0 0 100px`}>
              <Wrapper
                width={width < 700 ? `100%` : `49%`}
                height={`106px`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                bgColor={Theme.lightGrey6_C}
                radius={`20px`}
                margin={`0 0 20px`}
              >
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                >
                  <SpanText fontWeight={`600`}>전염성 질환</SpanText>(감염,
                  결핵, 피부염 *옴 포함)이 있는 노인
                </Text>
              </Wrapper>

              <Wrapper
                width={width < 700 ? `100%` : `49%`}
                height={`106px`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                bgColor={Theme.lightGrey6_C}
                radius={`20px`}
                margin={`0 0 20px`}
              >
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                >
                  심한 자학증세로&nbsp;
                  <SpanText fontWeight={`600`}>다른 노인에게</SpanText>
                </Text>
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                  fontWeight={`600`}
                >
                  위해를 가할 가능성이 높은 노인
                </Text>
              </Wrapper>

              <Wrapper
                width={width < 700 ? `100%` : `49%`}
                height={`106px`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                bgColor={Theme.lightGrey6_C}
                radius={`20px`}
                margin={`0 0 20px`}
              >
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                  fontWeight={`600`}
                >
                  의료적 처치가 많이 요구되는 노인
                </Text>
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                >
                  (정맥주사, 투석, 경관영양투입, 징루상태, 유치도뇨관 상태)
                </Text>
              </Wrapper>

              <Wrapper
                width={width < 700 ? `100%` : `49%`}
                height={`106px`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                bgColor={Theme.lightGrey6_C}
                radius={`20px`}
                margin={`0 0 20px`}
              >
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                >
                  문제행동이 심하여
                </Text>
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                  fontWeight={`600`}
                >
                  격리 수용이 요구되는 노인 (흉기위협, 폭력)
                </Text>
              </Wrapper>

              <Wrapper al={`flex-start`}>
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                >
                  ※ 상단에 해당하는 경우&nbsp;
                  <SpanText fontWeight={`600`} color={Theme.red_C}>
                    즉시 퇴소 조치
                  </SpanText>
                  합니다.
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                주간보호 이용대상 어르신
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`} margin={`0 0 100px`}>
              <Wrapper
                width={width < 700 ? `100%` : `49%`}
                height={`106px`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                bgColor={Theme.lightGrey6_C}
                radius={`20px`}
                margin={`0 0 20px`}
              >
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                >
                  <SpanText fontWeight={`600`}>
                    노인장기요양보험 등급 판정
                  </SpanText>
                  &nbsp;어르신
                </Text>
              </Wrapper>

              <Wrapper
                width={width < 700 ? `100%` : `49%`}
                height={`106px`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                bgColor={Theme.lightGrey6_C}
                radius={`20px`}
                margin={`0 0 20px`}
              >
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                >
                  노인장기요양등급이 없더라도
                </Text>
                <Text
                  fontSize={
                    width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                  }
                  fontWeight={`600`}
                >
                  일상생활 수행에 도움이 필요하신 어르신
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                주간보호 이용대상 어르신
              </Text>
            </Wrapper>

            <Wrapper
              height={`106px`}
              border={`1px solid ${Theme.lightGrey2_C}`}
              bgColor={Theme.lightGrey6_C}
              radius={`20px`}
              margin={`0 0 120px`}
            >
              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `14px` : `16px`) : `20px`
                }
              >
                <SpanText fontWeight={`600`}>노인장기요양 1~5등급</SpanText>
                &nbsp;어르신
              </Text>
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

export default Index;
