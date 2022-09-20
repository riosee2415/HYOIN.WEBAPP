import React, { useCallback, useEffect, useState, useRef } from "react";
import AdminLayout from "../../../../components/AdminLayout";
import PageHeader from "../../../../components/admin/PageHeader";
import styled from "styled-components";
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  message,
  Popconfirm,
  Image,
  Radio,
} from "antd";
import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  RECRUIT_CREATE_REQUEST,
  RECRUIT_UPDATE_REQUEST,
  RECRUIT_DELETE_REQUEST,
  RECRUIT_ADMIN_LIST_REQUEST,
  RECRUIT_IMAGE_UPLOAD_REQUEST,
  RECRUIT_FILE_UPLOAD_REQUEST,
  RECRUIT_RESET,
} from "../../../../reducers/recruit";
import { withRouter } from "next/router";

import { END } from "redux-saga";
import axios from "axios";
import { useRouter } from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../../../../reducers/user";
import wrapper from "../../../../store/configureStore";
import {
  GuideDiv,
  ModalBtn,
  Text,
  Wrapper,
} from "../../../../components/commonComponents";
import Theme from "../../../../components/Theme";
import TextArea from "antd/lib/input/TextArea";

const AdminContent = styled.div`
  padding: 20px;
`;

const SearchForm = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;

  & .ant-form-item {
    width: 200px;
    margin: 0;

    @media (max-width: 900px) {
      width: 150px;
      margin: 5px 5px 0 0;
    }
  }

  & .ant-form-item,
  & .ant-form-item-control-input {
    min-height: 0;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const CustomInput = styled(Input)`
  width: 100%;
`;

const List = () => {
  ////// GLOBAL STATE //////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);
  const {
    adminRecruitList,
    fileUpload,
    imgUpload,
    //
    st_recruitImageUploadLoading,
    st_recruitFileUploadLoading,
    //
    st_recruitCreateDone,
    st_recruitCreateError,

    st_recruitUpdateDone,
    st_recruitUpdateError,

    st_recruitDeleteDone,
    st_recruitDeleteError,
  } = useSelector((state) => state.recruit);

  ////// HOOKS //////
  const router = useRouter();

  const dispatch = useDispatch();

  const fileRef = useRef();
  const imgRef = useRef();

  const [formRef] = Form.useForm();
  const [searchForm] = Form.useForm();

  const [cModal, setCModal] = useState(false);
  const [uModal, setUModal] = useState(false);

  const [uData, setUData] = useState(null);

  const [fileName, setFileName] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");

  ////// USEEFFECT //////
  useEffect(() => {
    if (st_loadMyInfoDone) {
      if (!me || parseInt(me.level) < 3) {
        moveLinkHandler(`/admin`);
      }
    }
  }, [st_loadMyInfoDone]);

  useEffect(() => {
    dispatch({
      type: RECRUIT_ADMIN_LIST_REQUEST,
      data: {
        searchTitle,
      },
    });
  }, [searchTitle]);

  // 채용공고 생성 후처리
  useEffect(() => {
    if (st_recruitCreateDone) {
      setFileName(null);
      formRef.resetFields();
      cModalToggle();

      dispatch({
        type: RECRUIT_ADMIN_LIST_REQUEST,
        data: {
          searchTitle,
        },
      });

      dispatch({
        type: RECRUIT_RESET,
      });

      return message.success("채용공고을 생성하였습니다.");
    }
  }, [st_recruitCreateDone]);

  useEffect(() => {
    if (st_recruitCreateError) {
      return message.error(st_recruitCreateError);
    }
  }, [st_recruitCreateError]);

  // 채용공고 수정 후처리
  useEffect(() => {
    if (st_recruitUpdateDone) {
      dispatch({
        type: RECRUIT_ADMIN_LIST_REQUEST,
        data: {
          searchTitle,
        },
      });

      formRef.resetFields();
      setUData(null);
      setFileName(null);
      dispatch({
        type: RECRUIT_RESET,
      });
      setUModal(false);

      return message.success("채용공고을 수정하였습니다.");
    }
  }, [st_recruitUpdateDone]);

  useEffect(() => {
    if (st_recruitUpdateError) {
      return message.error(st_recruitUpdateError);
    }
  }, [st_recruitUpdateError]);

  // 채용공고 삭제 후처리
  useEffect(() => {
    if (st_recruitDeleteDone) {
      dispatch({
        type: RECRUIT_ADMIN_LIST_REQUEST,
        data: {
          searchTitle,
        },
      });

      return message.success("채용공고을 삭제하였습니다.");
    }
  }, [st_recruitDeleteDone]);

  useEffect(() => {
    if (st_recruitDeleteError) {
      return message.error(st_recruitDeleteError);
    }
  }, [st_recruitDeleteError]);

  ////// TOGGLE ///////
  const cModalToggle = useCallback(() => {
    setCModal((prev) => !prev);
  }, [cModal]);

  const uModalToggle = useCallback(
    (data) => {
      if (data) {
        formRef.setFieldsValue({
          title: data.title,
          content: data.content,
          period: data.status,
        });
        setUData(data);
      }

      if (uModal) {
        setUData(null);
        dispatch({
          type: RECRUIT_RESET,
        });
        setFileName(null);
      }

      setUModal(!uModal);
    },
    [uModal]
  );

  ////// HANDLER ///////
  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  const searchHandler = useCallback(
    (data) => {
      setSearchTitle(data.title);
    },
    [searchTitle]
  );

  const allSearchHandler = useCallback(() => {
    searchForm.resetFields();
    setSearchTitle("");
  }, [searchTitle]);

  const createHandler = useCallback(
    (data) => {
      dispatch({
        type: RECRUIT_CREATE_REQUEST,
        data: {
          title: data.title,
          content: data.content,
          file: fileUpload,
          imagePath: imgUpload,
          filename: fileName,
          status: data.period,
        },
      });
    },
    [fileUpload, imgUpload, fileName]
  );

  const updateHandler = useCallback(
    (data) => {
      if (!data.title) {
        return message.error("제목을 입력해주세요.");
      }

      if (!data.content) {
        return message.error("내용을 입력해주세요.");
      }

      if (
        data.title === String(uData && uData.title) &&
        data.content === String(uData && uData.content) &&
        data.period === (uData && uData.status) &&
        !fileUpload &&
        !imgUpload
      ) {
        return message.error("수정 할 내용이 없습니다.");
      }

      dispatch({
        type: RECRUIT_UPDATE_REQUEST,
        data: {
          title: data.title,
          content: data.content,
          id: uData && uData.id,
          file: fileUpload ? fileUpload : uData && uData.file,
          filename: fileName ? fileName : uData && uData.filename,
          imagePath: imgUpload ? imgUpload : uData && uData.imagePath,
          status: data.period,
        },
      });
    },
    [uData, imgUpload, fileUpload]
  );

  const deleteHandler = useCallback((data) => {
    dispatch({
      type: RECRUIT_DELETE_REQUEST,
      data: {
        id: data.id,
      },
    });
  }, []);

  const fileClickHandler = useCallback(() => {
    fileRef.current.click();
  }, []);

  const fileUploadHandler = useCallback((e) => {
    setFileName(e.target.files[0].name);

    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("file", file);
    });

    if (e.target.files.length < 1) {
      return;
    }

    dispatch({
      type: RECRUIT_FILE_UPLOAD_REQUEST,
      data: formData,
    });
  }, []);

  const imageClickHandler = useCallback(() => {
    imgRef.current.click();
  }, []);

  const imageUploadHandler = useCallback((e) => {
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    if (e.target.files.length < 1) {
      return;
    }

    dispatch({
      type: RECRUIT_IMAGE_UPLOAD_REQUEST,
      data: formData,
    });
  }, []);

  ////// DATAVIEW //////
  const columns = [
    {
      title: "번호",
      dataIndex: "num",
    },
    {
      width: `40%`,
      title: "제목",
      dataIndex: "title",
    },
    {
      title: "채용기간",
      dataIndex: "viewStatus",
    },
    {
      title: "조회수",
      dataIndex: "hit",
    },
    {
      title: "생성일",
      dataIndex: "viewCreatedAt",
    },
    {
      title: "최근 수정일",
      dataIndex: "viewUpdatedAt",
    },
    {
      title: "수정하기",
      render: (data) => {
        return (
          <Button
            type="primary"
            size="small"
            onClick={() => uModalToggle(data)}
          >
            수정하기
          </Button>
        );
      },
    },
    {
      title: "삭제하기",
      render: (data) => {
        return (
          <Popconfirm
            title="삭제하시겠습니까?"
            okText="삭제"
            cancelText="취소"
            onConfirm={() => deleteHandler(data)}
          >
            <Button type="danger" size="small">
              삭제하기
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["채용공고 관리", "채용공고 리스트"]}
        title={`채용공고 리스트`}
        subTitle={`사용자에게 제공하는 채용공고을 관리할 수 있습니다.`}
      />

      <AdminContent>
        <Wrapper
          dr="row"
          ju="space-between"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          <Wrapper dr={`row`} ju={`flex-start`} width={`80%`}>
            <SearchForm form={searchForm} onFinish={searchHandler}>
              <Form.Item name="title">
                <CustomInput size="small" placeholder="채용공고제목" />
              </Form.Item>

              <Button icon={<SearchOutlined />} size="small" htmlType="submit">
                검색
              </Button>
            </SearchForm>

            <ModalBtn
              icon={<UnorderedListOutlined />}
              size="small"
              type="primary"
              onClick={allSearchHandler}
            >
              전체조회
            </ModalBtn>
          </Wrapper>

          <Wrapper dr={`row`} ju={`flex-end`} width={`20%`}>
            <ModalBtn type="primary" size="small" onClick={cModalToggle}>
              + 채용공고 생성
            </ModalBtn>
          </Wrapper>
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
            사용자가 볼 수 있는 채용공고을 관리 할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            등록된 데이터는 웹사이트 및 어플리케이션에 즉시 적용되기 때문에
            정확한 입력을 필요로 합니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>

        <Table
          rowKey="id"
          columns={columns}
          dataSource={adminRecruitList}
          size="small"
        />
      </AdminContent>

      <Modal
        visible={uModal}
        onCancel={uModalToggle}
        footer={null}
        title="채용공고 수정"
        width="1100px"
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
            제목 / 내용 / 채용기간은 필수 등록사항입니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            이미지 / 첨부파일은 필수 등록사항이 아닙니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            이미지 / 첨부파일은 1개만 등록이 가능합니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            이미지 / 첨부파일 버튼에 로딩이 진행되고 있을 때 수정 및 생성을 하게
            되면 파일 업로드가 안올라갈 경우가 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            로딩 진행이 끝난 후 수정 및 생성을 진행하여주시기 바랍니다.
          </GuideDiv>
        </Wrapper>
        <Form
          labelCol={{
            span: 2,
          }}
          labelAlign={`left`}
          wrapperCol={{ span: 22 }}
          onFinish={updateHandler}
          form={formRef}
        >
          <Form.Item
            label="제목"
            name="title"
            required={[
              {
                required: true,
                message: "제목을 입력해주세요.",
              },
            ]}
          >
            <Input placeholder="채용공고 제목을 입력해주세요." />
          </Form.Item>
          <Form.Item
            label="내용"
            name="content"
            required={[
              {
                required: true,
                message: "내용을 입력해주세요.",
              },
            ]}
          >
            <TextArea
              style={{ height: `200px` }}
              placeholder="채용공고 내용을 입력해주세요."
            />
          </Form.Item>

          <Form.Item
            label="채용기간"
            name="period"
            rules={[
              {
                required: true,
                message: "채용기간은 필수 선택사항 입니다.",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>채용시 마감</Radio>
              <Radio value={2}>마감</Radio>
              <Radio value={3}>상시모집</Radio>
            </Radio.Group>
          </Form.Item>

          <Wrapper dr={`row`}>
            <Wrapper width={`8%`} al={`flex-start`}>
              이미지
            </Wrapper>
            <Wrapper width={`92%`} dr={`row`} ju={`flex-start`}>
              <input
                type="file"
                name="image"
                accept=".png, .jpg"
                // multiple
                hidden
                ref={imgRef}
                onChange={imageUploadHandler}
              />

              {(imgUpload || (uData && uData.imagePath)) && (
                <Image
                  style={{ paddingRight: `10px` }}
                  src={imgUpload ? imgUpload : uData.imagePath}
                  alt="img"
                  width={`150px`}
                />
              )}

              <Button
                type="primary"
                size="small"
                onClick={imageClickHandler}
                loading={st_recruitImageUploadLoading}
              >
                이미지 업로드
              </Button>
            </Wrapper>
          </Wrapper>

          <Wrapper dr={`row`} margin={`20px 0`}>
            <Wrapper width={`8%`} al={`flex-start`}>
              첨부파일
            </Wrapper>
            <Wrapper width={`92%`} dr={`row`} ju={`flex-start`}>
              <input
                type="file"
                name="image"
                accept=".png, .jpg, .xlxs, .pdf, .pptx"
                // multiple
                hidden
                ref={fileRef}
                onChange={fileUploadHandler}
              />

              {(fileName || (uData && uData.filename)) && (
                <Text margin={`0 10px 0 0`}>
                  {fileName ? fileName : uData.filename}
                </Text>
              )}

              <Button
                type="primary"
                size="small"
                onClick={fileClickHandler}
                loading={st_recruitFileUploadLoading}
              >
                파일 업로드
              </Button>
            </Wrapper>
          </Wrapper>

          <Wrapper al={`flex-end`}>
            <Button type="primary" size="small" htmlType="submit">
              수정하기
            </Button>
          </Wrapper>
        </Form>
      </Modal>

      <Modal
        visible={cModal}
        onCancel={cModalToggle}
        footer={null}
        title="채용공고 생성"
        width="1100px"
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
            제목 / 내용 / 채용기간은 필수 등록사항입니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            이미지 / 첨부파일은 필수 등록사항이 아닙니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            이미지 / 첨부파일은 1개만 등록이 가능합니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            이미지 / 첨부파일 버튼에 로딩이 진행되고 있을 때 수정 및 생성을 하게
            되면 파일 업로드가 안올라갈 경우가 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            로딩 진행이 끝난 후 수정 및 생성을 진행하여주시기 바랍니다.
          </GuideDiv>
        </Wrapper>

        <Form
          labelCol={{
            span: 2,
          }}
          labelAlign={`left`}
          wrapperCol={{ span: 22 }}
          onFinish={createHandler}
          form={formRef}
        >
          <Form.Item
            label="제목"
            name="title"
            required={[
              {
                required: true,
                message: "제목을 입력해주세요.",
              },
            ]}
          >
            <Input placeholder="채용공고 제목을 입력해주세요." />
          </Form.Item>
          <Form.Item
            label="내용"
            name="content"
            required={[
              {
                required: true,
                message: "내용을 입력해주세요.",
              },
            ]}
          >
            <TextArea
              style={{ height: `200px` }}
              placeholder="채용공고 내용을 입력해주세요."
            />
          </Form.Item>

          <Form.Item
            label="채용기간"
            name="period"
            rules={[
              {
                required: true,
                message: "채용기간은 필수 선택사항 입니다.",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>채용시 마감</Radio>
              <Radio value={2}>마감</Radio>
              <Radio value={3}>상시모집</Radio>
            </Radio.Group>
          </Form.Item>

          <Wrapper dr={`row`}>
            <Wrapper width={`8%`} al={`flex-start`}>
              이미지
            </Wrapper>
            <Wrapper width={`92%`} dr={`row`} ju={`flex-start`}>
              <input
                type="file"
                name="image"
                accept=".png, .jpg"
                // multiple
                hidden
                ref={imgRef}
                onChange={imageUploadHandler}
              />

              {imgUpload && (
                <Image
                  style={{ paddingRight: `10px` }}
                  src={imgUpload}
                  alt="img"
                  width={`150px`}
                />
              )}

              <Button
                type="primary"
                size="small"
                onClick={imageClickHandler}
                loading={st_recruitImageUploadLoading}
              >
                이미지 업로드
              </Button>
            </Wrapper>
          </Wrapper>

          <Wrapper dr={`row`} margin={`20px 0`}>
            <Wrapper width={`8%`} al={`flex-start`}>
              첨부파일
            </Wrapper>
            <Wrapper width={`92%`} dr={`row`} ju={`flex-start`}>
              <input
                type="file"
                name="image"
                accept=".png, .jpg, .xlxs, .pdf, .pptx"
                // multiple
                hidden
                ref={fileRef}
                onChange={fileUploadHandler}
              />

              {fileName && <Text margin={`0 10px 0 0`}>{fileName}</Text>}

              <Button
                type="primary"
                size="small"
                onClick={fileClickHandler}
                loading={st_recruitFileUploadLoading}
              >
                파일 업로드
              </Button>
            </Wrapper>
          </Wrapper>

          <Wrapper al={`flex-end`}>
            <Button type="primary" size="small" htmlType="submit">
              생성하기
            </Button>
          </Wrapper>
        </Form>
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
      type: RECRUIT_ADMIN_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(List);
