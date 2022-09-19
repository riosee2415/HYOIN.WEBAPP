import React, { useCallback, useEffect, useState, useRef } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import { Table, Button, Modal, Input, Popconfirm, message, Switch } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  BANNER_UPLOAD_REQUEST,
  MAIN_BANNER_REQUEST,
  BANNER_UPDATE_REQUEST,
  BANNER_CREATE_REQUEST,
  BANNER_DELETE_REQUEST,
  BANNER_MOBILE_REQUEST,
} from "../../../reducers/banner";
import useInput from "../../../hooks/useInput";
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

const BANNER_WIDTH = `1200`;
const BANNER_HEIGHT = `440`;

const AdminContent = styled.div`
  padding: 20px;
`;

const BannerWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerImage = styled.img`
  width: 1200px;
  height: 440px;
  object-fit: cover;
`;

const MobileImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;

const UploadWrapper = styled.div`
  width: 1200px;
  margin: 5px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const MobileWrapper = styled.div`
  margin: 5px 0;
  width: 300px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const PreviewGuide = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.adminLightGrey_C};
`;

const InputStyle = styled(Input)`
  width: 500px;
  margin-left: 10px;
`;

const TextStyle = styled(Text)`
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.subTheme3_C};
  }
`;

const Mainbanner = () => {
  // LOAD CURRENT INFO AREA /////////////////////////////////////////////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);

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
  const [currentData, setCurrentData] = useState(``);
  const [currentId, setCurrentId] = useState(null);
  const [updateModal, setUpdateModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  const title = useInput(``);
  const subTitle = useInput(``);

  const imageInput = useRef();
  const mobileImageInput = useRef();

  const dispatch = useDispatch();

  ////// REDUX //////
  const {
    banners,

    uploadBannerPath,
    uploadMobilePath,
    //
    st_bannerUploadLoading,
    st_bannerUpdateDone,
    st_bannerUpdateError,
    st_bannerCreateDone,
    st_bannerCreateError,
    st_bannerDeleteDone,
    st_bannerDeleteError,
    st_bannerMobileLoading,
  } = useSelector((state) => state.banner);

  ////// USEEFFECT //////

  useEffect(() => {
    if (st_bannerUpdateDone) {
      setUpdateModal(false);

      dispatch({
        type: MAIN_BANNER_REQUEST,
      });

      return message.success(`데이터가 수정되었습니다.`);
    }
  }, [st_bannerUpdateDone]);

  useEffect(() => {
    if (st_bannerDeleteDone) {
      dispatch({
        type: MAIN_BANNER_REQUEST,
      });
      return message.success(`데이터가 삭제되었습니다.`);
    }
  }, [st_bannerDeleteDone]);

  useEffect(() => {
    if (st_bannerCreateDone) {
      setCreateModal(false);

      dispatch({
        type: MAIN_BANNER_REQUEST,
      });

      return message.success(`메인베너가 생성되었습니다.`);
    }
  }, [st_bannerCreateDone]);

  useEffect(() => {
    if (st_bannerUpdateError) {
      message.error(st_bannerUpdateError);
    }
  }, [st_bannerUpdateError]);

  useEffect(() => {
    if (st_bannerDeleteError) {
      message.error(st_bannerDeleteError);
    }
  }, [st_bannerDeleteError]);

  useEffect(() => {
    if (st_bannerCreateError) {
      message.error(st_bannerCreateError);
    }
  }, [st_bannerCreateError]);

  ////// TOGGLE //////

  const viewClick = useCallback(
    (data = {}) =>
      () => {
        setUpdateModal((prev) => !prev);

        if (!updateModal) {
          setCurrentId(data.id);
          setCurrentData(data);
          title.setValue(data.title);
          subTitle.setValue(data.subTitle);
        }
      },

    [updateModal, currentId, currentData, title.value, subTitle.value]
  );

  ////// HANDLER //////
  const deleteHandler = useCallback((id) => {
    if (!id) {
      return message.error(
        `일시적인 장애가 발생되었습니다. 잠시 후 다시 시도해주세요.`
      );
    }

    dispatch({
      type: BANNER_DELETE_REQUEST,
      data: { id },
    });
  }, []);

  const createClick = useCallback(() => {
    title.setValue(``);
    subTitle.setValue(``);

    setCreateModal((prev) => !prev);
  }, [createModal]);

  const updateClick = useCallback(() => {
    if (!currentId) {
      return message.error(`데이터가 소실되었습니다. 재접속 후 사용해주세요.`);
    }

    dispatch({
      type: BANNER_UPDATE_REQUEST,
      data: {
        id: currentId,
        title: title.value,
        imagePath: uploadBannerPath ? uploadBannerPath : currentData.imagePath,
        mobileImagePath: uploadMobilePath
          ? uploadMobilePath
          : currentData.mobileImagePath,
        subTitle: subTitle.value,
      },
    });
  }, [
    currentId,
    title.value,
    subTitle.value,
    uploadBannerPath,
    uploadMobilePath,
    currentData,
  ]);

  const clickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const clickImageMobileUpload = useCallback(() => {
    mobileImageInput.current.click();
  }, [mobileImageInput.current]);

  const bannerCreate = useCallback(() => {
    if (!uploadBannerPath) {
      return message.info(`PC 이미지를 업로드해주세요.`);
    }

    if (!uploadMobilePath) {
      return message.info(`Mobile 이미지를 업로드해주세요.`);
    }

    dispatch({
      type: BANNER_CREATE_REQUEST,
      data: {
        title: title.value,
        subTitle: subTitle.value,
        imagePath: uploadBannerPath,
        mobileImagePath: uploadMobilePath,
      },
    });
  }, [title.value, uploadBannerPath, subTitle.value, uploadMobilePath]);

  const onChangeImages = useCallback((e) => {
    if (e.target.files.length < 1) return;
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    dispatch({
      type: BANNER_UPLOAD_REQUEST,
      data: formData,
    });
  });

  const onChangeMobileImages = useCallback((e) => {
    if (e.target.files.length < 1) return;
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    dispatch({
      type: BANNER_MOBILE_REQUEST,
      data: formData,
    });
  });

  ////// DATAVIEW //////
  const columns = [
    {
      title: "번호",
      dataIndex: "num",
      align: "center",
      width: "5%",
    },
    {
      title: "제목",
      render: (data) =>
        data.title ? (
          <Text width="100%" isEllipsis={true}>
            {data.title}
          </Text>
        ) : (
          <Text width="100%" isEllipsis={true} color={Theme.lightGrey_C}>
            등록된 제목이 없습니다.
          </Text>
        ),
      width: "20%",
      ellipsis: true,
    },
    {
      title: "부제목",
      render: (data) =>
        data.subTitle ? (
          <Text width="100%" isEllipsis={true}>
            {data.subTitle}
          </Text>
        ) : (
          <Text width="100%" isEllipsis={true} color={Theme.lightGrey_C}>
            등록된 부제목이 없습니다.
          </Text>
        ),
      width: "25%",
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
        <Button size="small" onClick={viewClick(data)} type="primary">
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
        breadcrumbs={["베너 관리", "메인베너 관리"]}
        title={`메인베너 관리`}
        subTitle={`메인화면에 보여지는 이미지를 제어할 수 있습니다.`}
      />

      <AdminContent>
        <Wrapper
          dr="row"
          ju="flex-end"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          <ModalBtn type="primary" size="small" onClick={createClick}>
            + 메인배너 생성
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
            데이터 수정을 클릭 시, 보다 자세한 데이터를 볼 수 있습니다.
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
          dataSource={banners ? banners : []}
          size="small"
        />
      </AdminContent>

      {/* UPDATE MODAL */}
      <Modal
        visible={updateModal}
        width={`1250px`}
        title={`메인베너 수정하기`}
        onCancel={viewClick()}
        footer={null}
      >
        <BannerWrapper>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.adminLightGrey_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
            width="1200px"
          >
            <GuideDiv isImpo={true}>
              이미지 사이즈가 상이할 경우 화면에 올바르지 않게 보일 수 있으니
              이미지 사이즈를 확인해주세요.
            </GuideDiv>
            <GuideDiv isImpo={true}>
              PC와 Mobile 이미지 업로드는 필수입니다.
            </GuideDiv>
            <GuideDiv isImpo={true}>
              제목, 부제목은 선택 입력 사항입니다.
            </GuideDiv>
          </Wrapper>

          <BannerImage
            src={
              uploadBannerPath
                ? `${uploadBannerPath}`
                : `${currentData.imagePath}`
            }
            alt="main_banner_image"
          />
          <PreviewGuide>
            {uploadBannerPath && `이미지 미리보기 입니다.`}
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
              loading={st_bannerUploadLoading}
              size="small"
            >
              PC 이미지 업로드
            </Button>
          </UploadWrapper>

          <Wrapper width="1200px" dr="row" ju="space-between" margin="5px 0">
            <Wrapper width="auto">
              <MobileImage
                src={
                  uploadMobilePath
                    ? `${uploadMobilePath}`
                    : `${currentData.mobileImagePath}`
                }
                alt="main_banner_image"
              />
              <PreviewGuide>
                {uploadMobilePath && `이미지 미리보기 입니다.`}
              </PreviewGuide>
              <MobileWrapper>
                <input
                  type="file"
                  name="image"
                  accept=".png, .jpg"
                  // multiple
                  hidden
                  ref={mobileImageInput}
                  onChange={onChangeMobileImages}
                />
                <Button
                  size="small"
                  type="primary"
                  onClick={clickImageMobileUpload}
                  loading={st_bannerMobileLoading}
                >
                  Mobile 이미지 업로드
                </Button>
              </MobileWrapper>
            </Wrapper>
            <Wrapper width="700px">
              <Wrapper dr="row" ju="flex-end" margin="10px 0">
                <Text>제목 :</Text>
                <InputStyle
                  size="small"
                  placeholder="제목을 입력해주세요."
                  {...title}
                />
              </Wrapper>
              <Wrapper dr="row" ju="flex-end" margin="10px 0">
                <Text>부제목 :</Text>
                <InputStyle
                  size="small"
                  placeholder="부제목을 입력해주세요."
                  {...subTitle}
                />
              </Wrapper>
            </Wrapper>
            <Wrapper al={`flex-end`}>
              <Button type="primary" size="small" onClick={updateClick}>
                수정하기
              </Button>
            </Wrapper>
          </Wrapper>
        </BannerWrapper>
      </Modal>

      {/* CREATE MODAL */}
      <Modal
        visible={createModal}
        width={`1250px`}
        title={`메인베너 생성하기`}
        footer={null}
        onCancel={createClick}
      >
        <BannerWrapper>
          <Wrapper
            margin={`0px 0px 10px 0px`}
            radius="5px"
            bgColor={Theme.adminLightGrey_C}
            padding="5px"
            fontSize="13px"
            al="flex-start"
            width="1200px"
          >
            <GuideDiv isImpo={true}>
              이미지 사이즈가 상이할 경우 화면에 올바르지 않게 보일 수 있으니
              이미지 사이즈를 확인해주세요.
            </GuideDiv>
            <GuideDiv isImpo={true}>
              PC와 Mobile 이미지 업로드는 필수 입력 사항입니다.
            </GuideDiv>
            <GuideDiv isImpo={true}>
              제목, 부제목은 선택 입력 사항입니다.
            </GuideDiv>
          </Wrapper>

          <BannerImage
            src={
              uploadBannerPath
                ? `${uploadBannerPath}`
                : `https://via.placeholder.com/${BANNER_WIDTH}x${BANNER_HEIGHT}`
            }
            alt="main_banner_image"
          />
          <PreviewGuide>
            {uploadBannerPath && `이미지 미리보기 입니다.`}
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
              size="small"
              type="primary"
              onClick={clickImageUpload}
              loading={st_bannerUploadLoading}
            >
              PC 이미지 업로드
            </Button>
          </UploadWrapper>

          <Wrapper width="1200px" dr="row" ju="space-between" margin="5px 0">
            <Wrapper width="auto">
              <MobileImage
                src={
                  uploadMobilePath
                    ? `${uploadMobilePath}`
                    : `https://via.placeholder.com/300x400`
                }
                alt="main_banner_image"
              />
              <PreviewGuide>
                {uploadMobilePath && `이미지 미리보기 입니다.`}
              </PreviewGuide>
              <MobileWrapper>
                <input
                  type="file"
                  name="image"
                  accept=".png, .jpg"
                  // multiple
                  hidden
                  ref={mobileImageInput}
                  onChange={onChangeMobileImages}
                />
                <Button
                  size="small"
                  type="primary"
                  onClick={clickImageMobileUpload}
                  loading={st_bannerMobileLoading}
                >
                  Mobile 이미지 업로드
                </Button>
              </MobileWrapper>
            </Wrapper>
            <Wrapper width="700px">
              <Wrapper dr="row" ju="flex-end" margin="10px 0">
                <Text>제목 :</Text>
                <InputStyle
                  size="small"
                  placeholder="제목을 입력해주세요."
                  {...title}
                />
              </Wrapper>
              <Wrapper dr="row" ju="flex-end" margin="10px 0">
                <Text>부제목 :</Text>
                <InputStyle
                  size="small"
                  placeholder="부제목을 입력해주세요."
                  {...subTitle}
                />
              </Wrapper>
            </Wrapper>
            <Wrapper al={`flex-end`}>
              <Button type="primary" size="small" onClick={bannerCreate}>
                생성하기
              </Button>
            </Wrapper>
          </Wrapper>
        </BannerWrapper>
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
      type: MAIN_BANNER_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Mainbanner;
