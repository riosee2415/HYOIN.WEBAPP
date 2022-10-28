import React, { useCallback, useEffect, useRef, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import styled from "styled-components";
import {
  Table,
  Button,
  Switch,
  Image,
  message,
  Modal,
  notification,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  POPUP_GET_REQUEST,
  POPUP_IMAGE_UPLOAD_REQUEST,
  POPUP_IMAGE_INIT,
  POPUP_CREATE_REQUEST,
  POPUP_UPDATE_REQUEST,
  POPUP_DELETE_REQUEST,
  POPUP_USE_UPDATE_REQUEST,
} from "../../../reducers/popup";
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

// 팝업사이즈는 450px x 600px 입니다.
const POPUP_WIDTH = `450`;
const POPUP_HEIGHT = `600`;

const AdminContent = styled.div`
  padding: 20px;
`;

const PopupImage = styled.img`
  width: ${`${POPUP_WIDTH}px`};
  height: ${`${POPUP_HEIGHT}px`};
  margin-bottom: 10px;
  object-fit: cover;
`;

const ModalWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UploadWrapper = styled.div`
  width: 100%;
  margin: 5px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const PreviewGuide = styled.p`
  font-weight: 700;
  color: ${Theme.grey_C};
`;

const PopuploadNotification = (msg, content) => {
  notification.open({
    message: msg,
    description: content,
    onClick: () => {},
  });
};

const Popup = () => {
  ////// GLOBAL STATE //////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);

  const {
    popups,

    st_popupError,

    uploadImagePath,
    st_popupImageUploadLoading,

    st_popupCreateDone,
    st_popupCreateError,

    st_popupDeleteDone,
    st_popupDeleteError,

    st_popupUseUpdateDone,
    st_popupUseUpdateError,

    st_popupUpdateDone,
    st_popupUpdateError,
  } = useSelector((state) => state.popup);

  ////// HOOKS //////
  const router = useRouter();

  const dispatch = useDispatch();

  const imageInput = useRef();

  const [cModal, setCModal] = useState(false); // 등록 모달
  const [uModal, setUModal] = useState(false); // 수정 모달

  const [deletePopVisible, setDeletePopVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [updateId, setUpdateId] = useState(null);

  ////// USEEFFECT //////
  useEffect(() => {
    if (st_loadMyInfoDone) {
      if (!me || parseInt(me.level) < 3) {
        moveLinkHandler(`/admin`);
      }
    }
  }, [st_loadMyInfoDone]);

  useEffect(() => {
    if (st_popupError) {
      return message.error(st_popupError);
    }
  }, [st_popupError]);

  ///////////////////// 팝업 생성 후처리 /////////////////////
  useEffect(() => {
    if (st_popupCreateDone) {
      createModalToggle();

      dispatch({
        type: POPUP_GET_REQUEST,
      });

      dispatch({
        type: POPUP_IMAGE_INIT,
      });

      return message.success("팝업이 생성되었습니다.");
    }
  }, [st_popupCreateDone]);

  useEffect(() => {
    if (st_popupCreateError) {
      return message.error(st_popupCreateError);
    }
  }, [st_popupCreateError]);

  ///////////////////// 팝업 삭제 후처리 /////////////////////
  useEffect(() => {
    if (st_popupDeleteDone) {
      dispatch({
        type: POPUP_GET_REQUEST,
      });

      return message.success("팝업이 삭제되었습니다.");
    }
  }, [st_popupDeleteDone]);

  useEffect(() => {
    if (st_popupDeleteError) {
      return message.error(st_popupDeleteError);
    }
  }, [st_popupDeleteError]);

  ///////////////////// 팝업 사용여부 후처리 /////////////////////
  useEffect(() => {
    if (st_popupUseUpdateDone) {
      dispatch({
        type: POPUP_GET_REQUEST,
      });

      return message.success("팝업 사용여부가 수정되었습니다.");
    }
  }, [st_popupUseUpdateDone]);

  useEffect(() => {
    if (st_popupUseUpdateError) {
      return message.error(st_popupUseUpdateError);
    }
  }, [st_popupUseUpdateError]);

  ///////////////////// 팝업 수정 후처리 /////////////////////
  useEffect(() => {
    if (st_popupUpdateDone) {
      dispatch({
        type: POPUP_GET_REQUEST,
      });

      dispatch({
        type: POPUP_IMAGE_INIT,
      });

      updatePopToggle(null);

      return message.success("팝업이 수정되었습니다.");
    }
  }, [st_popupUpdateDone]);

  useEffect(() => {
    if (st_popupUpdateError) {
      return message.error(st_popupUseUpdateError);
    }
  }, [st_popupUpdateError]);

  ////// TOGGLE //////
  const createModalToggle = useCallback(() => {
    setCModal((prev) => !prev);
  }, [cModal]);

  const updatePopToggle = useCallback(
    (data) => {
      setUModal((prev) => !prev);

      setUpdateId(data);
    },
    [uModal, updateId]
  );

  const deletePopToggle = useCallback(
    (id) => () => {
      setDeleteId(id);
      setDeletePopVisible((prev) => !prev);
    },
    [deletePopVisible, deleteId]
  );

  ////// HANDLER //////
  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  // CREATE FUNCATION
  const createHandler = useCallback(() => {
    if (!uploadImagePath) {
      return message.error("이미지 선택은 필수 입니다.");
    }
    dispatch({
      type: POPUP_CREATE_REQUEST,
      data: { imagePath: uploadImagePath },
    });
  }, [uploadImagePath]);

  // UPDATE FUNCATION
  const updateHandler = useCallback(() => {
    if (!uploadImagePath) {
      return message.error("이미지 선택은 필수 입니다.");
    }
    dispatch({
      type: POPUP_UPDATE_REQUEST,
      data: { id: updateId.id, imagePath: uploadImagePath },
    });
  }, [uploadImagePath, updateId]);

  // IMAGE FUNCATION
  const clickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    dispatch({
      type: POPUP_IMAGE_UPLOAD_REQUEST,
      data: formData,
    });
  }, []);

  // DELETE FUNCATION
  const deletePopupHandler = useCallback(() => {
    if (!deleteId) {
      return PopuploadNotification(
        "ADMIN SYSTEM ERRLR",
        "일시적인 장애가 발생되었습니다. 잠시 후 다시 시도해주세요."
      );
    }
    dispatch({
      type: POPUP_DELETE_REQUEST,
      data: { popupId: deleteId },
    });

    setDeleteId(null);
    setDeletePopVisible((prev) => !prev);
  }, [deleteId]);

  // USE UPDATE FUNCATION
  const useUpdatePopupHandler = useCallback((data) => {
    dispatch({
      type: POPUP_USE_UPDATE_REQUEST,
      data: { id: data.id, currentUseYn: data.useYn },
    });
  }, []);

  ////// DATAVIEW //////
  const columns = [
    {
      title: "번호",
      dataIndex: "id",
    },
    {
      title: "팝업 이미지",
      render: (data) => <Image width={100} src={`${data.imagePath}`} />,
    },
    {
      title: "사용여부",
      render: (data) => (
        <Switch
          defaultChecked={data.useYn}
          onChange={() => {
            useUpdatePopupHandler(data);
          }}
        />
      ),
    },
    {
      title: "생성일",
      render: (data) => <Text>{data.createdAt.substring(0, 10)}</Text>,
    },
    {
      title: "수정일",
      render: (data) => <Text>{data.updatedAt.substring(0, 10)}</Text>,
    },
    {
      title: "데이터 수정",
      render: (data) => (
        <Button
          size="small"
          type="primary"
          onClick={() => updatePopToggle(data)}
        >
          데이터 수정
        </Button>
      ),
    },
    {
      title: "데이터 삭제",
      render: (data) => (
        <Button size="small" type="danger" onClick={deletePopToggle(data.id)}>
          데이터 삭제
        </Button>
      ),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["기초 관리", "팝업 관리"]}
        title={`팝업 관리`}
        subTitle={`메인화면에 보여지는 팝업을 제어할 수 있습니다.`}
      />

      <AdminContent>
        <Wrapper
          dr="row"
          ju="flex-end"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          {popups && popups.length < 3 && (
            <ModalBtn type="primary" size="small" onClick={createModalToggle}>
              + 팝업 생성
            </ModalBtn>
          )}
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
            메인화면에 보여지는 팝업 제어할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            팝업은 최대 3개까지만 등록이 가능합니다.
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
          dataSource={popups ? popups : []}
          size="small"
        />
      </AdminContent>

      {/* CREATE MODAL */}
      <Modal
        visible={cModal}
        width={`${parseInt(POPUP_WIDTH) + 50}px`}
        title={`팝업 생성하기`}
        onCancel={createModalToggle}
        onOk={createHandler}
      >
        <ModalWrapper>
          <PopupImage
            alt="popup"
            src={
              uploadImagePath
                ? `${uploadImagePath}`
                : `https://via.placeholder.com/${POPUP_WIDTH}x${POPUP_HEIGHT}`
            }
          />
          <PreviewGuide>
            {uploadImagePath && `이미지 미리보기 입니다.`}
          </PreviewGuide>

          <UploadWrapper>
            <input
              type="file"
              name="image"
              accept=".png, .jpg"
              // multiple
              hidden
              ref={imageInput}
              onChange={onChangeImages}
            />
            <Button
              type="primary"
              onClick={clickImageUpload}
              loading={st_popupImageUploadLoading}
            >
              UPLOAD
            </Button>
          </UploadWrapper>
        </ModalWrapper>
      </Modal>

      {/* UPDATE MODAL */}
      <Modal
        visible={uModal}
        width={`${parseInt(POPUP_WIDTH) + 50}px`}
        title={`팝업 수정하기`}
        onCancel={updatePopToggle}
        onOk={updateHandler}
      >
        <ModalWrapper>
          <PopupImage
            alt="popup"
            src={
              uploadImagePath ? uploadImagePath : updateId && updateId.imagePath
            }
          />
          <PreviewGuide>이미지 미리보기 입니다.</PreviewGuide>

          <UploadWrapper>
            <input
              type="file"
              name="image"
              accept=".png, .jpg"
              // multiple
              hidden
              ref={imageInput}
              onChange={onChangeImages}
            />
            <Button
              type="primary"
              onClick={clickImageUpload}
              loading={st_popupImageUploadLoading}
            >
              UPLOAD
            </Button>
          </UploadWrapper>
        </ModalWrapper>
      </Modal>

      <Modal
        visible={deletePopVisible}
        onOk={deletePopupHandler}
        onCancel={deletePopToggle(null)}
        title="정말 삭제하시겠습니까?"
      >
        <Wrapper padding={`20px`}>
          <Wrapper>삭제 된 데이터는 다시 복구할 수 없습니다.</Wrapper>
          <Wrapper>정말 삭제하시겠습니까?</Wrapper>
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
      type: POPUP_GET_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Popup;
