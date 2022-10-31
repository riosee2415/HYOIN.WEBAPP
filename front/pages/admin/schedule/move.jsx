import React, { useCallback, useEffect, useState, useRef } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import styled from "styled-components";
import { Button, DatePicker, Input, message, Modal, Table } from "antd";

import { useDispatch, useSelector } from "react-redux";

import { withRouter } from "next/router";

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
import {
  MOVE_SERVICE_CAR_CREATE_REQUEST,
  MOVE_SERVICE_CAR_UPDATE_REQUEST,
  MOVE_SERVICE_CREATE_REQUEST,
  MOVE_SERVICE_LIST_REQUEST,
  MOVE_SERVICE_TIME_UPDATE_REQUEST,
} from "../../../reducers/moveService";
import UseAdminInput from "../../../hooks/useAdminInput";

const AdminContent = styled.div`
  padding: 20px;
`;

const Move = ({ router }) => {
  // LOAD CURRENT INFO AREA /////////////////////////////////////////////
  const { me, st_loadMyInfoDone } = useSelector((state) => state.user);
  const {
    moveServiceList,
    carList,
    timeList,

    //

    st_moveServiceCarCreateError,
    st_moveServiceCarUpdateDone,
    //
    st_moveServiceTimeUpdateDone,
  } = useSelector((state) => state.moveService);

  console.log(moveServiceList, carList, timeList);

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
  const [vModal, setVModal] = useState(false); // 차수 수정하기 모달

  ////// REDUX //////
  const dispatch = useDispatch();

  ////// USEEFFECT //////

  // DONE
  useEffect(() => {
    if (st_moveServiceTimeUpdateDone) {
      dispatch({
        type: MOVE_SERVICE_LIST_REQUEST,
        data: {
          searchDate: "2022-10-29",
        },
      });

      return message.success("기사님 정보가 수정되었습니다.");
    }
  }, [st_moveServiceTimeUpdateDone]);

  useEffect(() => {
    if (st_moveServiceCarUpdateDone) {
      dispatch({
        type: MOVE_SERVICE_LIST_REQUEST,
        data: {
          searchDate: "2022-10-29",
        },
      });

      return message.success("차 번호가 수정되었습니다.");
    }
  }, [st_moveServiceCarUpdateDone]);

  // ERROR
  useEffect(() => {
    if (st_moveServiceCarCreateError) {
      return message.error(st_moveServiceCarCreateError);
    }
  }, [st_moveServiceCarCreateError]);

  ////// TOGGLE ///////

  // 차수 수정하기 모달 토글
  const vModalToggle = useCallback(() => {
    setVModal(!vModal);
  }, [vModal]);

  ////// HANDLER ///////

  // 차수 생성하기
  //   const serviceCreateHandler = useCallback(() => {
  //     dispatch({
  //       type : MOVE_SERVICE_CREATE_REQUEST,
  //       data : {
  //         degree
  // passenger
  // count
  // carId
  // timeId
  //       }
  //     })
  //   } ,[])

  // 검색하기
  const dateHandler = useCallback((data) => {
    dispatch({
      type: MOVE_SERVICE_LIST_REQUEST,
      data: {
        searchDate: data.format("YYYY-MM-DD"),
      },
    });
  }, []);

  ////// DATAVIEW //////
  const columns = [
    {
      title: "날짜",
      dataIndex: "viewMoveDate",
    },
    {
      title: "호차",
      dataIndex: "carCount",
    },
    {
      title: "차번호",
      render: (data) => {
        return (
          <UseAdminInput
            isNum={true}
            data={data}
            init={data.carNum}
            REQUEST_TARGET={MOVE_SERVICE_CAR_UPDATE_REQUEST}
            DATA_TARGET={{
              id: data.id,
              carNum: data.carNum,
            }}
          />
        );
      },
      width: 200,
    },
    {
      title: "기사님",
      children: [
        {
          title: "오전",
          render: (data) => {
            console.log(data);
            return (
              <UseAdminInput
                placeholder={"오전 기사님 성함"}
                data={data}
                init={"33"}
                REQUEST_TARGET={MOVE_SERVICE_TIME_UPDATE_REQUEST}
                DATA_TARGET={{
                  id: data.id,
                  moveTime: "오전",
                  moveName: "33",
                }}
              />
            );
          },

          width: 200,
        },
        {
          title: "오후",
          render: () => {
            return (
              <Wrapper dr={`row`} ju={`space-between`}>
                <Input
                  size="small"
                  style={{ width: `calc(100% - 45px)` }}
                  placeholder="오후 기사님 성함"
                />

                <Button size="small" type="primary">
                  수정
                </Button>
              </Wrapper>
            );
          },
          width: 200,
        },
      ],
    },
    {
      title: "차수",
      render: () => (
        <Button size="small" type="primary" onClick={vModalToggle}>
          차수 수정하기
        </Button>
      ),
    },
    {
      title: "생성일",
      dataIndex: "viewCreatedAt",
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
          ju="space-between"
          margin="0px 0px 10px 0px"
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
          padding="5px 0px"
        >
          <Wrapper dr={`row`} width={`auto`}>
            <DatePicker
              style={{ width: `300px` }}
              size="small"
              onChange={dateHandler}
            />
          </Wrapper>

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

        <Table columns={columns} dataSource={carList} bordered size="small" />
      </AdminContent>

      <Modal
        visible={vModal}
        title="차수 수정하기"
        footer={null}
        onCancel={vModalToggle}
        width="900px"
      >
        <Wrapper
          al={`flex-end`}
          padding={`0 0 5px`}
          margin={`0 0 5px`}
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
        >
          <ModalBtn type="primary" size="small">
            차수 생성하기
          </ModalBtn>
        </Wrapper>
        <Wrapper
          margin={`0px 0px 10px 0px`}
          radius="5px"
          bgColor={Theme.adminLightGrey_C}
          padding="5px"
          fontSize="13px"
          al="flex-start"
        >
          <GuideDiv isImpo={true}>
            선택한 호차에 대한 차수를 수정할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            등록된 데이터는 웹사이트 및 어플리케이션에 즉시 적용되기 때문에
            정확한 입력을 필요로 합니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
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
      type: MOVE_SERVICE_LIST_REQUEST,
      data: {
        searchDate: "2022-10-29",
      },
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(Move);
