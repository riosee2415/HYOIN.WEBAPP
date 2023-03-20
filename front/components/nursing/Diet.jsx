import React, { useEffect, useState, useCallback, useRef } from "react";
import { ATag, CommonButton, Wrapper, Image, Text } from "../commonComponents";
import styled from "styled-components";
import Theme from "../Theme";
import useWidth from "../../hooks/useWidth";
import {
  LeftOutlined,
  PrinterOutlined,
  RightOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { MENU_LIST_REQUEST } from "../../reducers/menu";
import { Modal } from "antd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DietDateTable = styled(Wrapper)`
  height: 80px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid ${Theme.lightGrey2_C};
  background-color: ${Theme.subTheme9_C};

  @media (max-width: 900px) {
    font-size: 16px;
    height: 50px;
  }
`;

const DietMenuTable = styled(Wrapper)`
  height: 420px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid ${Theme.lightGrey2_C};
  background-color: ${Theme.lightGrey4_C};

  @media (max-width: 900px) {
    font-size: 16px;
    height: 300px;
  }
`;

const DietKcalTable = styled(Wrapper)`
  height: 70px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid ${Theme.lightGrey2_C};
  background-color: ${Theme.lightGrey4_C};

  @media (max-width: 900px) {
    font-size: 16px;
    height: 50px;
    text-align: center;
  }
`;

const DietSnackTable = styled(Wrapper)`
  height: 140px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid ${Theme.lightGrey2_C};
  background-color: ${Theme.lightGrey4_C};

  @media (max-width: 900px) {
    font-size: 16px;
    height: 100px;
  }
`;

const DietRiceTable = styled(Wrapper)`
  height: 70px;
  font-size: 20px;
  border: 1px solid ${Theme.lightGrey2_C};

  @media (max-width: 900px) {
    font-size: 16px;
    height: 50px;
  }
`;

const Diet = () => {
  ////// GLOBAL STATE //////
  const {
    sundayData,
    mondayData,
    tuesdayData,
    wednesdayData,
    thursdayData,
    fridayData,
    saturdayData,
  } = useSelector((state) => state.menu);

  ////// HOOKS //////
  const width = useWidth();

  const dispatch = useDispatch();

  const pdfRef = useRef();

  const [sunday, setSunday] = useState(moment().day(0));
  const [monday, setMonday] = useState(moment().day(1));
  const [tuesday, setTuesday] = useState(moment().day(2));
  const [wednesday, setWednesday] = useState(moment().day(3));
  const [thursday, setThursday] = useState(moment().day(4));
  const [friday, setFriday] = useState(moment().day(5));
  const [saturday, setSaturday] = useState(moment().day(6));

  const [menuModal, setMenuModal] = useState(false);
  const [menuTitle, setMenuTitle] = useState("");
  const [menuImg, setMenuImg] = useState(null);

  ////// USEEFFECT //////
  useEffect(() => {
    dispatch({
      type: MENU_LIST_REQUEST,
      data: {
        sunday: sunday.format("YYYY-MM-DD"),
        monday: monday.format("YYYY-MM-DD"),
        tuesday: tuesday.format("YYYY-MM-DD"),
        wednesday: wednesday.format("YYYY-MM-DD"),
        thursday: thursday.format("YYYY-MM-DD"),
        friday: friday.format("YYYY-MM-DD"),
        saturday: saturday.format("YYYY-MM-DD"),
      },
    });
  }, [sunday, monday, tuesday, wednesday, thursday, friday, saturday]);

  ////// TOGGLE //////

  ////// HANDLER //////
  const selectWeekHandler = useCallback(
    (data) => {
      setSunday(moment(sunday).day(0 + data));
      setMonday(moment(monday).day(1 + data));
      setTuesday(moment(tuesday).day(2 + data));
      setWednesday(moment(wednesday).day(3 + data));
      setThursday(moment(thursday).day(4 + data));
      setFriday(moment(friday).day(5 + data));
      setSaturday(moment(saturday).day(6 + data));
    },
    [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
  );

  const menuModalToggle = useCallback(
    (title, img) => {
      setMenuModal((prev) => !prev);
      setMenuTitle(title);
      setMenuImg(img);
    },
    [menuModal, menuTitle, menuImg]
  );

  ////// DATAVIEW //////

  return (
    <Wrapper padding={`0 0 120px`}>
      <Wrapper margin={`60px 0 0`} dr={`row`}>
        <CommonButton
          radius={`100%`}
          width={width < 900 ? `30px` : `36px`}
          height={width < 900 ? `30px` : `36px`}
          padding={`0`}
          onClick={() => selectWeekHandler(-7)}
        >
          <LeftOutlined />
        </CommonButton>

        {width < 900 ? (
          <>
            <CommonButton
              radius={`100%`}
              width={width < 900 ? `30px` : `36px`}
              height={width < 900 ? `30px` : `36px`}
              padding={`0`}
              onClick={() => selectWeekHandler(7)}
            >
              <RightOutlined />
            </CommonButton>
            <Text
              margin={width < 900 ? `0 15px` : `0 24px`}
              fontSize={width < 900 ? `18px` : `32px`}
              fontWeight={`600`}
              color={Theme.subTheme2_C}
            >
              {sunday.format("YYYY년 MM월 DD일")}&nbsp;~&nbsp;
              {saturday.format("YYYY년 MM월 DD일")}
            </Text>
          </>
        ) : (
          <>
            <Text
              margin={width < 900 ? `0 15px` : `0 24px`}
              fontSize={width < 900 ? `18px` : `32px`}
              fontWeight={`600`}
              color={Theme.subTheme2_C}
            >
              {sunday.format("YYYY년 MM월 DD일")}&nbsp;~&nbsp;
              {saturday.format("YYYY년 MM월 DD일")}
            </Text>
            <CommonButton
              radius={`100%`}
              width={width < 900 ? `30px` : `36px`}
              height={width < 900 ? `30px` : `36px`}
              padding={`0`}
              onClick={() => selectWeekHandler(7)}
            >
              <RightOutlined />
            </CommonButton>
          </>
        )}
      </Wrapper>

      <Wrapper
        dr={`row`}
        ju={`flex-end`}
        margin={width < 900 ? `20px 0` : `0 0 20px`}
      >
        <CommonButton
          width={width < 700 ? `130px` : `160px`}
          height={width < 700 ? `35px` : `50px`}
          fontSize={width < 700 ? `16px` : `20px`}
          fontWeight={`bold`}
          kindOf={`white`}
          onClick={() => {
            html2canvas(pdfRef.current, {
              allowTaint: true,
              useCORS: true,
              // width: 2480,
              // height: 3508,
            }).then((canvas) => {
              let filename = "식단표.pdf";
              const imgData = canvas.toDataURL("image/png", 1.0);
              const doc = new jsPDF("p", "mm", "a4");
              let imgWidth = 170; // 이미지 가로 길이(mm) / A4 기준 210mm
              let pageHeight = imgWidth * 1.414; // 출력 페이지 세로 길이 계산 A4 기준
              let imgHeight = (canvas.height * imgWidth) / canvas.width;
              let heightLeft = imgHeight;
              let margin = 20;

              let position = 10;

              // 첫 페이지 출력
              doc.addImage(
                imgData,
                "PNG",
                margin,
                position,
                imgWidth,
                imgHeight
              );

              // heightLeft -= pageHeight;

              // // 한 페이지 이상일 경우 루프 돌면서 출력
              // while (heightLeft >= 20) {
              //   position = heightLeft - imgHeight;
              //   doc.addPage();
              //   doc.addImage(imgData, "PNG", 5, position, imgWidth, imgHeight);
              //   heightLeft -= pageHeight;
              // }

              doc.save(filename);
            });
          }}
        >
          <PrinterOutlined /> 인쇄하기
        </CommonButton>
      </Wrapper>

      <Wrapper
        ref={pdfRef}
        dr={`row`}
        borderTop={`1px solid ${Theme.subTheme2_C}`}
        overflow={`auto`}
        wrap={`nowrap`}
        ju={`flex-start`}
      >
        <Wrapper width={`calc(100% / 8)`} minWidth={`100px`}>
          <DietDateTable>일자/요일</DietDateTable>
          <DietMenuTable>아침</DietMenuTable>
          <DietKcalTable>아침칼로리 (Kcal)</DietKcalTable>
          <DietMenuTable>점심</DietMenuTable>
          <DietKcalTable>점심칼로리 (Kcal)</DietKcalTable>
          <DietMenuTable>저녁</DietMenuTable>
          <DietKcalTable>저녁칼로리 (Kcal)</DietKcalTable>
          <DietSnackTable>오전간식</DietSnackTable>
          <DietSnackTable>오후간식</DietSnackTable>
          <DietKcalTable>기능별식이</DietKcalTable>
          <DietKcalTable>당뇨</DietKcalTable>
          <DietKcalTable>경관</DietKcalTable>
          <DietKcalTable>저염</DietKcalTable>
        </Wrapper>

        {/* 일 */}
        {sundayData && (
          <Wrapper width={`calc(100% / 8)`} minWidth={`100px`}>
            <DietDateTable color={Theme.red_C}>
              {sunday.locale("ko").format("DD (dd)")}
            </DietDateTable>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("일요일 아침식단", sundayData.breakfaseImage)
              }
            >
              <DietRiceTable>{sundayData.breakfast1}</DietRiceTable>
              <DietRiceTable>{sundayData.breakfast2}</DietRiceTable>
              <DietRiceTable>{sundayData.breakfast3}</DietRiceTable>
              <DietRiceTable>{sundayData.breakfast4}</DietRiceTable>
              <DietRiceTable>{sundayData.breakfast5}</DietRiceTable>
              <DietRiceTable>{sundayData.breakfast6}</DietRiceTable>
              <DietRiceTable>{sundayData.breakfastCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("일요일 점심식단", sundayData.lunchImage)
              }
            >
              <DietRiceTable>{sundayData.lunch1}</DietRiceTable>
              <DietRiceTable>{sundayData.lunch2}</DietRiceTable>
              <DietRiceTable>{sundayData.lunch3}</DietRiceTable>
              <DietRiceTable>{sundayData.lunch4}</DietRiceTable>
              <DietRiceTable>{sundayData.lunch5}</DietRiceTable>
              <DietRiceTable>{sundayData.lunch6}</DietRiceTable>
              <DietRiceTable>{sundayData.lunchCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("일요일 저녁식단", sundayData.dinnerImage)
              }
            >
              <DietRiceTable>{sundayData.dinner1}</DietRiceTable>
              <DietRiceTable>{sundayData.dinner2}</DietRiceTable>
              <DietRiceTable>{sundayData.dinner3}</DietRiceTable>
              <DietRiceTable>{sundayData.dinner4}</DietRiceTable>
              <DietRiceTable>{sundayData.dinner5}</DietRiceTable>
              <DietRiceTable>{sundayData.dinner6}</DietRiceTable>
              <DietRiceTable>{sundayData.dinnerCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("일요일 오전간식", sundayData.morningSnackImage)
              }
            >
              <DietRiceTable>{sundayData.morningSnack1}</DietRiceTable>
              <DietRiceTable>{sundayData.morningSnack2}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "일요일 오후간식",
                  sundayData.afternoonSnackImage
                )
              }
            >
              <DietRiceTable>{sundayData.afternoonSnack1}</DietRiceTable>
              <DietRiceTable>{sundayData.afternoonSnack2}</DietRiceTable>
            </Wrapper>
            <DietRiceTable>{sundayData.functionDiet}</DietRiceTable>
            <DietRiceTable>{sundayData.diabetes}</DietRiceTable>
            <DietRiceTable>{sundayData.scene}</DietRiceTable>
            <DietRiceTable>{sundayData.lowSalt}</DietRiceTable>
          </Wrapper>
        )}

        {/* 월 */}
        {mondayData && (
          <Wrapper width={`calc(100% / 8)`} minWidth={`100px`}>
            <DietDateTable>
              {monday.locale("ko").format("DD (dd)")}
            </DietDateTable>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("월요일 아침식단", mondayData.breakfaseImage)
              }
            >
              <DietRiceTable>{mondayData.breakfast1}</DietRiceTable>
              <DietRiceTable>{mondayData.breakfast2}</DietRiceTable>
              <DietRiceTable>{mondayData.breakfast3}</DietRiceTable>
              <DietRiceTable>{mondayData.breakfast4}</DietRiceTable>
              <DietRiceTable>{mondayData.breakfast5}</DietRiceTable>
              <DietRiceTable>{mondayData.breakfast6}</DietRiceTable>
              <DietRiceTable>{mondayData.breakfastCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("월요일 점심식단", mondayData.lunchImage)
              }
            >
              <DietRiceTable>{mondayData.lunch1}</DietRiceTable>
              <DietRiceTable>{mondayData.lunch2}</DietRiceTable>
              <DietRiceTable>{mondayData.lunch3}</DietRiceTable>
              <DietRiceTable>{mondayData.lunch4}</DietRiceTable>
              <DietRiceTable>{mondayData.lunch5}</DietRiceTable>
              <DietRiceTable>{mondayData.lunch6}</DietRiceTable>
              <DietRiceTable>{mondayData.lunchCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("월요일 저녁식단", mondayData.dinnerImage)
              }
            >
              <DietRiceTable>{mondayData.dinner1}</DietRiceTable>
              <DietRiceTable>{mondayData.dinner2}</DietRiceTable>
              <DietRiceTable>{mondayData.dinner3}</DietRiceTable>
              <DietRiceTable>{mondayData.dinner4}</DietRiceTable>
              <DietRiceTable>{mondayData.dinner5}</DietRiceTable>
              <DietRiceTable>{mondayData.dinner6}</DietRiceTable>
              <DietRiceTable>{mondayData.dinnerCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("월요일 오전간식", mondayData.morningSnackImage)
              }
            >
              <DietRiceTable>{mondayData.morningSnack1}</DietRiceTable>
              <DietRiceTable>{mondayData.morningSnack2}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "월요일 오후간식",
                  mondayData.afternoonSnackImage
                )
              }
            >
              <DietRiceTable>{mondayData.afternoonSnack1}</DietRiceTable>
              <DietRiceTable>{mondayData.afternoonSnack2}</DietRiceTable>
            </Wrapper>
            <DietRiceTable>{mondayData.functionDiet}</DietRiceTable>
            <DietRiceTable>{mondayData.diabetes}</DietRiceTable>
            <DietRiceTable>{mondayData.scene}</DietRiceTable>
            <DietRiceTable>{mondayData.lowSalt}</DietRiceTable>
          </Wrapper>
        )}

        {/* 화 */}
        {tuesdayData && (
          <Wrapper width={`calc(100% / 8)`} minWidth={`100px`}>
            <DietDateTable>
              {tuesday.locale("ko").format("DD (dd)")}
            </DietDateTable>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("화요일 아침식단", tuesdayData.breakfaseImage)
              }
            >
              <DietRiceTable>{tuesdayData.breakfast1}</DietRiceTable>
              <DietRiceTable>{tuesdayData.breakfast2}</DietRiceTable>
              <DietRiceTable>{tuesdayData.breakfast3}</DietRiceTable>
              <DietRiceTable>{tuesdayData.breakfast4}</DietRiceTable>
              <DietRiceTable>{tuesdayData.breakfast5}</DietRiceTable>
              <DietRiceTable>{tuesdayData.breakfast6}</DietRiceTable>
              <DietRiceTable>{tuesdayData.breakfastCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("화요일 점심식단", tuesdayData.lunchImage)
              }
            >
              <DietRiceTable>{tuesdayData.lunch1}</DietRiceTable>
              <DietRiceTable>{tuesdayData.lunch2}</DietRiceTable>
              <DietRiceTable>{tuesdayData.lunch3}</DietRiceTable>
              <DietRiceTable>{tuesdayData.lunch4}</DietRiceTable>
              <DietRiceTable>{tuesdayData.lunch5}</DietRiceTable>
              <DietRiceTable>{tuesdayData.lunch6}</DietRiceTable>
              <DietRiceTable>{tuesdayData.lunchCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("화요일 저녁식단", tuesdayData.dinnerImage)
              }
            >
              <DietRiceTable>{tuesdayData.dinner1}</DietRiceTable>
              <DietRiceTable>{tuesdayData.dinner2}</DietRiceTable>
              <DietRiceTable>{tuesdayData.dinner3}</DietRiceTable>
              <DietRiceTable>{tuesdayData.dinner4}</DietRiceTable>
              <DietRiceTable>{tuesdayData.dinner5}</DietRiceTable>
              <DietRiceTable>{tuesdayData.dinner6}</DietRiceTable>
              <DietRiceTable>{tuesdayData.dinnerCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "화요일 오전간식",
                  tuesdayData.morningSnackImage
                )
              }
            >
              <DietRiceTable>{tuesdayData.morningSnack1}</DietRiceTable>
              <DietRiceTable>{tuesdayData.morningSnack2}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "화요일 오후간식",
                  tuesdayData.afternoonSnackImage
                )
              }
            >
              <DietRiceTable>{tuesdayData.afternoonSnack1}</DietRiceTable>
              <DietRiceTable>{tuesdayData.afternoonSnack2}</DietRiceTable>
            </Wrapper>
            <DietRiceTable>{tuesdayData.functionDiet}</DietRiceTable>
            <DietRiceTable>{tuesdayData.diabetes}</DietRiceTable>
            <DietRiceTable>{tuesdayData.scene}</DietRiceTable>
            <DietRiceTable>{tuesdayData.lowSalt}</DietRiceTable>
          </Wrapper>
        )}

        {/* 수 */}
        {wednesdayData && (
          <Wrapper width={`calc(100% / 8)`} minWidth={`100px`}>
            <DietDateTable>
              {wednesday.locale("ko").format("DD (dd)")}
            </DietDateTable>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("수요일 아침식단", wednesdayData.breakfaseImage)
              }
            >
              <DietRiceTable>{wednesdayData.breakfast1}</DietRiceTable>
              <DietRiceTable>{wednesdayData.breakfast2}</DietRiceTable>
              <DietRiceTable>{wednesdayData.breakfast3}</DietRiceTable>
              <DietRiceTable>{wednesdayData.breakfast4}</DietRiceTable>
              <DietRiceTable>{wednesdayData.breakfast5}</DietRiceTable>
              <DietRiceTable>{wednesdayData.breakfast6}</DietRiceTable>
              <DietRiceTable>{wednesdayData.breakfastCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("수요일 점심식단", wednesdayData.lunchImage)
              }
            >
              <DietRiceTable>{wednesdayData.lunch1}</DietRiceTable>
              <DietRiceTable>{wednesdayData.lunch2}</DietRiceTable>
              <DietRiceTable>{wednesdayData.lunch3}</DietRiceTable>
              <DietRiceTable>{wednesdayData.lunch4}</DietRiceTable>
              <DietRiceTable>{wednesdayData.lunch5}</DietRiceTable>
              <DietRiceTable>{wednesdayData.lunch6}</DietRiceTable>
              <DietRiceTable>{wednesdayData.lunchCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("수요일 저녁식단", wednesdayData.dinnerImage)
              }
            >
              <DietRiceTable>{wednesdayData.dinner1}</DietRiceTable>
              <DietRiceTable>{wednesdayData.dinner2}</DietRiceTable>
              <DietRiceTable>{wednesdayData.dinner3}</DietRiceTable>
              <DietRiceTable>{wednesdayData.dinner4}</DietRiceTable>
              <DietRiceTable>{wednesdayData.dinner5}</DietRiceTable>
              <DietRiceTable>{wednesdayData.dinner6}</DietRiceTable>
              <DietRiceTable>{wednesdayData.dinnerCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "수요일 오전간식",
                  wednesdayData.morningSnackImage
                )
              }
            >
              <DietRiceTable>{wednesdayData.morningSnack1}</DietRiceTable>
              <DietRiceTable>{wednesdayData.morningSnack2}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "수요일 오후간식",
                  wednesdayData.afternoonSnackImage
                )
              }
            >
              <DietRiceTable>{wednesdayData.afternoonSnack1}</DietRiceTable>
              <DietRiceTable>{wednesdayData.afternoonSnack2}</DietRiceTable>
            </Wrapper>
            <DietRiceTable>{wednesdayData.functionDiet}</DietRiceTable>
            <DietRiceTable>{wednesdayData.diabetes}</DietRiceTable>
            <DietRiceTable>{wednesdayData.scene}</DietRiceTable>
            <DietRiceTable>{wednesdayData.lowSalt}</DietRiceTable>
          </Wrapper>
        )}
        {/* 목 */}
        {thursdayData && (
          <Wrapper width={`calc(100% / 8)`} minWidth={`100px`}>
            <DietDateTable>
              {thursday.locale("ko").format("DD (dd)")}
            </DietDateTable>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("목요일 아침식단", thursdayData.breakfaseImage)
              }
            >
              <DietRiceTable>{thursdayData.breakfast1}</DietRiceTable>
              <DietRiceTable>{thursdayData.breakfast2}</DietRiceTable>
              <DietRiceTable>{thursdayData.breakfast3}</DietRiceTable>
              <DietRiceTable>{thursdayData.breakfast4}</DietRiceTable>
              <DietRiceTable>{thursdayData.breakfast5}</DietRiceTable>
              <DietRiceTable>{thursdayData.breakfast6}</DietRiceTable>
              <DietRiceTable>{thursdayData.breakfastCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("목요일 점심식단", thursdayData.lunchImage)
              }
            >
              <DietRiceTable>{thursdayData.lunch1}</DietRiceTable>
              <DietRiceTable>{thursdayData.lunch2}</DietRiceTable>
              <DietRiceTable>{thursdayData.lunch3}</DietRiceTable>
              <DietRiceTable>{thursdayData.lunch4}</DietRiceTable>
              <DietRiceTable>{thursdayData.lunch5}</DietRiceTable>
              <DietRiceTable>{thursdayData.lunch6}</DietRiceTable>
              <DietRiceTable>{thursdayData.lunchCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("목요일 저녁식단", thursdayData.dinnerImage)
              }
            >
              <DietRiceTable>{thursdayData.dinner1}</DietRiceTable>
              <DietRiceTable>{thursdayData.dinner2}</DietRiceTable>
              <DietRiceTable>{thursdayData.dinner3}</DietRiceTable>
              <DietRiceTable>{thursdayData.dinner4}</DietRiceTable>
              <DietRiceTable>{thursdayData.dinner5}</DietRiceTable>
              <DietRiceTable>{thursdayData.dinner6}</DietRiceTable>
              <DietRiceTable>{thursdayData.dinnerCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "목요일 오전간식",
                  thursdayData.morningSnackImage
                )
              }
            >
              <DietRiceTable>{thursdayData.morningSnack1}</DietRiceTable>
              <DietRiceTable>{thursdayData.morningSnack2}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "목요일 오후간식",
                  thursdayData.afternoonSnackImage
                )
              }
            >
              <DietRiceTable>{thursdayData.afternoonSnack1}</DietRiceTable>
              <DietRiceTable>{thursdayData.afternoonSnack2}</DietRiceTable>
            </Wrapper>
            <DietRiceTable>{thursdayData.functionDiet}</DietRiceTable>
            <DietRiceTable>{thursdayData.diabetes}</DietRiceTable>
            <DietRiceTable>{thursdayData.scene}</DietRiceTable>
            <DietRiceTable>{thursdayData.lowSalt}</DietRiceTable>
          </Wrapper>
        )}

        {/* 금 */}
        {fridayData && (
          <Wrapper width={`calc(100% / 8)`} minWidth={`100px`}>
            <DietDateTable>
              {friday.locale("ko").format("DD (dd)")}
            </DietDateTable>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("금요일 아침식단", fridayData.breakfaseImage)
              }
            >
              <DietRiceTable>{fridayData.breakfast1}</DietRiceTable>
              <DietRiceTable>{fridayData.breakfast2}</DietRiceTable>
              <DietRiceTable>{fridayData.breakfast3}</DietRiceTable>
              <DietRiceTable>{fridayData.breakfast4}</DietRiceTable>
              <DietRiceTable>{fridayData.breakfast5}</DietRiceTable>
              <DietRiceTable>{fridayData.breakfast6}</DietRiceTable>
              <DietRiceTable>{fridayData.breakfastCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("금요일 점심식단", fridayData.lunchImage)
              }
            >
              <DietRiceTable>{fridayData.lunch1}</DietRiceTable>
              <DietRiceTable>{fridayData.lunch2}</DietRiceTable>
              <DietRiceTable>{fridayData.lunch3}</DietRiceTable>
              <DietRiceTable>{fridayData.lunch4}</DietRiceTable>
              <DietRiceTable>{fridayData.lunch5}</DietRiceTable>
              <DietRiceTable>{fridayData.lunch6}</DietRiceTable>
              <DietRiceTable>{fridayData.lunchCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("금요일 저녁식단", fridayData.dinnerImage)
              }
            >
              <DietRiceTable>{fridayData.dinner1}</DietRiceTable>
              <DietRiceTable>{fridayData.dinner2}</DietRiceTable>
              <DietRiceTable>{fridayData.dinner3}</DietRiceTable>
              <DietRiceTable>{fridayData.dinner4}</DietRiceTable>
              <DietRiceTable>{fridayData.dinner5}</DietRiceTable>
              <DietRiceTable>{fridayData.dinner6}</DietRiceTable>
              <DietRiceTable>{fridayData.dinnerCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("금요일 오전간식", fridayData.morningSnackImage)
              }
            >
              <DietRiceTable>{fridayData.morningSnack1}</DietRiceTable>
              <DietRiceTable>{fridayData.morningSnack2}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "금요일 오후간식",
                  fridayData.afternoonSnackImage
                )
              }
            >
              <DietRiceTable>{fridayData.afternoonSnack1}</DietRiceTable>
              <DietRiceTable>{fridayData.afternoonSnack2}</DietRiceTable>
            </Wrapper>
            <DietRiceTable>{fridayData.functionDiet}</DietRiceTable>
            <DietRiceTable>{fridayData.diabetes}</DietRiceTable>
            <DietRiceTable>{fridayData.scene}</DietRiceTable>
            <DietRiceTable>{fridayData.lowSalt}</DietRiceTable>
          </Wrapper>
        )}

        {/* 토 */}
        {saturdayData && (
          <Wrapper width={`calc(100% / 8)`} minWidth={`100px`}>
            <DietDateTable color={Theme.blue_C}>
              {saturday.locale("ko").format("DD (dd)")}
            </DietDateTable>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("토요일 아침식단", saturdayData.breakfaseImage)
              }
            >
              <DietRiceTable>{saturdayData.breakfast1}</DietRiceTable>
              <DietRiceTable>{saturdayData.breakfast2}</DietRiceTable>
              <DietRiceTable>{saturdayData.breakfast3}</DietRiceTable>
              <DietRiceTable>{saturdayData.breakfast4}</DietRiceTable>
              <DietRiceTable>{saturdayData.breakfast5}</DietRiceTable>
              <DietRiceTable>{saturdayData.breakfast6}</DietRiceTable>
              <DietRiceTable>{saturdayData.breakfastCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("토요일 점심식단", saturdayData.lunchImage)
              }
            >
              <DietRiceTable>{saturdayData.lunch1}</DietRiceTable>
              <DietRiceTable>{saturdayData.lunch2}</DietRiceTable>
              <DietRiceTable>{saturdayData.lunch3}</DietRiceTable>
              <DietRiceTable>{saturdayData.lunch4}</DietRiceTable>
              <DietRiceTable>{saturdayData.lunch5}</DietRiceTable>
              <DietRiceTable>{saturdayData.lunch6}</DietRiceTable>
              <DietRiceTable>{saturdayData.lunchCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle("토요일 저녁식단", saturdayData.dinnerImage)
              }
            >
              <DietRiceTable>{saturdayData.dinner1}</DietRiceTable>
              <DietRiceTable>{saturdayData.dinner2}</DietRiceTable>
              <DietRiceTable>{saturdayData.dinner3}</DietRiceTable>
              <DietRiceTable>{saturdayData.dinner4}</DietRiceTable>
              <DietRiceTable>{saturdayData.dinner5}</DietRiceTable>
              <DietRiceTable>{saturdayData.dinner6}</DietRiceTable>
              <DietRiceTable>{saturdayData.dinnerCalorie}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "토요일 오전간식",
                  saturdayData.morningSnackImage
                )
              }
            >
              <DietRiceTable>{saturdayData.morningSnack1}</DietRiceTable>
              <DietRiceTable>{saturdayData.morningSnack2}</DietRiceTable>
            </Wrapper>
            <Wrapper
              cursor={`pointer`}
              onClick={() =>
                menuModalToggle(
                  "토요일 오후간식",
                  saturdayData.afternoonSnackImage
                )
              }
            >
              <DietRiceTable>{saturdayData.afternoonSnack1}</DietRiceTable>
              <DietRiceTable>{saturdayData.afternoonSnack2}</DietRiceTable>
            </Wrapper>
            <DietRiceTable>{saturdayData.functionDiet}</DietRiceTable>
            <DietRiceTable>{saturdayData.diabetes}</DietRiceTable>
            <DietRiceTable>{saturdayData.scene}</DietRiceTable>
            <DietRiceTable>{saturdayData.lowSalt}</DietRiceTable>
          </Wrapper>
        )}
      </Wrapper>

      <Wrapper
        al={`flex-start`}
        margin={`30px 0 0`}
        fontSize={width < 700 ? `15px` : `18px`}
      >
        ※ 위 식단표는 시설 및 식자재 수급 사정에 따라 변경될 수 있습니다.
      </Wrapper>
      <Wrapper
        al={`flex-start`}
        fontSize={width < 700 ? `15px` : `18px`}
        margin={`10px 0`}
      >
        ※ 원산지 표시 : 멥쌀(국내산)/찹쌀(국내산)/누룽지(국내산)
        우목심(호주산)/우양지(호주산)/우민찌(호주산)/우갈비(미국산)
        돈전지(국내산)/돈후지(국내산)/돈안심(국내산)/돈민찌(국내산)/돈삼겹(외국산)/계육(국내산)
        고춧가루(국산)/김치_배추(국산)/고춧가루(국산)
        두부_대두(외국산)/장류_대두(외국산)
        고등어(국내산)/삼치(국내산)/코다리(러시아산)/동태_(러시아산)/참조기(중국산)/절단꽃게(외국산)/오징어채(중국산)/참치캔_가다랑어(원양산)
      </Wrapper>
      <Wrapper al={`flex-start`} fontSize={width < 700 ? `15px` : `18px`}>
        ※ 식단은 후원/재고상황/수급상황에 따라 변동될 수 있습니다.
      </Wrapper>

      <Modal
        title={menuTitle}
        visible={menuModal}
        footer={null}
        onCancel={() => menuModalToggle("", null)}
      >
        <Image src={menuImg} />
      </Modal>
    </Wrapper>
  );
};

export default Diet;
