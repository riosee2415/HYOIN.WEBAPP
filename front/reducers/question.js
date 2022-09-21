import produce from "../util/produce";

export const initailState = {
  questions: [],
  //
  st_questionListLoading: false, // 문의 정보 가져오기
  st_questionListDone: false,
  st_questionListError: null,
  //
  st_questionCreateLoading: false, // 문의 정보 생성
  st_questionCreateDone: false,
  st_questionCreateError: null,
  //
  st_questionUpdateLoading: false, // 문의 정보 수정
  st_questionUpdateDone: false,
  st_questionUpdateError: null,
  //
};

export const QUESTION_LIST_REQUEST = "QUESTION_LIST_REQUEST";
export const QUESTION_LIST_SUCCESS = "QUESTION_LIST_SUCCESS";
export const QUESTION_LIST_FAILURE = "QUESTION_LIST_FAILURE";
//
export const QUESTION_CREATE_REQUEST = "QUESTION_CREATE_REQUEST";
export const QUESTION_CREATE_SUCCESS = "QUESTION_CREATE_SUCCESS";
export const QUESTION_CREATE_FAILURE = "QUESTION_CREATE_FAILURE";
//
export const QUESTION_UPDATE_REQUEST = "QUESTION_UPDATE_REQUEST";
export const QUESTION_UPDATE_SUCCESS = "QUESTION_UPDATE_SUCCESS";
export const QUESTION_UPDATE_FAILURE = "QUESTION_UPDATE_FAILURE";
//
const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case QUESTION_LIST_REQUEST: {
        draft.st_questionListLoading = true;
        draft.st_questionListDone = false;
        draft.st_questionListError = null;
        break;
      }
      case QUESTION_LIST_SUCCESS: {
        draft.st_questionListLoading = false;
        draft.st_questionListDone = true;
        draft.st_questionListError = null;
        draft.questions = action.data;
        break;
      }
      case QUESTION_LIST_FAILURE: {
        draft.st_questionListLoading = false;
        draft.st_questionListDone = false;
        draft.st_questionListError = action.error;
        break;
      }

      ///////////////////////////////////////////////////////
      case QUESTION_CREATE_REQUEST: {
        draft.st_questionCreateLoading = true;
        draft.st_questionCreateDone = false;
        draft.st_questionCreateError = null;
        break;
      }
      case QUESTION_CREATE_SUCCESS: {
        draft.st_questionCreateLoading = false;
        draft.st_questionCreateDone = true;
        draft.st_questionCreateError = null;

        break;
      }
      case QUESTION_CREATE_FAILURE: {
        draft.st_questionCreateLoading = false;
        draft.st_questionCreateDone = false;
        draft.st_questionCreateError = action.error;
        break;
      }

      ///////////////////////////////////////////////////////
      case QUESTION_UPDATE_REQUEST: {
        draft.st_questionUpdateLoading = true;
        draft.st_questionUpdateDone = false;
        draft.st_questionUpdateError = null;
        break;
      }
      case QUESTION_UPDATE_SUCCESS: {
        draft.st_questionUpdateLoading = false;
        draft.st_questionUpdateDone = true;
        draft.st_questionUpdateError = null;

        break;
      }
      case QUESTION_UPDATE_FAILURE: {
        draft.st_questionUpdateLoading = false;
        draft.st_questionUpdateDone = false;
        draft.st_questionUpdateError = action.error;
        break;
      }

      ///////////////////////////////////////////////////////
      default:
        break;
    }
  });

export default reducer;
