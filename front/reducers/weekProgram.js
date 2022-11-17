import produce from "../util/produce";

export const initailState = {
  weekProgramList: [],
  weekProgramImagePath: null, // 이미지 패스
  weekProgramSlideList: [], // 메인 슬라이드 이미지

  week: [],
  weekProgramWeekList: [],

  //
  st_weekProgramListLoading: false, // program 가져오기
  st_weekProgramListDone: false,
  st_weekProgramListError: null,
  //
  st_weekProgramCreateLoading: false, // program 생성
  st_weekProgramCreateDone: false,
  st_weekProgramCreateError: null,
  //
  st_weekProgramUpdateLoading: false, // program 수정
  st_weekProgramUpdateDone: false,
  st_weekProgramUpdateError: null,
  //
  st_weekProgramDeleteLoading: false, // program 삭제
  st_weekProgramDeleteDone: false,
  st_weekProgramDeleteError: null,
  //
  st_weekProgramImageUploadLoading: false, // program 이미지 등록
  st_weekProgramImageUploadDone: false,
  st_weekProgramImageUploadError: null,
  //
  st_weekProgramWeekListLoading: false, // week program 가져오기
  st_weekProgramWeekListDone: false,
  st_weekProgramWeekListError: null,
  //
  st_weekProgramSlideListLoading: false, // program 사진 가져오기
  st_weekProgramSlideListDone: false,
  st_weekProgramSlideListError: null,
};

export const WEEK_PROGRAM_LIST_REQUEST = "WEEK_PROGRAM_LIST_REQUEST";
export const WEEK_PROGRAM_LIST_SUCCESS = "WEEK_PROGRAM_LIST_SUCCESS";
export const WEEK_PROGRAM_LIST_FAILURE = "WEEK_PROGRAM_LIST_FAILURE";

export const WEEK_PROGRAM_WEEK_LIST_REQUEST = "WEEK_PROGRAM_WEEK_LIST_REQUEST";
export const WEEK_PROGRAM_WEEK_LIST_SUCCESS = "WEEK_PROGRAM_WEEK_LIST_SUCCESS";
export const WEEK_PROGRAM_WEEK_LIST_FAILURE = "WEEK_PROGRAM_WEEK_LIST_FAILURE";

export const WEEK_PROGRAM_CREATE_REQUEST = "WEEK_PROGRAM_CREATE_REQUEST";
export const WEEK_PROGRAM_CREATE_SUCCESS = "WEEK_PROGRAM_CREATE_SUCCESS";
export const WEEK_PROGRAM_CREATE_FAILURE = "WEEK_PROGRAM_CREATE_FAILURE";

export const WEEK_PROGRAM_UPDATE_REQUEST = "WEEK_PROGRAM_UPDATE_REQUEST";
export const WEEK_PROGRAM_UPDATE_SUCCESS = "WEEK_PROGRAM_UPDATE_SUCCESS";
export const WEEK_PROGRAM_UPDATE_FAILURE = "WEEK_PROGRAM_UPDATE_FAILURE";

export const WEEK_PROGRAM_DELETE_REQUEST = "WEEK_PROGRAM_DELETE_REQUEST";
export const WEEK_PROGRAM_DELETE_SUCCESS = "WEEK_PROGRAM_DELETE_SUCCESS";
export const WEEK_PROGRAM_DELETE_FAILURE = "WEEK_PROGRAM_DELETE_FAILURE";

export const WEEK_PROGRAM_IMAGE_UPLOAD_REQUEST =
  "WEEK_PROGRAM_IMAGE_UPLOAD_REQUEST";
export const WEEK_PROGRAM_IMAGE_UPLOAD_SUCCESS =
  "WEEK_PROGRAM_IMAGE_UPLOAD_SUCCESS";
export const WEEK_PROGRAM_IMAGE_UPLOAD_FAILURE =
  "WEEK_PROGRAM_IMAGE_UPLOAD_FAILURE";

export const WEEK_PROGRAM_SLIDE_LIST_REQUEST =
  "WEEK_PROGRAM_SLIDE_LIST_REQUEST";
export const WEEK_PROGRAM_SLIDE_LIST_SUCCESS =
  "WEEK_PROGRAM_SLIDE_LIST_SUCCESS";
export const WEEK_PROGRAM_SLIDE_LIST_FAILURE =
  "WEEK_PROGRAM_SLIDE_LIST_FAILURE";

