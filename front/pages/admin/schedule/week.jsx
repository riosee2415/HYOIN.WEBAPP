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
  Badge,
  BadgeProps,
  Calendar,
  Empty,
  DatePicker,
  Popconfirm,
} from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "next/router";
import useInput from "../../../hooks/useInput";

import { END } from "redux-saga";
import axios from "axios";
import { useRouter } from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import wrapper from "../../../store/configureStore";
import {
  GuideDiv,
  Image,
  ModalBtn,
  Text,
  Wrapper,
} from "../../../components/commonComponents";
import Theme from "../../../components/Theme";
import moment from "moment";
import {
  WEEK_PROGRAM_CREATE_REQUEST,
  WEEK_PROGRAM_DELETE_REQUEST,
  WEEK_PROGRAM_IMAGE_RESET,
  WEEK_PROGRAM_IMAGE_UPLOAD_REQUEST,
  WEEK_PROGRAM_LIST_REQUEST,
  WEEK_PROGRAM_UPDATE_REQUEST,
} from "../../../reducers/weekProgram";

const AdminContent = styled.div`
  padding: 20px;
`;

const CustomCalendar = styled(Calendar)`
  & .ant-picker-content {
    border-top: 1px solid ${Theme.subTheme2_C};
    border-left: 1px solid ${Theme.lightGrey2_C};
    border-right: 1px solid ${Theme.lightGrey2_C};
  }

  & .ant-picker-content th {
    text-align: center;
    padding: 27px 0 !important;
    font-size: 22px;
    font-weight: 600;
    background-color: ${(props) => props.theme.lightGrey5_C};
    border-bottom: 1px solid ${Theme.lightGrey2_C};

    border-left: 1px solid ${Theme.lightGrey2_C};
  }

  & .ant-picker-content th:first-child {
    border-left: none;
  }

  & tbody .ant-picker-cell {
    border-right: 1px solid ${(props) => props.theme.lightGrey2_C};
    border-bottom: 1px solid ${(props) => props.theme.lightGrey2_C};
  }

  & tbody .ant-picker-cell:last-child {
    border-right: none;
  }
`;

const HoverListWrapper = styled(Wrapper)`
  padding: 14px 0;
  &:hover {
    background-color: ${(props) => props.theme.lightGrey_C};
  }
`;

