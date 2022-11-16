import React, { useState, useRef, useCallback, useEffect } from "react";
import ClientLayout from "../../components/ClientLayout";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import {
  RsWrapper,
  WholeWrapper,
  CommonTitle,
  Text,
  Wrapper,
  SpanText,
  TextInput,
  CustomPage,
  CommonButton,
  Image,
} from "../../components/commonComponents";
import SubBanner from "../../components/SubBanner";
import Theme from "../../components/Theme";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Form, Empty } from "antd";
import { useRouter } from "next/router";
import { FAQ_LIST_REQUEST, FAQ_TYPE_LIST_REQUEST } from "../../reducers/faq";
import { DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons";

const HoverText = styled(Text)`
  color: ${(props) => props.isTab && props.theme.basicTheme_C};
  font-weight: ${(props) => props.isTab && 600};
  font-size: 16px;
  padding: 15px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.basicTheme_C};
    font-weight: 600;
  }

  @media (max-width: 700px) {
    font-size: 14px;
    padding: 5px;
  }
`;

const FaqWrapper = styled(Wrapper)`
  &:hover {
    background-color: ${(props) => props.theme.subTheme9_C};
  }
`;

const WordBreakText = styled(Text)`
  word-break: break-all;
`;

const CustomForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & .ant-form-item {
    width: 270px;
    margin: 0;
  }

  & .ant-form-item-control-input {
    min-height: auto;
  }

  @media (max-width: 700px) {
    & .ant-form-item {
      width: 100%;
    }
  }
`;

const SearchInput = styled(TextInput)`
  width: 270px;
  height: 55px;
  border: none;
  border-bottom: solid 1px ${Theme.black_C};
  padding-right: 30px;

  :focus {
    box-shadow: none;
    border: none;
    border-bottom: solid 1px ${Theme.subTheme10_C};
  }
  :hover {
    box-shadow: none;
  }
`;

const Faq = () => {
  ////// GOLBAL STATUS //////
  const { faqTypes, faqs, faqLastPage } = useSelector((state) => state.faq);

  ////// HOOKS /////

  const width = useWidth();

  const router = useRouter();

  const dispatch = useDispatch();

  const [searchTab, setSearchTab] = useState(null);
  const [selectFaq, setSelectFaq] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState(null);

  ////// USEEFFECT //////

  useEffect(() => {
    dispatch({
      type: FAQ_LIST_REQUEST,
      data: {
        typeId: searchTab,
        page: currentPage,
        searchData: searchTitle,
      },
    });
  }, [searchTab, searchTitle, currentPage]);

  ////// TOGGLE /////

  const searchTabToggle = useCallback(
    (tab) => {
      setCurrentPage(1);
      setSearchTab(tab);
    },
    [currentPage, searchTab]
  );

  const titleSearchHandler = useCallback(
    (data) => {
      setCurrentPage(1);
      setSearchTitle(data.title);
    },
    [currentPage, searchTitle]
  );

  const faqSelectToggle = useCallback(
    (faq) => {
      if (faq === selectFaq) {
        return setSelectFaq(null);
      }

      setSelectFaq(faq);
    },
    [selectFaq]
  );

  ///// HANDLER //////

  const otherPageCall = useCallback(
    (page) => {
      setCurrentPage(page);

      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [currentPage]
  );

  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>효인요양원 | 1:1 문의</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper>
            <CommonTitle>자주 묻는 질문</CommonTitle>

            <Wrapper
              dr={`row`}
              ju={`flex-end`}
              margin={width < 700 && `20px 0`}
              position={`relative`}
            >
              <CustomForm onFinish={titleSearchHandler}>
                <Form.Item name={`title`}>
                  <SearchInput placeholder={`검색어를 입력해주세요.`} />
                </Form.Item>

                <Wrapper width={`auto`} position={`absolute`} right={`0`}>
                  <SearchOutlined style={{ fontSize: 22 }} htmlType="submit" />
                </Wrapper>
              </CustomForm>
            </Wrapper>

            {/* TAB BAR */}
            <Wrapper dr={`row`} ju={`flex-start`}>
              {faqTypes && (
                <>
                  <HoverText
                    isTab={!searchTab}
                    onClick={() => searchTabToggle(null)}
                  >
                    전체
                  </HoverText>
                  {faqTypes.map((data) => (
                    <HoverText
                      key={data.id}
                      isTab={searchTab === data.id}
                      onClick={() => searchTabToggle(data.id)}
                    >
                      {data.value}
                    </HoverText>
                  ))}
                </>
              )}
            </Wrapper>

            {/* FAQ LIST */}
            <Wrapper
              margin={`24px 0 50px`}
              borderTop={`2px solid ${Theme.black_C}`}
            >
              {faqs &&
                faqs.faqs &&
                (faqs.faqs.length === 0 ? (
                  <Wrapper margin={`50px 0`}>
                    <Empty description={`FAQ가 없습니다.`} />
                  </Wrapper>
                ) : (
                  faqs.faqs.map((data) => {
                    return (
                      <>
                        <FaqWrapper
                          key={data.id}
                          borderBottom={
                            selectFaq === data.id
                              ? null
                              : `1px solid ${Theme.lightGrey2_C}`
                          }
                          dr={`row`}
                          cursor={`pointer`}
                          padding={width < 700 ? `20px 0` : `30px 0`}
                          onClick={() => faqSelectToggle(data.id)}
                        >
                          <Wrapper
                            width={width < 700 ? `40px` : `80px`}
                            fontSize={width < 700 ? `18px` : `24px`}
                            fontWeight={`bold`}
                            color={Theme.subTheme10_C}
                          >
                            Q
                          </Wrapper>
                          <Wrapper
                            dr={`row`}
                            ju={`space-between`}
                            width={
                              width < 700
                                ? `calc(100% - 40px)`
                                : `calc(100% - 80px)`
                            }
                          >
                            <WordBreakText
                              padding={`0 14px`}
                              fontSize={width < 700 ? `14px` : `16px`}
                              fontWeight={`500`}
                            >
                              {data.question}
                            </WordBreakText>
                            <Wrapper
                              width={width < 700 ? `40px` : `80px`}
                              radius={`100%`}
                              fontSize={width < 700 ? `18px` : `23px`}
                              color={Theme.subTheme10_C}
                            >
                              {selectFaq === data.id ? (
                                <UpOutlined />
                              ) : (
                                <DownOutlined />
                              )}
                            </Wrapper>
                          </Wrapper>
                        </FaqWrapper>
                        {selectFaq === data.id && (
                          <Wrapper
                            bgColor={Theme.lightGrey6_C}
                            padding={width < 700 ? `16px` : `24px`}
                            radius={`10px`}
                            fontSize={width < 700 ? `16px` : `18px`}
                            color={Theme.grey2_C}
                            al={`flex-start`}
                          >
                            {data.answer}
                          </Wrapper>
                        )}
                      </>
                    );
                  })
                ))}
            </Wrapper>

            {/* PAGINATION */}
            <Wrapper margin={`50px 0 100px`}>
              <CustomPage
                defaultCurrent={1}
                current={parseInt(currentPage)}
                total={faqLastPage * 10}
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
      type: FAQ_TYPE_LIST_REQUEST,
    });

    context.store.dispatch({
      type: FAQ_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Faq;
