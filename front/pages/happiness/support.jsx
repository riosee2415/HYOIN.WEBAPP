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
import styled from "styled-components";
import Fade from "react-reveal/Fade";

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

const Support = () => {
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
        <title>효인요양원 | 후원안내</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper padding={`0 0 120px`}>
            <CommonTitle fontSize={`38px`} fontWeight={`700`}>
              후원안내
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
                    textAlign={`center`}
                  >
                    아름다운 동행, 사람이 모여 따뜻한 세상을 만들어 가고
                    있습니다.
                  </Text>
                </Fade>
              </Wrapper>
              <Image
                src={
                  width < 700
                    ? `https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/img_long-ban2_m.png`
                    : "https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/img_long-ban2.png"
                }
                alt="bgImg"
              />
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={`28px`} fontWeight={`700`}>
                후원종류
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`} margin={`0 0 25px`}>
              <Wrapper
                padding={`40px 0`}
                radius={`20px`}
                bgColor={Theme.lightGrey6_C}
                width={width < 700 ? `100%` : `calc(100% / 3 - 10px)`}
                border={`1px solid ${Theme.lightGrey4_C}`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                >
                  <Image
                    src="https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/icon_donate-gift.png"
                    alt="icon"
                    width={`auto`}
                  />
                </Wrapper>

                <Text margin={`20px 0`} fontSize={`24px`} fontWeight={`600`}>
                  금품 후원
                </Text>
                <Fade bottom>
                  <Text fontSize={width < 1100 ? `16px` : `20px`}>
                    계좌이체 및 방문납입 등의 방법으로
                  </Text>
                  <Text fontSize={width < 1100 ? `16px` : `20px`}>
                    일정금액을 정기/비정기적으로 후원
                  </Text>
                </Fade>
              </Wrapper>

              <Wrapper
                padding={`40px 0`}
                radius={`20px`}
                bgColor={Theme.lightGrey6_C}
                width={width < 700 ? `100%` : `calc(100% / 3 - 10px)`}
                border={`1px solid ${Theme.lightGrey4_C}`}
                margin={width < 700 ? `20px 0` : `0`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                >
                  <Image
                    src="https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/icon_donate-special.png"
                    alt="icon"
                    width={`auto`}
                  />
                </Wrapper>

                <Text margin={`20px 0`} fontSize={`24px`} fontWeight={`600`}>
                  특별 후원
                </Text>
                <Fade bottom>
                  <Text fontSize={width < 1100 ? `16px` : `20px`}>
                    계좌이체 및 방문납입 등의 방법으로
                  </Text>
                  <Text fontSize={width < 1100 ? `16px` : `20px`}>
                    일시 기부금 및 지정 기부금 후원
                  </Text>
                </Fade>
              </Wrapper>

              <Wrapper
                padding={`40px 0`}
                radius={`20px`}
                bgColor={Theme.lightGrey6_C}
                width={width < 700 ? `100%` : `calc(100% / 3 - 10px)`}
                border={`1px solid ${Theme.lightGrey4_C}`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                >
                  <Image
                    src="https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/icon_donate-product.png"
                    alt="icon"
                    width={`auto`}
                  />
                </Wrapper>

                <Text margin={`20px 0`} fontSize={`24px`} fontWeight={`600`}>
                  물품 후원
                </Text>
                <Fade bottom>
                  <Text fontSize={width < 1100 ? `16px` : `20px`}>
                    어르신의 생활에 도움이 되는
                  </Text>
                  <Text fontSize={width < 1100 ? `16px` : `20px`}>
                    각종 물품 후원
                  </Text>
                </Fade>
              </Wrapper>
            </Wrapper>

            <Wrapper
              padding={`40px 0`}
              bgColor={Theme.subTheme9_C}
              color={Theme.subTheme2_C}
              fontSize={width < 700 ? `20px` : `24px`}
              textAlign={`center`}
              fontWeight={`600`}
            >
              <Fade bottom>
                후원은 어르신들 필요물품 구입 및 프로그램 운영 등에 사용됩니다.
              </Fade>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`100px 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={`28px`} fontWeight={`700`}>
                후원신청 안내
              </Text>
            </Wrapper>

            <Wrapper dr={`row`}>
              <Wrapper
                width={`8px`}
                height={`8px`}
                radius={`100%`}
                bgColor={Theme.subTheme2_C}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Wrapper
                width={`calc(100% - 16px - 8px)`}
                al={`flex-start`}
                fontSize={width < 700 ? `18px` : `22px`}
              >
                직접 내방 또는 인터넷 뱅킹 등을 통하여 후원에 참여하실 수
                있습니다.
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`}>
              <Wrapper
                width={`8px`}
                height={`8px`}
                radius={`100%`}
                bgColor={Theme.subTheme2_C}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Wrapper
                width={`calc(100% - 16px - 8px)`}
                al={`flex-start`}
                fontSize={width < 700 ? `18px` : `22px`}
              >
                보내주신 후원물품 및 후원금은 법인세법 제24조, 소득세법 제34조에
                의하여 연말정산 시 소득공제 혜택을 받으실 수 있습니다.
              </Wrapper>
            </Wrapper>

            <Wrapper dr={width < 700 ? `column` : `row`} margin={`85px 0 40px`}>
              <Wrapper
                width={`154px`}
                height={`154px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                padding={`16px`}
              >
                <Wrapper
                  height={`100%`}
                  radius={`100%`}
                  bgColor={Theme.subTheme9_C}
                  fontSize={`20px`}
                  fontWeight={`600`}
                >
                  요양원
                </Wrapper>
              </Wrapper>
              <Wrapper
                width={width < 700 ? `1px` : `80px`}
                height={width < 700 ? `50px` : `1px`}
                bgColor={Theme.subTheme2_C}
              ></Wrapper>
              <Wrapper
                width={`154px`}
                height={`154px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                padding={`16px`}
              >
                <Wrapper
                  height={`100%`}
                  radius={`100%`}
                  bgColor={Theme.subTheme9_C}
                  fontSize={`20px`}
                  fontWeight={`600`}
                >
                  주간보호
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`}>
              <Wrapper
                border={`1px solid ${Theme.lightGrey2_C}`}
                radius={`20px`}
                padding={`40px 0`}
                width={width < 700 ? `100%` : `calc(100% / 3 - 10px)`}
              >
                <Text margin={`0 0 20px`} fontSize={`24px`} fontWeight={`600`}>
                  무통장 입금
                </Text>
                <Text fontSize={width < 1100 ? `16px` : `20px`}>
                  기관의 후원계좌로 입금하실 수 있습니다.
                </Text>
              </Wrapper>

              <Wrapper
                border={`1px solid ${Theme.lightGrey2_C}`}
                radius={`20px`}
                padding={`40px 0`}
                width={width < 700 ? `100%` : `calc(100% / 3 - 10px)`}
                margin={width < 700 ? `20px 0` : `0`}
              >
                <Text margin={`0 0 20px`} fontSize={`24px`} fontWeight={`600`}>
                  직접납부
                </Text>
                <Text fontSize={width < 1100 ? `16px` : `20px`}>
                  기관에 방문하시어 납부하실 수 있습니다.
                </Text>
              </Wrapper>

              <Wrapper
                border={`1px solid ${Theme.lightGrey2_C}`}
                radius={`20px`}
                padding={`40px 0`}
                width={width < 700 ? `100%` : `calc(100% / 3 - 10px)`}
              >
                <Text margin={`0 0 20px`} fontSize={`24px`} fontWeight={`600`}>
                  계좌번호
                </Text>
                <Text fontSize={width < 1100 ? `16px` : `20px`}>
                  은행계좌 안내
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`100px 0 25px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={`28px`} fontWeight={`700`}>
                후원 문의
              </Text>
            </Wrapper>

            <Wrapper al={`flex-start`}>
              <Text fontSize={width < 700 ? `16px` : `18px`}>
                자세한 문의 사항은&nbsp;
                <SpanText fontWeight={`700`} color={Theme.red_C}>
                  042-522-7118
                </SpanText>
                로 연락 바랍니다.
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

export default Support;