const Type = ({ router }) => {
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

  ////// GOLBAL STATE //////
  const {
    weekProgramList,
    weekProgramImagePath,
    st_weekProgramListError,
    //
    st_weekProgramImageUploadLoading,
    st_weekProgramImageUploadDone,
    st_weekProgramImageUploadError,
    //
    st_weekProgramCreateDone,
    st_weekProgramCreateError,
    //
    st_weekProgramUpdateDone,
    st_weekProgramUpdateError,
    //
    st_weekProgramDeleteDone,
    st_weekProgramDeleteError,
  } = useSelector((state) => state.weekProgram);

  ////// HOOKS //////

  const imageRef = useRef();
  const dispatch = useDispatch();

  const [cForm] = Form.useForm();

  // 날짜
  const [selectDate, setSelectDate] = useState(moment());

  // 모달
  const [cList, setCList] = useState([]);
  const [cDate, setCDate] = useState(null);
  const [cData, setCData] = useState(false);
  const [cModal, setCModal] = useState(false);
  const [cImage, setCImage] = useState(null);

  const [uData, setUData] = useState(null);
  const [uModal, setUModal] = useState(false);

  ////// REDUX //////

  ////// USEEFFECT //////

  useEffect(() => {
    dispatch({
      type: WEEK_PROGRAM_LIST_REQUEST,
      data: {
        searchMonth: moment().format("YYYY-MM"),
      },
    });
  }, []);

  useEffect(() => {
    if (st_weekProgramListError) {
      return message.error(st_weekProgramListError);
    }
  }, [st_weekProgramListError]);

  // 이미지 업로드
  useEffect(() => {
    if (st_weekProgramImageUploadDone) {
      setCImage(null);
      return message.success("이미지가 업로드 되었습니다.");
    }
  }, [st_weekProgramImageUploadDone]);

  useEffect(() => {
    if (st_weekProgramImageUploadError) {
      return message.error(st_weekProgramImageUploadError);
    }
  }, [st_weekProgramImageUploadError]);

  // 생성하기
  useEffect(() => {
    if (st_weekProgramCreateDone) {
      dispatch({
        type: WEEK_PROGRAM_LIST_REQUEST,
        data: {
          searchMonth: moment().format("YYYY-MM"),
        },
      });

      cModalToggle(null);
      return message.success("시간표가 생성되었습니다.");
    }
  }, [st_weekProgramCreateDone]);

  useEffect(() => {
    if (st_weekProgramCreateError) {
      return message.error(st_weekProgramCreateError);
    }
  }, [st_weekProgramCreateError]);

  // 수정하기
  useEffect(() => {
    if (st_weekProgramUpdateDone) {
      dispatch({
        type: WEEK_PROGRAM_LIST_REQUEST,
        data: {
          searchMonth: moment().format("YYYY-MM"),
        },
      });

      uModalToggle(null);
      return message.success("시간표가 수정되었습니다.");
    }
  }, [st_weekProgramUpdateDone]);

  useEffect(() => {
    if (st_weekProgramUpdateError) {
      return message.error(st_weekProgramUpdateError);
    }
  }, [st_weekProgramUpdateError]);

  // 삭제하기
  useEffect(() => {
    if (st_weekProgramDeleteDone) {
      dispatch({
        type: WEEK_PROGRAM_LIST_REQUEST,
        data: {
          searchMonth: moment().format("YYYY-MM"),
        },
      });

      uModalToggle(null);
      return message.success("시간표가 삭제되었습니다.");
    }
  }, [st_weekProgramDeleteDone]);

  useEffect(() => {
    if (st_weekProgramDeleteError) {
      return message.error(st_weekProgramDeleteError);
    }
  }, [st_weekProgramDeleteError]);

  ////// TOGGLE ///////

  // 생성 모달
  const cModalToggle = useCallback(
    (data) => {
      if (data) {
        setCData(data);
      } else {
        setCDate(null);
        setCData(null);
        setCList([]);
        dispatch({
          type: WEEK_PROGRAM_IMAGE_RESET,
          data: null,
        });
      }
      setCModal((prev) => !prev);
    },
    [cModal, cData, cDate, cList]
  );

  // 수정 모달
  const uModalToggle = useCallback(
    (data) => {
      if (data) {
        dispatch({
          type: WEEK_PROGRAM_IMAGE_RESET,
          data: data.imagePath,
        });

        cForm.setFieldsValue({
          title: data.title,
          content: data.content,
        });

        setUData(data);
      } else {
        dispatch({
          type: WEEK_PROGRAM_IMAGE_RESET,
          data: null,
        });

        cForm.resetFields();

        setUData(null);
      }
      setUModal((prev) => !prev);
    },
    [uData, uModal]
  );

  ////// HANDLER //////

  // 날짜 선택
  const selectDateHandler = useCallback(
    (data) => {
      setSelectDate(data);
    },
    [selectDate]
  );

  // 이미지 업로드
  const onChangeImages = useCallback((e) => {
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    dispatch({
      type: WEEK_PROGRAM_IMAGE_UPLOAD_REQUEST,
      data: formData,
    });
  });

  const clickImageUpload = useCallback(() => {
    imageRef.current.click();
  }, [imageRef.current]);

  // 생성 내용 추가하기
  const cAddHandler = useCallback(
    (data) => {
      let cListArr = cList.map((data) => data);

      dispatch({
        type: WEEK_PROGRAM_IMAGE_RESET,
      });

      cForm.resetFields();
      cListArr.push({ ...data, imagePath: weekProgramImagePath });

      setCList(cListArr);

      return message.success("추가되었습니다.");
    },
    [cList, weekProgramImagePath]
  );

  // 내용 수정하기
  const cUpdateHandler = useCallback(
    (data) => {
      dispatch({
        type: WEEK_PROGRAM_UPDATE_REQUEST,
        data: {
          id: uData.id,
          title: data.title,
          content: data.content,
          imagePath: weekProgramImagePath,
        },
      });
    },
    [uData, weekProgramImagePath]
  );

  // 생성 날짜 선택
  const dateChoiseHandler = useCallback(
    (data) => {
      setCDate(data);
    },
    [cDate]
  );

  // 생성하기
  const createHandler = useCallback(() => {
    if (!cDate) {
      return message.error("날짜를 선택해주세요.");
    }

    if (!cList || cList.length === 0) {
      return message.error("생성 리스트를 추가해주세요.");
    }

    dispatch({
      type: WEEK_PROGRAM_CREATE_REQUEST,
      data: {
        insertPrograms: cList,
        specificDate: cDate && cDate.format("YYYY-MM-DD"),
      },
    });
  }, [cList, cDate]);

  const deleteHandler = useCallback(() => {
    dispatch({
      type: WEEK_PROGRAM_DELETE_REQUEST,
      data: {
        id: uData.id,
      },
    });
  }, [uData]);

  // 시간표
  const dateFullCellRender = useCallback(
    (value) => {
      return (
        <Wrapper className="dateBox" padding={`26px 10px`}>
          <Wrapper al={`flex-start`}>
            <Text
              fontSize={`20px`}
              fontWeight={`700`}
              color={
                value.format("MM") === selectDate.format("MM") &&
                (value.format("dddd") === "Sunday"
                  ? Theme.subTheme7_C
                  : value.format("dddd") === "Saturday"
                  ? Theme.subTheme8_C
                  : Theme.grey2_C)
              }
            >
              {value.format("DD")}
            </Text>
          </Wrapper>

          <Wrapper
            height={`320px`}
            al={`flex-start`}
            ju={`flex-start`}
            overflow={`auto`}
          >
            <Wrapper height={`auto`}>
              {/* LIST START */}
              {weekProgramList &&
                weekProgramList
                  .filter(
                    (data) =>
                      data.viewFrontSpecificDate === value.format("YYYY-MM-DD")
                  )
                  .map((data) => {
                    return (
                      <HoverListWrapper
                        dr={`row`}
                        ju={`space-between`}
                        al={`flex-start`}
                        onClick={() => uModalToggle(data)}
                      >
                        <Image
                          width={`16px`}
                          height={`16px`}
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_bookmark.png`}
                          alt={`bookmark_icon`}
                        />
                        <Wrapper width={`calc(100% - 20px)`} al={`flex-start`}>
                          <Text
                            fontSize={`16px`}
                            fontWeight={`bold`}
                            margin={`0 0 6px`}
                            lineHeight={`1.28`}
                          >
                            {data.title}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.content}
                          </Text>
                        </Wrapper>
                      </HoverListWrapper>
                    );
                  })}

              {/* LIST END */}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      );
    },
    [selectDate, weekProgramList]
  );

  ////// DATAVIEW //////

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["시간표 관리", "주간보호 시간표 관리"]}
        title={`주간보호 시간표 관리`}
        subTitle={`홈페이지에 보여지는 주간보호 시간표를 관리할 수 있습니다.`}
      />

      <AdminContent>
        <Wrapper
          dr="row"
          ju="flex-end"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          <Button
            size="small"
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => cModalToggle(null)}
          >
            시간표 생성
          </Button>
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
            등록된 데이터는 웹사이트 및 어플리케이션에 즉시 적용되기 때문에
            정확한 입력을 필요로 합니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>

        <CustomCalendar
          locale={{
            lang: {
              locale: "ko",
              month: "월간",
              year: "년도",
            },
          }}
          dateFullCellRender={dateFullCellRender}
          fullscreen
          onChange={selectDateHandler}
        />
      </AdminContent>

      {/* CREATE MODAL */}
      <Modal
        title={`시간표 생성하기`}
        visible={cModal}
        cancelText={`취소`}
        onCancel={() => cModalToggle(null)}
        cancelButtonProps={{ size: `small` }}
        okText={`생성`}
        onOk={createHandler}
        okButtonProps={{ size: `small`, type: "primary" }}
      >
        <Wrapper margin={`0 0 30px`}>
          <Image
            width={`150px`}
            height={`150px`}
            src={
              weekProgramImagePath
                ? weekProgramImagePath
                : `https://via.placeholder.com/150`
            }
            alt={`image`}
          />

          <input
            hidden
            type={`file`}
            ref={imageRef}
            accept={`.jpg, .png`}
            value={cImage}
            onChange={onChangeImages}
          />
          <Button
            loading={st_weekProgramImageUploadLoading}
            style={{ width: `150px` }}
            size="small"
            type="primary"
            onClick={clickImageUpload}
          >
            이미지 업로드
          </Button>
        </Wrapper>

        <Form form={cForm} onFinish={cAddHandler}>
          <Form.Item
            label={`제목`}
            name={`title`}
            rules={[{ required: true, message: "제목을 입력해주세요." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={`내용`}
            name={`content`}
            rules={[{ required: true, message: "내용을 입력해주세요." }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Wrapper al={`flex-end`}>
            <Button
              size="small"
              type="primary"
              htmlType="submit"
              icon={<PlusOutlined />}
            >
              추가
            </Button>
          </Wrapper>
        </Form>

        <Wrapper
          padding={`5px 0`}
          margin={`20px 0 0`}
          bgColor={Theme.lightGrey2_C}
        >
          <Text>날짜를 선택해주세요.</Text>
        </Wrapper>
        <DatePicker
          value={cDate}
          onChange={dateChoiseHandler}
          style={{ width: `100%` }}
          placeholder={`추가하실 날짜를 선택해주세요.`}
        />
        <Wrapper>
          {cList &&
            (cList.length === 0 ? (
              <Wrapper padding={`20px 0 0`}>
                <Empty description={`시간표를 추가해주세요.`} />
              </Wrapper>
            ) : (
              cList.map((data) => {
                return (
                  <Wrapper
                    dr={`row`}
                    ju={`space-between`}
                    al={`flex-start`}
                    padding={`10px 0`}
                    borderBottom={`1px solid ${Theme.lightGrey2_C}`}
                  >
                    <Image
                      width={`150px`}
                      height={`150px`}
                      src={
                        data.imagePath
                          ? data.imagePath
                          : `https://via.placeholder.com/150`
                      }
                      alt={`image`}
                    />
                    <Wrapper width={`calc(100% - 150px - 20px)`}>
                      <Wrapper al={`flex-start`} margin={`5px 0`}>
                        제목 : {data.title}
                      </Wrapper>

                      <Wrapper al={`flex-start`}>내용 : {data.content}</Wrapper>
                    </Wrapper>
                  </Wrapper>
                );
              })
            ))}
        </Wrapper>
      </Modal>

      {/* UPDATE MODAL */}
      <Modal
        title={`상세정보`}
        visible={uModal}
        onCancel={() => uModalToggle(null)}
        footer={null}
      >
        <Wrapper margin={`0 0 30px`}>
          <Image
            width={`150px`}
            height={`150px`}
            src={
              weekProgramImagePath
                ? weekProgramImagePath
                : `https://via.placeholder.com/150`
            }
            alt={`image`}
          />

          <input
            hidden
            type={`file`}
            ref={imageRef}
            accept={`.jpg, .png`}
            value={cImage}
            onChange={onChangeImages}
          />
          <Button
            loading={st_weekProgramImageUploadLoading}
            style={{ width: `150px` }}
            size="small"
            type="primary"
            onClick={clickImageUpload}
          >
            이미지 업로드
          </Button>
        </Wrapper>

        <Form form={cForm} onFinish={cUpdateHandler}>
          <Form.Item
            label={`제목`}
            name={`title`}
            rules={[{ required: true, message: "제목을 입력해주세요." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={`내용`}
            name={`content`}
            rules={[{ required: true, message: "내용을 입력해주세요." }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Wrapper dr={`row`} ju={`flex-end`}>
            <Popconfirm
              title={`삭제하시겠습니까?`}
              cancelText="취소"
              okText="삭제"
              onConfirm={() => deleteHandler()}
            >
              <Button size="small" type="danger">
                삭제
              </Button>
            </Popconfirm>

            <ModalBtn size="small" type="primary" htmlType="submit">
              수정
            </ModalBtn>
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
      type: WEEK_PROGRAM_LIST_REQUEST,
      data: {
        searchMonth: moment().format("YYYY-MM"),
      },
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(Type);
