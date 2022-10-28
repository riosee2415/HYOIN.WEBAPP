import React from "react";
import { ATag, Text, Wrapper, Image } from "../commonComponents";
import styled from "styled-components";
import Theme from "../Theme";
import useWidth from "../../hooks/useWidth";
import Fade from "react-reveal/Fade";

const ListText = styled(Text)`
  display: list-item;
  margin: 0 0 0 24px;
  font-size: 22px;

  &::marker {
    color: ${Theme.subTheme10_C};
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const Dementia = () => {
  const width = useWidth();

  return (
    <Wrapper padding={`0 0 120px`}>
      <Wrapper al={`flex-start`} margin={`60px 0 40px`}>
        <Wrapper
          dr={`row`}
          width={`auto`}
          fontSize={width < 700 ? `20px` : `28px`}
          fontWeight={`bold`}
        >
          <Wrapper
            width={`18px`}
            height={`18px`}
            radius={`100%`}
            margin={`0 15px 0 0`}
            border={`1px solid ${Theme.subTheme10_C}`}
          ></Wrapper>
          치매 특화형
        </Wrapper>
      </Wrapper>

      <Wrapper al={`flex-start`}>
        <Fade bottom>
          <ListText>
            {width < 900 ? (
              `치매 어르신들의 저하된 인지기능 회복 및 유지를 위한 전문적인 프로그램 제공으로 부양가족들의 부담감을 경감시키고 어르신들의 심리 · 사회적 안정을 지원합니다.`
            ) : (
              <>
                <Text>
                  치매 어르신들의 저하된 인지기능 회복 및 유지를 위한 전문적인
                  프로그램 제공으로 부양가족들의 부담감을 경감시키고
                </Text>
                어르신들의 심리 · 사회적 안정을 지원합니다.
              </>
            )}
          </ListText>
        </Fade>
      </Wrapper>
      <Wrapper
        dr={`row`}
        ju={`flex-start`}
        fontSize={width < 700 ? `20px` : `28px`}
        fontWeight={`bold`}
        margin={`100px 0 40px`}
      >
        <Wrapper
          width={`18px`}
          height={`18px`}
          radius={`100%`}
          margin={`0 15px 0 0`}
          border={`1px solid ${Theme.subTheme10_C}`}
        ></Wrapper>
        치매 특화형 서비스
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
          width={width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`}
          bgColor={Theme.subTheme9_C}
          borderLeft={`1px solid ${Theme.lightGrey2_C}`}
          borderRight={`1px solid ${Theme.lightGrey2_C}`}
        >
          서비스
        </Wrapper>
        <Wrapper
          height={width < 900 ? `50px` : `80px`}
          width={
            width < 1280
              ? width < 900
                ? `100%`
                : `calc(100% - 250px)`
              : `calc(100% - 350px)`
          }
          bgColor={Theme.subTheme9_C}
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
          width={width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`}
          bgColor={Theme.lightGrey4_C}
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          이용자 관리
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `15px` : `20px`}
          padding={`5px`}
          minHeight={`80px`}
          width={
            width < 1280
              ? width < 900
                ? `100%`
                : `calc(100% - 250px)`
              : `calc(100% - 350px)`
          }
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          이용 신청 상담, 이용 상담, 사례관리 등
        </Wrapper>
      </Wrapper>
      <Wrapper dr={`row`}>
        <Wrapper
          fontSize={width < 900 ? `16px` : `22px`}
          padding={`5px`}
          minHeight={width < 900 ? `50px` : `80px`}
          width={width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`}
          bgColor={Theme.lightGrey4_C}
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          생활지원 서비스
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `15px` : `20px`}
          padding={`5px`}
          minHeight={`80px`}
          width={
            width < 1280
              ? width < 900
                ? `100%`
                : `calc(100% - 250px)`
              : `calc(100% - 350px)`
          }
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          <Text>영양 서비스, 이/미용 서비스, 목욕 서비스,</Text>
          <Text>위생 서비스, 이동 서비스</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper dr={`row`}>
        <Wrapper
          fontSize={width < 900 ? `16px` : `22px`}
          padding={`5px`}
          minHeight={width < 900 ? `50px` : `80px`}
          width={width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`}
          bgColor={Theme.lightGrey4_C}
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          의료/간호 서비스
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `15px` : `20px`}
          padding={`5px`}
          minHeight={`80px`}
          width={
            width < 1280
              ? width < 900
                ? `100%`
                : `calc(100% - 250px)`
              : `calc(100% - 350px)`
          }
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          <Text>건강검진, 예방접종, 구충제 복용, 투약, 물리(작업)치료,</Text>
          <Text>상처 관리, 혈당 측정, 의료기관 연계 등</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper dr={`row`}>
        <Wrapper
          fontSize={width < 900 ? `16px` : `22px`}
          padding={`5px`}
          minHeight={width < 900 ? `50px` : `80px`}
          width={width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`}
          bgColor={Theme.lightGrey4_C}
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          인지자극활동 프로그램
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `15px` : `20px`}
          padding={`5px`}
          minHeight={`80px`}
          width={
            width < 1280
              ? width < 900
                ? `100%`
                : `calc(100% - 250px)`
              : `calc(100% - 350px)`
          }
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          <Text>지남력 활동, 집중력 활동,</Text>
          <Text>기억력 활동, 문제해결력 활동 등</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper dr={`row`}>
        <Wrapper
          fontSize={width < 900 ? `16px` : `22px`}
          padding={`5px`}
          minHeight={width < 900 ? `50px` : `80px`}
          width={width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`}
          bgColor={Theme.lightGrey4_C}
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          일상생활기능 증진 프로그램
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `15px` : `20px`}
          padding={`5px`}
          minHeight={`80px`}
          width={
            width < 1280
              ? width < 900
                ? `100%`
                : `calc(100% - 250px)`
              : `calc(100% - 350px)`
          }
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          <Text>일상생활 점검하기,</Text>
          <Text>운동 관리 (관절 운동, 유산소 운동, 유연성 증진 운동)</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper dr={`row`}>
        <Wrapper
          fontSize={width < 900 ? `16px` : `22px`}
          padding={`5px`}
          minHeight={width < 900 ? `50px` : `80px`}
          width={width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`}
          bgColor={Theme.lightGrey4_C}
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          인지재활 프로그램
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `15px` : `20px`}
          padding={`5px`}
          minHeight={`80px`}
          width={
            width < 1280
              ? width < 900
                ? `100%`
                : `calc(100% - 250px)`
              : `calc(100% - 350px)`
          }
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          {width < 900 ? (
            <Text textAlign={`center`}>
              점핑 클레이, 웃음치료, 원예요법, 회상요법, 종이접기, 독서교실,
              미술치료, 요리 프로그램, 칼라점토, 다감각중재 치료프로그램 등
            </Text>
          ) : (
            <>
              <Text>
                점핑 클레이, 웃음치료, 원예요법, 회상요법, 종이접기, 독서교실,
              </Text>
              <Text>
                미술치료, 요리 프로그램, 칼라점토, 다감각중재 치료프로그램 등
              </Text>
            </>
          )}
        </Wrapper>
      </Wrapper>
      <Wrapper dr={`row`}>
        <Wrapper
          fontSize={width < 900 ? `16px` : `22px`}
          padding={`5px`}
          minHeight={width < 900 ? `50px` : `80px`}
          width={width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`}
          bgColor={Theme.lightGrey4_C}
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          신체기능 프로그램
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `15px` : `20px`}
          padding={`5px`}
          minHeight={`80px`}
          width={
            width < 1280
              ? width < 900
                ? `100%`
                : `calc(100% - 250px)`
              : `calc(100% - 350px)`
          }
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          치료 레크레이션, 건강 체조, 실버 요가
        </Wrapper>
      </Wrapper>
      <Wrapper dr={`row`}>
        <Wrapper
          fontSize={width < 900 ? `16px` : `22px`}
          padding={`5px`}
          minHeight={width < 900 ? `50px` : `80px`}
          width={width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`}
          bgColor={Theme.lightGrey4_C}
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          사회적응 프로그램
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `15px` : `20px`}
          padding={`5px`}
          minHeight={`80px`}
          width={
            width < 1280
              ? width < 900
                ? `100%`
                : `calc(100% - 250px)`
              : `calc(100% - 350px)`
          }
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          {width < 900 ? (
            <Text textAlign={`center`}>
              명절 행사, 생신잔치, 야외 나들이, 송년 행사, 세상 소식전하기,
              크리스마스 행사, 어버이날 행사, 노인의 날 행사 등
            </Text>
          ) : (
            <>
              {" "}
              <Text>
                명절 행사, 생신잔치, 야외 나들이, 송년 행사, 세상 소식전하기,
              </Text>
              <Text>크리스마스 행사, 어버이날 행사, 노인의 날 행사 등</Text>
            </>
          )}
        </Wrapper>
      </Wrapper>
      <Wrapper dr={`row`}>
        <Wrapper
          fontSize={width < 900 ? `16px` : `22px`}
          padding={`5px`}
          minHeight={width < 900 ? `50px` : `80px`}
          width={width < 1280 ? (width < 900 ? `100%` : `250px`) : `350px`}
          bgColor={Theme.lightGrey4_C}
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          가족지원 프로그램
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `15px` : `20px`}
          padding={`5px`}
          minHeight={`80px`}
          width={
            width < 1280
              ? width < 900
                ? `100%`
                : `calc(100% - 250px)`
              : `calc(100% - 350px)`
          }
          border={`1px solid ${Theme.lightGrey2_C}`}
        >
          가정통신문, 보호자회의, 만족도 조사, 가족초청행사 등
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Dementia;
