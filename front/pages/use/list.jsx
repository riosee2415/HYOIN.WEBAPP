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
import { ADMISSION_ALL_LIST_REQUEST } from "../../reducers/admission";
import { useSelector } from "react-redux";

const List = () => {
  ////// GLOBAL STATE //////
  const { allList, normalList, dementiaList, weekList } = useSelector(
    (state) => state.admission
  );
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
        <title>효인주야간노인복지센터 | 이용현황</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper padding={`0 0 120px`}>
            <CommonTitle fontSize={`38px`} fontWeight={`700`}>
              이용 현황
            </CommonTitle>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                border={`1px solid ${Theme.subTheme2_C}`}
                radius={`100%`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={width < 700 ? `20px` : `28px`} fontWeight={`500`}>
                요양원 전체(치매전담+일반) 입소 현황
              </Text>
            </Wrapper>

            <Wrapper dr={`row`}>
              <Wrapper
                borderTop={`1px solid ${Theme.subTheme2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.subTheme9_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  정원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {allList && allList.personnel}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.subTheme2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={width < 700 ? `` : `none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.subTheme9_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  총원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {allList && allList.totalPeople}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.subTheme2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.subTheme9_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  이용가능 인원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {allList && allList.avaliablePeople}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.subTheme2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.subTheme9_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  대기 인원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {allList && allList.waitingPeople}
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`50px 0 40px`}>
              <Wrapper
                width={`8px`}
                height={`8px`}
                bgColor={Theme.grey2_C}
                radius={`100%`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={width < 700 ? `20px` : `28px`} fontWeight={`500`}>
                요양원(치매전담) 입소 현황
              </Text>
            </Wrapper>

            <Wrapper dr={`row`}>
              <Wrapper
                borderTop={`1px solid ${Theme.grey2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.lightGrey4_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  정원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {dementiaList && dementiaList.personnel}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.grey2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={width < 700 ? `` : `none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.lightGrey4_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  총원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {dementiaList && dementiaList.totalPeople}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.grey2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.lightGrey4_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  이용가능 인원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {dementiaList && dementiaList.avaliablePeople}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.grey2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.lightGrey4_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  대기 인원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {dementiaList && dementiaList.waitingPeople}
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`50px 0 40px`}>
              <Wrapper
                width={`8px`}
                height={`8px`}
                bgColor={Theme.grey2_C}
                radius={`100%`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={width < 700 ? `20px` : `28px`} fontWeight={`500`}>
                요양원(일반) 입소 현황
              </Text>
            </Wrapper>

            <Wrapper dr={`row`}>
              <Wrapper
                borderTop={`1px solid ${Theme.grey2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.lightGrey4_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  정원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {normalList && normalList.personnel}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.grey2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={width < 700 ? `` : `none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.lightGrey4_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  총원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {normalList && normalList.totalPeople}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.grey2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.lightGrey4_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  이용가능 인원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {normalList && normalList.avaliablePeople}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.grey2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.lightGrey4_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  대기 인원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {normalList && normalList.waitingPeople}
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`100px 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                border={`1px solid ${Theme.subTheme2_C}`}
                radius={`100%`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={width < 700 ? `20px` : `28px`} fontWeight={`500`}>
                주간보호 이용 현황
              </Text>
            </Wrapper>

            <Wrapper dr={`row`}>
              <Wrapper
                borderTop={`1px solid ${Theme.subTheme2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.subTheme9_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  정원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {weekList && weekList.personnel}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.subTheme2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={width < 700 ? `` : `none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.subTheme9_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  총원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {weekList && weekList.totalPeople}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.subTheme2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`none`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.subTheme9_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  이용가능 인원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {weekList && weekList.avaliablePeople}
                </Wrapper>
              </Wrapper>
              <Wrapper
                borderTop={`1px solid ${Theme.subTheme2_C}`}
                border={`1px solid ${Theme.lightGrey2_C}`}
                width={width < 700 ? `calc(100% / 2)` : `calc(100% / 4)`}
              >
                <Wrapper
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`80px`}
                  bgColor={Theme.subTheme9_C}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  대기 인원
                </Wrapper>
                <Wrapper
                  height={`80px`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  {weekList && weekList.waitingPeople}
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

    context.store.dispatch({
      type: ADMISSION_ALL_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default List;
