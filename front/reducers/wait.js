import produce from "../util/produce";

export const initailState = {
  waitList: [],
  adminWaitList: [],
  //
  fileUpload: null,
  imgUpload: null,
  lastPage: 1,

  // 백 라우터 listRouter

  st_waitAdminListLoading: false, // wait (list)Admin 가져오기
  st_waitAdminListDone: false,
  st_waitAdminListError: null,

  st_waitListLoading: false, // wait (list) 가져오기
  st_waitListDone: false,
  st_waitListError: null,
  //
  st_waitCreateLoading: false, // wait (list) 생성하기
  st_waitCreateDone: false,
  st_waitCreateError: null,
  //
  st_waitFileUploadLoading: false, // wait (list) file 올리기
  st_waitFileUploadDone: false,
  st_waitFileUploadError: null,
  //
  st_waitImageUploadLoading: false, // wait (list) img 올리기
  st_waitImageUploadDone: false,
  st_waitImageUploadError: null,
  //
  st_waitUpdateLoading: false, // wait (list) 수정하기
  st_waitUpdateDone: false,
  st_waitUpdateError: null,
  //
  st_waitDeleteLoading: false, // wait (list) 삭제하기
  st_waitDeleteDone: false,
  st_waitDeleteError: null,
};

export const WAIT_ADMIN_LIST_REQUEST = "WAIT_ADMIN_LIST_REQUEST";
export const WAIT_ADMIN_LIST_SUCCESS = "WAIT_ADMIN_LIST_SUCCESS";
export const WAIT_ADMIN_LIST_FAILURE = "WAIT_ADMIN_LIST_FAILURE";

export const WAIT_LIST_REQUEST = "WAIT_LIST_REQUEST";
export const WAIT_LIST_SUCCESS = "WAIT_LIST_SUCCESS";
export const WAIT_LIST_FAILURE = "WAIT_LIST_FAILURE";

export const WAIT_CREATE_REQUEST = "WAIT_CREATE_REQUEST";
export const WAIT_CREATE_SUCCESS = "WAIT_CREATE_SUCCESS";
export const WAIT_CREATE_FAILURE = "WAIT_CREATE_FAILURE";

export const WAIT_FILE_UPLOAD_REQUEST = "WAIT_FILE_UPLOAD_REQUEST";
export const WAIT_FILE_UPLOAD_SUCCESS = "WAIT_FILE_UPLOAD_SUCCESS";
export const WAIT_FILE_UPLOAD_FAILURE = "WAIT_FILE_UPLOAD_FAILURE";

export const WAIT_IMAGE_UPLOAD_REQUEST = "WAIT_IMAGE_UPLOAD_REQUEST";
export const WAIT_IMAGE_UPLOAD_SUCCESS = "WAIT_IMAGE_UPLOAD_SUCCESS";
export const WAIT_IMAGE_UPLOAD_FAILURE = "WAIT_IMAGE_UPLOAD_FAILURE";

export const WAIT_UPDATE_REQUEST = "WAIT_UPDATE_REQUEST";
export const WAIT_UPDATE_SUCCESS = "WAIT_UPDATE_SUCCESS";
export const WAIT_UPDATE_FAILURE = "WAIT_UPDATE_FAILURE";

export const WAIT_DELETE_REQUEST = "WAIT_DELETE_REQUEST";
export const WAIT_DELETE_SUCCESS = "WAIT_DELETE_SUCCESS";
export const WAIT_DELETE_FAILURE = "WAIT_DELETE_FAILURE";

