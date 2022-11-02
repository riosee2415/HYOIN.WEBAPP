import React, { useState } from "react";
import { ATag, Text, Wrapper, Image, CommonButton } from "../commonComponents";
import styled from "styled-components";
import Theme from "../Theme";
import useWidth from "../../hooks/useWidth";
import Fade from "react-reveal/Fade";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MOVE_SERVICE_LIST_REQUEST } from "../../reducers/moveService";
import moment from "moment";
import { useCallback } from "react";
import { Empty } from "antd";

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
  const { moveServiceList, carList, timeList } = useSelector(
    (state) => state.moveService
  );
  //
  const width = useWidth();
  const dispatch = useDispatch();
  //
  const [resultLen, setResultLen] = useState([]); // 오전 오후 높이값
  const [currentDate, setCurrentDate] = useState(moment());
  //
  useEffect(() => {
    let arr = [];
    carList.map((data) => {
      timeList.map((value) => {
        moveServiceList.map((re) => {
          if (
            re.MoveServiceCarId === data.id &&
            value.id === re.MoveServiceTimeId
          ) {
            arr.push({
              timeId: re.MoveServiceTimeId,
              carId: re.MoveServiceCarId,
            });
          }
        });
      });
    });

    setResultLen(arr);
  }, [carList, timeList, moveServiceList]);

  useEffect(() => {
    dispatch({
      type: MOVE_SERVICE_LIST_REQUEST,
      data: {
        searchDate: moment().format("YYYY-MM-DD"),
      },
    });
  }, []);
  //
  const arrowHandler = useCallback(
    (data) => {
      setCurrentDate(moment(currentDate).add(data, "days"));

      dispatch({
        type: MOVE_SERVICE_LIST_REQUEST,
        data: {
          searchDate: moment(currentDate)
            .add(data, "days")
            .format("YYYY-MM-DD"),
        },
      });
    },
    [carList]
  );

  return (
    <Wrapper padding={`60px 0 120px`}>
      <Wrapper dr={`row`} position={`relative`} margin={`0 0 40px`}>
        <ArrowBtn onClick={() => arrowHandler(-1)}>
          <LeftOutlined />
        </ArrowBtn>

        <Text
          fontSize={width < 700 ? `20px` : `32px`}
          fontWeight={`700`}
          color={Theme.subTheme2_C}
          margin={width < 700 ? `0 20px` : `0 80px`}
        >
          {currentDate.format("YYYY년 MM월 DD일")}
        </Text>

        <ArrowBtn onClick={() => arrowHandler(1)}>
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
            <ATag href="tel:042-522-5555">
              <Image
                alt="icon"
                width={`12px`}
                margin={`0 6px 0 0`}
                src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/icon_timetable_call.png"
              />
              <Text fontSize={`18px`} fontWeight={`600`}>
                042-522-5555
              </Text>
            </ATag>
          </Wrapper>

          <Wrapper dr={`row`} width={`auto`}>
            <Image
              alt="icon"
              width={`12px`}
              margin={`0 6px 0 0`}
              src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/service-page/icon_timetable_fax.png"
            />
            <Text fontSize={`18px`} fontWeight={`600`}>
              042-523-7118
            </Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper wrpa={`nowrap`} overflowX={`auto`}>
        <Wrapper minWidth={`900px`}>
          {carList && carList.length === 0 ? (
            <Wrapper height={`80vh`}>
              <Empty description="이동서비스 시간표가 준비중입니다." />
            </Wrapper>
          ) : (
            carList.map((data) => {
              return (
                <Wrapper
                  borderTop={`1px solid ${Theme.subTheme2_C}`}
                  border={`1px solid ${Theme.lightGrey2_C}`}
                  borderBottom={`none`}
                  dr={`row`}
                  margin={`0 0 40px`}
                >
                  <Wrapper
                    width={`10%`}
                    bgColor={Theme.subTheme9_C}
                    borderRight={`1px solid ${Theme.lightGrey2_C}`}
                    borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                    height={`${
                      resultLen.filter((result) => result.carId === data.id)
                        .length * 80
                    }px`}
                  >
                    <Text
                      fontSize={width < 700 ? `18px` : `22px`}
                      fontWeight={`600`}
                    >
                      {data.carCount}
                    </Text>
                    <Text
                      margin={`5px 0 0`}
                      fontSize={width < 700 ? `18px` : `22px`}
                      fontWeight={`700`}
                      color={Theme.subTheme2_C}
                    >
                      {data.carNum}
                    </Text>
                  </Wrapper>

                  <Wrapper
                    width={`10%`}
                    borderRight={`1px solid ${Theme.lightGrey2_C}`}
                    borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    {timeList.map((value) => {
                      if (value.MoveServiceCarId === data.id) {
                        return (
                          <Wrapper
                            bgColor={Theme.lightGrey4_C}
                            height={`${
                              resultLen.filter(
                                (result) => result.timeId === value.id
                              ).length * 80
                            }px`}
                            borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                          >
                            <Text
                              fontSize={width < 700 ? `18px` : `22px`}
                              color={Theme.grey2_C}
                              margin={`0 0 5px`}
                            >
                              {value.moveTime}
                            </Text>
                            <Text
                              fontSize={width < 700 ? `18px` : `22px`}
                              fontWeight={`700`}
                            >
                              {value.moverName}
                            </Text>
                          </Wrapper>
                        );
                      }
                    })}
                  </Wrapper>

                  <Wrapper width={`80%`}>
                    {timeList.map((value) => {
                      return moveServiceList.map((result) => {
                        if (
                          value.id === result.MoveServiceTimeId &&
                          data.id === result.MoveServiceCarId
                        ) {
                          return (
                            <Wrapper
                              height={`80px`}
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
                                {result.degree}
                              </Wrapper>
                              <Wrapper
                                width={`65%`}
                                borderRight={`1px solid ${Theme.lightGrey2_C}`}
                                height={`100%`}
                                fontSize={`20px`}
                              >
                                {result.passenger}
                              </Wrapper>
                              <Wrapper
                                width={`15%`}
                                bgColor={Theme.lightGrey4_C}
                                borderRight={`1px solid ${Theme.lightGrey2_C}`}
                                height={`100%`}
                                fontSize={width < 700 ? `18px` : `22px`}
                                fontWeight={`700`}
                              >
                                {result.count}
                              </Wrapper>
                            </Wrapper>
                          );
                        }
                      });
                    })}
                  </Wrapper>
                </Wrapper>
              );
            })
          )}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Dementia;
