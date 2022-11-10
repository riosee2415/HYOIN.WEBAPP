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
import { RightOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

const Box = styled(Wrapper)`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: ${Theme.grey4_C};
  cursor: pointer;
  padding: 20px;

  &:hover {
    background: ${Theme.subTheme2_C};
  }

  @media (max-width: 700px) {
    width: 60px;
    height: 60px;
    padding: 15px;
  }
`;

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
        <WholeWrapper overflowX={`hidden`}>
          <SubBanner />
          <RsWrapper padding={`0 0 120px`}>
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
                <Fade bottom>
                  <BottomText sCore={true}>나눔</BottomText>
                  <Text
                    color={Theme.white_C}
                    fontSize={width < 700 ? `18px` : `20px`}
                  >
                    "봉사하는 당신이 아름답습니다"
                  </Text>
                </Fade>
              </Wrapper>
              <Image
                src={
                  width < 700
                    ? `https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/img_long-ban1_m.png`
                    : "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/img_long-ban1.png"
                }
                alt="bgImg"
              />
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`} margin={`0 0 130px`}>
              <Wrapper
                width={width < 700 ? `100%` : `48%`}
                radius={`20px`}
                overflow={`hidden`}
              >
                <Image
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/img_purpose.png"
                  alt="bgImg"
                />
              </Wrapper>

              <Wrapper
                width={width < 700 ? `100%` : `48%`}
                al={`flex-start`}
                margin={width < 700 ? `30px 0 0` : `0`}
              >
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
                <Fade bottom>
                  <Text fontSize={`20px`}>
                    효인요양원에서는 생활과 봉사활동의 연계를 통하여 일회성이
                    아닌 지속적인 자원봉사 활동이 이루어 질 수 있도록 교육 및
                    실습을 체계적으로 운영합니다.
                  </Text>
                </Fade>
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
                <Wrapper
                  al={`flex-start`}
                  fontSize={`18px`}
                  width={width < 700 ? `100%` : `27%`}
                >
                  <Fade left>
                    자원봉사라는 말을 문자가 뜻하는 그대로 해석하면 '스스로
                    원해서 받들고 섬긴다'는 의미가 담겨 있는 한자말입니다.
                    자원봉사활동의 정신을 볼런터리즘(voluntarism)이라 하는데 이
                    말의 본래 의미는 인간이 가지고 있는 자유의지를 나타내는
                    것입니다.
                  </Fade>
                </Wrapper>

                <Wrapper
                  radius={`50%`}
                  overflow={`hidden`}
                  position={`relative`}
                  width={
                    width < 1100 ? (width < 700 ? `100%` : `350px`) : `450px`
                  }
                  margin={width < 700 ? `30px 0` : `0`}
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
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/img_voluntarism.png"
                    alt="bgImg"
                  />
                </Wrapper>

                <Wrapper
                  al={`flex-end`}
                  fontSize={`18px`}
                  width={width < 700 ? `100%` : `27%`}
                >
                  <Fade right>
                    따라서, 자원봉사란 인간을 사랑하는 마음을 가진 사람이 누구의
                    강요를 받아서가 아니라 자기 스스로 결정해서 남을 위해 또는
                    내가 사는 지역사회의 복지를 위해 자신의 정신적 육체적 자원을
                    바탕으로 어떤 계획을 가지고 대가를 바라지 않으면서 일정한
                    기간 동안 지속적으로 무보수로 행하는 활동입니다.
                  </Fade>
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`}>
              <Wrapper
                width={width < 900 ? `100%` : `35%`}
                padding={`20px`}
                radius={`20px`}
                bgColor={Theme.lightGrey6_C}
              >
                <Text fontSize={`24px`} fontWeight={`600`}>
                  자원봉사 지원자격
                </Text>
                <Image
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/img_illust.png"
                  alt="img"
                  width={`200px`}
                />
              </Wrapper>
              <Wrapper
                width={width < 900 ? `100%` : `60%`}
                margin={width < 900 ? `30px 0 0` : `0`}
              >
                <Wrapper
                  radius={`20px`}
                  padding={width < 700 ? `20px 10px` : `50px 35px`}
                  dr={`row`}
                  ju={`flex-start`}
                  bgColor={Theme.lightGrey6_C}
                >
                  <Fade bottom>
                    <Wrapper
                      width={width < 700 ? `30px` : `42px`}
                      height={width < 700 ? `30px` : `42px`}
                      radius={`100%`}
                      bgColor={Theme.subTheme10_C}
                      color={Theme.white_C}
                      fontSize={width < 700 ? `20px` : `30px`}
                      fontWeight={`700`}
                      margin={width < 700 ? `0 15px 0 0` : `0 35px 0 0`}
                    >
                      1
                    </Wrapper>

                    <Text
                      fontSize={
                        width < 1350
                          ? width < 1100
                            ? width < 700
                              ? `16px`
                              : `20px`
                            : `25px`
                          : `32px`
                      }
                      fontWeight={`600`}
                    >
                      자원봉사를 희망하는&nbsp;
                    </Text>
                    <BottomText
                      color={Theme.black_C}
                      bottomBgColor={Theme.subTheme11_C}
                      fontWeight={`600`}
                      margin={`0`}
                      fontSize={
                        width < 1350
                          ? width < 1100
                            ? width < 700
                              ? `16px`
                              : `20px`
                            : `25px`
                          : `32px`
                      }
                    >
                      누구나
                    </BottomText>
                  </Fade>
                </Wrapper>
                <Wrapper
                  radius={`20px`}
                  padding={width < 700 ? `20px 10px` : `50px 35px`}
                  dr={`row`}
                  ju={`flex-start`}
                  bgColor={Theme.lightGrey6_C}
                  margin={`30px 0 0`}
                >
                  <Fade bottom>
                    <Wrapper
                      width={width < 700 ? `30px` : `42px`}
                      height={width < 700 ? `30px` : `42px`}
                      radius={`100%`}
                      bgColor={Theme.subTheme10_C}
                      color={Theme.white_C}
                      fontSize={width < 700 ? `20px` : `30px`}
                      fontWeight={`700`}
                      margin={width < 700 ? `0 15px 0 0` : `0 35px 0 0`}
                    >
                      2
                    </Wrapper>

                    <Text
                      fontSize={
                        width < 1350
                          ? width < 1100
                            ? width < 700
                              ? `16px`
                              : `20px`
                            : `25px`
                          : `32px`
                      }
                      fontWeight={`600`}
                    >
                      1회성이 아닌&nbsp;
                    </Text>
                    <BottomText
                      color={Theme.black_C}
                      bottomBgColor={Theme.subTheme11_C}
                      fontWeight={`600`}
                      margin={`0`}
                      fontSize={
                        width < 1350
                          ? width < 1100
                            ? width < 700
                              ? `16px`
                              : `20px`
                            : `25px`
                          : `32px`
                      }
                    >
                      지속적인
                    </BottomText>
                    <Text
                      fontSize={
                        width < 1350
                          ? width < 1100
                            ? width < 700
                              ? `16px`
                              : `20px`
                            : `25px`
                          : `32px`
                      }
                      fontWeight={`600`}
                    >
                      &nbsp;자원봉사가 가능한 자
                    </Text>
                  </Fade>
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`100px 0 30px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={`28px`} fontWeight={`700`}>
                자원봉사활동 과정 안내
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={width < 700 ? `center` : `space-between`}>
              <Wrapper
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`20px`}
                width={width < 700 ? `50%` : `calc(100% / 5 - 20px)`}
                padding={`30px 0`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                  margin={`0 0 15px`}
                >
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/icon_process1.png"
                    alt="icon"
                    width={`auto`}
                  />
                </Wrapper>

                <Text fontSize={width < 1100 ? `16px` : `24px`}>
                  자원봉사 신청
                </Text>
              </Wrapper>
              <Text fontSize={`20px`} display={width < 700 ? `none` : `flex`}>
                <RightOutlined />
              </Text>
              <Wrapper
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`20px`}
                width={width < 700 ? `50%` : `calc(100% / 5 - 20px)`}
                padding={`30px 0`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                  margin={`0 0 15px`}
                >
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/icon_process2.png"
                    alt="icon"
                    width={`auto`}
                  />
                </Wrapper>

                <Text fontSize={width < 1100 ? `16px` : `24px`}>
                  자원봉사 OT
                </Text>
              </Wrapper>
              <Text fontSize={`20px`} display={width < 700 ? `none` : `flex`}>
                <RightOutlined />
              </Text>
              <Wrapper
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`20px`}
                width={width < 700 ? `50%` : `calc(100% / 5 - 20px)`}
                padding={`30px 0`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                  margin={`0 0 15px`}
                >
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/icon_process3.png"
                    alt="icon"
                    width={`auto`}
                  />
                </Wrapper>

                <Text fontSize={width < 1100 ? `16px` : `24px`}>
                  희망분야 배치
                </Text>
              </Wrapper>

              <Text fontSize={`20px`} display={width < 700 ? `none` : `flex`}>
                <RightOutlined />
              </Text>
              <Wrapper
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`20px`}
                width={width < 700 ? `50%` : `calc(100% / 5 - 20px)`}
                padding={`30px 0`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                  margin={`0 0 15px`}
                >
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/icon_process4.png"
                    alt="icon"
                    width={`auto`}
                  />
                </Wrapper>

                <Text fontSize={width < 1100 ? `16px` : `24px`}>
                  봉사활동 실시
                </Text>
              </Wrapper>
              <Text fontSize={`20px`} display={width < 700 ? `none` : `flex`}>
                <RightOutlined />
              </Text>
              <Wrapper
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`20px`}
                width={width < 700 ? `100%` : `calc(100% / 5 - 20px)`}
                padding={`30px 0`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                  margin={`0 0 15px`}
                >
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/icon_process5.png"
                    alt="icon"
                    width={`auto`}
                  />
                </Wrapper>

                <Text fontSize={width < 1100 ? `16px` : `24px`}>
                  종결 및 확인서 발급
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`100px 0 30px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={`28px`} fontWeight={`700`}>
                문의 연락처
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`}>
              <Wrapper
                width={`calc(100% / 2 - 10px)`}
                padding={`25px 0`}
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`20px`}
              >
                <Box>
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/icon_volunteer_call.png"
                    alt="icon"
                  />
                </Box>
                <Text margin={`15px 0 10px`}>전화</Text>
                <Text fontSize={width < 700 ? `14px` : `18px`}>
                  042-522-7118
                </Text>
              </Wrapper>
              <Wrapper
                width={`calc(100% / 2 - 10px)`}
                padding={`25px 0`}
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`20px`}
              >
                <Box>
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/icon_volunteer_email.png"
                    alt="icon"
                  />
                </Box>
                <Text margin={`15px 0 10px`}>이메일</Text>
                <a href={`mailto:nuwb1130@naver.com`}>
                  <Text fontSize={width < 700 ? `14px` : `18px`}>
                    nuwb1130@naver.com
                  </Text>
                </a>
              </Wrapper>
            </Wrapper>
            <Wrapper
              al={`flex-sntart`}
              margin={`20px 0 0`}
              fontSize={width < 700 ? `12px` : `16px`}
            >
              ※ 사회복지 현장 실습 문의 : 042-522-7118
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
