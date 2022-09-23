import produce from "../util/produce";

export const initailState = {
  valueList: [],

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
        draft.aList = action.data;
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
        draft.st_aUpdateLoading = true;
        draft.st_aUpdateDone = false;
        draft.st_aUpdateError = null;
        break;
      }
      case PROGRAM_UPDATE_SUCCESS: {
        draft.st_aUpdateLoading = false;
        draft.st_aUpdateDone = true;
        draft.st_aUpdateError = null;
        break;
      }
      case PROGRAM_UPDATE_FAILURE: {
        draft.st_aUpdateLoading = false;
        draft.st_aUpdateDone = false;
        draft.st_aUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case PROGRAM_DELETE_REQUEST: {
        draft.st_aDeleteLoading = true;
        draft.st_aDeleteDone = false;
        draft.st_aDeleteError = null;
        break;
      }
      case PROGRAM_DELETE_SUCCESS: {
        draft.st_aDeleteLoading = false;
        draft.st_aDeleteDone = true;
        draft.st_aDeleteError = null;
        break;
      }
      case PROGRAM_DELETE_FAILURE: {
        draft.st_aDeleteLoading = false;
        draft.st_aDeleteDone = false;
        draft.st_aDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
