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
        <title>효인주야간노인복지센터 | 후원안내</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper padding={`80px 0 120px`}>
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
                <BottomText sCore={true}>나눔</BottomText>
                <Text color={Theme.white_C} fontSize={`20px`}>
                  아름다운 동행, 사람이 모여 따뜻한 세상을 만들어 가고 있습니다.
                </Text>
              </Wrapper>
              <Image
                src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/volunteer-page/img_long-ban.png"
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

            <Wrapper dr={`row`} ju={`space-between`}></Wrapper>
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
