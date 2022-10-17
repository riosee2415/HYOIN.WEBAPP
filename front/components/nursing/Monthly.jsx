import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PROGRAM_LIST_REQUEST } from "../../reducers/program";
import { Wrapper, Text, Image } from "../commonComponents";
import moment from "moment";
import { Calendar } from "antd";
import styled from "styled-components";
import Theme from "../Theme";

const CustomCalendar = styled(Calendar)`
  & .ant-picker-content {
    border-top: 1px solid ${Theme.subTheme2_C};
    border-left: 1px solid ${Theme.lightGrey2_C};
    border-right: 1px solid ${Theme.lightGrey2_C};
  }

  & .ant-picker-content th {
    text-align: center;
    padding: 27px 0 !important;
    font-size: 22px;
    font-weight: 600;
    background-color: ${(props) => props.theme.lightGrey5_C};
    border-bottom: 1px solid ${Theme.lightGrey2_C};

    border-left: 1px solid ${Theme.lightGrey2_C};
  }

  & .ant-picker-content th:first-child {
    border-left: none;
  }

  & tbody .ant-picker-cell {
    border-right: 1px solid ${(props) => props.theme.lightGrey2_C};
    border-bottom: 1px solid ${(props) => props.theme.lightGrey2_C};
  }

  & tbody .ant-picker-cell:last-child {
    border-right: none;
  }
`;

const HoverListWrapper = styled(Wrapper)`
  padding: 14px 0;
  &:hover {
    background-color: ${(props) => props.theme.lightGrey_C};
  }
`;

const Monthly = () => {
  ////// GOLBAL STATE //////
  const { programList } = useSelector((state) => state.program);

  ////// HOOKS //////
  const dispatch = useDispatch();

  // 날짜
  const [selectDate, setSelectDate] = useState(moment());

  ////// USEEFFECT //////
  useEffect(() => {
    dispatch({
      type: PROGRAM_LIST_REQUEST,
      data: {
        searchMonth: moment().format("YYYY-MM"),
      },
    });
  }, []);

  ////// HANDLER //////

  // 시간표
  const dateFullCellRender = useCallback(
    (value) => {
      return (
        <Wrapper className="dateBox" padding={`26px 10px`}>
          <Wrapper al={`flex-start`}>
            <Text
              fontSize={`20px`}
              fontWeight={`700`}
              color={
                value.format("MM") === selectDate.format("MM") &&
                (value.format("dddd") === "Sunday"
                  ? Theme.subTheme7_C
                  : value.format("dddd") === "Saturday"
                  ? Theme.subTheme8_C
                  : Theme.grey2_C)
              }
            >
              {value.format("DD")}
            </Text>
          </Wrapper>

          <Wrapper
            height={`320px`}
            al={`flex-start`}
            ju={`flex-start`}
            overflow={`auto`}
          >
            <Wrapper height={`auto`}>
              {/* LIST START */}
              {programList &&
                programList
                  .filter(
                    (data) =>
                      data.viewFrontSpecificDate === value.format("YYYY-MM-DD")
                  )
                  .map((data) => {
                    return (
                      <HoverListWrapper
                        dr={`row`}
                        ju={`space-between`}
                        al={`flex-start`}
                      >
                        <Image
                          width={`16px`}
                          height={`16px`}
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_bookmark.png`}
                          alt={`bookmark_icon`}
                        />
                        <Wrapper width={`calc(100% - 20px)`} al={`flex-start`}>
                          <Text
                            fontSize={`16px`}
                            fontWeight={`bold`}
                            margin={`0 0 6px`}
                            lineHeight={`1.28`}
                          >
                            {data.title}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.content}
                          </Text>
                        </Wrapper>
                      </HoverListWrapper>
                    );
                  })}

              {/* LIST END */}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      );
    },
    [selectDate, programList]
  );

  // 날짜 선택
  const selectDateHandler = useCallback(
    (data) => {
      setSelectDate(data);
    },
    [selectDate]
  );

  return (
    <Wrapper>
      <CustomCalendar
        headerRender={() => null}
        locale={{
          lang: {
            locale: "ko",
            month: "월간",
            year: "년도",
          },
        }}
        dateFullCellRender={dateFullCellRender}
        fullscreen
        onChange={selectDateHandler}
      />
    </Wrapper>
  );
};

export default Monthly;
