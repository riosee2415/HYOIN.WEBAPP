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
  RsWrapper,
  WholeWrapper,
  Wrapper,
  Text,
  SpanText,
  Image,
  CommonButton,
} from "../../components/commonComponents";
import SubBanner from "../../components/SubBanner";
import styled from "styled-components";
import Theme from "../../components/Theme";
import { DownOutlined, RightOutlined } from "@ant-design/icons";

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid ${Theme.subTheme10_C};
  border-radius: 100%;
  margin: 0 16px 0 0;
`;

const ListText = styled(Text)`
  display: list-item;
  margin: ${(props) => props.margin || `0 0 0 24px`};
  font-size: 22px;

  &::marker {
    color: ${Theme.subTheme10_C};
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const Index = () => {
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
        <title>효인요양원 | 노인장기요양보험제도</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper padding={`0 0 120px`}>
            <CommonTitle>노인장기요양보험제도</CommonTitle>

            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              fontSize={width < 900 ? `20px` : `28px`}
              fontWeight={`bold`}
            >
              <Circle /> 노인장기요양보험제도란?
              <a
                href={`https://www.longtermcare.or.kr/npbs/e/b/101/npeb101m01.web?menuId=npe0000000030&zoomSize=`}
                target={`_blank`}
              >
                <CommonButton
                  margin={`0 0 10px 10px`}
                  fontSize={`16px`}
                  width={`95px`}
                  height={`34px`}
                  kindOf={`subTheme2`}
                >
                  알아보기
                </CommonButton>
              </a>
            </Wrapper>
            <Wrapper margin={`40px 0 100px`} al={`flex-start`}>
              <ListText width={width < 900 ? `90%` : `80%`}>
                고령이나 노인성 질병 등으로 일상생활을 혼자서 수행하기 어려운
                분들에게 신체활동 및 일상생활 지원 등의 서비스를 제공하여 노후
                생활의 안정과 그 가족의 부담을 덜어줌으로써 국민의 삶의 질을
                향상하도록 하는 사회보험제도입니다.
              </ListText>
            </Wrapper>
            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              fontSize={width < 900 ? `20px` : `28px`}
              fontWeight={`bold`}
            >
              <Circle /> 신청안내
            </Wrapper>
            <Wrapper
              margin={`40px 0 16px`}
              dr={`row`}
              ju={`flex-start`}
              al={`flex-start`}
              fontSize={width < 900 ? `16px` : `22px`}
            >
              <ListText>
                <SpanText fontWeight={`600`} margin={`0 10px 0 0`}>
                  신청대상 :
                </SpanText>
              </ListText>
              <Text
                textAlign={width < 900 && `center`}
                display={width < 1100 && `contents`}
              >
                소득수준과 상관없이 노인장기요양보험 가입자(국민건강보험
                가입자와 동일)와 그 피부양자
                <Text
                  textAlign={width < 900 && `center`}
                  display={width < 1100 && `contents`}
                >
                  의료급여수급권자로서 65세 이상 노인과 65세 미만의 노인성
                  질병이 있는 자
                </Text>
              </Text>
            </Wrapper>
            <Wrapper
              margin={`0 0 16px`}
              dr={`row`}
              ju={`flex-start`}
              al={`flex-start`}
              fontSize={width < 900 ? `16px` : `22px`}
            >
              <ListText>
                <SpanText fontWeight={`600`} margin={`0 10px 0 0`}>
                  급여대상 :
                </SpanText>
              </ListText>
              <Text
                textAlign={width < 900 && `center`}
                display={width < 1100 && `contents`}
              >
                65세 이상 노인 또는 치매, 중풍, 파킨스병 등 노인성 질병을 앓고
                있는 65세 미만인 자 중
                <Text
                  textAlign={width < 900 && `center`}
                  display={width < 1100 && `contents`}
                >
                  6개월 이상의 기간 동안 일상생활을 수행하기 어려워
                  장기요양서비스가 필요하다고 인정되는 자
                </Text>
              </Text>
            </Wrapper>
            <Wrapper margin={`0 0 16px`} dr={`row`} ju={`flex-start`}>
              <ListText>
                <SpanText fontWeight={`600`} margin={`0 10px 0 0`}>
                  신청장소 :
                </SpanText>
                전국 공단지사
              </ListText>
            </Wrapper>
            <Wrapper margin={`0 0 16px`} dr={`row`} ju={`flex-start`}>
              <ListText>
                <SpanText fontWeight={`600`} margin={`0 10px 0 0`}>
                  신청방법 :
                </SpanText>
                본인 또는 대리인
              </ListText>
            </Wrapper>
            <Wrapper margin={`0 0 16px`} dr={`row`} ju={`flex-start`}>
              <ListText>
                <SpanText fontWeight={`600`} margin={`0 10px 0 0`}>
                  제출서류 :
                </SpanText>
                장기요양인정신청서
              </ListText>
            </Wrapper>

            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              fontSize={width < 900 ? `20px` : `28px`}
              fontWeight={`bold`}
              margin={`100px 0 40px`}
            >
              <Circle /> 신청절차
              <a
                href={`https://www.longtermcare.or.kr/npbs/e/b/202/npeb202m01.web?menuId=npe0000000120&prevPath=/npbs/e/b/101/npeb101m01.web`}
                target={`_blank`}
              >
                <CommonButton
                  margin={`0 0 10px 10px`}
                  fontSize={`16px`}
                  width={`95px`}
                  height={`34px`}
                  kindOf={`subTheme2`}
                >
                  자세히
                </CommonButton>
              </a>
            </Wrapper>

            <Wrapper dr={`row`}>
              <Wrapper
                width={
                  width < 1100
                    ? width < 900
                      ? `100%`
                      : `calc(100% / 2 - 44px)`
                    : `calc(100% / 4 - 33px)`
                }
                margin={width < 1100 && `0 0 10px`}
                minHeight={width < 900 ? `230px` : `280px`}
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`10px`}
              >
                <Wrapper
                  width={width < 900 ? `80px` : `100px`}
                  height={width < 900 ? `80px` : `100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                >
                  <Image
                    alt="icon"
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/insurance-page/icon_process1.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  fontWeight={`600`}
                  margin={`20px 0 0`}
                >
                  장기요양인정신청
                </Text>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  fontWeight={`600`}
                >
                  및 방문조사
                </Text>
                <Text
                  fontSize={width < 900 ? `15px` : `20px`}
                  color={Theme.grey2_C}
                  margin={`36px 0 0`}
                >
                  국민건강보험공단
                </Text>
              </Wrapper>
              <Text
                margin={width < 900 ? `10px 0` : `0 12px`}
                fontSize={width < 900 ? `15px` : `20px`}
              >
                {width < 900 ? <DownOutlined /> : <RightOutlined />}
              </Text>
              <Wrapper
                width={
                  width < 1100
                    ? width < 900
                      ? `100%`
                      : `calc(100% / 2 - 44px)`
                    : `calc(100% / 4 - 33px)`
                }
                margin={width < 1100 && `0 0 10px`}
                minHeight={width < 900 ? `230px` : `280px`}
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`10px`}
              >
                <Wrapper
                  width={width < 900 ? `80px` : `100px`}
                  height={width < 900 ? `80px` : `100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                >
                  <Image
                    alt="icon"
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/insurance-page/icon_process2.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  fontWeight={`600`}
                  margin={`32px 0 0`}
                >
                  등급판정
                </Text>

                <Text
                  fontSize={width < 900 ? `15px` : `20px`}
                  color={Theme.grey2_C}
                  margin={`36px 0 0`}
                >
                  장기요양 등급판정위원회
                </Text>
              </Wrapper>
              <Text margin={`0 12px`} fontSize={width < 900 ? `15px` : `20px`}>
                {width < 900 ? <DownOutlined /> : <RightOutlined />}
              </Text>

              <Wrapper
                width={
                  width < 1100
                    ? width < 900
                      ? `100%`
                      : `calc(100% / 2 - 44px)`
                    : `calc(100% / 4 - 33px)`
                }
                margin={width < 1100 && `0 0 10px`}
                minHeight={width < 900 ? `230px` : `280px`}
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`10px`}
              >
                <Wrapper
                  width={width < 900 ? `80px` : `100px`}
                  height={width < 900 ? `80px` : `100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                >
                  <Image
                    alt="icon"
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/insurance-page/icon_process3.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  fontWeight={`600`}
                  margin={`20px 0 0`}
                >
                  장기요양인정서, 표준
                </Text>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  fontWeight={`600`}
                >
                  장기요양 이용계획서 통지
                </Text>
                <Text
                  fontSize={width < 900 ? `15px` : `20px`}
                  color={Theme.grey2_C}
                  margin={`36px 0 0`}
                >
                  국민건강보험공단
                </Text>
              </Wrapper>
              <Text margin={`0 12px`} fontSize={width < 900 ? `15px` : `20px`}>
                {width < 900 ? <DownOutlined /> : <RightOutlined />}
              </Text>
              <Wrapper
                width={
                  width < 1100
                    ? width < 900
                      ? `100%`
                      : `calc(100% / 2 - 44px)`
                    : `calc(100% / 4 - 33px)`
                }
                margin={width < 1100 && `0 0 10px`}
                minHeight={width < 900 ? `230px` : `280px`}
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
                radius={`10px`}
              >
                <Wrapper
                  width={width < 900 ? `80px` : `100px`}
                  height={width < 900 ? `80px` : `100px`}
                  bgColor={Theme.white_C}
                  radius={`100%`}
                >
                  <Image
                    alt="icon"
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/insurance-page/icon_process3.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  fontWeight={`600`}
                  margin={`20px 0 0`}
                >
                  장기요양급여 이용
                </Text>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  fontWeight={`600`}
                >
                  계약 급여제공
                </Text>
                <Text
                  fontSize={width < 900 ? `15px` : `20px`}
                  color={Theme.grey2_C}
                  margin={`36px 0 0`}
                >
                  재가, 요양시설
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              fontSize={width < 900 ? `20px` : `28px`}
              fontWeight={`bold`}
              margin={`100px 0 40px`}
            >
              <Circle /> 등급판정기준
            </Wrapper>

            <Wrapper
              dr={`row`}
              borderTop={`1px solid ${Theme.subTheme10_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              fontSize={width < 900 ? `16px` : `22px`}
              fontWeight={`bold`}
              display={width < 900 ? `none` : `flex`}
            >
              <Wrapper
                height={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                borderLeft={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`1px solid ${Theme.lightGrey2_C}`}
              >
                등급
              </Wrapper>
              <Wrapper
                height={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                bgColor={Theme.lightGrey4_C}
                borderLeft={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`1px solid ${Theme.lightGrey2_C}`}
              >
                내용
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                장기요양 1등급
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                일상생활에서 전적으로 다른 사람의 도움이 필요한 자로서
                장기요양인정점수가 95점 이상인 자
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                장기요양 2등급
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  일상생활에서 상당 부분 다른 사람의 도움이 필요한 자로서
                </Text>
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  장기요양인정점수가 75점이상 95점 미만인 자
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                장기요양 3등급
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  일상생활에서 부분적으로 다른 사람의 도움이 필요한 자로서
                </Text>
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  장기요양인정점수가 60점이상 75점 미만인 자
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                장기요양 4등급
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  일상생활에서 일정부분 다른 사람의 도움이 필요한 자로서
                </Text>
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  장기요양인정점수가 51점이상 60점 미만인 자
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                장기요양 5등급
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                치매환자로서 장기요양인정점수가 45점 이상 51점 미만인 자
              </Wrapper>
            </Wrapper>
            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              fontSize={width < 900 ? `20px` : `28px`}
              fontWeight={`bold`}
              margin={`100px 0 40px`}
            >
              <Circle /> 장기요양급여종류
            </Wrapper>

            <Wrapper margin={`0 0 28px`} dr={`row`} ju={`flex-start`}>
              <ListText>재가급여</ListText>
            </Wrapper>

            <Wrapper
              dr={`row`}
              borderTop={`1px solid ${Theme.subTheme10_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              fontSize={width < 900 ? `16px` : `22px`}
              fontWeight={`bold`}
              display={width < 900 ? `none` : `flex`}
            >
              <Wrapper
                height={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                borderLeft={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`1px solid ${Theme.lightGrey2_C}`}
              >
                등급
              </Wrapper>
              <Wrapper
                height={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                bgColor={Theme.lightGrey4_C}
                borderLeft={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`1px solid ${Theme.lightGrey2_C}`}
              >
                내용
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                방문요양
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                오양보호사가 수급자의 가정 등을 방문하여 목욕, 배설, 화장실 이용
                등 주변정돈 등을 도와주는 급여
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                방문목욕
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                2인 이상의 요양보호사가 목욕설비를 갖춘 장비를 이용하여 수급자의
                가정 등을 방문하여 목욕을 제공하는 급여
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                방문간호
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  간호(조무)사 또는 과 위생사가 의사, 한의사 또는 치과의사의
                  지시에 따라 수급자의 가정 등을 방문하여
                </Text>
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  간호, 진료의 보조, 요양에 관한 상담 또는 구강위생을 제공하는
                  급여
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                주 · 야간보호
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  수급자를 하루 중 일정한 시간 동안 장기요양기관에 보호하여
                  목욕, 식사, 기본간호, 치매관리, 응급서비스 등
                </Text>
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  심신기능의 유지향상을 위한 교육, 훈련 등을 제공하는 급여
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={
                  width < 1280 ? (width < 900 ? `50px` : `120px`) : `80px`
                }
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                단기보호
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={width < 1280 ? `120px` : `80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  부득이한 사유로 일시적으로 가족의 보호를 받을 수 없는
                  수급자에게일정기간 동안 단기보호시설에 보호하며,
                </Text>
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  목욕, 식사, 기본간호, 치매관리, 응급서비스 신체활동 지원과
                  심신기능의 유지, 향상을 위한 교육, 관련 등을 제공하는 급여
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                복지용구
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  수급자의 일상생활, 신체활동 지원에 필요한 용구(휠체어, 이동형
                  좌변기, 전동침대 등)을
                </Text>
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  구입 또는 대여 (복지용구 연 한도액 : 연간 160만원)
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper margin={`50px 0 28px`} dr={`row`} ju={`flex-start`}>
              <ListText>시설급여</ListText>
            </Wrapper>

            <Wrapper
              dr={`row`}
              borderTop={`1px solid ${Theme.subTheme10_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              fontSize={width < 900 ? `16px` : `22px`}
              fontWeight={`bold`}
              display={width < 900 ? `none` : `flex`}
            >
              <Wrapper
                height={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                borderLeft={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`1px solid ${Theme.lightGrey2_C}`}
              >
                급여해당서비스
              </Wrapper>
              <Wrapper
                height={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                bgColor={Theme.lightGrey4_C}
                borderLeft={`1px solid ${Theme.lightGrey2_C}`}
                borderRight={`1px solid ${Theme.lightGrey2_C}`}
              >
                내용
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={width < 900 ? `50px` : `80px`}
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                노인요양시설
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={`80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  치매, 중풍 등 노인성질환 등으로 심신에 상당한 장애가 발생하여
                  도움을 필요로 하는 자를 입소시켜
                </Text>
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  급식, 요양과 그 밖에 일상생활에 필요한 편의를 제공하는
                  장기요양급여
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper
                fontSize={width < 900 ? `16px` : `22px`}
                padding={`5px`}
                minHeight={
                  width < 1100 ? (width < 900 ? `50px` : `120px`) : `80px`
                }
                width={
                  width < 1280 ? (width < 900 ? `100%` : `200px`) : `270px`
                }
                bgColor={Theme.subTheme9_C}
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                노인요양공동시설
              </Wrapper>
              <Wrapper
                fontSize={width < 900 ? `15px` : `20px`}
                padding={`5px`}
                minHeight={width < 1100 ? `120px` : `80px`}
                width={
                  width < 1280
                    ? width < 900
                      ? `100%`
                      : `calc(100% - 200px)`
                    : `calc(100% - 270px)`
                }
                border={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  치매, 중풍 등 노인성 질환 등으로 심신에 상당한 장애가 발생하여
                  도움을 필요로 하는 자에게
                </Text>
                <Text textAlign={`center`} display={width < 1100 && `contents`}>
                  가정과 같은 주거 여건과 급식, 요양과 그 밖에 일상생활에 필요한
                  편의를 제공하는 장기요양 급여
                </Text>
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

export default Index;
