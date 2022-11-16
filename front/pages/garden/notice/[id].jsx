import React, { useEffect } from "react";
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
import SubBanner from "../../../components/SubBanner";
import {
  CommonButton,
  CommonTitle,
  Image,
  RsWrapper,
  Text,
  WholeWrapper,
  Wrapper,
} from "../../../components/commonComponents";
import { useRouter } from "next/router";
import { NOTICE_DETAIL_REQUEST } from "../../../reducers/notice";
import { useCallback } from "react";
import { message } from "antd";

const DownloadA = styled.a`
  font-size: 15px;
  margin: 0 8px;
`;

const DetailNotice = () => {
  ////// GLOBAL STATE //////

  const { noticeDetail, noticePrev, noticeNext, st_noticeListError } =
    useSelector((state) => state.notice);

  ////// HOOKS //////
  const width = useWidth();

  const router = useRouter();

  const dispatch = useDispatch();

  const id = router.query.id;

  ////// USEEFFECT //////

  useEffect(() => {
    dispatch({
      type: NOTICE_DETAIL_REQUEST,
      data: id,
    });
  }, [id]);

  useEffect(() => {
    if (st_noticeListError) {
      message.error(st_noticeListError);
    }
  }, [st_noticeListError]);

  ////// TOGGLE //////
  ////// HANDLER //////

  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  const prevHandler = useCallback(() => {
    if (noticePrev) {
      moveLinkHandler(`/garden/notice/${noticePrev.id}`);
    }
  }, [noticePrev]);

  const nextHandler = useCallback(() => {
    if (noticeNext) {
      moveLinkHandler(`/garden/notice/${noticeNext.id}`);
      window.scrollTo({ top: 0 });
    }
  }, [noticeNext]);

  const listHandler = useCallback(() => {
    moveLinkHandler(`/garden/notice`);
    window.scrollTo({ top: 0 });
  }, []);

  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>효인요양원 | 공지사항</title>
      </Head>

      <ClientLayout>
        <WholeWrapper>
          <SubBanner
            menuName={`공지사항`}
            bgImg={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/sub-banner/notice.png`}
          />

          <RsWrapper>
            <CommonTitle>공지사항</CommonTitle>

            <Wrapper
              borderTop={`2px solid ${Theme.basicTheme_C}`}
              height={width < 900 ? `auto` : `90px`}
              padding={width < 900 && `10px 0`}
              dr={`row`}
            >
              <Wrapper
                width={
                  width < 900 ? `100%` : `calc(100% - 135px - 135px - 135px)`
                }
                padding={width < 900 ? `0 0 15px` : `0 0 0 30px`}
                al={`flex-start`}
                fontSize={width < 900 ? `18px` : `20px`}
                fontWeight={`600`}
              >
                {noticeDetail && noticeDetail.title}
              </Wrapper>

              <Wrapper
                width={width < 900 ? `calc(100% / 3)` : `135px`}
                fontSize={width < 900 ? `15px` : `18px`}
                al={width < 900 ? `flex-start` : `center`}
                fontWeight={`600`}
              >
                관리자
              </Wrapper>

              <Wrapper
                width={width < 900 ? `calc(100% / 3)` : `135px`}
                fontSize={width < 900 ? `15px` : `18px`}
                al={width < 900 ? `flex-start` : `center`}
                fontWeight={`600`}
              >
                {noticeDetail && noticeDetail.viewFrontCreatedAt}
              </Wrapper>

              <Wrapper
                width={width < 900 ? `calc(100% / 3)` : `135px`}
                fontSize={width < 900 ? `15px` : `18px`}
                al={width < 900 ? `flex-start` : `center`}
                fontWeight={`600`}
              >
                조회수 : {noticeDetail && noticeDetail.hit}
              </Wrapper>
            </Wrapper>

            <Wrapper
              borderTop={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              {noticeDetail && noticeDetail.filename && (
                <Wrapper
                  dr={`row`}
                  ju={`flex-start`}
                  color={Theme.grey2_C}
                  bgColor={Theme.lightGrey6_C}
                  padding={width < 900 ? `0 10px` : `0 35px`}
                  height={`40px`}
                  fontSize={`15px`}
                  borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                >
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_file.png"
                    width={`16px`}
                    alt="icon"
                  />
                  <Text margin={`0 0 0 6px`}>첨부파일명 :</Text>

                  <DownloadA
                    href={noticeDetail.file}
                    download={noticeDetail.filename}
                  >
                    {noticeDetail.filename}
                  </DownloadA>
                </Wrapper>
              )}

              <Wrapper
                padding={width < 900 ? `20px 0` : `50px 0`}
                al={`flex-start`}
                ju={`flex-start`}
                minHeight={`300px`}
                fontSize={`18px`}
              >
                <Image
                  width={`800px`}
                  margin={`0 0 20px`}
                  src={noticeDetail && noticeDetail.imagePath}
                />

                <Text>{noticeDetail && noticeDetail.content}</Text>
              </Wrapper>
            </Wrapper>

            <CommonButton
              width={`160px`}
              height={`50px`}
              margin={`50px 0`}
              fontSize={width < 900 ? `16px` : `20px`}
              kindOf={`subTheme2`}
              onClick={() => listHandler()}
            >
              목록으로
            </CommonButton>

            <Wrapper
              borderTop={`1px solid ${Theme.grey4_C}`}
              borderBottom={`1px solid ${Theme.grey4_C}`}
              margin={`0 0 120px`}
            >
              <Wrapper
                height={`60px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.grey4_C}`}
                onClick={() => prevHandler()}
                cursor={`pointer`}
              >
                <Wrapper
                  width={width < 900 ? `25%` : `220px`}
                  color={Theme.grey2_C}
                >
                  이전
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `75%` : `calc(100% - 220px)`}
                  al={`flex-start`}
                  fontSize={width < 900 ? `16px` : `18px`}
                >
                  <Text width={`100%`} isEllipsis>
                    {noticePrev
                      ? noticePrev && noticePrev.title
                      : `이전 글이 존재하지 않습니다.`}
                  </Text>
                </Wrapper>
              </Wrapper>

              <Wrapper
                height={`60px`}
                dr={`row`}
                cursor={`pointer`}
                onClick={() => nextHandler()}
              >
                <Wrapper
                  width={width < 900 ? `25%` : `220px`}
                  color={Theme.grey2_C}
                >
                  다음글
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `75%` : `calc(100% - 220px)`}
                  al={`flex-start`}
                  fontSize={width < 900 ? `16px` : `18px`}
                >
                  <Text width={`100%`} isEllipsis>
                    {noticeNext
                      ? noticeNext && noticeNext.title
                      : `다음 글이 존재하지 않습니다.`}
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

export default DetailNotice;
