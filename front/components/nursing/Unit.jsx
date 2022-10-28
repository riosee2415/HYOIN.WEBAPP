import React from "react";
import {
  ATag,
  Text,
  Wrapper,
  Image,
  RsWrapper,
  SpanText,
} from "../commonComponents";
import styled from "styled-components";
import Theme from "../Theme";
import useWidth from "../../hooks/useWidth";
import Fade from "react-reveal/Fade";

const Title = styled(Wrapper)`
  font-size: 32px;
  font-weight: bold;
  position: relative;
  width: auto;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${Theme.subTheme11_C};
    width: 100%;
    height: 50%;
    z-index: -1;
  }

  @media (max-width: 900px) {
    font-size: 25px;
  }
`;

const ListText = styled(Text)`
  display: list-item;
  margin: ${(props) => props.margin || `0 0 0 24px`};
  font-size: ${(props) => props.fontSize || `20px`};
  color: ${Theme.darkGrey2_C};

  &::marker {
    color: ${Theme.subTheme10_C};
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const Unit = () => {
  const width = useWidth();

  return (
    <Wrapper padding={`80px 0 120px`}>
      <Fade bottom>
        <Title>소그룹으로 나눈 전문 케어 유닛</Title>
        {width < 900 ? (
          <Text fontSize={`16px`} margin={`25px 0 0`} textAlign={`center`}>
            신체 및 인지 기능 등에 따라 4Unit 구분 배정하여, 4Program, 12종
            서비스로 각각의 제공기준을 적용하여 어르신 특성에 맞게 서비스를
            제공합니다.
          </Text>
        ) : (
          <>
            <Text fontSize={`18px`} margin={`25px 0 0`}>
              신체 및 인지 기능 등에 따라 4Unit 구분 배정하여, 4Program, 12종
              서비스로
            </Text>
            <Text fontSize={`18px`}>
              각각의 제공기준을 적용하여 어르신 특성에 맞게 서비스를 제공합니다.
            </Text>
          </>
        )}
      </Fade>
      <Wrapper dr={`row`} margin={`60px 0 80px`}>
        <Wrapper
          fontSize={width < 900 ? `17px` : `20px`}
          fontWeight={`bold`}
          width={width < 900 ? `170px` : `300px`}
        >
          <Fade bottom>
            <Wrapper
              width={width < 900 ? `150px` : `200px`}
              height={width < 900 ? `150px` : `200px`}
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_care-1.png")`}
              radius={`100%`}
              overflow={`hidden`}
              margin={`0 0 20px`}
            >
              <Wrapper
                bgColor={`rgba(13, 42, 74, 0.6)`}
                color={Theme.white_C}
                height={`100%`}
                fontSize={width < 900 ? `20px` : `28px`}
                fontWeight={`bold`}
              >
                4 유닛
              </Wrapper>
            </Wrapper>
          </Fade>
          <Text>신체 및 인지 기능에</Text>
          <Text>따라 유닛 배정</Text>
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `17px` : `20px`}
          fontWeight={`bold`}
          width={width < 900 ? `170px` : `300px`}
        >
          <Fade bottom delay={100}>
            <Wrapper
              width={width < 900 ? `150px` : `200px`}
              height={width < 900 ? `150px` : `200px`}
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_care-2.png")`}
              radius={`100%`}
              overflow={`hidden`}
              margin={`0 0 20px`}
            >
              <Wrapper
                bgColor={`rgba(13, 42, 74, 0.6)`}
                color={Theme.white_C}
                height={`100%`}
                fontSize={width < 900 ? `20px` : `28px`}
                fontWeight={`bold`}
              >
                4 프로그램
              </Wrapper>
            </Wrapper>
          </Fade>
          <Text>4가지 영역</Text>
          <Text>프로그램 구분</Text>
        </Wrapper>
        <Wrapper
          fontSize={width < 900 ? `17px` : `20px`}
          fontWeight={`bold`}
          width={width < 900 ? `170px` : `300px`}
        >
          <Fade bottom delay={200}>
            <Wrapper
              width={width < 900 ? `150px` : `200px`}
              height={width < 900 ? `150px` : `200px`}
              bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_care-3.png")`}
              radius={`100%`}
              overflow={`hidden`}
              margin={`0 0 20px`}
            >
              <Wrapper
                bgColor={`rgba(13, 42, 74, 0.6)`}
                color={Theme.white_C}
                height={`100%`}
                fontSize={width < 900 ? `20px` : `28px`}
                fontWeight={`bold`}
              >
                12 서비스
              </Wrapper>
            </Wrapper>
          </Fade>
          <Text>12가지 케어로</Text>
          <Text>맞춤형 서비스</Text>
        </Wrapper>
      </Wrapper>

      <Wrapper
        dr={`row`}
        ju={`flex-start`}
        fontSize={width < 700 ? `20px` : `28px`}
        fontWeight={`bold`}
      >
        <Wrapper
          width={width < 900 ? `16px` : `18px`}
          height={width < 900 ? `16px` : `18px`}
          radius={`100%`}
          margin={`0 15px 0 0`}
          border={`1px solid ${Theme.subTheme10_C}`}
        ></Wrapper>
        4 유닛
      </Wrapper>

      <Wrapper dr={`row`} ju={`space-between`} al={`flex-start`}>
        <Wrapper
          width={width < 900 ? `100%` : `48%`}
          al={`flex-start`}
          margin={`30px 0`}
        >
          <Image
            alt="unit1"
            src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_unit-1.png`}
          />
          <Text
            fontSize={width < 900 ? `20px` : `24px`}
            fontWeight={`bold`}
            color={Theme.grey4_C}
            margin={`40px 0 10px`}
          >
            UNIT 1
          </Text>
          <Text
            fontSize={width < 900 ? `20px` : `24px`}
            fontWeight={`bold`}
            margin={`0 0 20px`}
          >
            기능회복 유닛
          </Text>

          <ListText margin={`0 0 15px 24px`} fontWeight={`bold`}>
            보행 및 인지가능하고 일상생활 자립이 가능한 어르신
          </ListText>
          <ListText>
            신체기능 악화 방지 및 잔존기능 유지
            {width < 900 ? (
              <Text fontSize={`16px`} color={Theme.grey2_C}>
                질병의 특성으로 인한 결함을 입소자간 상호 보완을 통해 사회성
                강화 및 인지 기능의 유지 및 증진
              </Text>
            ) : (
              <>
                <Text fontSize={`16px`} color={Theme.grey2_C}>
                  질병의 특성으로 인한 결함을 입소자간 상호 보완을 통해
                </Text>
                <Text fontSize={`18px`} color={Theme.grey2_C}>
                  사회성 강화 및 인지 기능의 유지 및 증진
                </Text>
              </>
            )}
          </ListText>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `100%` : `48%`}
          al={`flex-start`}
          margin={`30px 0`}
        >
          <Image
            alt="unit2"
            src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_unit-2.png`}
          />
          <Text
            fontSize={width < 900 ? `20px` : `24px`}
            fontWeight={`bold`}
            color={Theme.grey4_C}
            margin={`40px 0 10px`}
          >
            UNIT 2
          </Text>
          <Text
            fontSize={width < 900 ? `20px` : `24px`}
            fontWeight={`bold`}
            margin={`0 0 20px`}
          >
            인지향상 유닛
          </Text>

          <ListText margin={`0 0 15px 24px`} fontWeight={`bold`}>
            행동변화 조절 인지기능 유지 및 향상
          </ListText>
          <ListText>
            신체적 제한(보행불가)이며 프로그램 욕구가 높은 어르신
            <Text
              fontSize={width < 900 ? `16px` : `18px`}
              color={Theme.grey2_C}
            >
              행동변화 조절 및 인지 기능향상에 도움을 주고, 안지 프로그램 집중
              제공
            </Text>
          </ListText>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `100%` : `48%`}
          al={`flex-start`}
          margin={`30px 0`}
        >
          <Image
            alt="unit3"
            src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_unit-3.png`}
          />
          <Text
            fontSize={width < 900 ? `20px` : `24px`}
            fontWeight={`bold`}
            color={Theme.grey4_C}
            margin={`40px 0 10px`}
          >
            UNIT 3
          </Text>
          <Text
            fontSize={width < 900 ? `20px` : `24px`}
            fontWeight={`bold`}
            margin={`0 0 20px`}
          >
            전문간호 유닛
          </Text>

          <ListText fontWeight={`bold`}>
            치매전담실 전문요양실
            <Text
              fontSize={width < 900 ? `16px` : `18px`}
              color={Theme.grey2_C}
              margin={`0 0 15px`}
            >
              신체기능의 악화방지 및 잔존기능 유지(증진)
            </Text>
          </ListText>
          <ListText>개인별 맞춤형 서비스를 제공하는 전문화된 전용공간</ListText>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `100%` : `48%`}
          al={`flex-start`}
          margin={`30px 0`}
        >
          <Image
            alt="unit4"
            src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_unit-4.png`}
          />
          <Text
            fontSize={width < 900 ? `20px` : `24px`}
            fontWeight={`bold`}
            color={Theme.grey4_C}
            margin={`40px 0 10px`}
          >
            UNIT 4
          </Text>
          <Text
            fontSize={width < 900 ? `20px` : `24px`}
            fontWeight={`bold`}
            margin={`0 0 20px`}
          >
            관계친화 유닛
          </Text>

          <ListText fontWeight={`bold`}>
            거실을 중심으로 가정과 같은 환경을 제공
          </ListText>
          <ListText>입소자간 상호보완을 통해 사회성 강화</ListText>
        </Wrapper>
      </Wrapper>

      <Wrapper
        dr={`row`}
        ju={`flex-start`}
        fontSize={width < 700 ? `20px` : `28px`}
        fontWeight={`bold`}
        margin={`70px 0 40px`}
      >
        <Wrapper
          width={width < 900 ? `16px` : `18px`}
          height={width < 900 ? `16px` : `18px`}
          radius={`100%`}
          margin={`0 15px 0 0`}
          border={`1px solid ${Theme.subTheme10_C}`}
        ></Wrapper>
        4 프로그램
      </Wrapper>

      <Wrapper dr={`row`} ju={`space-between`} al={`flex-start`}>
        <Wrapper
          width={width < 900 ? `49%` : `calc(100% / 4.2)`}
          al={`flex-start`}
        >
          <Wrapper
            height={width < 900 ? `150px` : `220px`}
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_program-1.png")`}
            margin={width < 900 ? `10px 0` : `0 0 25px`}
          >
            <Wrapper
              bgColor={`rgba(0, 0, 0, 0.6)`}
              color={Theme.white_C}
              height={`100%`}
              fontSize={width < 900 ? `20px` : `26px`}
              fontWeight={`bold`}
            >
              생활 지원
              <Text fontSize={width < 900 ? `17px` : `20px`}>(5개 분야)</Text>
            </Wrapper>
          </Wrapper>
          <Fade bottom>
            <ListText
              fontSize={width < 900 ? `16px` : `18px`}
              fontWeight={`bold`}
            >
              상담, 일상지원, 신체지원, 영양급식, 안전지원 서비스 등
            </ListText>
          </Fade>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `49%` : `calc(100% / 4.2)`}
          al={`flex-start`}
        >
          <Wrapper
            height={width < 900 ? `150px` : `220px`}
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_program-2.png")`}
            margin={width < 900 ? `10px 0` : `0 0 25px`}
          >
            <Wrapper
              bgColor={`rgba(0, 0, 0, 0.6)`}
              color={Theme.white_C}
              height={`100%`}
              fontSize={width < 900 ? `20px` : `26px`}
              fontWeight={`bold`}
            >
              기능유지 및 증진
              <Text fontSize={width < 900 ? `17px` : `20px`}>(3개 분야)</Text>
            </Wrapper>
          </Wrapper>
          <Fade bottom>
            <ListText
              fontSize={width < 900 ? `16px` : `18px`}
              fontWeight={`bold`}
            >
              건강증진, 기능회복, 인지향상 서비스 등
            </ListText>
          </Fade>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `49%` : `calc(100% / 4.2)`}
          al={`flex-start`}
        >
          <Wrapper
            height={width < 900 ? `150px` : `220px`}
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_program-4.png")`}
            margin={width < 900 ? `10px 0` : `0 0 25px`}
          >
            <Wrapper
              bgColor={`rgba(0, 0, 0, 0.6)`}
              color={Theme.white_C}
              height={`100%`}
              fontSize={width < 900 ? `20px` : `26px`}
              fontWeight={`bold`}
            >
              여가 및 정서
              <Text fontSize={width < 900 ? `17px` : `20px`}>(2개 분야)</Text>
            </Wrapper>
          </Wrapper>
          <Fade bottom>
            <ListText
              fontSize={width < 900 ? `16px` : `18px`}
              fontWeight={`bold`}
            >
              여가지원, 정서지원 서비스 등
            </ListText>
          </Fade>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `49%` : `calc(100% / 4.2)`}
          al={`flex-start`}
        >
          <Wrapper
            height={width < 900 ? `150px` : `220px`}
            bgImg={`url("https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/img_program-3.png")`}
            margin={width < 900 ? `10px 0` : `0 0 25px`}
          >
            <Wrapper
              bgColor={`rgba(0, 0, 0, 0.6)`}
              color={Theme.white_C}
              height={`100%`}
              fontSize={width < 900 ? `20px` : `26px`}
              fontWeight={`bold`}
            >
              가족 및 특화
              <Text fontSize={width < 900 ? `17px` : `20px`}>(2개 분야)</Text>
            </Wrapper>
          </Wrapper>
          <Fade bottom>
            <ListText
              fontSize={width < 900 ? `16px` : `18px`}
              fontWeight={`bold`}
            >
              가족지원, 특화지원 서비스 등
            </ListText>
          </Fade>
        </Wrapper>
      </Wrapper>

      <Wrapper
        dr={`row`}
        ju={`flex-start`}
        fontSize={width < 700 ? `20px` : `28px`}
        fontWeight={`bold`}
        margin={`120px 0 40px`}
      >
        <Wrapper
          width={width < 900 ? `16px` : `18px`}
          height={width < 900 ? `16px` : `18px`}
          radius={`100%`}
          margin={`0 15px 0 0`}
          border={`1px solid ${Theme.subTheme10_C}`}
        ></Wrapper>
        12 프로그램
      </Wrapper>

      <Wrapper dr={`row`} ju={`space-between`} al={`flex-start`}>
        <Wrapper
          width={width < 900 ? `100%` : `49%`}
          al={`flex-start`}
          margin={`0 0 30px`}
        >
          <Wrapper
            width={`auto`}
            fontSize={`22px`}
            fontWeight={`bold`}
            bgColor={Theme.subTheme10_C}
            color={Theme.white_C}
            height={`60px`}
            padding={`0 30px`}
          >
            생활지원 5개 분야
          </Wrapper>
          <Wrapper
            padding={width < 900 ? `20px 10px` : `35px 30px`}
            bgColor={Theme.lightGrey4_C}
            al={`flex-start`}
            minHeight={`292px`}
          >
            <ListText margin={`0 0 16px 24px`}>
              <SpanText fontWeight={`bold`}>상담서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 전화 방문, 상담 지도, 정기적인 입소자 개별 상담, 보호자 면담
                등
              </SpanText>
            </ListText>
            <ListText margin={`0 0 16px 24px`}>
              <SpanText fontWeight={`bold`}>일상지원 서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 위생 관리, 안전 관리, 실내 환경 관리, 쓰레기 관리 등
              </SpanText>
            </ListText>
            <ListText margin={`0 0 16px 24px`}>
              <SpanText fontWeight={`bold`}>신체지원 서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 식사보조, 세안, 이미용, 구강위생, 목욕, 체위 변경 등
              </SpanText>
            </ListText>
            <ListText margin={`0 0 16px 24px`}>
              <SpanText fontWeight={`bold`}>영양급식 서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 식사제공, 간식제공, 식이 평가, 위생 관리 등
              </SpanText>
            </ListText>
            <ListText>
              <SpanText fontWeight={`bold`}>안전지원 서비&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : CCTV설치, 핸드레일, 안전손잡이, 방송 설비 등
              </SpanText>
            </ListText>
          </Wrapper>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `100%` : `49%`}
          al={`flex-start`}
          margin={`0 0 30px`}
        >
          <Wrapper
            width={`auto`}
            fontSize={`22px`}
            fontWeight={`bold`}
            bgColor={Theme.subTheme10_C}
            color={Theme.white_C}
            height={`60px`}
            padding={`0 30px`}
          >
            기능유지 및 증진 3개 분야
          </Wrapper>
          <Wrapper
            padding={width < 900 ? `20px 10px` : `35px 30px`}
            bgColor={Theme.lightGrey4_C}
            al={`flex-start`}
            minHeight={`292px`}
          >
            <ListText margin={`0 0 16px 24px`}>
              <SpanText fontWeight={`bold`}>건강증진 서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 배설, 통증, 영양, 예방, 피부, 호흡, 임종간호, 건강사정 및
                상담, 진료연계, 촉탁의 진료 등
              </SpanText>
            </ListText>
            <ListText margin={`0 0 16px 24px`}>
              <SpanText fontWeight={`bold`}>기능 서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 물리, 작업, 운동치료, 기능회복훈련 등
              </SpanText>
            </ListText>
            <ListText>
              <SpanText fontWeight={`bold`}>인지향상 서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 노인놀이, 미술, 음악 치료, 그림 그리기, 레크레이션 등
              </SpanText>
            </ListText>
          </Wrapper>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `100%` : `49%`}
          al={`flex-start`}
          margin={`0 0 30px`}
        >
          <Wrapper
            width={`auto`}
            fontSize={`22px`}
            fontWeight={`bold`}
            bgColor={Theme.subTheme10_C}
            color={Theme.white_C}
            height={`60px`}
            padding={`0 30px`}
          >
            여가 및 정서지원 2개 분야
          </Wrapper>
          <Wrapper
            padding={width < 900 ? `20px 10px` : `35px 30px`}
            bgColor={Theme.lightGrey4_C}
            al={`flex-start`}
            minHeight={`212px`}
          >
            <ListText margin={`0 0 16px 24px`}>
              <SpanText fontWeight={`bold`}>여가지원 서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 원예, 종이접기, 영화감상, 요리교실, 노래방, 실버체조,
                특별공연, 방송시청, 영화감상, 지역사회행사 참여 등
              </SpanText>
            </ListText>
            <ListText>
              <SpanText fontWeight={`bold`}>정서지원 서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 종교활동, 월별 생신잔치, 산책 및 나들이, 방문공연, 카페에서
                수다떨기 등
              </SpanText>
            </ListText>
          </Wrapper>
        </Wrapper>
        <Wrapper
          width={width < 900 ? `100%` : `49%`}
          al={`flex-start`}
          margin={`0 0 30px`}
        >
          <Wrapper
            width={`auto`}
            fontSize={`22px`}
            fontWeight={`bold`}
            bgColor={Theme.subTheme10_C}
            color={Theme.white_C}
            height={`60px`}
            padding={`0 30px`}
          >
            가족 및 특화지원 2개분야
          </Wrapper>
          <Wrapper
            padding={width < 900 ? `20px 10px` : `35px 30px`}
            bgColor={Theme.lightGrey4_C}
            al={`flex-start`}
            minHeight={`212px`}
          >
            <ListText margin={`0 0 16px 24px`}>
              <SpanText fontWeight={`bold`}>여가지원 서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 개인별 상담, 가족상담, 가족간담회, 가족초청행사, 가정통신문
                배포, 만족도 조사 등
              </SpanText>
            </ListText>
            <ListText>
              <SpanText fontWeight={`bold`}>특화지원 서비스&nbsp;</SpanText>
              <SpanText fontSize={width < 900 ? `16px` : `18px`}>
                : 임종돌봄, 가족돌봄, 운동회 등
              </SpanText>
            </ListText>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Unit;