export const WEEK_PROGRAM_IMAGE_RESET = "WEEK_PROGRAM_IMAGE_RESET";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case WEEK_PROGRAM_LIST_REQUEST: {
        draft.st_weekProgramListLoading = true;
        draft.st_weekProgramListDone = false;
        draft.st_weekProgramListError = null;
        break;
      }
      case WEEK_PROGRAM_LIST_SUCCESS: {
        draft.st_weekProgramListLoading = false;
        draft.st_weekProgramListDone = true;
        draft.st_weekProgramListError = null;
        draft.weekProgramList = action.data;
        break;
      }
      case WEEK_PROGRAM_LIST_FAILURE: {
        draft.st_weekProgramListLoading = false;
        draft.st_weekProgramListDone = false;
        draft.st_weekProgramListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WEEK_PROGRAM_WEEK_LIST_REQUEST: {
        draft.st_weekProgramWeekListLoading = true;
        draft.st_weekProgramWeekListDone = false;
        draft.st_weekProgramWeekListError = null;
        break;
      }
      case WEEK_PROGRAM_WEEK_LIST_SUCCESS: {
        draft.st_weekProgramWeekListLoading = false;
        draft.st_weekProgramWeekListDone = true;
        draft.st_weekProgramWeekListError = null;
        draft.weekProgramWeekList = action.data.weekDatum;
        draft.week = action.data.week;
        break;
      }
      case WEEK_PROGRAM_WEEK_LIST_FAILURE: {
        draft.st_weekProgramWeekListLoading = false;
        draft.st_weekProgramWeekListDone = false;
        draft.st_weekProgramWeekListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WEEK_PROGRAM_CREATE_REQUEST: {
        draft.st_weekProgramCreateLoading = true;
        draft.st_weekProgramCreateDone = false;
        draft.st_weekProgramCreateError = null;
        break;
      }
      case WEEK_PROGRAM_CREATE_SUCCESS: {
        draft.st_weekProgramCreateLoading = false;
        draft.st_weekProgramCreateDone = true;
        draft.st_weekProgramCreateError = null;
        break;
      }
      case WEEK_PROGRAM_CREATE_FAILURE: {
        draft.st_weekProgramCreateLoading = false;
        draft.st_weekProgramCreateDone = false;
        draft.st_weekProgramCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WEEK_PROGRAM_UPDATE_REQUEST: {
        draft.st_weekProgramUpdateLoading = true;
        draft.st_weekProgramUpdateDone = false;
        draft.st_weekProgramUpdateError = null;
        break;
      }
      case WEEK_PROGRAM_UPDATE_SUCCESS: {
        draft.st_weekProgramUpdateLoading = false;
        draft.st_weekProgramUpdateDone = true;
        draft.st_weekProgramUpdateError = null;
        break;
      }
      case WEEK_PROGRAM_UPDATE_FAILURE: {
        draft.st_weekProgramUpdateLoading = false;
        draft.st_weekProgramUpdateDone = false;
        draft.st_weekProgramUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WEEK_PROGRAM_DELETE_REQUEST: {
        draft.st_weekProgramDeleteLoading = true;
        draft.st_weekProgramDeleteDone = false;
        draft.st_weekProgramDeleteError = null;
        break;
      }
      case WEEK_PROGRAM_DELETE_SUCCESS: {
        draft.st_weekProgramDeleteLoading = false;
        draft.st_weekProgramDeleteDone = true;
        draft.st_weekProgramDeleteError = null;
        break;
      }
      case WEEK_PROGRAM_DELETE_FAILURE: {
        draft.st_weekProgramDeleteLoading = false;
        draft.st_weekProgramDeleteDone = false;
        draft.st_weekProgramDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WEEK_PROGRAM_IMAGE_UPLOAD_REQUEST: {
        draft.st_weekProgramImageUploadLoading = true;
        draft.st_weekProgramImageUploadDone = false;
        draft.st_weekProgramImageUploadError = null;
        break;
      }
      case WEEK_PROGRAM_IMAGE_UPLOAD_SUCCESS: {
        draft.st_weekProgramImageUploadLoading = false;
        draft.st_weekProgramImageUploadDone = true;
        draft.st_weekProgramImageUploadError = null;
        draft.weekProgramImagePath = action.data.path;
        break;
      }
      case WEEK_PROGRAM_IMAGE_UPLOAD_FAILURE: {
        draft.st_weekProgramImageUploadLoading = false;
        draft.st_weekProgramImageUploadDone = false;
        draft.st_weekProgramImageUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WEEK_PROGRAM_SLIDE_LIST_REQUEST: {
        draft.st_weekProgramSlideListLoading = true;
        draft.st_weekProgramSlideListDone = false;
        draft.st_weekProgramSlideListError = null;
        break;
      }
      case WEEK_PROGRAM_SLIDE_LIST_SUCCESS: {
        draft.st_weekProgramSlideListLoading = false;
        draft.st_weekProgramSlideListDone = true;
        draft.st_weekProgramSlideListError = null;
        draft.weekProgramSlideList = action.data;
        break;
      }
      case WEEK_PROGRAM_SLIDE_LIST_FAILURE: {
        draft.st_weekProgramSlideListLoading = false;
        draft.st_weekProgramSlideListDone = false;
        draft.st_weekProgramSlideListError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case WEEK_PROGRAM_IMAGE_RESET: {
        draft.weekProgramImagePath = action.data;
        break;
      }

      //////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
