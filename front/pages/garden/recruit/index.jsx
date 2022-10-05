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
import { RECRUIT_LIST_REQUEST } from "../../../reducers/recruit";
import { useRouter } from "next/router";
import {
  EyeOutlined,
  PaperClipOutlined,
  SearchOutlined,
} from "@ant-design/icons";
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

const PeriodBtn = styled(Wrapper)`
  width: 100px;
  height: 30px;
  border-radius: 30px;
  color: ${Theme.white_C};

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 15px;
  }
`;

const Index = () => {
  ////// GLOBAL STATE //////

  const { recruitList, recruitLen, lastPage, st_recruitListError } =
    useSelector((state) => state.recruit);

  ////// HOOKS //////
  const width = useWidth();

  const router = useRouter();

  const dispatch = useDispatch();

  const searchRecruit = useInput("");

  const [currentPage, setCurrentPage] = useState(1); // 페이지네이션

  ////// REDUX //////
  ////// USEEFFECT //////
  useEffect(() => {
    if (st_recruitListError) {
      message.error(st_recruitListError);
    }
  }, [st_recruitListError]);

  useEffect(() => {
    dispatch({
      type: RECRUIT_LIST_REQUEST,
      data: {
        page: currentPage,
        searchTitle: searchRecruit.value,
      },
    });
  }, [currentPage, searchRecruit.value]);
  ////// TOGGLE //////

  ////// HANDLER //////

  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  const searchHandler = useCallback(() => {
    dispatch({
      type: RECRUIT_LIST_REQUEST,
      data: {
        searchTitle: searchRecruit.value,
      },
    });
  }, [searchRecruit.value]);

  const enterKey = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const detailHandler = useCallback((data) => {
    moveLinkHandler(`/garden/recruit/${data.id}`);
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
        <title>효인주야간노인복지센터 | 채용공고</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper>
            <CommonTitle margin={`85px 0 17px`}>채용공고</CommonTitle>

            {width < 900 ? (
              <>
                <Text fontSize={width < 700 ? `14px` : `16px`}>
                  효인요양원과 함께 어르신들의 삶의 질을
                </Text>
                <Text fontSize={width < 700 ? `14px` : `16px`}>
                  높여갈 전문 인력을 모십니다.
                </Text>
              </>
            ) : (
              <Text fontSize={width < 700 ? `14px` : `16px`}>
                효인요양원과 함께 어르신들의 삶의 질을 높여갈 전문 인력을
                모십니다.
              </Text>
            )}

            <Wrapper
              dr={`row`}
              ju={`space-between`}
              al={`flex-start`}
              margin={`32px 0 24px`}
            >
              <Text fontSize={`16px`} color={Theme.grey2_C}>
                총 {recruitLen}개의 게시물이 있습니다.
              </Text>

              <SearchInput
                placeholder={"검색어를 입력해주세요."}
                {...searchRecruit}
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
              display={width < 900 ? `none` : `flex`}
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
                      ? `calc(100% - 80px - 80px - 80px)`
                      : `calc(100% - 80px - 120px - 140px - 100px)`
                    : `calc(100% - 135px - 135px - 135px - 135px - 135px)`
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
              <Wrapper
                width={width < 900 ? `80px` : `135px`}
                fontSize={width < 700 ? `14px` : `18px`}
              >
                채용기간
              </Wrapper>
            </Wrapper>

            {recruitList && recruitList.length === 0 ? (
              <Wrapper height={`200px`}>
                <Empty description={false}>등록된 게시글이 없습니다.</Empty>
              </Wrapper>
            ) : (
              recruitList &&
              recruitList.map((data) =>
                width < 900 ? (
                  <Wrapper
                    radius={`10px`}
                    margin={`0 0 5px`}
                    border={`1px solid ${Theme.lightGrey2_C}`}
                    padding={`15px 10px`}
                    onClick={() => detailHandler(data)}
                  >
                    <Wrapper dr={`row`} ju={`flex-start`}>
                      <Text
                        maxWidth={`calc(100% - 20px)`}
                        margin={`0 5px 0 0`}
                        isEllipsis={true}
                      >
                        {data.title}
                      </Text>
                      {data.file && <PaperClipOutlined />}
                    </Wrapper>
                    <Wrapper dr={`row`} margin={`10px 0 0`}>
                      <Wrapper
                        dr={`row`}
                        width={`calc(100% / 3)`}
                        ju={`flex-start`}
                      >
                        <EyeOutlined />
                        &nbsp;{data.hit}
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3)`}>
                        {data.viewFrontCreatedAt}
                      </Wrapper>
                      <Wrapper width={`calc(100% / 3)`}>
                        <PeriodBtn
                          bgColor={
                            data.status === 1
                              ? Theme.subTheme_C
                              : data.status === 2
                              ? Theme.black_C
                              : data.status === 3 && Theme.subTheme10_C
                          }
                        >
                          {data.status === 1
                            ? data.viewStatus
                            : data.status === 2
                            ? data.viewStatus
                            : data.status === 3 && data.viewStatus}
                        </PeriodBtn>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                ) : (
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
                            ? `calc(100% - 80px - 80px - 80px)`
                            : `calc(100% - 80px - 120px - 140px - 100px)`
                          : `calc(100% - 135px - 135px - 135px - 135px - 135px)`
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
                    <Wrapper
                      width={width < 900 ? `80px` : `135px`}
                      fontSize={width < 700 ? `14px` : `16px`}
                    >
                      <PeriodBtn
                        bgColor={
                          data.status === 1
                            ? Theme.subTheme_C
                            : data.status === 2
                            ? Theme.black_C
                            : data.status === 3 && Theme.subTheme10_C
                        }
                      >
                        {data.status === 1
                          ? data.viewStatus
                          : data.status === 2
                          ? data.viewStatus
                          : data.status === 3 && data.viewStatus}
                      </PeriodBtn>
                    </Wrapper>
                  </Wrapper>
                )
              )
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
      type: RECRUIT_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Index;
