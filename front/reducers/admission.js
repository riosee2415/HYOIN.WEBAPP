import produce from "../util/produce";

export const initailState = {
  admissionList: [],

  //
  st_admissionAllListLoading: false, // 이용현황 전체 가져오기
  st_admissionAllListDone: false,
  st_admissionAllListError: null,
  //
  st_admissionNormalListLoading: false, // 이용현황 일반 가져오기
  st_admissionNormalListDone: false,
  st_admissionNormalListError: null,
  //
  st_admissionDementiaListLoading: false, // 이용현황 치매전담 가져오기
  st_admissionDementiaListDone: false,
  st_admissionDementiaListError: null,
  //
  st_admissionWeekListLoading: false, // 이용현황 주간 가져오기
  st_admissionWeekListDone: false,
  st_admissionWeekListError: null,
  //
  st_admissionAllUpdateLoading: false, // 이용현황 전체 가져오기
  st_admissionAllUpdateDone: false,
  st_admissionAllUpdateError: null,
  //
  st_admissionNormalUpdateLoading: false, // 이용현황 일반 가져오기
  st_admissionNormalUpdateDone: false,
  st_admissionNormalUpdateError: null,
  //
  st_admissionDementiaUpdateLoading: false, // 이용현황 치매전담 가져오기
  st_admissionDementiaUpdateDone: false,
  st_admissionDementiaUpdateError: null,
  //
  st_admissionWeekUpdateLoading: false, // 이용현황 주간 가져오기
  st_admissionWeekUpdateDone: false,
  st_admissionWeekUpdateError: null,
};

export const ADMISSION_ALL_LIST_REQUEST = "ADMISSION_ALL_LIST_REQUEST";
export const ADMISSION_ALL_LIST_SUCCESS = "ADMISSION_ALL_LIST_SUCCESS";
export const ADMISSION_ALL_LIST_FAILURE = "ADMISSION_ALL_LIST_FAILURE";

export const ADMISSION_NORMAL_LIST_REQUEST = "ADMISSION_NORMAL_LIST_REQUEST";
export const ADMISSION_NORMAL_LIST_SUCCESS = "ADMISSION_NORMAL_LIST_SUCCESS";
export const ADMISSION_NORMAL_LIST_FAILURE = "ADMISSION_LIST_FAILURE";

export const ADMISSION_DEMENTIA_LIST_REQUEST =
  "ADMISSION_DEMENTIA_LIST_REQUEST";
export const ADMISSION_DEMENTIA_LIST_SUCCESS =
  "ADMISSION_DEMENTIA_LIST_SUCCESS";
export const ADMISSION_DEMENTIA_LIST_FAILURE =
  "ADMISSION_DEMENTIA_LIST_FAILURE";

export const ADMISSION_WEEK_LIST_REQUEST = "ADMISSION_WEEK_LIST_REQUEST";
export const ADMISSION_WEEK_LIST_SUCCESS = "ADMISSION_WEEK_LIST_SUCCESS";
export const ADMISSION_WEEK_LIST_FAILURE = "ADMISSION_WEEK_LIST_FAILURE";

export const ADMISSION_ALL_UPDATE_REQUEST = "ADMISSION_ALL_UPDATE_REQUEST";
export const ADMISSION_ALL_UPDATE_SUCCESS = "ADMISSION_ALL_UPDATE_SUCCESS";
export const ADMISSION_ALL_UPDATE_FAILURE = "ADMISSION_ALL_UPDATE_FAILURE";

export const ADMISSION_NORMAL_UPDATE_REQUEST =
  "ADMISSION_NORMAL_UPDATE_REQUEST";
export const ADMISSION_NORMAL_UPDATE_SUCCESS =
  "ADMISSION_NORMAL_UPDATE_SUCCESS";
export const ADMISSION_NORMAL_UPDATE_FAILURE =
  "ADMISSION_NORMAL_UPDATE_FAILURE";

export const ADMISSION_DEMENTIA_UPDATE_REQUEST =
  "ADMISSION_DEMENTIA_UPDATE_REQUEST";
export const ADMISSION_DEMENTIA_UPDATE_SUCCESS =
  "ADMISSION_DEMENTIA_UPDATE_SUCCESS";
export const ADMISSION_DEMENTIA_UPDATE_FAILURE =
  "ADMISSION_DEMENTIA_UPDATE_FAILURE";

