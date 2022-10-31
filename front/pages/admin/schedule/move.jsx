import React, { useCallback, useEffect, useState, useRef } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import styled from "styled-components";
import {
  Button,
  DatePicker,
  Input,
  message,
  Modal,
  Popconfirm,
  Select,
  Table,
} from "antd";

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
  MOVE_SERVICE_TIME_CREATE_REQUEST,
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
    st_moveServiceTimeCreateDone,
    //
    st_moveServiceCreateDone,
  } = useSelector((state) => state.moveService);

  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  console.log(moveServiceList);
  useEffect(() => {
    if (st_loadMyInfoDone) {
      if (!me || parseInt(me.level) < 3) {
        moveLinkHandler(`/admin`);
      }
    }
  }, [st_loadMyInfoDone]);
  /////////////////////////////////////////////////////////////////////////

  ////// HOOKS //////
  const [vData, setVData] = useState(null); // 오전 차수 모달 눌렀을 때 데이터
  const [dData, setDData] = useState(null); // 오후 차수 모달 눌렀을 때 데이터
  const [dModal, setDModal] = useState(false); // 오후 차수 모달
  const [vModal, setVModal] = useState(false); // 오전 차수 모달
  const [resultDatum, setResultDaum] = useState(null); // 기사님, 차번호 모든 데이터 합쳐놓기
  const [resultMoveList, setResultMoveList] = useState(null); // 오전, 오후 차수 데이터

  console.log(resultMoveList);

  ////// REDUX //////
  const dispatch = useDispatch();

  ////// USEEFFECT //////

  useEffect(() => {
    let arr = [];

    if (vData) {
      if (vData.type === "오전") {
        if (moveServiceList) {
          moveServiceList.map((value) => {
            // 선택한 데이터와 같은 호차이면서 오전 값 데이터
            if (
              value.MoveServiceCarId === vData.carId &&
              vData.type === "오전"
            ) {
              arr.push(value);
            }
          });
        }
      } else if (vData.type === "오후") {
        if (moveServiceList) {
          moveServiceList.map((value) => {
            // 선택한 데이터와 같은 호차이면서 오전 값 데이터
            if (
              value.MoveServiceCarId === vData.carId &&
              vData.type === "오후"
            ) {
              arr.push(value);
            }
          });
        }
      }
    }

    setResultMoveList(arr);
  }, [vData, moveServiceList]);

  useEffect(() => {
    if (st_moveServiceCreateDone) {
      dispatch({
        type: MOVE_SERVICE_LIST_REQUEST,
        data: {
          searchDate: "2022-10-29",
        },
      });

      return message.success("차수가 생성되었습니다.");
    }
  }, [st_moveServiceCreateDone]);

  useEffect(() => {
    let arr = resultDatum ? resultDatum.map((data) => data) : [];

    if (arr.length === 0 && carList) {
      carList.map((data) => {
        arr.push({
          carId: data.id,
          carCount: data.carCount,
          carNum: data.carNum,
          viewCarCreatedAt: data.viewCreatedAt,
          viewMoveDate: data.viewMoveDate,
          viewCarUpdatedAt: data.viewUpdatedAt,
        });
      });
    }

    if (timeList) {
      timeList.map((data) => {
        const currentId = arr.findIndex(
          (value) => value.carId === data.MoveServiceCarId
        );

        if (data.moveTime === "오전") {
          arr[currentId] = {
            timeMorningId: data.id,
            moveMorningTime: data.moveTime,
            moverMorningName: data.moverName,
            viewTimeMorningCreateAt: data.viewCreatedAt,
            viewTimeMorningUpdateAt: data.viewUpdatedAt,
            ...arr[currentId],
          };
        } else {
          arr[currentId] = {
            timeDinnerId: data.id,
            moveDinnerTime: data.moveTime,
            moverDinnerName: data.moverName,
            viewTimeDinnerCreateAt: data.viewCreatedAt,
            viewTimeDinnerUpdateAt: data.viewUpdatedAt,
            ...arr[currentId],
          };
        }
      });
    }

    setResultDaum(arr);
  }, [timeList]);

  // DONE
  useEffect(() => {
    if (st_moveServiceTimeCreateDone) {
      dispatch({
        type: MOVE_SERVICE_LIST_REQUEST,
        data: {
          searchDate: "2022-10-29",
        },
      });

      return message.success("기사님 정보를 등록하였습니다.");
    }
  }, [st_moveServiceTimeCreateDone]);

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
  const vModalToggle = useCallback(
    (data, type) => {
      if (data) {
        //  type오전 값 넣어주기
        setVData({
          type,
          ...data,
        });
      }
      setVModal(!vModal);
    },
    [vModal]
  );

  ////// HANDLER ///////

  // 오후 차수 생성하기
  const dinnerServiceCreateHandler = useCallback(() => {
    dispatch({
      type: MOVE_SERVICE_CREATE_REQUEST,
      data: {
        degree: "1차",
        passenger: "임시내용입니다.",
        count: "1명",
        carId: vData.carId,
        timeId: vData.timeDinnerId,
      },
    });
  }, []);

  // 오전 차수 생성하기
  const serviceCreateHandler = useCallback(() => {
    dispatch({
      type: MOVE_SERVICE_CREATE_REQUEST,
      data: {
        degree: "1차",
        passenger: "임시내용입니다.",
        count: "1명",
        carId: vData.carId,
        timeId: vData.timeMorningId,
      },
    });
  }, [vData]);

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

  const numColnums = [
    {
      title: "차수",
      render: (data) => {
        return <UseAdminInput init={data.degree} />;
      },
      width: 150,
    },
    {
      title: "내용",
      render: (data) => {
        return <UseAdminInput init={data.passenger} />;
      },
    },
    {
      title: "명수",
      render: (data) => {
        return <UseAdminInput init={data.count} />;
      },
      width: 150,
    },
    {
      title: "삭제",
      render: () => {
        return (
          <Popconfirm title="삭제하시겠습니까?" okText="삭제" cancelText="취소">
            <Button type="danger" size="small">
              삭제
            </Button>
          </Popconfirm>
        );
      },
      width: 70,
    },
  ];

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
            init={data.carNum}
            REQUEST_TARGET={MOVE_SERVICE_CAR_UPDATE_REQUEST}
            DATA_TARGET={{
              id: data.carId,
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
            return (
              <UseAdminInput
                placeholder={"오전 기사님 성함"}
                init={data.timeMorningId ? data.moverMorningName : ""}
                REQUEST_TARGET={
                  data.timeMorningId
                    ? MOVE_SERVICE_TIME_UPDATE_REQUEST
                    : MOVE_SERVICE_TIME_CREATE_REQUEST
                }
                DATA_TARGET={
                  data.timeMorningId
                    ? {
                        id: data.timeMorningId,
                        moveTime: "오전",
                        moverName: data.timeMorningId
                          ? data.moverMorningName
                          : "",
                      }
                    : {
                        carId: data.carId,
                        moveTime: "오전",
                        moverName: "",
                      }
                }
              />
            );
          },

          width: 200,
        },
        {
          title: "오후",
          render: (data) => {
            return (
              <UseAdminInput
                placeholder={"오후 기사님 성함"}
                init={data.timeDinnerId ? data.moverDinnerName : ""}
                REQUEST_TARGET={
                  data.timeDinnerId
                    ? MOVE_SERVICE_TIME_UPDATE_REQUEST
                    : MOVE_SERVICE_TIME_CREATE_REQUEST
                }
                DATA_TARGET={
                  data.timeDinnerId
                    ? {
                        id: data.timeDinnerId,
                        moveTime: "오후",
                        moverName: data.timeDinnerId
                          ? data.moverDinnerName
                          : "",
                      }
                    : {
                        carId: data.carId,
                        moveTime: "오후",
                        moverName: "",
                      }
                }
              />
            );
          },
          width: 200,
        },
      ],
    },
    {
      title: "오전 차수",
      render: (data) => (
        <Button
          size="small"
          type="primary"
          onClick={() => vModalToggle(data, "오전")}
        >
          차수 수정하기
        </Button>
      ),
      width: 120,
    },
    {
      title: "오후 차수",
      render: (data) => (
        <Button
          size="small"
          type="primary"
          onClick={() => vModalToggle(data, "오후")}
        >
          차수 수정하기
        </Button>
      ),
      width: 120,
    },
    {
      title: "생성일",
      dataIndex: "viewCarCreatedAt",
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

        <Table
          columns={columns}
          dataSource={resultDatum}
          bordered
          size="small"
        />
      </AdminContent>

      <Modal
        visible={vModal}
        title="차수 수정하기"
        footer={null}
        onCancel={vModalToggle}
        width="900px"
      >
        <Wrapper
          dr={`row`}
          ju={`flex-end`}
          padding={`0 0 5px`}
          margin={`0 0 5px`}
          borderBottom={`1px dashed ${Theme.adminLightGrey_C}`}
        >
          <ModalBtn type="primary" size="small" onClick={serviceCreateHandler}>
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

        <Table size="small" columns={numColnums} dataSource={moveServiceList} />
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
