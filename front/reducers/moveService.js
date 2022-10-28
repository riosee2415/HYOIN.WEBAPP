import produce from "../util/produce";

export const initailState = {
  moveServiceList: [], // 시간표 리스트
  carList: [], // 차 번호 리스트
  timeList: [], // 차수 리스트

  //
  st_moveServiceListLoading: false, // 시간표 가져오기
  st_moveServiceListDone: false,
  st_moveServiceListError: null,
  //
  st_moveServiceCarCreateLoading: false, // 차 번호 생성하기
  st_moveServiceCarCreateDone: false,
  st_moveServiceCarCreateError: null,
  //
  st_moveServiceCarUpdateLoading: false, // 차 번호 수정하기
  st_moveServiceCarUpdateDone: false,
  st_moveServiceCarUpdateError: null,
  //
  st_moveServiceTimeCreateLoading: false, // 오전/오후 이름 생성하기
  st_moveServiceTimeCreateDone: false,
  st_moveServiceTimeCreateError: null,
  //
  st_moveServiceTimeUpdateLoading: false, // 오전/오후 이름 수정하기
  st_moveServiceTimeUpdateDone: false,
  st_moveServiceTimeUpdateError: null,
  //
  st_moveServiceCreateLoading: false, // 차수 생성하기
  st_moveServiceCreateDone: false,
  st_moveServiceCreateError: null,
  //
  st_moveServiceUpdateLoading: false, // 차수 수정하기
  st_moveServiceUpdateDone: false,
  st_moveServiceUpdateError: null,
  //
  st_moveServiceDeleteLoading: false, // 차수 삭제하기
  st_moveServiceDeleteDone: false,
  st_moveServiceDeleteError: null,
};

export const MOVE_SERVICE_LIST_REQUEST = "MOVE_SERVICE_LIST_REQUEST";
export const MOVE_SERVICE_LIST_SUCCESS = "MOVE_SERVICE_LIST_SUCCESS";
export const MOVE_SERVICE_LIST_FAILURE = "MOVE_SERVICE_LIST_FAILURE";

export const MOVE_SERVICE_CAR_CREATE_REQUEST =
  "MOVE_SERVICE_CAR_CREATE_REQUEST";
export const MOVE_SERVICE_CAR_CREATE_SUCCESS =
  "MOVE_SERVICE_CAR_CREATE_SUCCESS";
export const MOVE_SERVICE_CAR_CREATE_FAILURE =
  "MOVE_SERVICE_CAR_CREATE_FAILURE";

export const MOVE_SERVICE_CAR_UPDATE_REQUEST =
  "MOVE_SERVICE_CAR_UPDATE_REQUEST";
export const MOVE_SERVICE_CAR_UPDATE_SUCCESS =
  "MOVE_SERVICE_CAR_UPDATE_SUCCESS";
export const MOVE_SERVICE_CAR_UPDATE_FAILURE =
  "MOVE_SERVICE_CAR_UPDATE_FAILURE";

export const MOVE_SERVICE_TIME_CREATE_REQUEST =
  "MOVE_SERVICE_TIME_CREATE_REQUEST";
export const MOVE_SERVICE_TIME_CREATE_SUCCESS =
  "MOVE_SERVICE_TIME_CREATE_SUCCESS";
export const MOVE_SERVICE_TIME_CREATE_FAILURE =
  "MOVE_SERVICE_TIME_CREATE_FAILURE";

export const MOVE_SERVICE_TIME_UPDATE_REQUEST =
  "MOVE_SERVICE_TIME_UPDATE_REQUEST";
export const MOVE_SERVICE_TIME_UPDATE_SUCCESS =
  "MOVE_SERVICE_TIME_UPDATE_SUCCESS";
export const MOVE_SERVICE_TIME_UPDATE_FAILURE =
  "MOVE_SERVICE_CAR_UPDATE_FAILURE";

export const MOVE_SERVICE_CREATE_REQUEST = "MOVE_SERVICE_CREATE_REQUEST";
export const MOVE_SERVICE_CREATE_SUCCESS = "MOVE_SERVICE_CREATE_SUCCESS";
export const MOVE_SERVICE_CREATE_FAILURE = "MOVE_SERVICE_CREATE_FAILURE";

export const MOVE_SERVICE_UPDATE_REQUEST = "MOVE_SERVICE_UPDATE_REQUEST";
export const MOVE_SERVICE_UPDATE_SUCCESS = "MOVE_SERVICE_UPDATE_SUCCESS";
export const MOVE_SERVICE_UPDATE_FAILURE = "MOVE_SERVICE_UPDATE_FAILURE";