export const WAIT_RESET = "WAIT_RESET";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case WAIT_ADMIN_LIST_REQUEST: {
        draft.st_waitAdminListLoading = true;
        draft.st_waitAdminListDone = false;
        draft.st_waitAdminListError = null;
        break;
      }
      case WAIT_ADMIN_LIST_SUCCESS: {
        draft.st_waitAdminListLoading = false;
        draft.st_waitAdminListDone = true;
        draft.st_waitAdminListError = null;
        draft.adminWaitList = action.data;
        break;
      }
      case WAIT_ADMIN_LIST_FAILURE: {
        draft.st_waitAdminListLoading = false;
        draft.st_waitAdminListDone = false;
        draft.st_waitAdminListError = action.error;
        break;
      }
      //////////////////////////////////////////////

      case WAIT_LIST_REQUEST: {
        draft.st_waitListLoading = true;
        draft.st_waitListDone = false;
        draft.st_waitListError = null;
        break;
      }
      case WAIT_LIST_SUCCESS: {
        draft.st_waitListLoading = false;
        draft.st_waitListDone = true;
        draft.st_waitListError = null;
        draft.waitList = action.data.lists;
        draft.lastPage = action.data.lastPage;
        break;
      }
      case WAIT_LIST_FAILURE: {
        draft.st_waitListLoading = false;
        draft.st_waitListDone = false;
        draft.st_waitListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WAIT_CREATE_REQUEST: {
        draft.st_waitCreateLoading = true;
        draft.st_waitCreateDone = false;
        draft.st_waitCreateError = null;
        break;
      }
      case WAIT_CREATE_SUCCESS: {
        draft.st_waitCreateLoading = false;
        draft.st_waitCreateDone = true;
        draft.st_waitCreateError = null;
        break;
      }
      case WAIT_CREATE_FAILURE: {
        draft.st_waitCreateLoading = false;
        draft.st_waitCreateDone = false;
        draft.st_waitCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WAIT_FILE_UPLOAD_REQUEST: {
        draft.st_waitFileUploadLoading = true;
        draft.st_waitFileUploadDone = false;
        draft.st_waitFileUploadError = null;
        break;
      }
      case WAIT_FILE_UPLOAD_SUCCESS: {
        draft.st_waitFileUploadLoading = false;
        draft.st_waitFileUploadDone = true;
        draft.st_waitFileUploadError = null;
        draft.fileUpload = action.data.path;
        break;
      }
      case WAIT_FILE_UPLOAD_FAILURE: {
        draft.st_waitFileUploadLoading = false;
        draft.st_waitFileUploadDone = false;
        draft.st_waitFileUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WAIT_IMAGE_UPLOAD_REQUEST: {
        draft.st_waitImageUploadLoading = true;
        draft.st_waitImageUploadDone = false;
        draft.st_waitImageUploadError = null;
        break;
      }
      case WAIT_IMAGE_UPLOAD_SUCCESS: {
        draft.st_waitImageUploadLoading = false;
        draft.st_waitImageUploadDone = true;
        draft.st_waitImageUploadError = null;
        draft.imgUpload = action.data.path;
        break;
      }
      case WAIT_IMAGE_UPLOAD_FAILURE: {
        draft.st_waitImageUploadLoading = false;
        draft.st_waitImageUploadDone = false;
        draft.st_waitImageUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WAIT_UPDATE_REQUEST: {
        draft.st_waitUpdateLoading = true;
        draft.st_waitUpdateDone = false;
        draft.st_waitUpdateError = null;
        break;
      }
      case WAIT_UPDATE_SUCCESS: {
        draft.st_waitUpdateLoading = false;
        draft.st_waitUpdateDone = true;
        draft.st_waitUpdateError = null;
        break;
      }
      case WAIT_UPDATE_FAILURE: {
        draft.st_waitUpdateLoading = false;
        draft.st_waitUpdateDone = false;
        draft.st_waitUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WAIT_DELETE_REQUEST: {
        draft.st_waitDeleteLoading = true;
        draft.st_waitDeleteDone = false;
        draft.st_waitDeleteError = null;
        break;
      }
      case WAIT_DELETE_SUCCESS: {
        draft.st_waitDeleteLoading = false;
        draft.st_waitDeleteDone = true;
        draft.st_waitDeleteError = null;
        break;
      }
      case WAIT_DELETE_FAILURE: {
        draft.st_waitDeleteLoading = false;
        draft.st_waitDeleteDone = false;
        draft.st_waitDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case WAIT_RESET: {
        draft.fileUpload = null;
        draft.imgUpload = null;
      }

      default:
        break;
    }
  });

export default reducer;
