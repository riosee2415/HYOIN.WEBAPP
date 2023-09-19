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
import { DownOutlined, RightOutlined } from "@ant-design/icons";

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

const Admission = () => {
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
        <title>효인요양원 | 입소 절차</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper padding={`0 0 120px`}>
            <CommonTitle fontSize={`38px`} fontWeight={`700`}>
              입소 절차
            </CommonTitle>

            <Wrapper dr={`row`} ju={`flex-start`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                border={`1px solid ${Theme.subTheme2_C}`}
                radius={`100%`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={width < 700 ? `20px` : `28px`} fontWeight={`500`}>
                시설 입소 절차
              </Text>
            </Wrapper>
            <Wrapper margin={`40px 0 30px`} al={`flex-start`}>
              <ListText>
                '우리 그리고 가족이라는 마음으로' 어르신들을 정성으로 섬기도록
                하겠습니다.
              </ListText>
            </Wrapper>

            <Wrapper dr={`row`} margin={`0 0 100px`}>
              <Wrapper
                width={
                  width < 1100
                    ? width < 900
                      ? `100%`
                      : `calc(100% / 2 - 44px)`
                    : `calc(100% / 5 - 26px)`
                }
                margin={width < 1100 && `0 0 10px`}
                minHeight={width < 900 ? `200px` : `237px`}
                ju={`flex-start`}
                padding={`30px 0 0`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-1.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>

                <Text
                  fontSize={width < 900 ? `15px` : `24px`}
                  margin={`12px 0 0`}
                >
                  전화상담
                </Text>
              </Wrapper>
              <Text
                margin={width < 900 ? `10px 0` : `0 6px`}
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
                    : `calc(100% / 5 - 26px)`
                }
                margin={width < 1100 && `0 0 10px`}
                minHeight={width < 900 ? `200px` : `237px`}
                ju={`flex-start`}
                padding={`30px 0 0`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-2.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `15px` : `24px`}
                  margin={`12px 0 0`}
                >
                  방문상담
                </Text>
              </Wrapper>
              <Text margin={`0 6px`} fontSize={width < 900 ? `15px` : `20px`}>
                {width < 900 ? <DownOutlined /> : <RightOutlined />}
              </Text>

              <Wrapper
                width={
                  width < 1100
                    ? width < 900
                      ? `100%`
                      : `calc(100% / 2 - 44px)`
                    : `calc(100% / 5 - 26px)`
                }
                margin={width < 1100 && `0 0 10px`}
                minHeight={width < 900 ? `200px` : `237px`}
                ju={`flex-start`}
                padding={`30px 0 0`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-3.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `15px` : `24px`}
                  margin={`12px 0 0`}
                >
                  계약 및 입소일시
                </Text>
                <Text fontSize={width < 900 ? `15px` : `24px`} lineHeight={`1`}>
                  지정
                </Text>
              </Wrapper>
              <Text margin={`0 6px`} fontSize={width < 900 ? `15px` : `20px`}>
                {width < 900 ? <DownOutlined /> : <RightOutlined />}
              </Text>
              <Wrapper
                width={
                  width < 1100
                    ? width < 900
                      ? `100%`
                      : `calc(100% / 2 - 44px)`
                    : `calc(100% / 5 - 26px)`
                }
                margin={width < 1100 && `0 0 10px`}
                minHeight={width < 900 ? `200px` : `237px`}
                ju={`flex-start`}
                padding={`30px 0 0`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-4.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `15px` : `24px`}
                  margin={`12px 0 0`}
                >
                  입소준비
                </Text>
                <Text fontSize={width < 900 ? `15px` : `24px`} lineHeight={`1`}>
                  (기관 및 상담자)
                </Text>
              </Wrapper>
              <Text margin={`0 6px`} fontSize={width < 900 ? `15px` : `20px`}>
                {width < 900 ? <DownOutlined /> : <RightOutlined />}
              </Text>
              <Wrapper
                width={
                  width < 1100
                    ? width < 900
                      ? `100%`
                      : `calc(100% / 2 - 44px)`
                    : `calc(100% / 5 - 26px)`
                }
                margin={width < 1100 && `0 0 10px`}
                minHeight={width < 900 ? `200px` : `237px`}
                ju={`flex-start`}
                padding={`30px 0 0`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-5.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `15px` : `24px`}
                  margin={`12px 0 0`}
                >
                  입소완료
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                border={`1px solid ${Theme.subTheme2_C}`}
                radius={`100%`}
                margin={`0 15px 0 0`}
              ></Wrapper>

              <Text fontSize={width < 700 ? `20px` : `28px`} fontWeight={`500`}>
                준비(필요) 서류
              </Text>
            </Wrapper>
            <Wrapper margin={`40px 0 30px`} al={`flex-start`}>
              <ListText margin={`0 0 28px 24px`}>
                1. 장기요양인정서 (재가 또는 시설급여)
              </ListText>
              <ListText margin={`0 0 28px 24px`}>
                2. 장기요양이용계획서 (급여종류- 노인요양시설 월 31회 확인 필수)
              </ListText>
              <ListText margin={`0 0 28px 24px`}>
                3. 요양원 입소 건강 진단서&nbsp;
                <SpanText>
                  (결핵검진 포함한 건강검진만 유효, 입소 당일 꼭 지참해야 입소
                  가능)
                </SpanText>
                <Text color={Theme.grey2_C} margin={`5px 0 0`}>
                  다만, 부득이한 사정으로 입소 시 본원 촉탁병원에서 실시하며
                  비용 발생
                </Text>
              </ListText>
              <ListText margin={`0 0 28px 24px`}>4. 처방전 (복용약)</ListText>
              <ListText margin={`0 0 28px 24px`}>5. 의사소견서</ListText>
              <ListText margin={`0 0 28px 24px`}>
                6. 주민등록등본 (어르신, 보호자 각 1통)
              </ListText>
              <ListText margin={`0 0 28px 24px`}>
                7. 가족관계증명서 (어르신 기준으로 1통)
              </ListText>
              <ListText margin={`0 0 28px 24px`}>
                8. 도장 및 신분증 (어르신, 보호자)
              </ListText>
              <ListText margin={`0 0 28px 24px`}>
                9. 의료급여 수급권자 증명서 (해당자에 한함)
              </ListText>
              <ListText margin={`0 0 14px 24px`}>
                10. PCR 음성확인서 (입소 전날, 당일 검사만 유효)
                <Text color={Theme.grey2_C} margin={`5px 0`}>
                  다만, 부득이한 사정으로 입소 시 본원 촉탁병원에서 실시하며
                  비용 발생
                </Text>
                <Text fontSize={width < 900 ? `16px` : `22px`}>
                  ※ 보건소에서 PCR 검사 시 65세이상 무료 보호자가 직접 함
                </Text>
              </ListText>

              <ListText margin={`0 0 14px 24px`}>
                11. 옷, 속옷 등 의류 (면 옷 준비 요망. 다만, 입소 전 옷에 자수로
                이름 표기 필수)
              </ListText>
              <ListText margin={`0 0 14px 24px`}>
                12. 애착 물건(현금, 귀중품 제외)
              </ListText>

              <ListText margin={`0 0 14px 24px`}>
                13. 연계기록지 (직전 타기관 이용시)
              </ListText>
              <ListText margin={`0 0 14px 24px`}>
                <Text
                  fontSize={width < 900 ? `16px` : `22px`}
                  fontWeight={`bold`}
                >
                  ※ 의료급여수급권자 요양원 전입신고 필요 (입소 당일 계약 후)
                </Text>
              </ListText>

              <Text
                fontSize={width < 900 ? `16px` : `22px`}
                margin={`0 0 0 24px`}
              >
                -어르신 신분증, 어르신 도장, 보호자 신분증
              </Text>
              <Text
                fontSize={width < 900 ? `16px` : `22px`}
                margin={`0 0 0 24px`}
              >
                -요양원 입소확인서(당일 요양원에서 발급)
              </Text>
            </Wrapper>

            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              fontSize={width < 900 ? `20px` : `28px`}
              fontWeight={`bold`}
              margin={`100px 0 40px`}
            >
              <Wrapper
                width={`18px`}
                height={`18px`}
                border={`1px solid ${Theme.subTheme2_C}`}
                radius={`100%`}
                margin={`0 15px 0 0`}
              ></Wrapper>
              주간보호 이용 절차
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
                minHeight={width < 900 ? `180px` : `205px`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-4.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  margin={`16px 0 0`}
                >
                  장기요양인정신청
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
                minHeight={width < 900 ? `180px` : `205px`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-3.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  margin={`16px 0 0`}
                >
                  이용신청서 작성
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
                minHeight={width < 900 ? `180px` : `205px`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-6.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  margin={`16px 0 0`}
                >
                  이용계약
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
                minHeight={width < 900 ? `180px` : `205px`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-7.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  margin={`16px 0 0`}
                >
                  서비스 개시
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
              <Wrapper
                width={`18px`}
                height={`18px`}
                border={`1px solid ${Theme.subTheme2_C}`}
                radius={`100%`}
                margin={`0 15px 0 0`}
              ></Wrapper>
              방문요양 이용 절차
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
                minHeight={width < 900 ? `180px` : `205px`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-4.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  margin={`16px 0 0`}
                >
                  장기요양인정신청
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
                minHeight={width < 900 ? `180px` : `205px`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-3.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  margin={`16px 0 0`}
                >
                  이용신청서 작성
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
                minHeight={width < 900 ? `180px` : `205px`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-6.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  margin={`16px 0 0`}
                >
                  이용계약
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
                minHeight={width < 900 ? `180px` : `205px`}
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
                    src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_ad_process-7.png`}
                    width={width < 900 ? `40px` : `60px`}
                  />
                </Wrapper>
                <Text
                  fontSize={width < 900 ? `16px` : `24px`}
                  lineHeight={`1.2`}
                  margin={`16px 0 0`}
                >
                  서비스 개시
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

export default Admission;
