import React from "react";
import { ATag, Text, Wrapper, Image, CommonButton } from "../commonComponents";
import styled from "styled-components";
import Theme from "../Theme";
import useWidth from "../../hooks/useWidth";
import Fade from "react-reveal/Fade";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ArrowBtn = styled(Wrapper)`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  border: 1px solid ${Theme.subTheme2_C};
  color: ${Theme.subTheme2_C};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: ${Theme.subTheme2_C};
    color: ${Theme.white_C};
  }
`;

const Dementia = () => {
  const width = useWidth();

  return (
    <Wrapper padding={`60px 0 120px`}>
      <Wrapper dr={`row`} position={`relative`} margin={`0 0 40px`}>
        <ArrowBtn>
          <LeftOutlined />
        </ArrowBtn>

        <Text
          fontSize={width < 700 ? `20px` : `32px`}
          fontWeight={`700`}
          color={Theme.subTheme2_C}
          margin={width < 700 ? `0 20px` : `0 80px`}
        >
          2022년 09월 10일
        </Text>

        <ArrowBtn>
          <RightOutlined />
        </ArrowBtn>
        <Wrapper
          fontSize={width < 700 ? `16px` : `20px`}
          fontWeight={`700`}
          margin={`30px 0 0`}
        >
          {`[ 차 량 유 의 · 시 간 엄 수 · 안 전 제 일 · 친 절 봉 사 ]`}
        </Wrapper>

        <Wrapper
          width={width < 1100 ? `100%` : `auto`}
          margin={width < 1100 ? `20px 0 0` : `0`}
          padding={`15px 35px`}
          radius={`10px`}
          bgColor={Theme.lightGrey5_C}
          position={width < 1100 ? `` : `absolute`}
          top={`0`}
          right={`0`}
        >
          <Text
            fontFamily={`"S-CoreDream-6Bold"`}
            color={Theme.subTheme2_C}
            fontSize={`18px`}
          >
            효인주간노인복지센터
          </Text>

          <Wrapper dr={`row`} width={`auto`} margin={`5px 0`}>
            <Image alt="icon" width={`12px`} margin={`0 6px 0 0`} />
            <Text fontSize={`18px`} fontWeight={`600`}>
              042-522-5555
            </Text>
          </Wrapper>

          <Wrapper dr={`row`} width={`auto`}>
            <Image alt="icon" width={`12px`} margin={`0 6px 0 0`} />
            <Text fontSize={`18px`} fontWeight={`600`}>
              042-523-7118
            </Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper wrpa={`nowrap`} overflowX={`auto`}>
        <Wrapper minWidth={`900px`}>
          <Wrapper
            borderTop={`1px solid ${Theme.subTheme2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderBottom={`none`}
            dr={`row`}
            margin={`0 0 40px`}
          >
            <Wrapper
              width={`10%`}
              height={width < 700 ? `250px` : `400px`}
              bgColor={Theme.subTheme9_C}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Text fontSize={width < 700 ? `18px` : `22px`} fontWeight={`600`}>
                1호차
              </Text>
              <Text
                margin={`5px 0 0`}
                fontSize={width < 700 ? `18px` : `22px`}
                fontWeight={`700`}
                color={Theme.subTheme2_C}
              >
                3680
              </Text>
            </Wrapper>

            <Wrapper
              width={`10%`}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `150px` : `240px`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오전
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `100px` : `160px`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오후
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper width={`80%`}>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper
            borderTop={`1px solid ${Theme.subTheme2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderBottom={`none`}
            dr={`row`}
            margin={`0 0 40px`}
          >
            <Wrapper
              width={`10%`}
              height={width < 700 ? `250px` : `400px`}
              bgColor={Theme.subTheme9_C}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Text fontSize={width < 700 ? `18px` : `22px`} fontWeight={`600`}>
                2호차
              </Text>
              <Text
                margin={`5px 0 0`}
                fontSize={width < 700 ? `18px` : `22px`}
                fontWeight={`700`}
                color={Theme.subTheme2_C}
              >
                3680
              </Text>
            </Wrapper>

            <Wrapper
              width={`10%`}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `150px` : `240px`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오전
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `100px` : `160px`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오후
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper width={`80%`}>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper
            borderTop={`1px solid ${Theme.subTheme2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderBottom={`none`}
            dr={`row`}
            margin={`0 0 40px`}
          >
            <Wrapper
              width={`10%`}
              height={width < 700 ? `250px` : `400px`}
              bgColor={Theme.subTheme9_C}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Text fontSize={width < 700 ? `18px` : `22px`} fontWeight={`600`}>
                3호차
              </Text>
              <Text
                margin={`5px 0 0`}
                fontSize={width < 700 ? `18px` : `22px`}
                fontWeight={`700`}
                color={Theme.subTheme2_C}
              >
                3680
              </Text>
            </Wrapper>

            <Wrapper
              width={`10%`}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `150px` : `240px`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오전
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `100px` : `160px`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오후
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper width={`80%`}>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper
            borderTop={`1px solid ${Theme.subTheme2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderBottom={`none`}
            dr={`row`}
            margin={`0 0 40px`}
          >
            <Wrapper
              width={`10%`}
              height={width < 700 ? `250px` : `400px`}
              bgColor={Theme.subTheme9_C}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Text fontSize={width < 700 ? `18px` : `22px`} fontWeight={`600`}>
                4호차
              </Text>
              <Text
                margin={`5px 0 0`}
                fontSize={width < 700 ? `18px` : `22px`}
                fontWeight={`700`}
                color={Theme.subTheme2_C}
              >
                3680
              </Text>
            </Wrapper>

            <Wrapper
              width={`10%`}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `150px` : `240px`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오전
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `100px` : `160px`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오후
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper width={`80%`}>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper
            borderTop={`1px solid ${Theme.subTheme2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderBottom={`none`}
            dr={`row`}
            margin={`0 0 40px`}
          >
            <Wrapper
              width={`10%`}
              height={width < 700 ? `250px` : `400px`}
              bgColor={Theme.subTheme9_C}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Text fontSize={width < 700 ? `18px` : `22px`} fontWeight={`600`}>
                5호차
              </Text>
              <Text
                margin={`5px 0 0`}
                fontSize={width < 700 ? `18px` : `22px`}
                fontWeight={`700`}
                color={Theme.subTheme2_C}
              >
                3680
              </Text>
            </Wrapper>

            <Wrapper
              width={`10%`}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `150px` : `240px`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오전
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `100px` : `160px`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오후
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper width={`80%`}>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper
            borderTop={`1px solid ${Theme.subTheme2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderBottom={`none`}
            dr={`row`}
            margin={`0 0 40px`}
          >
            <Wrapper
              width={`10%`}
              height={width < 700 ? `250px` : `400px`}
              bgColor={Theme.subTheme9_C}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Text fontSize={width < 700 ? `18px` : `22px`} fontWeight={`600`}>
                6호차
              </Text>
              <Text
                margin={`5px 0 0`}
                fontSize={width < 700 ? `18px` : `22px`}
                fontWeight={`700`}
                color={Theme.subTheme2_C}
              >
                3680
              </Text>
            </Wrapper>

            <Wrapper
              width={`10%`}
              borderRight={`1px solid ${Theme.lightGrey2_C}`}
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
            >
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `150px` : `240px`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오전
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
              <Wrapper
                bgColor={Theme.lightGrey4_C}
                height={width < 700 ? `100px` : `160px`}
              >
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  color={Theme.grey2_C}
                  margin={`0 0 5px`}
                >
                  오후
                </Text>
                <Text
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  홍길동
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper width={`80%`}>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
              <Wrapper
                height={width < 700 ? `50px` : `80px`}
                dr={`row`}
                borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              >
                <Wrapper
                  width={`20%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                >
                  1차
                </Wrapper>
                <Wrapper
                  width={`65%`}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={`20px`}
                >
                  내용
                </Wrapper>
                <Wrapper
                  width={`15%`}
                  bgColor={Theme.lightGrey4_C}
                  borderRight={`1px solid ${Theme.lightGrey2_C}`}
                  height={`100%`}
                  fontSize={width < 700 ? `18px` : `22px`}
                  fontWeight={`700`}
                >
                  2명
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Dementia;