export const MOVE_SERVICE_DELETE_REQUEST = "MOVE_SERVICE_DELETE_REQUEST";
export const MOVE_SERVICE_DELETE_SUCCESS = "MOVE_SERVICE_DELETE_SUCCESS";
export const MOVE_SERVICE_DELETE_FAILURE = "MOVE_SERVICE_DELETE_FAILURE";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case MOVE_SERVICE_LIST_REQUEST: {
        draft.st_moveServiceListLoading = true;
        draft.st_moveServiceListDone = false;
        draft.st_moveServiceListError = null;
        break;
      }
      case MOVE_SERVICE_LIST_SUCCESS: {
        draft.st_moveServiceListLoading = false;
        draft.st_moveServiceListDone = true;
        draft.st_moveServiceListError = null;
        draft.moveServiceList = action.data.serviceList;
        draft.carList = action.data.carList;
        draft.timeList = action.data.timeList;
        break;
      }
      case MOVE_SERVICE_LIST_FAILURE: {
        draft.st_moveServiceListLoading = false;
        draft.st_moveServiceListDone = false;
        draft.st_moveServiceListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case MOVE_SERVICE_CAR_CREATE_REQUEST: {
        draft.st_moveServiceCarCreateLoading = true;
        draft.st_moveServiceCarCreateDone = false;
        draft.st_moveServiceCarCreateError = null;
        break;
      }
      case MOVE_SERVICE_CAR_CREATE_SUCCESS: {
        draft.st_moveServiceCarCreateLoading = false;
        draft.st_moveServiceCarCreateDone = true;
        draft.st_moveServiceCarCreateError = null;
        break;
      }
      case MOVE_SERVICE_CAR_CREATE_FAILURE: {
        draft.st_moveServiceCarCreateLoading = false;
        draft.st_moveServiceCarCreateDone = false;
        draft.st_moveServiceCarCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case MOVE_SERVICE_CAR_UPDATE_REQUEST: {
        draft.st_moveServiceCarUpdateLoading = true;
        draft.st_moveServiceCarUpdateDone = false;
        draft.st_moveServiceCarUpdateError = null;
        break;
      }
      case MOVE_SERVICE_CAR_UPDATE_SUCCESS: {
        draft.st_moveServiceCarUpdateLoading = false;
        draft.st_moveServiceCarUpdateDone = true;
        draft.st_moveServiceCarUpdateError = null;
        break;
      }
      case MOVE_SERVICE_CAR_UPDATE_FAILURE: {
        draft.st_moveServiceCarUpdateLoading = false;
        draft.st_moveServiceCarUpdateDone = false;
        draft.st_moveServiceCarUpdateError = action.error;
        break;
      }
      //////////////////////////////////////////////
      case MOVE_SERVICE_TIME_CREATE_REQUEST: {
        draft.st_moveServiceTimeCreateLoading = true;
        draft.st_moveServiceTimeCreateDone = false;
        draft.st_moveServiceTimeCreateError = null;
        break;
      }
      case MOVE_SERVICE_TIME_CREATE_SUCCESS: {
        draft.st_moveServiceTimeCreateLoading = false;
        draft.st_moveServiceTimeCreateDone = true;
        draft.st_moveServiceTimeCreateError = null;
        break;
      }
      case MOVE_SERVICE_TIME_CREATE_FAILURE: {
        draft.st_moveServiceTimeCreateLoading = false;
        draft.st_moveServiceTimeCreateDone = false;
        draft.st_moveServiceTimeCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case MOVE_SERVICE_TIME_UPDATE_REQUEST: {
        draft.st_moveServiceTimeUpdateLoading = true;
        draft.st_moveServiceTimeUpdateDone = false;
        draft.st_moveServiceTimeUpdateError = null;
        break;
      }
      case MOVE_SERVICE_TIME_UPDATE_SUCCESS: {
        draft.st_moveServiceTimeUpdateLoading = false;
        draft.st_moveServiceTimeUpdateDone = true;
        draft.st_moveServiceTimeUpdateError = null;
        break;
      }
      case MOVE_SERVICE_TIME_UPDATE_FAILURE: {
        draft.st_moveServiceTimeUpdateLoading = false;
        draft.st_moveServiceTimeUpdateDone = false;
        draft.st_moveServiceTimeUpdateError = action.error;
        break;
      }
      //////////////////////////////////////////////
      case MOVE_SERVICE_CREATE_REQUEST: {
        draft.st_moveServiceCreateLoading = true;
        draft.st_moveServiceCreateDone = false;
        draft.st_moveServiceCreateError = null;
        break;
      }
      case MOVE_SERVICE_CREATE_SUCCESS: {
        draft.st_moveServiceCreateLoading = false;
        draft.st_moveServiceCreateDone = true;
        draft.st_moveServiceCreateError = null;
        break;
      }
      case MOVE_SERVICE_CREATE_FAILURE: {
        draft.st_moveServiceCreateLoading = false;
        draft.st_moveServiceCreateDone = false;
        draft.st_moveServiceCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case MOVE_SERVICE_UPDATE_REQUEST: {
        draft.st_moveServiceUpdateLoading = true;
        draft.st_moveServiceUpdateDone = false;
        draft.st_moveServiceUpdateError = null;
        break;
      }
      case MOVE_SERVICE_UPDATE_SUCCESS: {
        draft.st_moveServiceUpdateLoading = false;
        draft.st_moveServiceUpdateDone = true;
        draft.st_moveServiceUpdateError = null;
        break;
      }
      case MOVE_SERVICE_UPDATE_FAILURE: {
        draft.st_moveServiceUpdateLoading = false;
        draft.st_moveServiceUpdateDone = false;
        draft.st_moveServiceUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case MOVE_SERVICE_DELETE_REQUEST: {
        draft.st_moveServiceDeleteLoading = true;
        draft.st_moveServiceDeleteDone = false;
        draft.st_moveServiceDeleteError = null;
        break;
      }
      case MOVE_SERVICE_DELETE_SUCCESS: {
        draft.st_moveServiceDeleteLoading = false;
        draft.st_moveServiceDeleteDone = true;
        draft.st_moveServiceDeleteError = null;
        break;
      }
      case MOVE_SERVICE_DELETE_FAILURE: {
        draft.st_moveServiceDeleteLoading = false;
        draft.st_moveServiceDeleteDone = false;
        draft.st_moveServiceDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
