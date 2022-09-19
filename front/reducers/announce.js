import produce from "../util/produce";

export const initailState = {
  announceList: [],
  adminAnnounceList: [],
  //
  fileUpload: null,
  imgUpload: null,
  lastPage: 1,

  st_announceAdminListLoading: false, // announceAdmin 가져오기
  st_announceAdminListDone: false,
  st_announceAdminListError: null,

  st_announceListLoading: false, // announce 가져오기
  st_announceListDone: false,
  st_announceListError: null,
  //
  st_announceCreateLoading: false, // announce 생성하기
  st_announceCreateDone: false,
  st_announceCreateError: null,
  //
  st_announceFileUploadLoading: false, // announce file 올리기
  st_announceFileUploadDone: false,
  st_announceFileUploadError: null,
  //
  st_announceImageUploadLoading: false, // announce img 올리기
  st_announceImageUploadDone: false,
  st_announceImageUploadError: null,
  //
  st_announceUpdateLoading: false, // announce 수정하기
  st_announceUpdateDone: false,
  st_announceUpdateError: null,
  //
  st_announceDeleteLoading: false, // announce 삭제하기
  st_announceDeleteDone: false,
  st_announceDeleteError: null,
};

export const ANNOUNCE_ADMIN_LIST_REQUEST = "ANNOUNCE_ADMIN_LIST_REQUEST";
export const ANNOUNCE_ADMIN_LIST_SUCCESS = "ANNOUNCE_ADMIN_LIST_SUCCESS";
export const ANNOUNCE_ADMIN_LIST_FAILURE = "ANNOUNCE_ADMIN_LIST_FAILURE";

export const ANNOUNCE_LIST_REQUEST = "ANNOUNCE_LIST_REQUEST";
export const ANNOUNCE_LIST_SUCCESS = "ANNOUNCE_LIST_SUCCESS";
export const ANNOUNCE_LIST_FAILURE = "ANNOUNCE_LIST_FAILURE";

export const ANNOUNCE_CREATE_REQUEST = "ANNOUNCE_CREATE_REQUEST";
export const ANNOUNCE_CREATE_SUCCESS = "ANNOUNCE_CREATE_SUCCESS";
export const ANNOUNCE_CREATE_FAILURE = "ANNOUNCE_CREATE_FAILURE";

export const ANNOUNCE_FILE_UPLOAD_REQUEST = "ANNOUNCE_FILE_UPLOAD_REQUEST";
export const ANNOUNCE_FILE_UPLOAD_SUCCESS = "ANNOUNCE_FILE_UPLOAD_SUCCESS";
export const ANNOUNCE_FILE_UPLOAD_FAILURE = "ANNOUNCE_FILE_UPLOAD_FAILURE";

export const ANNOUNCE_IMAGE_UPLOAD_REQUEST = "ANNOUNCE_IMAGE_UPLOAD_REQUEST";
export const ANNOUNCE_IMAGE_UPLOAD_SUCCESS = "ANNOUNCE_IMAGE_UPLOAD_SUCCESS";
export const ANNOUNCE_IMAGE_UPLOAD_FAILURE = "ANNOUNCE_IMAGE_UPLOAD_FAILURE";

export const ANNOUNCE_UPDATE_REQUEST = "ANNOUNCE_UPDATE_REQUEST";
export const ANNOUNCE_UPDATE_SUCCESS = "ANNOUNCE_UPDATE_SUCCESS";
export const ANNOUNCE_UPDATE_FAILURE = "ANNOUNCE_UPDATE_FAILURE";

export const ANNOUNCE_DELETE_REQUEST = "ANNOUNCE_DELETE_REQUEST";
export const ANNOUNCE_DELETE_SUCCESS = "ANNOUNCE_DELETE_SUCCESS";
export const ANNOUNCE_DELETE_FAILURE = "ANNOUNCE_DELETE_FAILURE";

