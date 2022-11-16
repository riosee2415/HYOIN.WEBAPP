import React, { useCallback, useEffect, useState } from "react";
import ClientLayout from "../../../components/ClientLayout";
import { useDispatch, useSelector } from "react-redux";

import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import useWidth from "../../../hooks/useWidth";
import useInput from "../../../hooks/useInput";
import Theme from "../../../components/Theme";
import styled from "styled-components";
import axios from "axios";

import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";

import Head from "next/head";
import {
  RsWrapper,
  Text,
  TextInput,
  WholeWrapper,
  Wrapper,
  CustomPage,
  CommonTitle,
} from "../../../components/commonComponents";
import { Empty, Input, message, Pagination, Select } from "antd";
import { WAIT_LIST_REQUEST } from "../../../reducers/wait";
import { useRouter } from "next/router";
import { PaperClipOutlined, SearchOutlined } from "@ant-design/icons";
import SubBanner from "../../../components/SubBanner";

const SearchInput = styled(Input)`
  width: 270px;
  height: 55px;
  border: none;
  border-bottom: solid 1px ${Theme.black_C};

  :focus {
    box-shadow: none;
  }
  :hover {
    box-shadow: none;
  }
`;

const Index = () => {
  ////// GLOBAL STATE //////

  const { waitList, waitLen, lastPage, st_waitListError } = useSelector(
    (state) => state.wait
  );

  ////// HOOKS //////
  const width = useWidth();

  const router = useRouter();

  const dispatch = useDispatch();

  const searchWait = useInput("");

  const [currentPage, setCurrentPage] = useState(1); // 페이지네이션

  ////// REDUX //////
  ////// USEEFFECT //////
  useEffect(() => {
    if (st_waitListError) {
      message.error(st_waitListError);
    }
  }, [st_waitListError]);

  useEffect(() => {
    dispatch({
      type: WAIT_LIST_REQUEST,
      data: {
        page: currentPage,
        searchTitle: searchWait.value,
      },
    });
  }, [currentPage, searchWait.value]);
  ////// TOGGLE //////

  ////// HANDLER //////

  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  const searchHandler = useCallback(() => {
    dispatch({
      type: WAIT_LIST_REQUEST,
      data: {
        searchTitle: searchWait.value,
      },
    });
  }, [searchWait.value]);

  const enterKey = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const detailHandler = useCallback((data) => {
    moveLinkHandler(`/use/wait/${data.id}`);
    window.scrollTo({ top: 0 });
  }, []);

  // 페이지네이션
  const otherPageCall = useCallback(
    (changePage) => {
      setCurrentPage(changePage);
    },
    [currentPage]
  );

  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>효인요양원 | 대기자명단</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper>
            <CommonTitle margin={`85px 0 17px`}>대기자명단</CommonTitle>

            <Wrapper
              dr={`row`}
              ju={`space-between`}
              al={`flex-start`}
              margin={`32px 0 24px`}
            >
              <Text fontSize={`16px`} color={Theme.grey2_C}>
                총 {waitLen}개의 게시물이 있습니다.
              </Text>

              <SearchInput
                placeholder={"검색어를 입력해주세요."}
                {...searchWait}
                onKeyPress={enterKey}
                suffix={
                  <SearchOutlined
                    onClick={searchHandler}
                    style={{ fontSize: 22 }}
                  />
                }
              />
            </Wrapper>

            <Wrapper
              dr={`row`}
              borderTop={`1px solid ${Theme.black_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={width < 700 ? `60px` : `90px`}
              fontSize={`18px`}
            >
              <Wrapper
                width={width < 900 ? `80px` : `135px`}
                display={width < 700 ? `none` : `flex`}
              >
                번호
              </Wrapper>
              <Wrapper
                width={
                  width < 900
                    ? width < 700
                      ? `calc(100% - 80px - 80px)`
                      : `calc(100% - 80px - 120px - 140px - 100px)`
                    : `calc(100% - 135px - 160px - 165px - 130px)`
                }
                fontSize={width < 700 ? `14px` : `18px`}
              >
                제목
              </Wrapper>
              <Wrapper
                width={width < 900 ? `80px` : `135px`}
                fontSize={width < 700 ? `14px` : `18px`}
              >
                작성자
              </Wrapper>
              <Wrapper
                width={width < 900 ? `80px` : `135px`}
                fontSize={width < 700 ? `14px` : `18px`}
              >
                작성일
              </Wrapper>
              <Wrapper
                width={width < 900 ? `80px` : `135px`}
                display={width < 700 ? `none` : `flex`}
              >
                조회수
              </Wrapper>
            </Wrapper>

            {waitList && waitList.length === 0 ? (
              <Wrapper height={`200px`}>
                <Empty description={false}>등록된 게시글이 없습니다.</Empty>
              </Wrapper>
            ) : (
              waitList &&
              waitList.map((data) => (
                <Wrapper
                  dr={`row`}
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`90px`}
                  fontSize={`18px`}
                  color={Theme.black_C}
                  key={data.id}
                  cursor={`pointer`}
                  onClick={() => detailHandler(data)}
                  isBgHover
                >
                  <Wrapper
                    width={width < 900 ? `80px` : `135px`}
                    display={width < 700 ? `none` : `flex`}
                  >
                    {data.num}
                  </Wrapper>
                  <Wrapper
                    width={
                      width < 900
                        ? width < 700
                          ? `calc(100% - 80px - 80px)`
                          : `calc(100% - 80px - 120px - 140px - 100px)`
                        : `calc(100% - 135px - 160px - 165px - 130px)`
                    }
                    fontSize={width < 700 ? `14px` : `20px`}
                    dr={`row`}
                    ju={`flex-start`}
                  >
                    <Text
                      maxWidth={`calc(100% - 20px)`}
                      margin={`0 5px 0 0`}
                      isEllipsis={true}
                    >
                      {data.title}
                    </Text>
                    {data.file && <PaperClipOutlined />}
                  </Wrapper>
                  <Wrapper
                    width={width < 900 ? `80px` : `135px`}
                    fontSize={width < 700 ? `14px` : `18px`}
                  >
                    관리자
                  </Wrapper>
                  <Wrapper
                    width={width < 900 ? `80px` : `135px`}
                    fontSize={width < 700 ? `14px` : `18px`}
                  >
                    {data.viewFrontCreatedAt}
                  </Wrapper>
                  <Wrapper
                    width={width < 900 ? `80px` : `135px`}
                    display={width < 700 ? `none` : `flex`}
                  >
                    {data.hit}
                  </Wrapper>
                </Wrapper>
              ))
            )}

            <Wrapper margin={`50px 0 100px`}>
              <CustomPage
                defaultCurrent={1}
                current={parseInt(currentPage)}
                total={lastPage * 10}
                pageSize={10}
                onChange={(page) => otherPageCall(page)}
              />
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
      type: WAIT_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Index;
