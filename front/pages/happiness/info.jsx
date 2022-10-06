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
import styled from "styled-components";

const BottomText = styled(Text)`
  font-size: ${(props) => props.fontSize || `32px`};
  font-family: ${(props) => props.sCore && "S-CoreDream-6Bold"};
  margin: ${(props) => props.margin || `0 0 35px`};
  color: ${(props) => props.color || Theme.white_C};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${(props) => props.bottomBgColor || Theme.subTheme6_C};
    width: 100%;
    height: 50%;
    z-index: -1;
  }
`;

const Info = () => {
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
        <title>효인주야간노인복지센터 | 자원봉사안내</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper padding={`80px 0 120px`}>
            <CommonTitle fontSize={`38px`} fontWeight={`700`}>
              자원봉사안내
            </CommonTitle>

            <Wrapper
              position={`relative`}
              radius={`30px`}
              overflow={`hidden`}
              margin={`0 0 60px`}
            >
              <Wrapper
                position={`absolute`}
                top={`0`}
                left={`0`}
                bgColor={`rgba(0,0,0,0.5)`}
                height={`100%`}
              >
                <BottomText sCore={true}>나눔</BottomText>
                <Text color={Theme.white_C} fontSize={`20px`}>
                  "봉사하는 당신이 아름답습니다"
                </Text>
              </Wrapper>
              <Image src="" alt="bgImg" />
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`} margin={`0 0 130px`}>
              <Wrapper width={`48%`} radius={`20px`} overflow={`hidden`}>
                <Image src="" alt="bgImg" />
              </Wrapper>

              <Wrapper width={`48%`} al={`flex-start`}>
                <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 30px`}>
                  <Wrapper
                    width={`18px`}
                    height={`18px`}
                    radius={`100%`}
                    border={`1px solid ${Theme.subTheme2_C}`}
                    margin={`0 15px 0 0`}
                  ></Wrapper>

                  <Text fontSize={`28px`} fontWeight={`700`}>
                    지원봉사 운영 목적
                  </Text>
                </Wrapper>

                <Text fontSize={`20px`}>
                  효인요양원에서는 생활과 봉사활동의 연계를 통하여 일회성이 아닌
                  지속적인 자원봉사 활동이 이루어 질 수 있도록 교육 및 실습을
                  체계적으로 운영합니다.
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper margin={`0 0 100px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 0 15px`}
              ></Wrapper>
              <Text fontSize={`28px`} fontWeight={`600`} margin={`0 0 40px `}>
                자원봉사의 의미와 개념
              </Text>

              <Wrapper dr={`row`} ju={`space-between`}>
                <Wrapper al={`flex-start`} fontSize={`18px`} width={`27%`}>
                  자원봉사라는 말을 문자가 뜻하는 그대로 해석하면 '스스로 원해서
                  받들고 섬긴다'는 의미가 담겨 있는 한자말입니다. 자원봉사활동의
                  정신을 볼런터리즘(voluntarism)이라 하는데 이 말의 본래 의미는
                  인간이 가지고 있는 자유의지를 나타내는 것입니다.
                </Wrapper>

                <Wrapper
                  radius={`40%`}
                  overflow={`hidden`}
                  position={`relative`}
                  width={`450px`}
                >
                  <Wrapper
                    position={`absolute`}
                    top={`0`}
                    left={`0`}
                    bgColor={`rgba(0,0,0,0.5)`}
                    height={`100%`}
                  >
                    <Text
                      fontSize={`34px`}
                      fontWeight={`600`}
                      color={Theme.white_C}
                    >
                      "자원봉사"
                    </Text>
                    <Text
                      fontSize={`20px`}
                      fontWeight={`600`}
                      color={Theme.white_C}
                    >
                      voluntarism
                    </Text>
                  </Wrapper>
                  <Image src="" alt="bgImg" />
                </Wrapper>

                <Wrapper al={`flex-end`} fontSize={`18px`} width={`27%`}>
                  따라서, 자원봉사란 인간을 사랑하는 마음을 가진 사람이 누구의
                  강요를 받아서가 아니라 자기 스스로 결정해서 남을 위해 또는
                  내가 사는 지역사회의 복지를 위해 자신의 정신적 육체적 자원을
                  바탕으로 어떤 계획을 가지고 대가를 바라지 않으면서 일정한 기간
                  동안 지속적으로 무보수로 행하는 활동입니다.
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`}>
              <Wrapper
                width={`35%`}
                padding={`20px`}
                radius={`20px`}
                bgColor={Theme.lightGrey6_C}
              >
                <Text fontSize={`24px`} fontWeight={`600`}>
                  자원봉사 지원자격
                </Text>
                <Image src="" alt="img" width={`200px`} />
              </Wrapper>
              <Wrapper width={`60%`}>
                <Wrapper
                  radius={`20px`}
                  padding={`50px 35px`}
                  dr={`row`}
                  ju={`flex-start`}
                  bgColor={Theme.lightGrey6_C}
                >
                  <Wrapper
                    width={`42px`}
                    height={`42px`}
                    radius={`100%`}
                    bgColor={Theme.subTheme10_C}
                    color={Theme.white_C}
                    fontSize={`30px`}
                    fontWeight={`700`}
                    margin={`0 35px 0 0`}
                  >
                    1
                  </Wrapper>

                  <Text fontSize={`32px`} fontWeight={`600`}>
                    자원봉사를 희망하는&nbsp;
                  </Text>
                  <BottomText
                    color={Theme.black_C}
                    bottomBgColor={Theme.subTheme11_C}
                    fontWeight={`600`}
                    margin={`0`}
                  >
                    누구나
                  </BottomText>
                </Wrapper>

                <Wrapper
                  radius={`20px`}
                  padding={`50px 35px`}
                  dr={`row`}
                  ju={`flex-start`}
                  bgColor={Theme.lightGrey6_C}
                  margin={`30px 0 0`}
                >
                  <Wrapper
                    width={`42px`}
                    height={`42px`}
                    radius={`100%`}
                    bgColor={Theme.subTheme10_C}
                    color={Theme.white_C}
                    fontSize={`30px`}
                    fontWeight={`700`}
                    margin={`0 35px 0 0`}
                  >
                    2
                  </Wrapper>

                  <Text fontSize={`32px`} fontWeight={`600`}>
                    1회성이 아닌
                  </Text>
                  <BottomText
                    color={Theme.black_C}
                    bottomBgColor={Theme.subTheme11_C}
                    fontWeight={`600`}
                    margin={`0`}
                  >
                    &nbsp;지속적인&nbsp;
                  </BottomText>
                  <Text fontSize={`32px`} fontWeight={`600`}>
                    자원봉사가 가능한 자
                  </Text>
                </Wrapper>
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

export default Info;
