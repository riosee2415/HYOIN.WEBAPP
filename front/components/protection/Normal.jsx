import React from "react";
import { ATag, Text, Wrapper, Image } from "../commonComponents";
import styled from "styled-components";
import Theme from "../Theme";
import useWidth from "../../hooks/useWidth";
import Fade from "react-reveal/Fade";

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

const Title = styled(Text)`
  position: relative;
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 35px;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: ${Theme.basicTheme_C};
    z-index: -1;
  }
`;

const Normal = () => {
  const width = useWidth();

  return (
    <Wrapper padding={`80px 0 120px`}>
      <Wrapper
        radius={`10px`}
        overflow={`hidden`}
        bgImg={
          width < 800
            ? `url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_day-ban_m.png")`
            : `url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_day-ban.png")`
        }
      >
        <Wrapper
          bgColor={`rgba(0, 0, 0, 0.5)`}
          padding={width < 900 ? `80px 10px` : `120px 10px`}
          color={Theme.white_C}
        >
          <Fade bottom>
            <Title>주간보호</Title>
            <Text fontSize={width < 900 ? `16px` : `20px`} textAlign={`center`}>
              효인주간보호는 어르신이 가능한 오랫동안 집에서 생활을 유지할 수
              있도록
            </Text>
            <Text fontSize={width < 900 ? `16px` : `20px`} textAlign={`center`}>
              자립생활을 지원하는 것을 목표로 합니다.
            </Text>
          </Fade>
        </Wrapper>
      </Wrapper>

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
          일반형
        </Wrapper>
      </Wrapper>

      <Wrapper al={`flex-start`}>
        <Fade bottom>
          <ListText margin={`0 0 16px 24px`}>
            노인성 질활 및 만성 질환으로 인하여 일상생활이 불편한 어르신들에게
            심신기능의 강화 및 회복을 지원합니다.
          </ListText>
          <ListText margin={`0 0 16px 24px`}>
            가족 부양을 받을 수 없는 어르신들에게 낮 동안 일상생활에 필요한
            서비스를 제공합니다.
          </ListText>
          <ListText margin={`0 0 16px 24px`}>
            유지 · 개선 등을 위하여 기본프로그램과 수급자 상태별 맞춤형
            프로그램을 제공합니다.
          </ListText>
          <ListText>목욕, 사회적응 훈련을 주 1회 이상 제공</ListText>
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
        일반형 서비스
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
          기능회복 프로그램
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
          <Text>
            물리치료, 작업치료, 운동치료, 건강치료, 웃음치료, 원예요법,
          </Text>
          <Text>
            회상요법, 종이접기, 독서교실, 미술치료, 요리 프로그램, 칼라 점토,
            음악치료 등
          </Text>
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
        시간표
      </Wrapper>

      <Image
        alt="시간표"
        src={
          width < 900
            ? `https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/protection-schedule_m.png`
            : `https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/protection-schedule.png`
        }
      />
    </Wrapper>
  );
};

export default Normal;
