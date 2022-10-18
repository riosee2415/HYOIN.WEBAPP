import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PROGRAM_LIST_REQUEST } from "../../reducers/program";
import { Wrapper, Text, Image, CommonButton } from "../commonComponents";
import moment from "moment";
import { Calendar, Modal } from "antd";
import {
  PrinterOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
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
  cursor: pointer;
  padding: 14px 0;
  &:hover {
    background-color: ${(props) => props.theme.subTheme9_C};
  }
`;

const WordBreakText = styled(Text)`
  word-break: break-all;
`;

const Monthly = () => {
  ////// GOLBAL STATE //////
  const { programList, week } = useSelector((state) => state.program);

  ////// HOOKS //////
  const dispatch = useDispatch();

  // 날짜
  const [monthMoment, setMonthMoment] = useState(moment());

  // 모달
  const [monthData, setMonthData] = useState(false);
  const [monthModal, setMonthModal] = useState(false);

  ////// USEEFFECT //////

  // 프로그램 가져오기

  useEffect(() => {
    dispatch({
      type: PROGRAM_LIST_REQUEST,
      data: {
        searchMonth: moment().format("YYYY-MM"),
      },
    });
  }, []);

  ////// TOGGLE //////

  const monthModalToggle = useCallback(
    (data) => {
      if (data) {
        setMonthData(data);
      } else {
        setMonthData(null);
      }

      setMonthModal((prev) => !prev);
    },
    [monthData, monthModal]
  );

  ////// HANDLER //////

  const selectMonthHandler = useCallback(
    (type) => {
      setMonthMoment(monthMoment.add(type, "M"));
    },
    [monthMoment]
  );

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
                value.format("MM") === moment().format("MM") &&
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
                  .map((data, idx) => {
                    return (
                      <HoverListWrapper
                        key={idx}
                        dr={`row`}
                        ju={`space-between`}
                        al={`flex-start`}
                        onClick={() => monthModalToggle(data)}
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
    [programList]
  );

  return (
    <Wrapper margin={`0 0 120px`}>
      {/* 날짜 컨트롤 */}

      <Wrapper margin={`60px 0`} dr={`row`}>
        <CommonButton
          radius={`100%`}
          width={`36px`}
          height={`36px`}
          padding={`0`}
          onClick={() => selectMonthHandler("-1")}
        >
          <LeftOutlined />
        </CommonButton>
        <Text
          margin={`0 24px`}
          fontSize={`32px`}
          fontWeight={`600`}
          color={Theme.subTheme2_C}
        >
          {monthMoment.format("YYYY년 MM월")}
        </Text>

        <CommonButton
          radius={`100%`}
          width={`36px`}
          height={`36px`}
          padding={`0`}
          onClick={() => selectMonthHandler("1")}
        >
          <RightOutlined />
        </CommonButton>
      </Wrapper>

      {/* 주간 시간표 */}
      <Wrapper>
        <Wrapper dr={`row`} ju={`space-between`} margin={`40px 0`}>
          <Wrapper width={`auto`} dr={`row`} ju={`flex-start`}>
            <Wrapper
              radius={`100%`}
              border={`1px solid ${Theme.subTheme2_C}`}
              width={`18px`}
              height={`18px`}
              margin={`0 16px 0 0`}
            />
            <Text fontSize={`18px`} fontWeight={`600`}>
              주간생활시간표
            </Text>
          </Wrapper>
          <CommonButton icon={<PrinterOutlined />}>인쇄하기</CommonButton>
        </Wrapper>

        <Wrapper
          dr={`row`}
          ju={`space-between`}
          border={`1px solid ${Theme.subTheme2_C}`}
        >
          {week &&
            week.map((value, idx) => {
              return (
                <Wrapper
                  key={idx}
                  width={`calc(100% / 7)`}
                  className="dateBox"
                  borderRight={idx !== 6 && `1px solid ${Theme.subTheme9_C}`}
                >
                  <Wrapper bgColor={Theme.subTheme9_C} padding={`18px 0`}>
                    <Text
                      fontSize={`20px`}
                      fontWeight={`700`}
                      color={Theme.subTheme2_C}
                    >
                      {value[1].split("-")[2]}({value[0]})
                    </Text>
                  </Wrapper>

                  <Wrapper
                    height={`320px`}
                    al={`flex-start`}
                    ju={`flex-start`}
                    overflow={`auto`}
                    padding={`30px 12px`}
                  >
                    <Wrapper height={`auto`}>
                      {/* LIST START */}
                      {programList &&
                        programList
                          .filter(
                            (data) =>
                              data.viewFrontSpecificDate ===
                              moment(value[1]).format("YYYY-MM-DD")
                          )
                          .map((data, idx) => {
                            return (
                              <HoverListWrapper
                                key={idx}
                                dr={`row`}
                                ju={`space-between`}
                                al={`flex-start`}
                                margin={`0 0 26px`}
                                padding={`0 !important`}
                                onClick={() => monthModalToggle(data)}
                              >
                                <Wrapper>
                                  <Text
                                    fontSize={`16px`}
                                    fontWeight={`bold`}
                                    lineHeight={`1.28`}
                                  >
                                    {data.title}
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
            })}
        </Wrapper>
      </Wrapper>

      {/* 월간 시간표 */}
      <Wrapper>
        <Wrapper dr={`row`} ju={`flex-start`} margin={`40px 0`}>
          <Wrapper
            radius={`100%`}
            border={`1px solid ${Theme.subTheme2_C}`}
            width={`18px`}
            height={`18px`}
            margin={`0 16px 0 0`}
          />
          <Text fontSize={`18px`} fontWeight={`600`}>
            월간생활시간표
          </Text>
        </Wrapper>
        <CustomCalendar
          value={monthMoment}
          headerRender={() => null}
          locale={{
            lang: {
              locale: "ko",
              month: "월간",
              year: "년도",
            },
          }}
          dateFullCellRender={dateFullCellRender}
          fullscreen={false}
        />
      </Wrapper>

      <Modal
        title={`자세히보기`}
        visible={monthModal}
        onCancel={() => monthModalToggle(null)}
        footer={null}
      >
        {monthData && (
          <Wrapper>
            <Image src={monthData.imagePath} alt="image" />

            <Wrapper
              border={`1px solid ${Theme.subTheme2_C}`}
              padding={`20px 20px`}
              al={`flex-start`}
            >
              <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 10px`}>
                <WordBreakText fontSize={`18px`} fontWeight={`600`}>
                  제목 :&nbsp;
                </WordBreakText>
                <WordBreakText fontSize={`18px`}>
                  {monthData.title}
                </WordBreakText>
              </Wrapper>
              <Wrapper dr={`row`} ju={`flex-start`}>
                <WordBreakText fontSize={`18px`} fontWeight={`600`}>
                  내용 :&nbsp;
                </WordBreakText>
                <WordBreakText fontSize={`18px`}>
                  {monthData.content}
                </WordBreakText>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Monthly;
