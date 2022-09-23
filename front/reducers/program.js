import produce from "../util/produce";

export const initailState = {
  programList: [],
  programImagePath: null, // 이미지 패스

  //
  st_programListLoading: false, // program 가져오기
  st_programListDone: false,
  st_programListError: null,
  //
  st_programCreateLoading: false, // program 가져오기
  st_programCreateDone: false,
  st_programCreateError: null,
  //
  st_programUpdateLoading: false, // program 가져오기
  st_programUpdateDone: false,
  st_programUpdateError: null,
  //
  st_programDeleteLoading: false, // program 가져오기
  st_programDeleteDone: false,
  st_programDeleteError: null,
  //
  st_programImageUploadLoading: false, // program 이미지 등록
  st_programImageUploadDone: false,
  st_programImageUploadError: null,
};

export const PROGRAM_LIST_REQUEST = "PROGRAM_LIST_REQUEST";
export const PROGRAM_LIST_SUCCESS = "PROGRAM_LIST_SUCCESS";
export const PROGRAM_LIST_FAILURE = "PROGRAM_LIST_FAILURE";

export const PROGRAM_CREATE_REQUEST = "PROGRAM_CREATE_REQUEST";
export const PROGRAM_CREATE_SUCCESS = "PROGRAM_CREATE_SUCCESS";
export const PROGRAM_CREATE_FAILURE = "PROGRAM_CREATE_FAILURE";

export const PROGRAM_UPDATE_REQUEST = "PROGRAM_UPDATE_REQUEST";
export const PROGRAM_UPDATE_SUCCESS = "PROGRAM_UPDATE_SUCCESS";
export const PROGRAM_UPDATE_FAILURE = "PROGRAM_UPDATE_FAILURE";

export const PROGRAM_DELETE_REQUEST = "PROGRAM_DELETE_REQUEST";
export const PROGRAM_DELETE_SUCCESS = "PROGRAM_DELETE_SUCCESS";
export const PROGRAM_DELETE_FAILURE = "PROGRAM_DELETE_FAILURE";

export const PROGRAM_IMAGE_UPLOAD_REQUEST = "PROGRAM_IMAGE_UPLOAD_REQUEST";
export const PROGRAM_IMAGE_UPLOAD_SUCCESS = "PROGRAM_IMAGE_UPLOAD_SUCCESS";
export const PROGRAM_IMAGE_UPLOAD_FAILURE = "PROGRAM_IMAGE_UPLOAD_FAILURE";

export const PROGRAM_IMAGE_RESET = "PROGRAM_IMAGE_RESET";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case PROGRAM_LIST_REQUEST: {
        draft.st_programListLoading = true;
        draft.st_programListDone = false;
        draft.st_programListError = null;
        break;
      }
      case PROGRAM_LIST_SUCCESS: {
        draft.st_programListLoading = false;
        draft.st_programListDone = true;
        draft.st_programListError = null;
        draft.programList = action.data;
        break;
      }
      case PROGRAM_LIST_FAILURE: {
        draft.st_programListLoading = false;
        draft.st_programListDone = false;
        draft.st_programListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case PROGRAM_CREATE_REQUEST: {
        draft.st_programCreateLoading = true;
        draft.st_programCreateDone = false;
        draft.st_programCreateError = null;
        break;
      }
      case PROGRAM_CREATE_SUCCESS: {
        draft.st_programCreateLoading = false;
        draft.st_programCreateDone = true;
        draft.st_programCreateError = null;
        break;
      }
      case PROGRAM_CREATE_FAILURE: {
        draft.st_programCreateLoading = false;
        draft.st_programCreateDone = false;
        draft.st_programCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case PROGRAM_UPDATE_REQUEST: {
        draft.st_programUpdateLoading = true;
        draft.st_programUpdateDone = false;
        draft.st_programUpdateError = null;
        break;
      }
      case PROGRAM_UPDATE_SUCCESS: {
        draft.st_programUpdateLoading = false;
        draft.st_programUpdateDone = true;
        draft.st_programUpdateError = null;
        break;
      }
      case PROGRAM_UPDATE_FAILURE: {
        draft.st_programUpdateLoading = false;
        draft.st_programUpdateDone = false;
        draft.st_programUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case PROGRAM_DELETE_REQUEST: {
        draft.st_programDeleteLoading = true;
        draft.st_programDeleteDone = false;
        draft.st_programDeleteError = null;
        break;
      }
      case PROGRAM_DELETE_SUCCESS: {
        draft.st_programDeleteLoading = false;
        draft.st_programDeleteDone = true;
        draft.st_programDeleteError = null;
        break;
      }
      case PROGRAM_DELETE_FAILURE: {
        draft.st_programDeleteLoading = false;
        draft.st_programDeleteDone = false;
        draft.st_programDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case PROGRAM_IMAGE_UPLOAD_REQUEST: {
        draft.st_programImageUploadLoading = true;
        draft.st_programImageUploadDone = false;
        draft.st_programImageUploadError = null;
        break;
      }
      case PROGRAM_IMAGE_UPLOAD_SUCCESS: {
        draft.st_programImageUploadLoading = false;
        draft.st_programImageUploadDone = true;
        draft.st_programImageUploadError = null;
        draft.programImagePath = action.data.path;
        break;
      }
      case PROGRAM_IMAGE_UPLOAD_FAILURE: {
        draft.st_programImageUploadLoading = false;
        draft.st_programImageUploadDone = false;
        draft.st_programImageUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case PROGRAM_IMAGE_RESET: {
        draft.programImagePath = action.data;
        break;
      }

      //////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
