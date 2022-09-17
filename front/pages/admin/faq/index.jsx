import React, { useCallback, useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import {
  Table,
  Button,
  Modal,
  Input,
  Popconfirm,
  message,
  Form,
  Select,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import { useRouter } from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import {
  AdminContent,
  GuideDiv,
  ModalBtn,
  Wrapper,
} from "../../../components/commonComponents";
import Theme from "../../../components/Theme";
import {
  FAQ_ADMIN_LIST_REQUEST,
  FAQ_CREATE_REQUEST,
  FAQ_DELETE_REQUEST,
  FAQ_TYPE_LIST_REQUEST,
  FAQ_UPDATE_REQUEST,
} from "../../../reducers/faq";
import { useRef } from "react";
import { AlignRightOutlined, SearchOutlined } from "@ant-design/icons";
import useInput from "../../../hooks/useInput";

const FaqType = () => {
  // LOAD CURRENT INFO AREA /////////////////////////////////////////////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);
  const {
    adminFaqs,
    faqTypes,
    //
    st_faqCreateDone,
    st_faqCreateError,
    st_faqUpdateDone,
    st_faqUpdateError,
    st_faqDeleteDone,
    st_faqDeleteError,
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
  const [typeSelect, setTypeSelect] = useState("all");

  const dispatch = useDispatch();

  const [createForm] = Form.useForm();
  const [updateForm] = Form.useForm();

  const createRef = useRef();
  const updateRef = useRef();

  const searchValue = useInput("");

  ////// REDUX //////

  ////// USEEFFECT //////

  useEffect(() => {
    dispatch({
      type: FAQ_ADMIN_LIST_REQUEST,
      data: {
        typeId: typeSelect === "all" ? null : typeSelect,
        searchData: searchValue.value,
      },
    });
  }, [st_faqCreateDone, st_faqUpdateDone, st_faqDeleteDone, typeSelect]);

  // 생성 후처리
  useEffect(() => {
    if (st_faqCreateDone) {
      message.success(`생성되었습니다.`);
      setCreateModal(false);
      createForm.resetFields();
    }
  }, [st_faqCreateDone]);

  useEffect(() => {
    if (st_faqCreateError) {
      message.error(st_faqCreateError);
    }
  }, [st_faqCreateError]);

  // 수정 후처리
  useEffect(() => {
    if (st_faqUpdateDone) {
      message.success(`수정되었습니다.`);
      setUpdateModal(false);
    }
  }, [st_faqUpdateDone]);

  useEffect(() => {
    if (st_faqUpdateError) {
      message.error(st_faqUpdateError);
    }
  }, [st_faqUpdateError]);

  // 삭제 후처리
  useEffect(() => {
    if (st_faqDeleteDone) {
      message.success(`삭제되었습니다.`);
    }
  }, [st_faqDeleteDone]);

  useEffect(() => {
    if (st_faqDeleteError) {
      message.error(st_faqDeleteError);
    }
  }, [st_faqDeleteError]);

  ////// TOGGLE //////

  ////// HANDLER //////

  const createHandler = useCallback((data) => {
    dispatch({
      type: FAQ_CREATE_REQUEST,
      data: {
        question: data.question,
        answer: data.answer,
        faqTypeId: data.type,
      },
    });
  }, []);

  const updateModalHandler = useCallback(
    (data = null) => {
      if (data) {
        setUpdateData(data);
        updateForm.setFieldsValue({
          type: data.FaqTypeId,
          question: data.question,
          answer: data.answer,
        });
      }
      setUpdateModal((prev) => !prev);
    },
    [updateData, updateModal]
  );

  const updateHandler = useCallback(
    (data) => {
      dispatch({
        type: FAQ_UPDATE_REQUEST,
        data: {
          question: data.question,
          answer: data.answer,
          faqTypeId: data.type,
          id: updateData.id,
        },
      });
    },
    [updateData]
  );

  const deleteHandler = useCallback((id) => {
    dispatch({
      type: FAQ_DELETE_REQUEST,
      data: {
        id,
      },
    });
  }, []);

  const typeSelectHandler = useCallback(
    (e) => {
      setTypeSelect(e);
    },
    [typeSelect]
  );

  const searchHandler = useCallback(() => {
    dispatch({
      type: FAQ_ADMIN_LIST_REQUEST,
      data: {
        typeId: typeSelect === "all" ? null : typeSelect,
        searchData: searchValue.value,
      },
    });
  }, [searchValue.value, typeSelect]);

  const allHandler = useCallback(() => {
    searchValue.setValue("");
    setTypeSelect("all");
    dispatch({
      type: FAQ_ADMIN_LIST_REQUEST,
    });
  }, [typeSelect, searchValue.value]);

  const keyPressHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        searchHandler();
      }
    },
    [searchValue.value, typeSelect]
  );

  ////// DATAVIEW //////
  const columns = [
    {
      title: "번호",
      dataIndex: "num",
      align: "center",
      width: "7%",
    },
    {
      title: "FAQ 타입",
      dataIndex: "typeValue",
      width: "13%",
      ellipsis: true,
    },
    {
      title: "제목",
      dataIndex: "question",
      width: "15%",
      ellipsis: true,
    },
    {
      title: "내용",
      dataIndex: "answer",
      width: "15%",
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
        breadcrumbs={["FAQ 관리", "FAQ 관리"]}
        title={`FAQ 관리`}
        subTitle={`FAQ를 관리할 수 있습니다.`}
      />

      <AdminContent>
        <Wrapper
          dr="row"
          ju="space-between"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          <Wrapper width="auto" dr="row">
            <Select
              size="small"
              style={{ width: "200px" }}
              onChange={typeSelectHandler}
              value={typeSelect}
            >
              <Select.Option value={"all"}>전체</Select.Option>
              {faqTypes &&
                faqTypes.map((data) => (
                  <Select.Option value={data.id}>{data.value}</Select.Option>
                ))}
            </Select>
            <Input
              size="small"
              style={{ width: "200px" }}
              placeholder="제목을 입력해주세요."
              {...searchValue}
              onKeyPress={keyPressHandler}
            />
            <Button size="small" onClick={searchHandler}>
              <SearchOutlined />
              검색
            </Button>
            <Button type="primary" size="small" onClick={allHandler}>
              <AlignRightOutlined />
              전체
            </Button>
          </Wrapper>
          <ModalBtn
            type="primary"
            size="small"
            onClick={() => setCreateModal(true)}
          >
            + FAQ 생성
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
            FAQ를 확인, 수정, 삭제할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            FAQ 타입과 제목으로 데이터를 검색할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            데이터 수정을 클릭 시, 보다 자세한 내용을 보실 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>

        <Table
          rowKey="id"
          columns={columns}
          dataSource={adminFaqs ? adminFaqs : []}
          size="small"
        />
      </AdminContent>

      {/* CREATE MODAL */}
      <Modal
        visible={createModal}
        width={`1000px`}
        title={`FAQ 생성하기`}
        footer={null}
        onCancel={() => setCreateModal(false)}
      >
        <Wrapper
          margin={`0px 0px 10px 0px`}
          radius="5px"
          bgColor={Theme.adminLightGrey_C}
          padding="5px"
          fontSize="13px"
          al="flex-start"
        >
          <GuideDiv isImpo={true}>
            FAQ 타입, 제목, 내용은 필수 사항입니다.
          </GuideDiv>
        </Wrapper>
        <Wrapper>
          <Form
            ref={createRef}
            form={createForm}
            style={{ width: "100%" }}
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 21 }}
            onFinish={createHandler}
          >
            <Form.Item
              label="FAQ 타입"
              name="type"
              rules={[
                {
                  required: true,
                  message: "FAQ 타입은 필수 선택 사항입니다.",
                },
              ]}
            >
              <Select placeholder="FAQ 타입을 선택해주세요." size="small">
                {faqTypes &&
                  faqTypes.map((data) => (
                    <Select.Option value={data.id}>{data.value}</Select.Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="제목"
              name="question"
              rules={[
                {
                  required: true,
                  message: "제목은 필수 입력 사항입니다.",
                },
              ]}
            >
              <Input.TextArea
                size="small"
                style={{ minHeight: "100px" }}
                placeholder="제목을 입력해주세요."
                allowClear
              />
            </Form.Item>
            <Form.Item
              label="내용"
              name="answer"
              rules={[
                {
                  required: true,
                  message: "내용은 필수 입력 사항입니다.",
                },
              ]}
            >
              <Input.TextArea
                size="small"
                style={{ minHeight: "200px" }}
                placeholder="내용을 입력해주세요."
                allowClear
              />
            </Form.Item>
            <Wrapper al="flex-end" margin="20px 0 0">
              <Button size="small" type="primary" htmlType="submit">
                생성하기
              </Button>
            </Wrapper>
          </Form>
        </Wrapper>
      </Modal>

      {/* UPDATE MODAL */}
      <Modal
        visible={updateModal}
        width={`1000px`}
        title={`FAQ 수정하기`}
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
          <GuideDiv isImpo={true}>
            FAQ 타입, 제목, 내용은 필수 사항입니다.
          </GuideDiv>
        </Wrapper>
        <Wrapper>
          <Form
            ref={updateRef}
            form={updateForm}
            style={{ width: "100%" }}
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 21 }}
            onFinish={updateHandler}
          >
            <Form.Item
              label="FAQ 타입"
              name="type"
              rules={[
                {
                  required: true,
                  message: "FAQ 타입은 필수 선택 사항입니다.",
                },
              ]}
            >
              <Select placeholder="FAQ 타입을 선택해주세요." size="small">
                {faqTypes &&
                  faqTypes.map((data) => (
                    <Select.Option value={data.id}>{data.value}</Select.Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="제목"
              name="question"
              rules={[
                {
                  required: true,
                  message: "제목은 필수 입력 사항입니다.",
                },
              ]}
            >
              <Input.TextArea
                size="small"
                style={{ minHeight: "100px" }}
                placeholder="제목을 입력해주세요."
                allowClear
              />
            </Form.Item>
            <Form.Item
              label="내용"
              name="answer"
              rules={[
                {
                  required: true,
                  message: "내용은 필수 입력 사항입니다.",
                },
              ]}
            >
              <Input.TextArea
                size="small"
                style={{ minHeight: "200px" }}
                placeholder="내용을 입력해주세요."
                allowClear
              />
            </Form.Item>
            <Wrapper al="flex-end" margin="20px 0 0">
              <Button size="small" type="primary" htmlType="submit">
                수정하기
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
      type: FAQ_ADMIN_LIST_REQUEST,
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