export const ADMISSION_WEEK_UPDATE_REQUEST = "ADMISSION_WEEK_UPDATE_REQUEST";
export const ADMISSION_WEEK_UPDATE_SUCCESS = "ADMISSION_WEEK_UPDATE_SUCCESS";
export const ADMISSION_WEEK_UPDATE_FAILURE = "ADMISSION_WEEK_UPDATE_FAILURE";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADMISSION_ALL_LIST_REQUEST: {
        draft.st_admissionAllListLoading = true;
        draft.st_admissionAllListDone = false;
        draft.st_admissionAllListError = null;
        break;
      }
      case ADMISSION_ALL_LIST_SUCCESS: {
        draft.st_admissionAllListLoading = false;
        draft.st_admissionAllListDone = true;
        draft.st_admissionAllListError = null;
        draft.admissionList = action.data;
        break;
      }
      case ADMISSION_ALL_LIST_FAILURE: {
        draft.st_admissionAllListLoading = false;
        draft.st_admissionAllListDone = false;
        draft.st_admissionAllListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case ADMISSION_NORMAL_LIST_REQUEST: {
        draft.st_admissionNormalListLoading = true;
        draft.st_admissionNormalListDone = false;
        draft.st_admissionNormalListError = null;
        break;
      }
      case ADMISSION_NORMAL_LIST_SUCCESS: {
        draft.st_admissionNormalListLoading = false;
        draft.st_admissionNormalListDone = true;
        draft.st_admissionNormalListError = null;
        draft.admissionList = action.data;
        break;
      }
      case ADMISSION_NORMAL_LIST_FAILURE: {
        draft.st_admissionNormalListLoading = false;
        draft.st_admissionNormalListDone = false;
        draft.st_admissionNormalListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case ADMISSION_DEMENTIA_LIST_REQUEST: {
        draft.st_admissionDementiaListLoading = true;
        draft.st_admissionDementiaListDone = false;
        draft.st_admissionDementiaListError = null;
        break;
      }
      case ADMISSION_DEMENTIA_LIST_SUCCESS: {
        draft.st_admissionDementiaListLoading = false;
        draft.st_admissionDementiaListDone = true;
        draft.st_admissionDementiaListError = null;
        draft.admissionList = action.data;
        break;
      }
      case ADMISSION_DEMENTIA_LIST_FAILURE: {
        draft.st_admissionDementiaListLoading = false;
        draft.st_admissionDementiaListDone = false;
        draft.st_admissionDementiaListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case ADMISSION_WEEK_LIST_REQUEST: {
        draft.st_admissionWeekListLoading = true;
        draft.st_admissionWeekListDone = false;
        draft.st_admissionWeekListError = null;
        break;
      }
      case ADMISSION_WEEK_LIST_SUCCESS: {
        draft.st_admissionWeekListLoading = false;
        draft.st_admissionWeekListDone = true;
        draft.st_admissionWeekListError = null;
        draft.admissionList = action.data;
        break;
      }
      case ADMISSION_WEEK_LIST_FAILURE: {
        draft.st_admissionWeekListLoading = false;
        draft.st_admissionWeekListDone = false;
        draft.st_admissionWeekListError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case ADMISSION_ALL_UPDATE_REQUEST: {
        draft.st_admissionAllUpdateLoading = true;
        draft.st_admissionAllUpdateDone = false;
        draft.st_admissionAllUpdateError = null;
        break;
      }
      case ADMISSION_ALL_UPDATE_SUCCESS: {
        draft.st_admissionAllUpdateLoading = false;
        draft.st_admissionAllUpdateDone = true;
        draft.st_admissionAllUpdateError = null;
        break;
      }
      case ADMISSION_ALL_UPDATE_FAILURE: {
        draft.st_admissionAllUpdateLoading = false;
        draft.st_admissionAllUpdateDone = false;
        draft.st_admissionAllUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case ADMISSION_NORMAL_UPDATE_REQUEST: {
        draft.st_admissionNormalUpdateLoading = true;
        draft.st_admissionNormalUpdateDone = false;
        draft.st_admissionNormalUpdateError = null;
        break;
      }
      case ADMISSION_NORMAL_UPDATE_SUCCESS: {
        draft.st_admissionNormalUpdateLoading = false;
        draft.st_admissionNormalUpdateDone = true;
        draft.st_admissionNormalUpdateError = null;
        break;
      }
      case ADMISSION_NORMAL_UPDATE_FAILURE: {
        draft.st_admissionNormalUpdateLoading = false;
        draft.st_admissionNormalUpdateDone = false;
        draft.st_admissionNormalUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case ADMISSION_DEMENTIA_UPDATE_REQUEST: {
        draft.st_admissionDementiaUpdateLoading = true;
        draft.st_admissionDementiaUpdateDone = false;
        draft.st_admissionDementiaUpdateError = null;
        break;
      }
      case ADMISSION_DEMENTIA_UPDATE_SUCCESS: {
        draft.st_admissionDementiaUpdateLoading = false;
        draft.st_admissionDementiaUpdateDone = true;
        draft.st_admissionDementiaUpdateError = null;
        break;
      }
      case ADMISSION_DEMENTIA_UPDATE_FAILURE: {
        draft.st_admissionDementiaUpdateLoading = false;
        draft.st_admissionDementiaUpdateDone = false;
        draft.st_admissionDementiaUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case ADMISSION_WEEK_UPDATE_REQUEST: {
        draft.st_admissionWeekUpdateLoading = true;
        draft.st_admissionWeekUpdateDone = false;
        draft.st_admissionWeekUpdateError = null;
        break;
      }
      case ADMISSION_WEEK_UPDATE_SUCCESS: {
        draft.st_admissionWeekUpdateLoading = false;
        draft.st_admissionWeekUpdateDone = true;
        draft.st_admissionWeekUpdateError = null;
        break;
      }
      case ADMISSION_WEEK_UPDATE_FAILURE: {
        draft.st_admissionWeekUpdateLoading = false;
        draft.st_admissionWeekUpdateDone = false;
        draft.st_admissionWeekUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
