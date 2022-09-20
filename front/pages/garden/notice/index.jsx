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
  CommonButton,
} from "../../../components/commonComponents";
import { Empty, Input, message, Pagination, Select } from "antd";
import { NOTICE_LIST_REQUEST } from "../../../reducers/notice";
import { useRouter } from "next/router";
import { PaperClipOutlined, SearchOutlined } from "@ant-design/icons";

const CustomPage = styled(Pagination)`
  margin: 40px 0 100px;

  & .ant-pagination-next > button {
    border: none;
  }

  & .ant-pagination-prev > button {
    border: none;
  }

  & {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  & .ant-pagination-item,
  & .ant-pagination-next,
  & .ant-pagination-prev {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.white_C} !important;
    border-radius: 100%;
  }

  & .ant-pagination-item-active a {
    color: ${Theme.white_C};
  }

  & .ant-pagination-item-active {
    background-color: ${Theme.basicTheme_C} !important;
  }

  & .ant-pagination-item:focus-visible a {
    color: ${Theme.white_C};
  }

  & .ant-pagination-item-link svg {
    font-weight: bold;
    color: ${Theme.grey_C};
  }
`;

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

  const { noticeList, noticeLen, lastPage, st_noticeListError } = useSelector(
    (state) => state.notice
  );

  ////// HOOKS //////
  const width = useWidth();

  const router = useRouter();

  const dispatch = useDispatch();

  const searchNotice = useInput("");

  const [currentPage, setCurrentPage] = useState(1); // 페이지네이션

  ////// REDUX //////
  ////// USEEFFECT //////
  useEffect(() => {
    if (st_noticeListError) {
      message.error(st_noticeListError);
    }
  }, [st_noticeListError]);

  useEffect(() => {
    dispatch({
      type: NOTICE_LIST_REQUEST,
      data: {
        page: currentPage,
        searchTitle: searchNotice.value,
      },
    });
  }, [currentPage, searchNotice.value]);
  ////// TOGGLE //////

  ////// HANDLER //////

  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  const searchHandler = useCallback(() => {
    dispatch({
      type: NOTICE_LIST_REQUEST,
      data: {
        searchTitle: searchNotice.value,
      },
    });
  }, [searchNotice.value]);

  const enterKey = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const detailHandler = useCallback((data) => {
    moveLinkHandler(`/garden/notice/${data.id}`);
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
        <title>효인 | 공지사항</title>
      </Head>
      <ClientLayout>
        <WholeWrapper isPre>
          <RsWrapper margin={`300px 0 0`}>
            <Text fontSize={`38px`} fontWeight={`700`} margin={`0 0 16px`}>
              공지사항
            </Text>

            <Text fontSize={`16px`}>
              효인 가족들에게 건강하고 행복한 노후생활을 약속드리겠습니다.
            </Text>

            <Wrapper
              dr={`row`}
              ju={`space-between`}
              al={`flex-start`}
              margin={`32px 0 24px`}
            >
              <Text fontSize={`16px`} color={Theme.grey2_C}>
                총 {noticeLen}개의 게시물이 있습니다.
              </Text>

              <SearchInput
                placeholder={"검색어를 입력해주세요."}
                {...searchNotice}
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
              height={`90px`}
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
                fontSize={width < 700 ? `12px` : `18px`}
              >
                제목
              </Wrapper>
              <Wrapper
                width={width < 900 ? `80px` : `135px`}
                fontSize={width < 700 ? `12px` : `18px`}
              >
                작성자
              </Wrapper>
              <Wrapper
                width={width < 900 ? `80px` : `135px`}
                fontSize={width < 700 ? `12px` : `18px`}
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

            {noticeList && noticeList.length === 0 ? (
              <Wrapper height={`200px`}>
                <Empty description={false}>등록된 게시글이 없습니다.</Empty>
              </Wrapper>
            ) : (
              noticeList &&
              noticeList.map((data) => (
                <Wrapper
                  dr={`row`}
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  height={`90px`}
                  fontSize={`18px`}
                  color={Theme.black2_C}
                  key={data.id}
                  cursor={`pointer`}
                  onClick={() => detailHandler(data)}
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
                    fontSize={width < 700 ? `12px` : `20px`}
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
                    fontSize={width < 700 ? `12px` : `18px`}
                  >
                    관리자
                  </Wrapper>
                  <Wrapper
                    width={width < 900 ? `80px` : `135px`}
                    fontSize={width < 700 ? `12px` : `18px`}
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
      type: NOTICE_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Index;
