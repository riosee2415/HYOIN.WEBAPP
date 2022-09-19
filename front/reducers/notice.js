import produce from "../util/produce";

export const initailState = {
  noticeList: [],
  adminNoticeList: [],
  //
  fileUpload: null,
  imgUpload: null,
  lastPage: 1,

  st_noticeAdminListLoading: false, // NoticeAdmin 가져오기
  st_noticeAdminListDone: false,
  st_noticeAdminListError: null,

  st_noticeListLoading: false, // notice 가져오기
  st_noticeListDone: false,
  st_noticeListError: null,
  //
  st_noticeCreateLoading: false, // notice 생성하기
  st_noticeCreateDone: false,
  st_noticeCreateError: null,
  //
  st_noticeFileUploadLoading: false, // notice file 올리기
  st_noticeFileUploadDone: false,
  st_noticeFileUploadError: null,
  //
  st_noticeImageUploadLoading: false, // notice img 올리기
  st_noticeImageUploadDone: false,
  st_noticeImageUploadError: null,
  //
  st_noticeUpdateLoading: false, // notice 수정하기
  st_noticeUpdateDone: false,
  st_noticeUpdateError: null,
  //
  st_noticeDeleteLoading: false, // notice 삭제하기
  st_noticeDeleteDone: false,
  st_noticeDeleteError: null,
};

export const NOTICE_ADMIN_LIST_REQUEST = "NOTICE_ADMIN_LIST_REQUEST";
export const NOTICE_ADMIN_LIST_SUCCESS = "NOTICE_ADMIN_LIST_SUCCESS";
export const NOTICE_ADMIN_LIST_FAILURE = "NOTICE_ADMIN_LIST_FAILURE";

export const NOTICE_LIST_REQUEST = "NOTICE_LIST_REQUEST";
export const NOTICE_LIST_SUCCESS = "NOTICE_LIST_SUCCESS";
export const NOTICE_LIST_FAILURE = "NOTICE_LIST_FAILURE";

export const NOTICE_CREATE_REQUEST = "NOTICE_CREATE_REQUEST";
export const NOTICE_CREATE_SUCCESS = "NOTICE_CREATE_SUCCESS";
export const NOTICE_CREATE_FAILURE = "NOTICE_CREATE_FAILURE";

export const NOTICE_FILE_UPLOAD_REQUEST = "NOTICE_FILE_UPLOAD_REQUEST";
export const NOTICE_FILE_UPLOAD_SUCCESS = "NOTICE_FILE_UPLOAD_SUCCESS";
export const NOTICE_FILE_UPLOAD_FAILURE = "NOTICE_FILE_UPLOAD_FAILURE";

export const NOTICE_IMAGE_UPLOAD_REQUEST = "NOTICE_IMAGE_UPLOAD_REQUEST";
export const NOTICE_IMAGE_UPLOAD_SUCCESS = "NOTICE_IMAGE_UPLOAD_SUCCESS";
export const NOTICE_IMAGE_UPLOAD_FAILURE = "NOTICE_IMAGE_UPLOAD_FAILURE";

export const NOTICE_UPDATE_REQUEST = "NOTICE_UPDATE_REQUEST";
export const NOTICE_UPDATE_SUCCESS = "NOTICE_UPDATE_SUCCESS";
export const NOTICE_UPDATE_FAILURE = "NOTICE_UPDATE_FAILURE";

export const NOTICE_DELETE_REQUEST = "NOTICE_DELETE_REQUEST";
export const NOTICE_DELETE_SUCCESS = "NOTICE_DELETE_SUCCESS";
export const NOTICE_DELETE_FAILURE = "NOTICE_DELETE_FAILURE";

