import React, { useCallback, useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import { Table, Button, Modal, Input, Popconfirm, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../../hooks/useInput";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import { useRouter } from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import {
  AdminContent,
  GuideDiv,
  ModalBtn,
  Text,
  Wrapper,
} from "../../../components/commonComponents";
import Theme from "../../../components/Theme";
import {
  FAQ_TYPE_CREATE_REQUEST,
  FAQ_TYPE_DELETE_REQUEST,
  FAQ_TYPE_LIST_REQUEST,
  FAQ_TYPE_UPDATE_REQUEST,
} from "../../../reducers/faq";

const FaqType = () => {
  // LOAD CURRENT INFO AREA /////////////////////////////////////////////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);
  const {
    faqTypes,
    //
    st_faqTypeCreateDone,
    st_faqTypeCreateError,
    st_faqTypeUpdateDone,
    st_faqTypeUpdateError,
    st_faqTypeDeleteDone,
    st_faqTypeDeleteError,
  } = useSelector((state) => state.faq);

  const router = useRouter();

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

  const [updateModal, setUpdateModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const typeName = useInput("");

  const dispatch = useDispatch();

  ////// REDUX //////

  ////// USEEFFECT //////

  useEffect(() => {
    dispatch({
      type: FAQ_TYPE_LIST_REQUEST,
    });
  }, [st_faqTypeCreateDone, st_faqTypeUpdateDone, st_faqTypeDeleteDone]);

  // 생성 후처리
  useEffect(() => {
    if (st_faqTypeCreateDone) {
      message.success(`생성되었습니다.`);
      createModalHandler();
    }
  }, [st_faqTypeCreateDone]);

  useEffect(() => {
    if (st_faqTypeCreateError) {
      message.error(st_faqTypeCreateError);
    }
  }, [st_faqTypeCreateError]);

  // 수정 후처리
  useEffect(() => {
    if (st_faqTypeUpdateDone) {
      message.success(`수정되었습니다.`);
      updateModalHandler();
    }
  }, [st_faqTypeUpdateDone]);

  useEffect(() => {
    if (st_faqTypeUpdateError) {
      message.error(st_faqTypeUpdateError);
    }
  }, [st_faqTypeUpdateError]);

  // 삭제 후처리
  useEffect(() => {
    if (st_faqTypeDeleteDone) {
      message.success(`삭제되었습니다.`);
    }
  }, [st_faqTypeDeleteDone]);

  useEffect(() => {
    if (st_faqTypeDeleteError) {
      message.error(st_faqTypeDeleteError);
    }
  }, [st_faqTypeDeleteError]);

  ////// TOGGLE //////

  ////// HANDLER //////

  const createHandler = useCallback(() => {
    dispatch({
      type: FAQ_TYPE_CREATE_REQUEST,
      data: {
        value: typeName.value,
      },
    });
  }, [typeName.value]);

  const createModalHandler = useCallback(() => {
    typeName.setValue("");
    setCreateModal((prev) => !prev);
  }, [createModal, typeName.value]);

  const updateModalHandler = useCallback(
    (data = null) => {
      if (data) {
        setUpdateData(data);
        typeName.setValue(data.value);
      } else {
        typeName.setValue("");
      }
      setUpdateModal((prev) => !prev);
    },
    [updateData, updateModal, typeName.value]
  );

  const updateHandler = useCallback(() => {
    if (updateData.value === typeName.value) {
      return message.info(`수정된 사항이 없습니다.`);
    }
    dispatch({
      type: FAQ_TYPE_UPDATE_REQUEST,
      data: {
        id: updateData.id,
        value: typeName.value,
      },
    });
  }, [updateData, typeName.value]);

  const deleteHandler = useCallback((id) => {
    dispatch({
      type: FAQ_TYPE_DELETE_REQUEST,
      data: {
        id,
      },
    });
  }, []);

  ////// DATAVIEW //////
  const columns = [
    {
      title: "번호",
      dataIndex: "num",
      align: "center",
      width: "7%",
    },
    {
      title: "FAQ 유형명",
      dataIndex: "value",
      width: "43%",
      ellipsis: true,
    },
    {
      title: "생성일",
      dataIndex: "viewCreatedAt",
      width: "15%",
    },
    {
      title: "최근 수정일",
      dataIndex: "viewUpdatedAt",
      width: "15%",
    },
    {
      title: "데이터 수정",
      render: (data) => (
        <Button
          size="small"
          onClick={() => updateModalHandler(data)}
          type="primary"
        >
          데이터 수정
        </Button>
      ),
      width: "10%",
      align: "center",
    },
    {
      title: "데이터 삭제",
      render: (data) => (
        <Popconfirm
          onConfirm={() => deleteHandler(data.id)}
          title="정말 삭제하시겠습니까?"
          placement="topRight"
          okText="삭제"
          cancelText="취소"
        >
          <Button size="small" type="danger">
            데이터 삭제
          </Button>
        </Popconfirm>
      ),
      width: "10%",
      align: "center",
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["FAQ 관리", "FAQ 유형 관리"]}
        title={`FAQ 유형 관리`}
        subTitle={`FAQ 유형을 관리할 수 있습니다.`}
      />

      <AdminContent>
        <Wrapper
          dr="row"
          ju="flex-end"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          <ModalBtn
            type="primary"
            size="small"
            onClick={() => setCreateModal(true)}
          >
            + FAQ 유형 생성
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
            FAQ 유형을 확인, 수정, 삭제할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>

        <Table
          rowKey="id"
          columns={columns}
          dataSource={faqTypes ? faqTypes : []}
          size="small"
        />
      </AdminContent>

      {/* CREATE MODAL */}
      <Modal
        visible={createModal}
        width={`500px`}
        title={`FAQ 유형 생성하기`}
        footer={null}
        onCancel={createModalHandler}
      >
        <Wrapper
          margin={`0px 0px 10px 0px`}
          radius="5px"
          bgColor={Theme.adminLightGrey_C}
          padding="5px"
          fontSize="13px"
          al="flex-start"
        >
          <GuideDiv isImpo={true}>유형명은 필수 입력사항입니다.</GuideDiv>
        </Wrapper>
        <Wrapper dr="row" ju={`space-between`}>
          <Text>유형명 :</Text>
          <Input
            style={{ width: "85%" }}
            size="small"
            placeholder="유형명을 입력해주세요."
            {...typeName}
            allowClear
          />
        </Wrapper>
        <Wrapper al="flex-end" margin="20px 0 0">
          <Button size="small" type="primary" onClick={createHandler}>
            생성하기
          </Button>
        </Wrapper>
      </Modal>

      {/* UPDATE MODAL */}
      <Modal
        visible={updateModal}
        width={`500px`}
        title={`FAQ 유형 수정하기`}
        onCancel={updateModalHandler}
        footer={null}
      >
        <Wrapper
          margin={`0px 0px 10px 0px`}
          radius="5px"
          bgColor={Theme.adminLightGrey_C}
          padding="5px"
          fontSize="13px"
          al="flex-start"
        >
          <GuideDiv isImpo={true}>유형명은 필수 입력사항입니다.</GuideDiv>
        </Wrapper>
        <Wrapper dr="row" ju={`space-between`}>
          <Text>유형명 :</Text>
          <Input
            style={{ width: "85%" }}
            size="small"
            placeholder="유형명을 입력해주세요."
            {...typeName}
            allowClear
          />
        </Wrapper>
        <Wrapper al="flex-end" margin="20px 0 0">
          <Button size="small" type="primary" onClick={updateHandler}>
            수정하기
          </Button>
        </Wrapper>
      </Modal>
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
      type: FAQ_TYPE_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default FaqType;
