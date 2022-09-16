import React, { useCallback, useEffect, useState } from "react";
import PageHeader from "../../../components/admin/PageHeader";
import AdminLayout from "../../../components/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  COMPANY_GET_REQUEST,
  COMPANY_CREATE_REQUEST,
  COMPANY_DELETE_REQUEST,
  COMPANY_UPDATE_REQUEST,
} from "../../../reducers/company";
import { Table, Button, message, Modal, Input, Form, Popconfirm } from "antd";
import styled from "styled-components";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import { useRouter } from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import {
  GuideDiv,
  ModalBtn,
  Text,
  Wrapper,
} from "../../../components/commonComponents";
import Theme from "../../../components/Theme";

const AdminContent = styled.div`
  padding: 20px;
`;

const BusinessInformation = () => {
  ////// GLOBAL STATE //////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);

  const {
    companys,
    //
    st_companyCreateDone,
    st_companyCreateError,
    st_companyDeleteDone,
    st_companyDeleteError,
    st_companyUpdateDone,
    st_companyUpdateError,
  } = useSelector((state) => state.company);

  ////// HOOKS //////
  const router = useRouter();

  const dispatch = useDispatch();

  const [createForm] = Form.useForm();
  const [updateForm] = Form.useForm();

  const [cModal, setCModal] = useState(false); // 등록 모달
  const [uModal, setUModal] = useState(false); // 수정 모달

  const [currentData, setCurrentData] = useState(null);

  ////// USEEFFECT //////

  useEffect(() => {
    if (st_loadMyInfoDone) {
      if (!me || parseInt(me.level) < 3) {
        moveLinkHandler(`/admin`);
      }
    }
  }, [st_loadMyInfoDone]);

  ///////////////////// 사업자 정보 생성 후처리 /////////////////////
  useEffect(() => {
    if (st_companyCreateDone) {
      createModalToggle(null);
      createForm.resetFields();

      message.success("사업자정보가 생성되었습니다.");

      dispatch({
        type: COMPANY_GET_REQUEST,
      });
    }
  }, [st_companyCreateDone]);

  useEffect(() => {
    if (st_companyCreateError) {
      return message.error(st_companyCreateError);
    }
  }, [st_companyCreateError]);

  ///////////////////// 사업자 정보 수정 후처리 /////////////////////
  useEffect(() => {
    if (st_companyUpdateDone) {
      updateModalToggle(null);

      message.success(
        `${currentData && currentData.id}번 사업자정보가 수정되었습니다.`
      );

      dispatch({
        type: COMPANY_GET_REQUEST,
      });
    }
  }, [st_companyUpdateDone]);

  useEffect(() => {
    if (st_companyUpdateError) {
      return message.error(st_companyUpdateError);
    }
  }, [st_companyUpdateError]);

  ///////////////////// 사업자 정보 삭제 후처리 /////////////////////
  useEffect(() => {
    if (st_companyDeleteDone) {
      message.success("사업자정보가 삭제되었습니다.");

      dispatch({
        type: COMPANY_GET_REQUEST,
      });
    }
  }, [st_companyDeleteDone]);

  useEffect(() => {
    if (st_companyDeleteError) {
      return message.error(st_companyDeleteError);
    }
  }, [st_companyDeleteError]);

  ////// TOGGLE //////
  const createModalToggle = useCallback(() => {
    setCModal((prev) => !prev);
  }, [cModal]);

  const updateModalToggle = useCallback(
    (data) => {
      setUModal((prev) => !prev);
      setCurrentData(data);

      if (data) {
        updateForm.setFieldsValue({
          title: data.name,
          content: data.value,
        });
      }
    },
    [uModal, currentData]
  );

  ////// HANDLER //////
  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  // CREATE FUNCATION
  const createHandler = useCallback((data) => {
    dispatch({
      type: COMPANY_CREATE_REQUEST,
      data: {
        name: data.title,
        value: data.content,
      },
    });
  }, []);

  // UPDATE FUNCATION
  const updateHandler = useCallback(
    (data) => {
      if (
        currentData.name === data.title &&
        currentData.value === data.content
      ) {
        return message.warning("수정할 정보가 없습니다.");
      }

      dispatch({
        type: COMPANY_UPDATE_REQUEST,
        data: {
          id: currentData.id,
          name: data.title,
          value: data.content,
        },
      });
    },
    [currentData]
  );

  // DELETE FUNCATION
  const deleteHandler = useCallback((data) => {
    dispatch({
      type: COMPANY_DELETE_REQUEST,
      data: { companyId: data.id },
    });
  }, []);

  ////// DATAVIEW //////
  const columns = [
    {
      title: "번호",
      dataIndex: "id",
    },
    {
      title: "제목",
      dataIndex: "name",
    },
    {
      title: "정보",
      dataIndex: "value",
    },
    {
      title: "생성일",
      render: (data) => <Text>{data.createdAt.substr(0, 10)}</Text>,
    },
    {
      title: "최근수정일",
      render: (data) => <Text>{data.updatedAt.substr(0, 10)}</Text>,
    },
    {
      title: "데이터수정",
      render: (data) => (
        <Button
          size="small"
          type="primary"
          onClick={() => updateModalToggle(data)}
        >
          데이터수정
        </Button>
      ),
    },
    {
      title: "데이터삭제",
      render: (data) => (
        <Popconfirm
          title="정말 사업자정보를 삭제하시겠습니까?"
          okText="삭제"
          cancelText="취소"
          onConfirm={() => deleteHandler(data)}
        >
          <Button type="danger" size="small">
            데이터 삭제
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["기초 관리", "사업자정보 관리"]}
        title={`사업자정보 관리`}
        subTitle={`사업자 정보를 등록, 수정, 삭제 등 관리할 수 있습니다.`}
      />

      <AdminContent>
        {/* ADMIN TOP MENU */}
        <Wrapper
          dr="row"
          ju="space-between"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          <Wrapper dr="row" ju="flex-end">
            <ModalBtn type="primary" size="small" onClick={createModalToggle}>
              + 사업자정보추가
            </ModalBtn>
          </Wrapper>
        </Wrapper>
        {/* ADMIN TOP MENU END */}

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
            홈페이지 내 하단부 사업자등록정보의 데이터를 조회, 제어할 수
            있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            등록된 데이터의 수정 및 삭제는 웹사이트 및 어플리케이션에 즉시
            적용되기 때문에 수정 및 삭제시 신중하게 처리바랍니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>
        {/* ADMIN GUIDE AREA END */}

        <Table
          rowKey="id"
          columns={columns}
          dataSource={companys}
          size="small"
        />
      </AdminContent>

      {/* CREATE MODAL */}
      <Modal
        title={"사업자정보 등록하기"}
        width={`600px`}
        footer={null}
        visible={cModal}
        onCancel={createModalToggle}
      >
        <Wrapper>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.adminLightGrey_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
          >
            <GuideDiv isImpo={true}>
              홈페이지의 하단부의 사업자정보를 새롭게 등록할 수 있습니다.
            </GuideDiv>
          </Wrapper>

          <Form
            style={{ width: "100%" }}
            form={createForm}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={createHandler}
          >
            <Form.Item
              label="제목"
              name="title"
              rules={[
                { required: true, message: "제목은 필수 입력사항 입니다." },
              ]}
            >
              <Input size="small" allowClear />
            </Form.Item>

            <Form.Item
              label="정보"
              name="content"
              rules={[
                {
                  required: true,
                  message: "정보는 필수 입력사항 입니다.",
                },
              ]}
            >
              <Input size="small" allowClear />
            </Form.Item>

            <Wrapper al="flex-end">
              <Button size="small" type="primary" htmlType="submit">
                사업자정보 등록
              </Button>
            </Wrapper>
          </Form>
        </Wrapper>
      </Modal>

      {/* UPDATE MODAL */}
      <Modal
        title={"사업자정보 수정하기"}
        width={`600px`}
        footer={null}
        visible={uModal}
        onCancel={updateModalToggle}
      >
        <Wrapper>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.adminLightGrey_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
          >
            <GuideDiv isImpo={true}>
              선택한 사업자정보를 수정할 수 있습니다.
            </GuideDiv>
          </Wrapper>

          <Form
            style={{ width: "100%" }}
            form={updateForm}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={updateHandler}
          >
            <Form.Item
              label="제목"
              name="title"
              rules={[
                { required: true, message: "제목은 필수 입력사항 입니다." },
              ]}
            >
              <Input size="small" allowClear />
            </Form.Item>

            <Form.Item
              label="정보"
              name="content"
              rules={[
                {
                  required: true,
                  message: "정보는 필수 입력사항 입니다.",
                },
              ]}
            >
              <Input size="small" allowClear />
            </Form.Item>

            <Wrapper al="flex-end">
              <Button size="small" type="primary" htmlType="submit">
                사업자정보 수정
              </Button>
            </Wrapper>
          </Form>
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
      type: COMPANY_GET_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default BusinessInformation;
