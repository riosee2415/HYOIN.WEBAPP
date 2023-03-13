import React from "react";
import { ATag, CommonButton, Wrapper, Image } from "../commonComponents";
import styled from "styled-components";
import Theme from "../Theme";
import useWidth from "../../hooks/useWidth";
import { PrinterOutlined } from "@ant-design/icons";

const Daily = () => {
  const width = useWidth();

  return (
    <Wrapper padding={`0 0 120px`}>
      <Wrapper dr={`row`} ju={`space-between`} margin={`60px 0 40px`}>
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
          일일생활시간표
        </Wrapper>
        <ATag
          width={`auto`}
          download="일일생활시간표"
          href={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A2%E1%86%BC%E1%84%92%E1%85%AA%E1%86%AF%E1%84%89%E1%85%B5%E1%84%80%E1%85%A1%E1%86%AB%E1%84%91%E1%85%AD.pdf`}
        >
          <CommonButton
            width={width < 700 ? `130px` : `160px`}
            height={width < 700 ? `35px` : `50px`}
            fontSize={width < 700 ? `16px` : `20px`}
            fontWeight={`bold`}
            kindOf={`white`}
          >
            <PrinterOutlined /> 인쇄하기
          </CommonButton>
        </ATag>
      </Wrapper>

      <Wrapper overflow={`auto`}>
        <Image
          minWidth={`800px`}
          alt="시간표"
          margin={`0 0 20px`}
          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/daily.png`}
        />
      </Wrapper>

      <Wrapper al={`flex-start`} fontSize={width < 700 ? `15px` : `18px`}>
        * 물리치료는 월 ~ 금요일 09:00~17:00 사이에 어르신별 급여제공계획에 맞춰
        제공
      </Wrapper>
    </Wrapper>
  );
};

export default Daily;
