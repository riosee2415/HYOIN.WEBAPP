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
import {
  CREATE_MODAL_CLOSE_REQUEST,
  CREATE_MODAL_OPEN_REQUEST,
  NOTICE_CREATE_REQUEST,
  NOTICE_UPDATE_REQUEST,
  NOTICE_DELETE_REQUEST,
  NOTICE_LIST_REQUEST,
} from "../../../reducers/notice";
import { withRouter } from "next/router";
import useInput from "../../../hooks/useInput";

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

const AdminContent = styled.div`
  padding: 20px;
`;

const Move = ({ router }) => {
  // LOAD CURRENT INFO AREA /////////////////////////////////////////////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);

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

  ////// USEEFFECT //////

  ////// TOGGLE ///////

  ////// DATAVIEW //////
  const columns = [
    {
      title: "번호",
      dataIndex: "id",
    },
    {
      title: "제목",
      dataIndex: "title",
    },
    {
      title: "작성자",
      dataIndex: "author",
    },
    {
      title: "조회수",
      dataIndex: "hit",
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
          ju="flex-end"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
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

        <Table rowKey="id" columns={columns} dataSource={[]} size="small" />
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

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(Move);
