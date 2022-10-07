import produce from "../util/produce";

export const initailState = {
  admissionList: [],

  //
  st_admissionListLoading: false, // admission 가져오기
  st_admissionListDone: false,
  st_admissionListError: null,

  //
  st_admissionUpdateLoading: false, // admission 수정하기
  st_admissionUpdateDone: false,
  st_admissionUpdateError: null,
};

export const ADMISSION_LIST_REQUEST = "ADMISSION_LIST_REQUEST";
export const ADMISSION_LIST_SUCCESS = "ADMISSION_LIST_SUCCESS";
export const ADMISSION_LIST_FAILURE = "ADMISSION_LIST_FAILURE";

export const ADMISSION_UPDATE_REQUEST = "ADMISSION_UPDATE_REQUEST";
export const ADMISSION_UPDATE_SUCCESS = "ADMISSION_UPDATE_SUCCESS";
export const ADMISSION_UPDATE_FAILURE = "ADMISSION_UPDATE_FAILURE";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADMISSION_LIST_REQUEST: {
        draft.st_admissionListLoading = true;
        draft.st_admissionListDone = false;
        draft.st_admissionListError = null;
        break;
      }
      case ADMISSION_LIST_SUCCESS: {
        draft.st_admissionListLoading = false;
        draft.st_admissionListDone = true;
        draft.st_admissionListError = null;
        draft.admissionList = action.data;
        break;
      }
      case ADMISSION_LIST_FAILURE: {
        draft.st_admissionListLoading = false;
        draft.st_admissionListDone = false;
        draft.st_admissionListError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case ADMISSION_UPDATE_REQUEST: {
        draft.st_admissionUpdateLoading = true;
        draft.st_admissionUpdateDone = false;
        draft.st_admissionUpdateError = null;
        break;
      }
      case ADMISSION_UPDATE_SUCCESS: {
        draft.st_admissionUpdateLoading = false;
        draft.st_admissionUpdateDone = true;
        draft.st_admissionUpdateError = null;
        break;
      }
      case ADMISSION_UPDATE_FAILURE: {
        draft.st_admissionUpdateLoading = false;
        draft.st_admissionUpdateDone = false;
        draft.st_admissionUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
