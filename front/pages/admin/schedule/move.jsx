import React, { useCallback, useEffect, useState, useRef } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import styled from "styled-components";
import { DatePicker, Table } from "antd";

import { useDispatch, useSelector } from "react-redux";

import { withRouter } from "next/router";

import { END } from "redux-saga";
import axios from "axios";
import { useRouter } from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import wrapper from "../../../store/configureStore";
import {
  GuideDiv,
  ModalBtn,
  Wrapper,
} from "../../../components/commonComponents";
import Theme from "../../../components/Theme";
import {
  MOVE_SERVICE_CAR_CREATE_REQUEST,
  MOVE_SERVICE_LIST_REQUEST,
} from "../../../reducers/moveService";

const AdminContent = styled.div`
  padding: 20px;
`;

const Move = ({ router }) => {
  // LOAD CURRENT INFO AREA /////////////////////////////////////////////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);
  const { moveServiceList, carList, timeList } = useSelector(
    (state) => state.moveService
  );

  console.log(moveServiceList, carList, timeList);

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

  ////// REDUX //////
  const dispatch = useDispatch();

  ////// USEEFFECT //////

  ////// TOGGLE ///////

  ////// HANDLER ///////
  const dateHandler = useCallback((data) => {
    dispatch({
      type: MOVE_SERVICE_LIST_REQUEST,
      data: {
        searchDate: data.format("YYYY-MM-DD"),
      },
    });
  }, []);

  ////// DATAVIEW //////
  const columns = [
    {
      title: "호차",
      dataIndex: "carCount",
    },
    {
      title: "기사님",
      children: [
        {
          title: "오전",
          dataIndex: "id",
          key: "building",
          width: 100,
        },
        {
          title: "오후",
          dataIndex: "id",
          key: "number",
          width: 100,
        },
      ],
    },
    {
      title: "조회수",
      dataIndex: "id",
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["시간표 관리", "이동서비스 시간표 관리"]}
        title={`이동서비스 시간표`}
        subTitle={`이동서비스 시간표를 관리할 수 있습니다.`}
      />

      <AdminContent>
        <Wrapper
          dr="row"
          ju="space-between"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          <Wrapper dr={`row`} width={`auto`}>
            <DatePicker
              style={{ width: `300px` }}
              size="small"
              onChange={dateHandler}
            />
          </Wrapper>

          <ModalBtn type="primary" size="small">
            + 이동서비스 생성
          </ModalBtn>
        </Wrapper>

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
            메인화면에 보여지는 이미지를 제어할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            등록된 데이터는 웹사이트 및 어플리케이션에 즉시 적용되기 때문에
            정확한 입력을 필요로 합니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>

        <Table columns={columns} dataSource={carList} bordered size="small" />
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
      type: MOVE_SERVICE_LIST_REQUEST,
      data: {
        searchDate: "2022-10-29",
      },
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(Move);
