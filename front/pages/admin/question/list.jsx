import React, { useCallback, useEffect, useRef, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import AdminTop from "../../../components/admin/AdminTop";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Modal,
  Row,
  Table,
  notification,
  Layout,
  Input,
  message,
} from "antd";
import {
  UPDATE_MODAL_CLOSE_REQUEST,
  UPDATE_MODAL_OPEN_REQUEST,
  QUESTION_UPDATE_REQUEST,
  QUESTION_DELETE_REQUEST,
  QUESTION_GET_REQUEST,
  QUESTION_TYPE_GET_REQUEST,
  QUESTION_LIST_REQUEST,
} from "../../../reducers/question";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import { useRouter } from "next/router";
import useInput from "../../../hooks/useInput";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import {
  ColWrapper,
  GuideDiv,
  ModalBtn,
  RowWrapper,
  Text,
  Wrapper,
} from "../../../components/commonComponents";
import { saveAs } from "file-saver";
import Theme from "../../../components/Theme";
import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";

const AdminContent = styled.div`
  padding: 20px;
`;

// const SearchForm = styled(Form)`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   width: auto;

//   & .ant-form-item {
//     width: 200px;
//     margin: 0;

//     @media (max-width: 900px) {
//       width: 150px;
//       margin: 5px 5px 0 0;
//     }
//   }

//   & .ant-form-item,
//   & .ant-form-item-control-input {
//     min-height: 0;
//   }

//   @media (max-width: 900px) {
//     width: 100%;
//   }
// `;

const List = ({ location }) => {
  // LOAD CURRENT INFO AREA /////////////////////////////////////////////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);
  const { questions } = useSelector((state) => state.question);

  const [openModal, setOpenModal] = useState(false);
  const [detailData, setDetailData] = useState(null);

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
  const dispatch = useDispatch();

  const name = useInput("");

  ////// USEEFFECT //////

  ////// TOGGLE //////
  const openModalToggle = useCallback((data) => {
    if (data) {
      setDetailData(data);
    }

    setOpenModal((prev) => !prev);
  });

  ////// HANDLER //////

  const searchHandler = useCallback(() => {
    dispatch({
      type: QUESTION_LIST_REQUEST,
      data: {
        searchName: name.value,
      },
    });
  }, [name.value]);

  const keyPressHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        searchHandler();
      }
    },
    [name.value]
  );

  const allSearchHandler = useCallback(() => {
    name.setValue("");
    dispatch({
      type: QUESTION_LIST_REQUEST,
    });
  }, [name.value]);

  ////// DATAVIEW //////

  // Table
  const columns = [
    {
      title: "번호",
      dataIndex: "num",
      align: "center",
      width: "5%",
    },
    {
      title: "제목",
      dataIndex: "title",
      width: "20%",
      ellipsis: true,
    },
    {
      title: "내용",
      dataIndex: "content",
      width: "25%",
      ellipsis: true,
    },
    {
      title: "이름",
      dataIndex: "name",
      align: "center",
      width: "10%",
      ellipsis: true,
    },
    {
      title: "연락처",
      dataIndex: "mobile",
      align: "center",
      width: "15%",
    },
    {
      title: "이메일",
      dataIndex: "email",
      align: "center",
      width: "15%",
    },
    {
      title: "상세보기",
      render: (data) => (
        <Button
          type="primary"
          size="small"
          onClick={() => openModalToggle(data)}
        >
          상세보기
        </Button>
      ),
      align: "center",
      width: "10%",
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["문의 관리", "문의 리스트"]}
        title={`문의 리스트`}
        subTitle={`홈페이지의 문의를 관리할 수 있습니다.`}
      />
      {/* <AdminTop createButton={true} createButtonAction={() => {})} /> */}

      <AdminContent>
        <Wrapper
          dr="row"
          ju="flex-start"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          <Wrapper dr={`row`} ju={`flex-start`}>
            <Input
              size="small"
              style={{ width: "200px" }}
              placeholder="이름으로 검색해주세요."
              {...name}
              onKeyPress={keyPressHandler}
            />
            <Button
              icon={<SearchOutlined />}
              size="small"
              htmlType="submit"
              onClick={searchHandler}
            >
              검색
            </Button>
            <ModalBtn
              icon={<UnorderedListOutlined />}
              size="small"
              type="primary"
              onClick={allSearchHandler}
            >
              전체조회
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
            상세보기를 클릭 시 자세한 정보를 볼 수 있습니다.
          </GuideDiv>
        </Wrapper>

        <Table
          rowKey="id"
          columns={columns}
          dataSource={questions ? questions : []}
          size="small"
        />
      </AdminContent>

      <Modal
        visible={openModal}
        title="상세보기"
        onCancel={openModalToggle}
        width="600px"
        footer={null}
      >
        <Wrapper
          dr={`row`}
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          margin={`0 0 5px`}
        >
          <Wrapper
            al={`flex-start`}
            width={`20%`}
            fontWeight={`700`}
            bgColor={Theme.adminLightGrey_C}
            padding={`5px`}
          >
            이름
          </Wrapper>
          <Wrapper al={`flex-start`} width={`80%`} padding={`5px`}>
            {detailData && detailData.name}
          </Wrapper>
        </Wrapper>
        <Wrapper
          dr={`row`}
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          margin={`0 0 5px`}
        >
          <Wrapper
            al={`flex-start`}
            width={`20%`}
            fontWeight={`700`}
            bgColor={Theme.adminLightGrey_C}
            padding={`5px`}
          >
            연락처
          </Wrapper>
          <Wrapper al={`flex-start`} width={`80%`} padding={`5px`}>
            {detailData && detailData.mobile}
          </Wrapper>
        </Wrapper>

        <Wrapper
          dr={`row`}
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          margin={`0 0 5px`}
        >
          <Wrapper
            al={`flex-start`}
            width={`20%`}
            fontWeight={`700`}
            bgColor={Theme.adminLightGrey_C}
            padding={`5px`}
          >
            이메일
          </Wrapper>
          <Wrapper al={`flex-start`} width={`80%`} padding={`5px`}>
            {detailData && detailData.email}
          </Wrapper>
        </Wrapper>
        <Wrapper
          dr={`row`}
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          margin={`0 0 5px`}
        >
          <Wrapper
            al={`flex-start`}
            width={`20%`}
            fontWeight={`700`}
            bgColor={Theme.adminLightGrey_C}
            padding={`5px`}
          >
            제목
          </Wrapper>
          <Wrapper al={`flex-start`} width={`80%`} padding={`5px`}>
            {detailData && detailData.title}
          </Wrapper>
        </Wrapper>

        <Wrapper
          dr={`row`}
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          margin={`0 0 5px`}
          al={`flex-start`}
        >
          <Wrapper
            al={`flex-start`}
            width={`20%`}
            fontWeight={`700`}
            bgColor={Theme.adminLightGrey_C}
            padding={`5px`}
          >
            내용
          </Wrapper>
          <Wrapper al={`flex-start`} width={`80%`} padding={`5px`}>
            <Text>{detailData && detailData.content}</Text>
          </Wrapper>
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
      type: QUESTION_LIST_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default List;
