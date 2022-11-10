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
  ADMIN_WEEK_MENU_LIST_REQUEST,
  WEEK_MENU_AM_IMG_UPLOAD_REQUEST,
  WEEK_MENU_BR_IMG_UPLOAD_REQUEST,
  WEEK_MENU_CREATE_REQUEST,
  WEEK_MENU_DELETE_REQUEST,
  WEEK_MENU_DI_IMG_UPLOAD_REQUEST,
  WEEK_MENU_IMAGE_RESET,
  WEEK_MENU_LU_IMG_UPLOAD_REQUEST,
  WEEK_MENU_PM_IMG_UPLOAD_REQUEST,
  WEEK_MENU_UPDATE_REQUEST,
} from "../../../reducers/weekMenu";

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

const List = ({ router }) => {
  ////// GOLBAL STATE //////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);

  const {
    adminWeekMenuList,

    weekMenuBrImgPath,
    weekMenuLuImgPath,
    weekMenuDiImgPath,
    weekMenuAMImgPath,
    weekMenuPMImgPath,
    //
    st_adminWeekMenuListError,

    st_weekMenuBrImgUploadLoading,
    st_weekMenuBrImgUploadDone,
    st_weekMenuBrImgUploadError,

    st_weekMenuLuImgUploadLoading,
    st_weekMenuLuImgUploadDone,
    st_weekMenuLuImgUploadError,

    st_weekMenuDiImgUploadLoading,
    st_weekMenuDiImgUploadDone,
    st_weekMenuDiImgUploadError,

    st_weekMenuAMImgUploadLoading,
    st_weekMenuAMImgUploadDone,
    st_weekMenuAMImgUploadError,

    st_weekMenuPMImgUploadLoading,
    st_weekMenuPMImgUploadDone,
    st_weekMenuPMImgUploadError,

    st_weekMenuCreateDone,
    st_weekMenuCreateError,

    st_weekMenuUpdateDone,
    st_weekMenuUpdateError,

    st_weekMenuDeleteDone,
    st_weekMenuDeleteError,
  } = useSelector((state) => state.weekMenu);

  ////// HOOKS //////
  const dispatch = useDispatch();

  const brImageRef = useRef();
  const luImageRef = useRef();
  const diImageRef = useRef();
  const amImageRef = useRef();
  const pmImageRef = useRef();

  const [createForm] = Form.useForm();
  const [updateForm] = Form.useForm();

  // 날짜
  const [selectDate, setSelectDate] = useState(moment());

  // 모달
  const [cModal, setCModal] = useState(false);

  const [uData, setUData] = useState(null);
  const [uModal, setUModal] = useState(false);

  ////// REDUX //////

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
      type: ADMIN_WEEK_MENU_LIST_REQUEST,
      data: {
        searchMonth: moment().format("YYYY-MM"),
      },
    });
  }, []);

  useEffect(() => {
    if (st_adminWeekMenuListError) {
      return message.error(st_adminWeekMenuListError);
    }
  }, [st_adminWeekMenuListError]);

  // 아침메뉴 업로드
  useEffect(() => {
    if (st_weekMenuBrImgUploadDone) {
      return message.success("아침메뉴가 업로드 되었습니다.");
    }
  }, [st_weekMenuBrImgUploadDone]);

  useEffect(() => {
    if (st_weekMenuBrImgUploadError) {
      return message.error(st_weekMenuBrImgUploadError);
    }
  }, [st_weekMenuBrImgUploadError]);

  // 점심메뉴 업로드
  useEffect(() => {
    if (st_weekMenuLuImgUploadDone) {
      return message.success("점심메뉴가 업로드 되었습니다.");
    }
  }, [st_weekMenuLuImgUploadDone]);

  useEffect(() => {
    if (st_weekMenuLuImgUploadError) {
      return message.error(st_weekMenuLuImgUploadError);
    }
  }, [st_weekMenuLuImgUploadError]);

  // 저녁메뉴 업로드
  useEffect(() => {
    if (st_weekMenuDiImgUploadDone) {
      return message.success("저녁메뉴가 업로드 되었습니다.");
    }
  }, [st_weekMenuDiImgUploadDone]);

  useEffect(() => {
    if (st_weekMenuDiImgUploadError) {
      return message.error(st_weekMenuDiImgUploadError);
    }
  }, [st_weekMenuDiImgUploadError]);

  // 오전간식 업로드
  useEffect(() => {
    if (st_weekMenuAMImgUploadDone) {
      return message.success("오전간식이 업로드 되었습니다.");
    }
  }, [st_weekMenuAMImgUploadDone]);

  useEffect(() => {
    if (st_weekMenuAMImgUploadError) {
      return message.error(st_weekMenuAMImgUploadError);
    }
  }, [st_weekMenuAMImgUploadError]);

  // 오후간식 업로드
  useEffect(() => {
    if (st_weekMenuPMImgUploadDone) {
      return message.success("오후간식이 업로드 되었습니다.");
    }
  }, [st_weekMenuPMImgUploadDone]);

  useEffect(() => {
    if (st_weekMenuPMImgUploadError) {
      return message.error(st_weekMenuPMImgUploadError);
    }
  }, [st_weekMenuPMImgUploadError]);

  // 생성하기
  useEffect(() => {
    if (st_weekMenuCreateDone) {
      dispatch({
        type: ADMIN_WEEK_MENU_LIST_REQUEST,
        data: {
          searchMonth: moment().format("YYYY-MM"),
        },
      });

      dispatch({
        type: WEEK_MENU_IMAGE_RESET,
      });

      cModalToggle(null);
      createForm.resetFields();

      return message.success("식단표가 생성되었습니다.");
    }
  }, [st_weekMenuCreateDone]);

  useEffect(() => {
    if (st_weekMenuCreateError) {
      return message.error(st_weekMenuCreateError);
    }
  }, [st_weekMenuCreateError]);

  // 수정하기
  useEffect(() => {
    if (st_weekMenuUpdateDone) {
      dispatch({
        type: ADMIN_WEEK_MENU_LIST_REQUEST,
        data: {
          searchMonth: moment().format("YYYY-MM"),
        },
      });

      dispatch({
        type: WEEK_MENU_IMAGE_RESET,
      });

      uModalToggle(null);
      return message.success("식단표가 수정되었습니다.");
    }
  }, [st_weekMenuUpdateDone]);

  useEffect(() => {
    if (st_weekMenuUpdateError) {
      return message.error(st_weekMenuUpdateError);
    }
  }, [st_weekMenuUpdateError]);

  // 삭제하기
  useEffect(() => {
    if (st_weekMenuDeleteDone) {
      dispatch({
        type: ADMIN_WEEK_MENU_LIST_REQUEST,
        data: {
          searchMonth: moment().format("YYYY-MM"),
        },
      });

      uModalToggle(null);
      return message.success("식단표가 삭제되었습니다.");
    }
  }, [st_weekMenuDeleteDone]);

  useEffect(() => {
    if (st_weekMenuDeleteError) {
      return message.error(st_weekMenuDeleteError);
    }
  }, [st_weekMenuDeleteError]);

  ////// TOGGLE ///////

  // 생성 모달
  const cModalToggle = useCallback(() => {
    setCModal((prev) => !prev);
  }, [cModal]);

  // 수정 모달
  const uModalToggle = useCallback(
    (data) => {
      setUModal((prev) => !prev);

      if (data) {
        setUData(data);
        updateForm.setFieldsValue({
          sDate: moment(data.saveDate),
          breakfast1: data.breakfast1,
          breakfast2: data.breakfast2,
          breakfast3: data.breakfast3,
          breakfast4: data.breakfast4,
          breakfast5: data.breakfast5,
          breakfast6: data.breakfast6,
          brCalorie: data.breakfastCalorie,
          lunch1: data.lunch1,
          lunch2: data.lunch2,
          lunch3: data.lunch3,
          lunch4: data.lunch4,
          lunch5: data.lunch5,
          lunch6: data.lunch6,
          luCalorie: data.lunchCalorie,
          dinner1: data.dinner1,
          dinner2: data.dinner2,
          dinner3: data.dinner3,
          dinner4: data.dinner4,
          dinner5: data.dinner5,
          dinner6: data.dinner6,
          diCalorie: data.dinnerCalorie,
          amSnack1: data.morningSnack1,
          amSnack2: data.morningSnack2,
          pmSnack1: data.afternoonSnack1,
          pmSnack2: data.afternoonSnack2,
          fnDiet: data.functionDiet,
          diabetes: data.diabetes,
          scene: data.scene,
          lowSalt: data.lowSalt,
        });
      }
    },
    [uData, uModal]
  );

  ////// HANDLER //////
  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  // 날짜 선택
  const selectDateHandler = useCallback(
    (data) => {
      setSelectDate(data);
    },
    [selectDate]
  );

  // 아침메뉴 업로드
  const onChangeBrImages = useCallback((e) => {
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    if (e.target.files.length < 1) {
      return;
    }

    dispatch({
      type: WEEK_MENU_BR_IMG_UPLOAD_REQUEST,
      data: formData,
    });
  });

  const clickBrImageUpload = useCallback(() => {
    brImageRef.current.click();
  }, [brImageRef.current]);

  // 점심메뉴 업로드
  const onChangeLuImages = useCallback((e) => {
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    if (e.target.files.length < 1) {
      return;
    }

    dispatch({
      type: WEEK_MENU_LU_IMG_UPLOAD_REQUEST,
      data: formData,
    });
  });

  const clickLuImageUpload = useCallback(() => {
    luImageRef.current.click();
  }, [luImageRef.current]);

  // 저녁메뉴 업로드
  const onChangeDiImages = useCallback((e) => {
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    if (e.target.files.length < 1) {
      return;
    }

    dispatch({
      type: WEEK_MENU_DI_IMG_UPLOAD_REQUEST,
      data: formData,
    });
  });

  const clickDiImageUpload = useCallback(() => {
    diImageRef.current.click();
  }, [diImageRef.current]);

  // 오전간식 업로드
  const onChangeAmImages = useCallback((e) => {
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    if (e.target.files.length < 1) {
      return;
    }

    dispatch({
      type: WEEK_MENU_AM_IMG_UPLOAD_REQUEST,
      data: formData,
    });
  });

  const clickAmImageUpload = useCallback(() => {
    amImageRef.current.click();
  }, [amImageRef.current]);

  // 오후간식 업로드
  const onChangePmImages = useCallback((e) => {
    const formData = new FormData();

    [].forEach.call(e.target.files, (file) => {
      formData.append("image", file);
    });

    if (e.target.files.length < 1) {
      return;
    }

    dispatch({
      type: WEEK_MENU_PM_IMG_UPLOAD_REQUEST,
      data: formData,
    });
  });

  const clickPmImageUpload = useCallback(() => {
    pmImageRef.current.click();
  }, [pmImageRef.current]);

  // 생성하기
  const createHandler = useCallback(
    (data) => {
      dispatch({
        type: WEEK_MENU_CREATE_REQUEST,
        data: {
          saveDate: moment(data.sDate).format("YYYY-MM-DD"),
          breakfast1: data.breakfast1,
          breakfast2: data.breakfast2,
          breakfast3: data.breakfast3,
          breakfast4: data.breakfast4,
          breakfast5: data.breakfast5,
          breakfast6: data.breakfast6,
          breakfastCalorie: data.brCalorie,
          breakfaseImage: weekMenuBrImgPath,
          lunch1: data.lunch1,
          lunch2: data.lunch2,
          lunch3: data.lunch3,
          lunch4: data.lunch4,
          lunch5: data.lunch5,
          lunch6: data.lunch6,
          lunchCalorie: data.luCalorie,
          lunchImage: weekMenuLuImgPath,
          dinner1: data.dinner1,
          dinner2: data.dinner2,
          dinner3: data.dinner3,
          dinner4: data.dinner4,
          dinner5: data.dinner5,
          dinner6: data.dinner6,
          dinnerCalorie: data.diCalorie,
          dinnerImage: weekMenuDiImgPath,
          morningSnack1: data.amSnack1,
          morningSnack2: data.amSnack2,
          morningSnackImage: weekMenuAMImgPath,
          afternoonSnack1: data.pmSnack1,
          afternoonSnack2: data.pmSnack2,
          afternoonSnackImage: weekMenuPMImgPath,
          functionDiet: data.fnDiet,
          diabetes: data.diabetes,
          scene: data.scene,
          lowSalt: data.lowSalt,
        },
      });
    },
    [
      weekMenuBrImgPath,
      weekMenuLuImgPath,
      weekMenuDiImgPath,
      weekMenuAMImgPath,
      weekMenuPMImgPath,
    ]
  );

  // 내용 수정하기
  const cUpdateHandler = useCallback(
    (data) => {
      dispatch({
        type: WEEK_MENU_UPDATE_REQUEST,
        data: {
          id: uData.id,
          breakfast1: data.breakfast1,
          breakfast2: data.breakfast2,
          breakfast3: data.breakfast3,
          breakfast4: data.breakfast4,
          breakfast5: data.breakfast5,
          breakfast6: data.breakfast6,
          breakfastCalorie: data.brCalorie,
          breakfaseImage: weekMenuBrImgPath
            ? weekMenuBrImgPath
            : uData.breakfaseImage,
          lunch1: data.lunch1,
          lunch2: data.lunch2,
          lunch3: data.lunch3,
          lunch4: data.lunch4,
          lunch5: data.lunch5,
          lunch6: data.lunch6,
          lunchCalorie: data.luCalorie,
          lunchImage: weekMenuLuImgPath ? weekMenuLuImgPath : uData.lunchImage,
          dinner1: data.dinner1,
          dinner2: data.dinner2,
          dinner3: data.dinner3,
          dinner4: data.dinner4,
          dinner5: data.dinner5,
          dinner6: data.dinner6,
          dinnerCalorie: data.diCalorie,
          dinnerImage: weekMenuDiImgPath
            ? weekMenuDiImgPath
            : uData.dinnerImage,
          morningSnack1: data.amSnack1,
          morningSnack2: data.amSnack2,
          morningSnackImage: weekMenuAMImgPath
            ? weekMenuAMImgPath
            : uData.morningSnackImage,
          afternoonSnack1: data.pmSnack1,
          afternoonSnack2: data.pmSnack2,
          afternoonSnackImage: weekMenuPMImgPath
            ? weekMenuPMImgPath
            : uData.afternoonSnackImage,
          functionDiet: data.fnDiet,
          diabetes: data.diabetes,
          scene: data.scene,
          lowSalt: data.lowSalt,
        },
      });
    },
    [
      uData,
      weekMenuBrImgPath,
      weekMenuLuImgPath,
      weekMenuDiImgPath,
      weekMenuAMImgPath,
      weekMenuPMImgPath,
    ]
  );

  const deleteHandler = useCallback(() => {
    dispatch({
      type: WEEK_MENU_DELETE_REQUEST,
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
            height={`340px`}
            al={`flex-start`}
            ju={`flex-start`}
            overflow={`auto`}
          >
            <Wrapper height={`auto`}>
              {/* LIST START */}
              {adminWeekMenuList &&
                adminWeekMenuList
                  .filter(
                    (data) => data.viewSaveDate === value.format("YYYY-MM-DD")
                  )
                  .map((data) => {
                    return (
                      <HoverListWrapper
                        key={data.id}
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
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.breakfast1}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.breakfast2}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.breakfast3}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.breakfast4}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.breakfast5}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.breakfast6}
                          </Text>
                        </Wrapper>
                        <Image
                          width={`16px`}
                          height={`16px`}
                          margin={`10px 0 0`}
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_bookmark.png`}
                          alt={`bookmark_icon`}
                        />
                        <Wrapper
                          width={`calc(100% - 20px)`}
                          margin={`10px 0 0`}
                          al={`flex-start`}
                        >
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.lunch1}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.lunch2}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.lunch3}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.lunch4}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.lunch5}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.lunch6}
                          </Text>
                        </Wrapper>
                        <Image
                          width={`16px`}
                          height={`16px`}
                          margin={`10px 0 0`}
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_bookmark.png`}
                          alt={`bookmark_icon`}
                        />
                        <Wrapper
                          width={`calc(100% - 20px)`}
                          margin={`10px 0 0`}
                          al={`flex-start`}
                        >
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.dinner1}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.dinner2}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.dinner3}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.dinner4}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.dinner5}
                          </Text>
                          <Text
                            fontSize={`14px`}
                            lineHeight={`1.2`}
                            textAlign={`start`}
                          >
                            {data.dinner6}
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
    [selectDate, adminWeekMenuList]
  );

  ////// DATAVIEW //////

  return (
    <AdminLayout>
      <PageHeader
        breadcrumbs={["식단표 관리", "주간보호식단표 리스트"]}
        title={`주간보호식단표 리스트`}
        subTitle={`홈페이지에 보여지는 주간보호식단표를 관리할 수 있습니다.`}
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
            식단표 생성
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
        title={`식단표 생성하기`}
        visible={cModal}
        onCancel={() => cModalToggle(null)}
        width={`1100px`}
        footer={null}
      >
        <Wrapper dr={`row`} ju={`space-between`} al={`flex-start`}>
          <Wrapper width={`40%`}>
            <Form
              style={{ width: `100%` }}
              form={createForm}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              onFinish={createHandler}
            >
              <Form.Item label={`날짜`} name={`sDate`}>
                <DatePicker
                  style={{ width: 200 }}
                  size="small"
                  placeholder="날짜를 선택해주세요."
                />
              </Form.Item>

              <Form.Item label={`아침메뉴1`} name={`breakfast1`}>
                <Input
                  size="small"
                  placeholder="아침메뉴1을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침메뉴2`} name={`breakfast2`}>
                <Input
                  size="small"
                  placeholder="아침메뉴2을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침메뉴3`} name={`breakfast3`}>
                <Input
                  size="small"
                  placeholder="아침메뉴3을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침메뉴4`} name={`breakfast4`}>
                <Input
                  size="small"
                  placeholder="아침메뉴4을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침메뉴5`} name={`breakfast5`}>
                <Input
                  size="small"
                  placeholder="아침메뉴5을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침메뉴6`} name={`breakfast6`}>
                <Input
                  size="small"
                  placeholder="아침메뉴6을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침칼로리`} name={`brCalorie`}>
                <Input
                  size="small"
                  placeholder="아침칼로리(Kcal)을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴1`} name={`lunch1`}>
                <Input
                  size="small"
                  placeholder="점심메뉴1을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴2`} name={`lunch2`}>
                <Input
                  size="small"
                  placeholder="점심메뉴2을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴3`} name={`lunch3`}>
                <Input
                  size="small"
                  placeholder="점심메뉴3을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴4`} name={`lunch4`}>
                <Input
                  size="small"
                  placeholder="점심메뉴4을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴5`} name={`lunch5`}>
                <Input
                  size="small"
                  placeholder="점심메뉴5을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴6`} name={`lunch6`}>
                <Input
                  size="small"
                  placeholder="점심메뉴6을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심칼로리`} name={`luCalorie`}>
                <Input
                  size="small"
                  placeholder="점심칼로리(Kcal)을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴1`} name={`dinner1`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴1을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴2`} name={`dinner2`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴2을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴3`} name={`dinner3`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴3을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴4`} name={`dinner4`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴4을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴5`} name={`dinner5`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴5을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴6`} name={`dinner6`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴6을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁칼로리`} name={`diCalorie`}>
                <Input
                  size="small"
                  placeholder="저녁칼로리(Kcal)을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`오전간식1`} name={`amSnack1`}>
                <Input
                  size="small"
                  placeholder="오전간식1을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`오전간식2`} name={`amSnack2`}>
                <Input
                  size="small"
                  placeholder="오전간식2을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`오후간식1`} name={`pmSnack1`}>
                <Input
                  size="small"
                  placeholder="오후간식1을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`오후간식2`} name={`pmSnack2`}>
                <Input
                  size="small"
                  placeholder="오후간식2을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`기능별식이`} name={`fnDiet`}>
                <Input
                  size="small"
                  placeholder="기능별식이를 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`당뇨식단`} name={`diabetes`}>
                <Input
                  size="small"
                  placeholder="당뇨식단를 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`경관식단`} name={`scene`}>
                <Input
                  size="small"
                  placeholder="경관식단을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저염식단`} name={`lowSalt`}>
                <Input
                  size="small"
                  placeholder="저염식단을 입력해주세요."
                  allowClear
                />
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
          </Wrapper>

          <Wrapper width={`58%`} dr={`row`} ju={`space-between`}>
            <Wrapper width={`auto`} margin={`0 0 30px`}>
              <Image
                width={`300px`}
                height={`300px`}
                src={
                  weekMenuBrImgPath
                    ? weekMenuBrImgPath
                    : `https://via.placeholder.com/300pxx300px`
                }
                alt={`image`}
              />

              <input
                hidden
                type={`file`}
                ref={brImageRef}
                accept={`.jpg, .png`}
                onChange={onChangeBrImages}
              />
              <Button
                loading={st_weekMenuBrImgUploadLoading}
                style={{ width: `150px` }}
                size="small"
                type="primary"
                onClick={clickBrImageUpload}
              >
                아침식단 업로드
              </Button>
            </Wrapper>

            <Wrapper width={`auto`} margin={`0 0 30px`}>
              <Image
                width={`300px`}
                height={`300px`}
                src={
                  weekMenuLuImgPath
                    ? weekMenuLuImgPath
                    : `https://via.placeholder.com/300pxx300px`
                }
                alt={`image`}
              />

              <input
                hidden
                type={`file`}
                ref={luImageRef}
                accept={`.jpg, .png`}
                onChange={onChangeLuImages}
              />
              <Button
                loading={st_weekMenuLuImgUploadLoading}
                style={{ width: `150px` }}
                size="small"
                type="primary"
                onClick={clickLuImageUpload}
              >
                점심식단 업로드
              </Button>
            </Wrapper>

            <Wrapper width={`auto`} margin={`0 0 30px`}>
              <Image
                width={`300px`}
                height={`300px`}
                src={
                  weekMenuDiImgPath
                    ? weekMenuDiImgPath
                    : `https://via.placeholder.com/300pxx300px`
                }
                alt={`image`}
              />

              <input
                hidden
                type={`file`}
                ref={diImageRef}
                accept={`.jpg, .png`}
                onChange={onChangeDiImages}
              />
              <Button
                loading={st_weekMenuDiImgUploadLoading}
                style={{ width: `150px` }}
                size="small"
                type="primary"
                onClick={clickDiImageUpload}
              >
                저녁식단 업로드
              </Button>
            </Wrapper>

            <Wrapper width={`auto`} margin={`0 0 30px`}>
              <Image
                width={`300px`}
                height={`300px`}
                src={
                  weekMenuAMImgPath
                    ? weekMenuAMImgPath
                    : `https://via.placeholder.com/300pxx300px`
                }
                alt={`image`}
              />

              <input
                hidden
                type={`file`}
                ref={amImageRef}
                accept={`.jpg, .png`}
                onChange={onChangeAmImages}
              />
              <Button
                loading={st_weekMenuAMImgUploadLoading}
                style={{ width: `150px` }}
                size="small"
                type="primary"
                onClick={clickAmImageUpload}
              >
                오전간식 업로드
              </Button>
            </Wrapper>

            <Wrapper width={`auto`} margin={`0 0 30px`}>
              <Image
                width={`300px`}
                height={`300px`}
                src={
                  weekMenuPMImgPath
                    ? weekMenuPMImgPath
                    : `https://via.placeholder.com/300pxx300px`
                }
                alt={`image`}
              />

              <input
                hidden
                type={`file`}
                ref={pmImageRef}
                accept={`.jpg, .png`}
                onChange={onChangePmImages}
              />
              <Button
                loading={st_weekMenuPMImgUploadLoading}
                style={{ width: `150px` }}
                size="small"
                type="primary"
                onClick={clickPmImageUpload}
              >
                오후간식 업로드
              </Button>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Modal>

      {/* UPDATE MODAL */}
      <Modal
        title={`상세정보`}
        visible={uModal}
        width={`1100px`}
        onCancel={() => uModalToggle(null)}
        footer={null}
      >
        <Wrapper dr={`row`} ju={`space-between`} al={`flex-start`}>
          <Wrapper width={`40%`}>
            <Form
              style={{ width: `100%` }}
              form={updateForm}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              onFinish={cUpdateHandler}
            >
              <Form.Item label={`날짜`} name={`sDate`}>
                <DatePicker
                  style={{ width: 200 }}
                  size="small"
                  placeholder="날짜를 선택해주세요."
                  disabled
                />
              </Form.Item>

              <Form.Item label={`아침메뉴1`} name={`breakfast1`}>
                <Input
                  size="small"
                  placeholder="아침메뉴1을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침메뉴2`} name={`breakfast2`}>
                <Input
                  size="small"
                  placeholder="아침메뉴2을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침메뉴3`} name={`breakfast3`}>
                <Input
                  size="small"
                  placeholder="아침메뉴3을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침메뉴4`} name={`breakfast4`}>
                <Input
                  size="small"
                  placeholder="아침메뉴4을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침메뉴5`} name={`breakfast5`}>
                <Input
                  size="small"
                  placeholder="아침메뉴5을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침메뉴6`} name={`breakfast6`}>
                <Input
                  size="small"
                  placeholder="아침메뉴6을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`아침칼로리`} name={`brCalorie`}>
                <Input
                  size="small"
                  placeholder="아침칼로리(Kcal)을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴1`} name={`lunch1`}>
                <Input
                  size="small"
                  placeholder="점심메뉴1을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴2`} name={`lunch2`}>
                <Input
                  size="small"
                  placeholder="점심메뉴2을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴3`} name={`lunch3`}>
                <Input
                  size="small"
                  placeholder="점심메뉴3을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴4`} name={`lunch4`}>
                <Input
                  size="small"
                  placeholder="점심메뉴4을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴5`} name={`lunch5`}>
                <Input
                  size="small"
                  placeholder="점심메뉴5을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심메뉴6`} name={`lunch6`}>
                <Input
                  size="small"
                  placeholder="점심메뉴6을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`점심칼로리`} name={`luCalorie`}>
                <Input
                  size="small"
                  placeholder="점심칼로리(Kcal)을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴1`} name={`dinner1`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴1을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴2`} name={`dinner2`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴2을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴3`} name={`dinner3`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴3을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴4`} name={`dinner4`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴4을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴5`} name={`dinner5`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴5을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁메뉴6`} name={`dinner6`}>
                <Input
                  size="small"
                  placeholder="저녁메뉴6을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저녁칼로리`} name={`diCalorie`}>
                <Input
                  size="small"
                  placeholder="저녁칼로리(Kcal)을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`오전간식1`} name={`amSnack1`}>
                <Input
                  size="small"
                  placeholder="오전간식1을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`오전간식2`} name={`amSnack2`}>
                <Input
                  size="small"
                  placeholder="오전간식2을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`오후간식1`} name={`pmSnack1`}>
                <Input
                  size="small"
                  placeholder="오후간식1을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`오후간식2`} name={`pmSnack2`}>
                <Input
                  size="small"
                  placeholder="오후간식2을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`기능별식이`} name={`fnDiet`}>
                <Input
                  size="small"
                  placeholder="기능별식이를 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`당뇨식단`} name={`diabetes`}>
                <Input
                  size="small"
                  placeholder="당뇨식단를 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`경관식단`} name={`scene`}>
                <Input
                  size="small"
                  placeholder="경관식단을 입력해주세요."
                  allowClear
                />
              </Form.Item>

              <Form.Item label={`저염식단`} name={`lowSalt`}>
                <Input
                  size="small"
                  placeholder="저염식단을 입력해주세요."
                  allowClear
                />
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
          </Wrapper>

          <Wrapper width={`58%`} dr={`row`} ju={`space-between`}>
            <Wrapper width={`auto`} margin={`0 0 30px`}>
              <Image
                width={`300px`}
                height={`300px`}
                src={
                  weekMenuBrImgPath
                    ? weekMenuBrImgPath
                    : uData && uData.breakfaseImage
                }
                alt={`image`}
              />

              <input
                hidden
                type={`file`}
                ref={brImageRef}
                accept={`.jpg, .png`}
                onChange={onChangeBrImages}
              />
              <Button
                loading={st_weekMenuBrImgUploadLoading}
                style={{ width: `150px` }}
                size="small"
                type="primary"
                onClick={clickBrImageUpload}
              >
                아침식단 업로드
              </Button>
            </Wrapper>

            <Wrapper width={`auto`} margin={`0 0 30px`}>
              <Image
                width={`300px`}
                height={`300px`}
                src={
                  weekMenuLuImgPath
                    ? weekMenuLuImgPath
                    : uData && uData.lunchImage
                }
                alt={`image`}
              />

              <input
                hidden
                type={`file`}
                ref={luImageRef}
                accept={`.jpg, .png`}
                onChange={onChangeLuImages}
              />
              <Button
                loading={st_weekMenuLuImgUploadLoading}
                style={{ width: `150px` }}
                size="small"
                type="primary"
                onClick={clickLuImageUpload}
              >
                점심식단 업로드
              </Button>
            </Wrapper>

            <Wrapper width={`auto`} margin={`0 0 30px`}>
              <Image
                width={`300px`}
                height={`300px`}
                src={
                  weekMenuDiImgPath
                    ? weekMenuDiImgPath
                    : uData && uData.dinnerImage
                }
                alt={`image`}
              />

              <input
                hidden
                type={`file`}
                ref={diImageRef}
                accept={`.jpg, .png`}
                onChange={onChangeDiImages}
              />
              <Button
                loading={st_weekMenuDiImgUploadLoading}
                style={{ width: `150px` }}
                size="small"
                type="primary"
                onClick={clickDiImageUpload}
              >
                저녁식단 업로드
              </Button>
            </Wrapper>

            <Wrapper width={`auto`} margin={`0 0 30px`}>
              <Image
                width={`300px`}
                height={`300px`}
                src={
                  weekMenuAMImgPath
                    ? weekMenuAMImgPath
                    : uData && uData.morningSnackImage
                }
                alt={`image`}
              />

              <input
                hidden
                type={`file`}
                ref={amImageRef}
                accept={`.jpg, .png`}
                onChange={onChangeAmImages}
              />
              <Button
                loading={st_weekMenuAMImgUploadLoading}
                style={{ width: `150px` }}
                size="small"
                type="primary"
                onClick={clickAmImageUpload}
              >
                오전간식 업로드
              </Button>
            </Wrapper>

            <Wrapper width={`auto`} margin={`0 0 30px`}>
              <Image
                width={`300px`}
                height={`300px`}
                src={
                  weekMenuPMImgPath
                    ? weekMenuPMImgPath
                    : uData && uData.afternoonSnackImage
                }
                alt={`image`}
              />

              <input
                hidden
                type={`file`}
                ref={pmImageRef}
                accept={`.jpg, .png`}
                onChange={onChangePmImages}
              />
              <Button
                loading={st_weekMenuPMImgUploadLoading}
                style={{ width: `150px` }}
                size="small"
                type="primary"
                onClick={clickPmImageUpload}
              >
                오후간식 업로드
              </Button>
            </Wrapper>
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
      type: ADMIN_WEEK_MENU_LIST_REQUEST,
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

export default withRouter(List);
