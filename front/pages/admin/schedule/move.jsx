import React, { useCallback, useEffect, useState, useRef } from "react";
import AdminLayout from "../../../components/AdminLayout";
import PageHeader from "../../../components/admin/PageHeader";
import styled from "styled-components";
import {
  Button,
  Calendar,
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
  MOVE_SERVICE_DELETE_REQUEST,
  MOVE_SERVICE_LIST_REQUEST,
  MOVE_SERVICE_TIME_CREATE_REQUEST,
  MOVE_SERVICE_TIME_UPDATE_REQUEST,
  MOVE_SERVICE_UPDATE_REQUEST,
} from "../../../reducers/moveService";
import UseAdminInput from "../../../hooks/useAdminInput";
import moment from "moment";

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
    st_moveServiceCarCreateDone,
    st_moveServiceCarCreateError,
    st_moveServiceCarUpdateDone,
    //
    st_moveServiceListDone,
    //
    st_moveServiceTimeCreateDone,
    st_moveServiceTimeUpdateDone,
    //
    st_moveServiceCreateDone,
    //
    st_moveServiceDeleteDone,
    //
    st_moveServiceUpdateDone,
  } = useSelector((state) => state.moveService);

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
  const [vData, setVData] = useState(null); // 오전 차수 모달 눌렀을 때 데이터
  const [vModal, setVModal] = useState(false); // 오전 차수 모달
  const [dModal, setDModal] = useState(null); // 이동서비스 생성 모달
  const [searchData, setSearchData] = useState(moment()); // 검색 날짜
  const [resultDatum, setResultDaum] = useState(null); // 기사님, 차번호 모든 데이터 합쳐놓기
  const [resultMoveList, setResultMoveList] = useState(null); // 오전, 오후 차수 데이터

  ////// REDUX //////
  const dispatch = useDispatch();

  ////// USEEFFECT //////

  useEffect(() => {
    dispatch({
      type: MOVE_SERVICE_LIST_REQUEST,
      data: {
        searchDate: searchData.format("YYYY-MM-DD"),
      },
    });
    setResultDaum(null);
  }, [searchData]);

  useEffect(() => {
    let arr = [];

    if (resultDatum) {
      if (vData) {
        if (vData.type === "오전") {
          if (moveServiceList) {
            moveServiceList.map((value) => {
              resultDatum.map((result) => {
                // 선택한 데이터와 같은 호차이면서 오전 값 데이터
                if (
                  value.MoveServiceCarId === vData.carId &&
                  result.timeMorningId === value.MoveServiceTimeId
                ) {
                  arr.push(value);
                }
              });
            });
          }
        } else if (vData.type === "오후") {
          if (moveServiceList) {
            moveServiceList.map((value) => {
              resultDatum.map((result) => {
                // 선택한 데이터와 같은 호차이면서 오후 값 데이터
                if (
                  value.MoveServiceCarId === vData.carId &&
                  result.timeDinnerId === value.MoveServiceTimeId
                ) {
                  arr.push(value);
                }
              });
            });
          }
        }
      }
    }

    setResultMoveList(arr);
  }, [vData, moveServiceList, resultDatum]);

  useEffect(() => {
    if (st_moveServiceCreateDone) {
      dispatch({
        type: MOVE_SERVICE_LIST_REQUEST,
        data: {
          searchDate: searchData.format("YYYY-MM-DD"),
        },
      });

      return message.success("차수가 생성되었습니다.");
    }
  }, [st_moveServiceCreateDone]);

  useEffect(() => {
    if (timeList) {
      let arr = resultDatum ? resultDatum.map((data) => data) : [];

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

      setResultDaum(arr);
    }
  }, [timeList]);

  useEffect(() => {
    if (resultDatum === null) {
      let arr = resultDatum ? resultDatum.map((data) => data) : [];

      if (carList) {
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
    }
  }, [carList]);

  // DONE

  useEffect(() => {
    if (st_moveServiceCarCreateDone) {
      setDModal(false);
      setResultDaum(null);
      dispatch({
        type: MOVE_SERVICE_LIST_REQUEST,
        data: {
          searchDate: searchData.format("YYYY-MM-DD"),
        },
      });
      return message.success("시간표가 생성되었습니다.");
    }
  }, [st_moveServiceCarCreateDone]);

  useEffect(() => {
    if (st_moveServiceUpdateDone) {
      dispatch({
        type: MOVE_SERVICE_LIST_REQUEST,
        data: {
          searchDate: searchData.format("YYYY-MM-DD"),
        },
      });

      return message.success("차수를 수정하였습니다.");
    }
  }, [st_moveServiceUpdateDone]);

  useEffect(() => {
    if (st_moveServiceDeleteDone) {
      dispatch({
        type: MOVE_SERVICE_LIST_REQUEST,
        data: {
          searchDate: searchData.format("YYYY-MM-DD"),
        },
      });

      return message.success("차수를 삭제하였습니다.");
    }
  }, [st_moveServiceDeleteDone]);

  useEffect(() => {
    if (st_moveServiceTimeCreateDone) {
      dispatch({
        type: MOVE_SERVICE_LIST_REQUEST,
        data: {
          searchDate: searchData.format("YYYY-MM-DD"),
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
          searchDate: searchData.format("YYYY-MM-DD"),
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
          searchDate: searchData.format("YYYY-MM-DD"),
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

  // 이동서비스 생성 모달 토글
  const dModalToggle = useCallback(() => {
    setDModal(!dModal);
  }, [dModal]);

  // 차수 수정하기 모달 토글
  const vModalToggle = useCallback(
    (data, type) => {
      if (!vModal) {
        if (data) {
          if (!data.timeMorningId || !data.timeDinnerId) {
            return message.error(
              "오전/오후 기사님을 등록해야 차수를 등록할 수 있습니다."
            );
          }
          //  type오전 값 넣어주기
          setVData({
            type,
            ...data,
          });
        } else {
          setVData(null);
          setResultDaum(null);
        }
      }

      setVModal(!vModal);
    },
    [vModal]
  );

  ////// HANDLER ///////

  // 시간표 생성하기
  const calenderHandler = useCallback((data) => {
    setSearchData(moment(data));

    dispatch({
      type: MOVE_SERVICE_CAR_CREATE_REQUEST,
      data: {
        moveDate: data.format("YYYY-MM-DD"),
      },
    });
  }, []);

  // 차수 삭제하기
  const serviceDeleteHandler = useCallback((data) => {
    dispatch({
      type: MOVE_SERVICE_DELETE_REQUEST,
      data: {
        id: data.id,
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
        timeId:
          vData.type === "오전" ? vData.timeMorningId : vData.timeDinnerId,
      },
    });
  }, [vData]);

  // 검색하기
  const dateHandler = useCallback((data) => {
    setSearchData(moment(data));

    setResultDaum(null);

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
        return (
          <UseAdminInput
            init={data.degree}
            REQUEST_TARGET={MOVE_SERVICE_UPDATE_REQUEST}
            DATA_TARGET={{
              id: data.id,
              degree: data.degree,
              passenger: data.passenger,
              count: data.count,
            }}
          />
        );
      },
      width: 150,
    },
    {
      title: "내용",
      render: (data) => {
        return (
          <UseAdminInput
            init={data.passenger}
            REQUEST_TARGET={MOVE_SERVICE_UPDATE_REQUEST}
            DATA_TARGET={{
              id: data.id,
              degree: data.degree,
              passenger: data.passenger,
              count: data.count,
            }}
          />
        );
      },
    },
    {
      title: "명수",
      render: (data) => {
        console.log(data);
        return (
          <UseAdminInput
            init={data.count}
            REQUEST_TARGET={MOVE_SERVICE_UPDATE_REQUEST}
            DATA_TARGET={{
              id: data.id,
              degree: data.degree,
              passenger: data.passenger,
              count: data.count,
            }}
          />
        );
      },
      width: 150,
    },
    {
      title: "삭제",
      render: (data) => {
        return (
          <Popconfirm
            title="삭제하시겠습니까?"
            okText="삭제"
            cancelText="취소"
            onConfirm={() => serviceDeleteHandler(data)}
          >
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
              value={searchData}
            />
          </Wrapper>

          <ModalBtn type="primary" size="small" onClick={dModalToggle}>
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
            이동서비스 시간표를 관리할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            선택한 날짜에 해당하는 시간표를 검색할 수 있습니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            기본이 당일로 검색이 되며, 새로고침을 하시면 당일로 돌아오게 됩니다.
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
            수정버튼을 눌러야 수정이 되며, 하나씩 수정이 가능합니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            등록된 데이터는 웹사이트 및 어플리케이션에 즉시 적용되기 때문에
            정확한 입력을 필요로 합니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>삭제된 데이터는 복구할 수 없습니다.</GuideDiv>
        </Wrapper>

        <Table size="small" columns={numColnums} dataSource={resultMoveList} />
      </Modal>

      <Modal
        visible={dModal}
        onCancel={dModalToggle}
        footer={null}
        title="이동서비스 생성하기"
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
            이동서비스 시간표를 생성하고 싶은 날짜를 선택하면 생성됩니다.
          </GuideDiv>
          <GuideDiv isImpo={true}>
            생성된 시간표는 삭제는 불가능합니다.
          </GuideDiv>
        </Wrapper>

        <Calendar
          fullscreen={false}
          onChange={calenderHandler}
          defaultValue={null}
        />
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

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default withRouter(Move);