export const NOTICE_RESET = "NOTICE_RESET";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case NOTICE_ADMIN_LIST_REQUEST: {
        draft.st_noticeAdminListLoading = true;
        draft.st_noticeAdminListDone = false;
        draft.st_noticeAdminListError = null;
        break;
      }
      case NOTICE_ADMIN_LIST_SUCCESS: {
        draft.st_noticeAdminListLoading = false;
        draft.st_noticeAdminListDone = true;
        draft.st_noticeAdminListError = null;
        draft.adminNoticeList = action.data;
        break;
      }
      case NOTICE_ADMIN_LIST_FAILURE: {
        draft.st_noticeAdminListLoading = false;
        draft.st_noticeAdminListDone = false;
        draft.st_noticeAdminListError = action.error;
        break;
      }
      //////////////////////////////////////////////

      case NOTICE_LIST_REQUEST: {
        draft.st_noticeListLoading = true;
        draft.st_noticeListDone = false;
        draft.st_noticeListError = null;
        break;
      }
      case NOTICE_LIST_SUCCESS: {
        draft.st_noticeListLoading = false;
        draft.st_noticeListDone = true;
        draft.st_noticeListError = null;
        draft.noticeList = action.data.notice;
        draft.lastPage = action.data.lastPage;
        break;
      }
      case NOTICE_LIST_FAILURE: {
        draft.st_noticeListLoading = false;
        draft.st_noticeListDone = false;
        draft.st_noticeListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NOTICE_CREATE_REQUEST: {
        draft.st_noticeCreateLoading = true;
        draft.st_noticeCreateDone = false;
        draft.st_noticeCreateError = null;
        break;
      }
      case NOTICE_CREATE_SUCCESS: {
        draft.st_noticeCreateLoading = false;
        draft.st_noticeCreateDone = true;
        draft.st_noticeCreateError = null;
        break;
      }
      case NOTICE_CREATE_FAILURE: {
        draft.st_noticeCreateLoading = false;
        draft.st_noticeCreateDone = false;
        draft.st_noticeCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NOTICE_FILE_UPLOAD_REQUEST: {
        draft.st_noticeFileUploadLoading = true;
        draft.st_noticeFileUploadDone = false;
        draft.st_noticeFileUploadError = null;
        break;
      }
      case NOTICE_FILE_UPLOAD_SUCCESS: {
        draft.st_noticeFileUploadLoading = false;
        draft.st_noticeFileUploadDone = true;
        draft.st_noticeFileUploadError = null;
        draft.fileUpload = action.data.path;
        break;
      }
      case NOTICE_FILE_UPLOAD_FAILURE: {
        draft.st_noticeFileUploadLoading = false;
        draft.st_noticeFileUploadDone = false;
        draft.st_noticeFileUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NOTICE_IMAGE_UPLOAD_REQUEST: {
        draft.st_noticeImageUploadLoading = true;
        draft.st_noticeImageUploadDone = false;
        draft.st_noticeImageUploadError = null;
        break;
      }
      case NOTICE_IMAGE_UPLOAD_SUCCESS: {
        draft.st_noticeImageUploadLoading = false;
        draft.st_noticeImageUploadDone = true;
        draft.st_noticeImageUploadError = null;
        draft.imgUpload = action.data.path;
        break;
      }
      case NOTICE_IMAGE_UPLOAD_FAILURE: {
        draft.st_noticeImageUploadLoading = false;
        draft.st_noticeImageUploadDone = false;
        draft.st_noticeImageUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NOTICE_UPDATE_REQUEST: {
        draft.st_noticeUpdateLoading = true;
        draft.st_noticeUpdateDone = false;
        draft.st_noticeUpdateError = null;
        break;
      }
      case NOTICE_UPDATE_SUCCESS: {
        draft.st_noticeUpdateLoading = false;
        draft.st_noticeUpdateDone = true;
        draft.st_noticeUpdateError = null;
        break;
      }
      case NOTICE_UPDATE_FAILURE: {
        draft.st_noticeUpdateLoading = false;
        draft.st_noticeUpdateDone = false;
        draft.st_noticeUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NOTICE_DELETE_REQUEST: {
        draft.st_noticeDeleteLoading = true;
        draft.st_noticeDeleteDone = false;
        draft.st_noticeDeleteError = null;
        break;
      }
      case NOTICE_DELETE_SUCCESS: {
        draft.st_noticeDeleteLoading = false;
        draft.st_noticeDeleteDone = true;
        draft.st_noticeDeleteError = null;
        break;
      }
      case NOTICE_DELETE_FAILURE: {
        draft.st_noticeDeleteLoading = false;
        draft.st_noticeDeleteDone = false;
        draft.st_noticeDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case NOTICE_RESET: {
        draft.fileUpload = null;
        draft.imgUpload = null;
      }

      default:
        break;
    }
  });

export default reducer;
