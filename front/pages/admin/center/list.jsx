import React, { useCallback, useEffect, useState, useRef } from "react";
import AdminLayout from "../../../components/AdminLayout";
import AdminTop from "../../../components/admin/AdminTop";
import PageHeader from "../../../components/admin/PageHeader";
import styled from "styled-components";
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  Select,
  Switch,
  notification,
  Row,
  Col,
  message,
} from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from "next/router";
import useInput from "../../../hooks/useInput";

import { END } from "redux-saga";
import axios from "axios";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import wrapper from "../../../store/configureStore";
import {
  GuideDiv,
  Text,
  TextInput,
  Wrapper,
} from "../../../components/commonComponents";
import Theme from "../../../components/Theme";
import {
  ADMISSION_ALL_LIST_REQUEST,
  ADMISSION_ALL_UPDATE_REQUEST,
  ADMISSION_DEMENTIA_UPDATE_REQUEST,
  ADMISSION_NORMAL_UPDATE_REQUEST,
  ADMISSION_WEEK_UPDATE_REQUEST,
} from "../../../reducers/admission";
import { all } from "redux-saga/effects";

const AdminContent = styled.div`
  padding: 20px;
`;

const List = ({ router }) => {
  // LOAD CURRENT INFO AREA /////////////////////////////////////////////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);
  const {
    allList,
    normalList,
    dementiaList,
    weekList,
    //
    st_admissionAllUpdateDone,
    st_admissionDementiaUpdateDone,
    st_admissionNormalUpdateDone,
    st_admissionWeekUpdateDone,
  } = useSelector((state) => state.admission);

  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  useEffect(() => {
    if (st_loadMyInfoDone) {
      if (!me || parseInt(me.level) < 3) {
        moveLinkHandler(`/admin`);
      }
    }
  }, [st_loadMyInfoDone]);
  /////////////////////////////////////////////////////////////////////////

  ////// HOOKS //////

  const [allModal, setAllModal] = useState(false);
  const [normalModal, setNormalModal] = useState(false);
  const [dementiaModal, setDementiaModal] = useState(false);
  const [weekModal, setWeekModal] = useState(false);

  const personnelInput = useInput(``);
  const totalPeopleInput = useInput(``);
  const avaliablePeopleInput = useInput(``);
  const watingPeopleInput = useInput(``);

  ////// REDUX //////
  const dispatch = useDispatch();

  ////// USEEFFECT //////

  useEffect(() => {
    if (
      st_admissionAllUpdateDone ||
      st_admissionDementiaUpdateDone ||
      st_admissionNormalUpdateDone ||
      st_admissionWeekUpdateDone
    ) {
      dispatch({
        type: ADMISSION_ALL_LIST_REQUEST,
      });
    }
  }, [
    st_admissionAllUpdateDone,
    st_admissionDementiaUpdateDone,
    st_admissionNormalUpdateDone,
    st_admissionWeekUpdateDone,
  ]);

  ////// TOGGLE ///////
  const allModalToggle = useCallback(
    (data) => {
      setAllModal(!allModal);

      if (data) {
        personnelInput.setValue(parseInt(data.personnel.replace(/명$/, "")));
        totalPeopleInput.setValue(
          parseInt(data.totalPeople.replace(/명$/, ""))
        );
        avaliablePeopleInput.setValue(
          parseInt(data.avaliablePeople.replace(/명$/, ""))
        );
        watingPeopleInput.setValue(
          parseInt(data.waitingPeople.replace(/명$/, ""))
        );
      }

      if (allModal) {
        if (
          (allList && allList.personnel !== personnelInput.value + "명") ||
          (allList && allList.totalPeople !== totalPeopleInput.value + "명") ||
          (allList &&
            allList.avaliablePeople !== avaliablePeopleInput.value + "명") ||
          (allList && allList.waitingPeople !== watingPeopleInput.value + "명")
        ) {
          dispatch({
            type: ADMISSION_ALL_UPDATE_REQUEST,
            data: {
              id: allList && allList.id,
              personnel: !personnelInput.value
                ? `0명`
                : personnelInput.value + "명",
              totalPeople: !totalPeopleInput.value
                ? "0명"
                : totalPeopleInput.value + "명",
              avaliablePeople: !avaliablePeopleInput.value
                ? "0명"
                : avaliablePeopleInput.value + "명",
              waitingPeople: !watingPeopleInput.value
                ? "0명"
                : watingPeopleInput.value + "명",
            },
          });
        }
      }
    },
    [
      allModal,
      allList,
      personnelInput,
      totalPeopleInput,
      avaliablePeopleInput,
      watingPeopleInput,
    ]
  );

  const normalModalToggle = useCallback(
    (data) => {
      setNormalModal(!normalModal);

      if (data) {
        personnelInput.setValue(parseInt(data.personnel.replace(/명$/, "")));
        totalPeopleInput.setValue(
          parseInt(data.totalPeople.replace(/명$/, ""))
        );
        avaliablePeopleInput.setValue(
          parseInt(data.avaliablePeople.replace(/명$/, ""))
        );
        watingPeopleInput.setValue(
          parseInt(data.waitingPeople.replace(/명$/, ""))
        );
      }

      if (normalModal) {
        if (
          (normalList &&
            normalList.personnel !== personnelInput.value + "명") ||
          (normalList &&
            normalList.totalPeople !== totalPeopleInput.value + "명") ||
          (normalList &&
            normalList.avaliablePeople !== avaliablePeopleInput.value + "명") ||
          (normalList &&
            normalList.waitingPeople !== watingPeopleInput.value + "명")
        ) {
          dispatch({
            type: ADMISSION_NORMAL_UPDATE_REQUEST,
            data: {
              id: normalList && normalList.id,
              personnel: !personnelInput.value
                ? `0명`
                : personnelInput.value + "명",
              totalPeople: !totalPeopleInput.value
                ? "0명"
                : totalPeopleInput.value + "명",
              avaliablePeople: !avaliablePeopleInput.value
                ? "0명"
                : avaliablePeopleInput.value + "명",
              waitingPeople: !watingPeopleInput.value
                ? "0명"
                : watingPeopleInput.value + "명",
            },
          });
        }
      }
    },
    [
      normalModal,
      allList,
      personnelInput,
      totalPeopleInput,
      avaliablePeopleInput,
      watingPeopleInput,
    ]
  );

  const dementiaModalToggle = useCallback(
    (data) => {
      setDementiaModal(!dementiaModal);

      if (data) {
        personnelInput.setValue(parseInt(data.personnel.replace(/명$/, "")));
        totalPeopleInput.setValue(
          parseInt(data.totalPeople.replace(/명$/, ""))
        );
        avaliablePeopleInput.setValue(
          parseInt(data.avaliablePeople.replace(/명$/, ""))
        );
        watingPeopleInput.setValue(
          parseInt(data.waitingPeople.replace(/명$/, ""))
        );
      }

      if (dementiaModal) {
        if (
          (dementiaList &&
            dementiaList.personnel !== personnelInput.value + "명") ||
          (dementiaList &&
            dementiaList.totalPeople !== totalPeopleInput.value + "명") ||
          (dementiaList &&
            dementiaList.avaliablePeople !==
              avaliablePeopleInput.value + "명") ||
          (dementiaList &&
            dementiaList.waitingPeople !== watingPeopleInput.value + "명")
        ) {
          dispatch({
            type: ADMISSION_DEMENTIA_UPDATE_REQUEST,
            data: {
              id: dementiaList && dementiaList.id,
              personnel: !personnelInput.value
                ? `0명`
                : personnelInput.value + "명",
              totalPeople: !totalPeopleInput.value
                ? "0명"
                : totalPeopleInput.value + "명",
              avaliablePeople: !avaliablePeopleInput.value
                ? "0명"
                : avaliablePeopleInput.value + "명",
              waitingPeople: !watingPeopleInput.value
                ? "0명"
                : watingPeopleInput.value + "명",
            },
          });
        }
      }
    },
    [
      dementiaModal,
      dementiaList,
      personnelInput,
      totalPeopleInput,
      avaliablePeopleInput,
      watingPeopleInput,
    ]
  );

  const weekModalToggle = useCallback(
    (data) => {
      setWeekModal(!weekModal);

      if (data) {
        personnelInput.setValue(parseInt(data.personnel.replace(/명$/, "")));
        totalPeopleInput.setValue(
          parseInt(data.totalPeople.replace(/명$/, ""))
        );
        avaliablePeopleInput.setValue(
          parseInt(data.avaliablePeople.replace(/명$/, ""))
        );
        watingPeopleInput.setValue(
          parseInt(data.waitingPeople.replace(/명$/, ""))
        );
      }

      if (weekModal) {
        if (
          (weekList && weekList.personnel !== personnelInput.value + "명") ||
          (weekList &&
            weekList.totalPeople !== totalPeopleInput.value + "명") ||
          (weekList &&
            weekList.avaliablePeople !== avaliablePeopleInput.value + "명") ||
          (weekList &&
            weekList.waitingPeople !== watingPeopleInput.value + "명")
        ) {
          dispatch({
            type: ADMISSION_WEEK_UPDATE_REQUEST,
            data: {
              id: weekList && weekList.id,
              personnel: !personnelInput.value
                ? `0명`
                : personnelInput.value + "명",
              totalPeople: !totalPeopleInput.value
                ? "0명"
                : totalPeopleInput.value + "명",
              avaliablePeople: !avaliablePeopleInput.value
                ? "0명"
                : avaliablePeopleInput.value + "명",
              waitingPeople: !watingPeopleInput.value
                ? "0명"
                : watingPeopleInput.value + "명",
            },
          });
        }
      }
    },
    [
      weekModal,
      weekList,
      personnelInput,
      totalPeopleInput,
      avaliablePeopleInput,
      watingPeopleInput,
    ]
  );

  ////// DATAVIEW //////

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["이용현황 관리", "이용현황 리스트"]}
        title={`이용현황 리스트`}
        subTitle={`사용자가 확인 할 수 있는 이용현황을 관리할 수 있습니다.`}
      />

      <AdminContent>
        {/* ADMIN GUIDE AREA */}
        <Wrapper
          margin={`0px 0px 10px 0px`}
          radius="5px"
          bgColor={Theme.adminLightGrey_C}
          padding="5px"
          fontSize="13px"
          al="flex-start"
        >
          <GuideDiv isImpo={true}>
            이용현황 페이지에 보여지는 이용현황 표를 관리할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            수정버튼을 누른후 수정할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            아무것도 쓰지 않으면 0명 처리됩니다.
          </GuideDiv>
        </Wrapper>

        <Wrapper dr={`row`} margin={`0 0 20px`}>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              이름
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              요양원 전체(치매전담+일반) 입소 현황
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              정원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {allModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    type="number"
                    {...personnelInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                allList && allList.personnel
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              총원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {allModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    type="number"
                    {...totalPeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                allList && allList.totalPeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              이용가능 인원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {allModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    type="number"
                    {...avaliablePeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                allList && allList.avaliablePeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              대기 인원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {allModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    type="number"
                    {...watingPeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                allList && allList.waitingPeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              수정
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              <Button
                size="small"
                type="primary"
                onClick={() => allModalToggle(allList && allList)}
              >
                수정
              </Button>
            </Wrapper>
          </Wrapper>
        </Wrapper>

        {/* <Wrapper dr={`row`} margin={`0 0 20px`}>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              이름
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              요양원(치매전담) 입소 현황
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              정원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {dementiaModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...personnelInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                dementiaList && dementiaList.personnel
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              총원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {dementiaModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...totalPeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                dementiaList && dementiaList.totalPeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              이용가능 인원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {dementiaModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...avaliablePeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                dementiaList && dementiaList.avaliablePeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              대기 인원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {dementiaModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...watingPeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                dementiaList && dementiaList.waitingPeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              수정
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              <Button
                size="small"
                type="primary"
                onClick={() =>
                  dementiaModalToggle(dementiaList && dementiaList)
                }
              >
                수정
              </Button>
            </Wrapper>
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} margin={`0 0 20px`}>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              이름
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              요양원(일반) 입소 현황
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              정원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {normalModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...personnelInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                normalList && normalList.personnel
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              총원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {normalModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...totalPeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                normalList && normalList.totalPeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              이용가능 인원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {normalModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...avaliablePeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                normalList && normalList.avaliablePeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              대기 인원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {normalModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...watingPeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                normalList && normalList.waitingPeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              수정
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              <Button
                size="small"
                type="primary"
                onClick={() => normalModalToggle(normalList && normalList)}
              >
                수정
              </Button>
            </Wrapper>
          </Wrapper>
        </Wrapper> */}

        <Wrapper dr={`row`} margin={`0 0 20px`}>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              이름
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              주간보호 이용 현황
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              정원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {weekModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...personnelInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                weekList && weekList.personnel
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              총원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {weekModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...totalPeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                weekList && weekList.totalPeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            borderRight={`none`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              이용가능 인원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {weekModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...avaliablePeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                weekList && weekList.avaliablePeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              대기 인원
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              {weekModal ? (
                <Wrapper dr={`row`}>
                  <TextInput
                    height={`30px`}
                    margin={`0 5px 0 0`}
                    {...watingPeopleInput}
                  />
                  <Text>명</Text>
                </Wrapper>
              ) : (
                weekList && weekList.waitingPeople
              )}
            </Wrapper>
          </Wrapper>
          <Wrapper
            borderTop={`1px solid ${Theme.grey2_C}`}
            border={`1px solid ${Theme.lightGrey2_C}`}
            width={`calc(100% / 6)`}
          >
            <Wrapper
              borderBottom={`1px solid ${Theme.lightGrey2_C}`}
              height={`40px`}
              bgColor={Theme.lightGrey4_C}
              fontSize={`14px`}
              fontWeight={`700`}
            >
              수정
            </Wrapper>
            <Wrapper height={`40px`} fontSize={`14px`} fontWeight={`700`}>
              <Button
                size="small"
                type="primary"
                onClick={() => weekModalToggle(weekList && weekList)}
              >
                수정
              </Button>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </AdminContent>
    </AdminLayout>
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

    context.store.dispatch({
      type: ADMISSION_ALL_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(List);