export const ANNOUNCE_RESET = "ANNOUNCE_RESET";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ANNOUNCE_ADMIN_LIST_REQUEST: {
        draft.st_announceAdminListLoading = true;
        draft.st_announceAdminListDone = false;
        draft.st_announceAdminListError = null;
        break;
      }
      case ANNOUNCE_ADMIN_LIST_SUCCESS: {
        draft.st_announceAdminListLoading = false;
        draft.st_announceAdminListDone = true;
        draft.st_announceAdminListError = null;
        draft.adminAnnounceList = action.data;
        break;
      }
      case ANNOUNCE_ADMIN_LIST_FAILURE: {
        draft.st_announceAdminListLoading = false;
        draft.st_announceAdminListDone = false;
        draft.st_announceAdminListError = action.error;
        break;
      }
      //////////////////////////////////////////////

      case ANNOUNCE_LIST_REQUEST: {
        draft.st_announceListLoading = true;
        draft.st_announceListDone = false;
        draft.st_announceListError = null;
        break;
      }
      case ANNOUNCE_LIST_SUCCESS: {
        draft.st_announceListLoading = false;
        draft.st_announceListDone = true;
        draft.st_announceListError = null;
        draft.announceList = action.data.announce;
        draft.lastPage = action.data.lastPage;
        break;
      }
      case ANNOUNCE_LIST_FAILURE: {
        draft.st_announceListLoading = false;
        draft.st_announceListDone = false;
        draft.st_announceListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case ANNOUNCE_CREATE_REQUEST: {
        draft.st_announceCreateLoading = true;
        draft.st_announceCreateDone = false;
        draft.st_announceCreateError = null;
        break;
      }
      case ANNOUNCE_CREATE_SUCCESS: {
        draft.st_announceCreateLoading = false;
        draft.st_announceCreateDone = true;
        draft.st_announceCreateError = null;
        break;
      }
      case ANNOUNCE_CREATE_FAILURE: {
        draft.st_announceCreateLoading = false;
        draft.st_announceCreateDone = false;
        draft.st_announceCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case ANNOUNCE_FILE_UPLOAD_REQUEST: {
        draft.st_announceFileUploadLoading = true;
        draft.st_announceFileUploadDone = false;
        draft.st_announceFileUploadError = null;
        break;
      }
      case ANNOUNCE_FILE_UPLOAD_SUCCESS: {
        draft.st_announceFileUploadLoading = false;
        draft.st_announceFileUploadDone = true;
        draft.st_announceFileUploadError = null;
        draft.fileUpload = action.data.path;
        break;
      }
      case ANNOUNCE_FILE_UPLOAD_FAILURE: {
        draft.st_announceFileUploadLoading = false;
        draft.st_announceFileUploadDone = false;
        draft.st_announceFileUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case ANNOUNCE_IMAGE_UPLOAD_REQUEST: {
        draft.st_announceImageUploadLoading = true;
        draft.st_announceImageUploadDone = false;
        draft.st_announceImageUploadError = null;
        break;
      }
      case ANNOUNCE_IMAGE_UPLOAD_SUCCESS: {
        draft.st_announceImageUploadLoading = false;
        draft.st_announceImageUploadDone = true;
        draft.st_announceImageUploadError = null;
        draft.imgUpload = action.data.path;
        break;
      }
      case ANNOUNCE_IMAGE_UPLOAD_FAILURE: {
        draft.st_announceImageUploadLoading = false;
        draft.st_announceImageUploadDone = false;
        draft.st_announceImageUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case ANNOUNCE_UPDATE_REQUEST: {
        draft.st_announceUpdateLoading = true;
        draft.st_announceUpdateDone = false;
        draft.st_announceUpdateError = null;
        break;
      }
      case ANNOUNCE_UPDATE_SUCCESS: {
        draft.st_announceUpdateLoading = false;
        draft.st_announceUpdateDone = true;
        draft.st_announceUpdateError = null;
        break;
      }
      case ANNOUNCE_UPDATE_FAILURE: {
        draft.st_announceUpdateLoading = false;
        draft.st_announceUpdateDone = false;
        draft.st_announceUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case ANNOUNCE_DELETE_REQUEST: {
        draft.st_announceDeleteLoading = true;
        draft.st_announceDeleteDone = false;
        draft.st_announceDeleteError = null;
        break;
      }
      case ANNOUNCE_DELETE_SUCCESS: {
        draft.st_announceDeleteLoading = false;
        draft.st_announceDeleteDone = true;
        draft.st_announceDeleteError = null;
        break;
      }
      case ANNOUNCE_DELETE_FAILURE: {
        draft.st_announceDeleteLoading = false;
        draft.st_announceDeleteDone = false;
        draft.st_announceDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case ANNOUNCE_RESET: {
        draft.fileUpload = null;
        draft.imgUpload = null;
      }

      default:
        break;
    }
  });

export default reducer;
