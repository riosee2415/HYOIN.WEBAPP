import produce from "../util/produce";

export const initailState = {
  recruitList: [],
  adminRecruitList: [],
  //
  fileUpload: null,
  imgUpload: null,
  lastPage: 1,

  st_recruitAdminListLoading: false, // recruitAdmin 가져오기
  st_recruitAdminListDone: false,
  st_recruitAdminListError: null,

  st_recruitListLoading: false, // recruit 가져오기
  st_recruitListDone: false,
  st_recruitListError: null,
  //
  st_recruitCreateLoading: false, // recruit 생성하기
  st_recruitCreateDone: false,
  st_recruitCreateError: null,
  //
  st_recruitFileUploadLoading: false, // recruit file 올리기
  st_recruitFileUploadDone: false,
  st_recruitFileUploadError: null,
  //
  st_recruitImageUploadLoading: false, // recruit img 올리기
  st_recruitImageUploadDone: false,
  st_recruitImageUploadError: null,
  //
  st_recruitUpdateLoading: false, // recruit 수정하기
  st_recruitUpdateDone: false,
  st_recruitUpdateError: null,
  //
  st_recruitDeleteLoading: false, // recruit 삭제하기
  st_recruitDeleteDone: false,
  st_recruitDeleteError: null,
};

export const RECRUIT_ADMIN_LIST_REQUEST = "RECRUIT_ADMIN_LIST_REQUEST";
export const RECRUIT_ADMIN_LIST_SUCCESS = "RECRUIT_ADMIN_LIST_SUCCESS";
export const RECRUIT_ADMIN_LIST_FAILURE = "RECRUIT_ADMIN_LIST_FAILURE";

export const RECRUIT_LIST_REQUEST = "RECRUIT_LIST_REQUEST";
export const RECRUIT_LIST_SUCCESS = "RECRUIT_LIST_SUCCESS";
export const RECRUIT_LIST_FAILURE = "RECRUIT_LIST_FAILURE";

export const RECRUIT_CREATE_REQUEST = "RECRUIT_CREATE_REQUEST";
export const RECRUIT_CREATE_SUCCESS = "RECRUIT_CREATE_SUCCESS";
export const RECRUIT_CREATE_FAILURE = "RECRUIT_CREATE_FAILURE";

export const RECRUIT_FILE_UPLOAD_REQUEST = "RECRUIT_FILE_UPLOAD_REQUEST";
export const RECRUIT_FILE_UPLOAD_SUCCESS = "RECRUIT_FILE_UPLOAD_SUCCESS";
export const RECRUIT_FILE_UPLOAD_FAILURE = "RECRUIT_FILE_UPLOAD_FAILURE";

export const RECRUIT_IMAGE_UPLOAD_REQUEST = "RECRUIT_IMAGE_UPLOAD_REQUEST";
export const RECRUIT_IMAGE_UPLOAD_SUCCESS = "RECRUIT_IMAGE_UPLOAD_SUCCESS";
export const RECRUIT_IMAGE_UPLOAD_FAILURE = "RECRUIT_IMAGE_UPLOAD_FAILURE";

export const RECRUIT_UPDATE_REQUEST = "RECRUIT_UPDATE_REQUEST";
export const RECRUIT_UPDATE_SUCCESS = "RECRUIT_UPDATE_SUCCESS";
export const RECRUIT_UPDATE_FAILURE = "RECRUIT_UPDATE_FAILURE";

export const RECRUIT_DELETE_REQUEST = "RECRUIT_DELETE_REQUEST";
export const RECRUIT_DELETE_SUCCESS = "RECRUIT_DELETE_SUCCESS";
export const RECRUIT_DELETE_FAILURE = "RECRUIT_DELETE_FAILURE";

export const RECRUIT_RESET = "RECRUIT_RESET";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case RECRUIT_ADMIN_LIST_REQUEST: {
        draft.st_recruitAdminListLoading = true;
        draft.st_recruitAdminListDone = false;
        draft.st_recruitAdminListError = null;
        break;
      }
      case RECRUIT_ADMIN_LIST_SUCCESS: {
        draft.st_recruitAdminListLoading = false;
        draft.st_recruitAdminListDone = true;
        draft.st_recruitAdminListError = null;
        draft.adminRecruitList = action.data;
        break;
      }
      case RECRUIT_ADMIN_LIST_FAILURE: {
        draft.st_recruitAdminListLoading = false;
        draft.st_recruitAdminListDone = false;
        draft.st_recruitAdminListError = action.error;
        break;
      }
      //////////////////////////////////////////////

      case RECRUIT_LIST_REQUEST: {
        draft.st_recruitListLoading = true;
        draft.st_recruitListDone = false;
        draft.st_recruitListError = null;
        break;
      }
      case RECRUIT_LIST_SUCCESS: {
        draft.st_recruitListLoading = false;
        draft.st_recruitListDone = true;
        draft.st_recruitListError = null;
        draft.recruitList = action.data.recruit;
        draft.lastPage = action.data.lastPage;
        break;
      }
      case RECRUIT_LIST_FAILURE: {
        draft.st_recruitListLoading = false;
        draft.st_recruitListDone = false;
        draft.st_recruitListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case RECRUIT_CREATE_REQUEST: {
        draft.st_recruitCreateLoading = true;
        draft.st_recruitCreateDone = false;
        draft.st_recruitCreateError = null;
        break;
      }
      case RECRUIT_CREATE_SUCCESS: {
        draft.st_recruitCreateLoading = false;
        draft.st_recruitCreateDone = true;
        draft.st_recruitCreateError = null;
        break;
      }
      case RECRUIT_CREATE_FAILURE: {
        draft.st_recruitCreateLoading = false;
        draft.st_recruitCreateDone = false;
        draft.st_recruitCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case RECRUIT_FILE_UPLOAD_REQUEST: {
        draft.st_recruitFileUploadLoading = true;
        draft.st_recruitFileUploadDone = false;
        draft.st_recruitFileUploadError = null;
        break;
      }
      case RECRUIT_FILE_UPLOAD_SUCCESS: {
        draft.st_recruitFileUploadLoading = false;
        draft.st_recruitFileUploadDone = true;
        draft.st_recruitFileUploadError = null;
        draft.fileUpload = action.data.path;
        break;
      }
      case RECRUIT_FILE_UPLOAD_FAILURE: {
        draft.st_recruitFileUploadLoading = false;
        draft.st_recruitFileUploadDone = false;
        draft.st_recruitFileUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case RECRUIT_IMAGE_UPLOAD_REQUEST: {
        draft.st_recruitImageUploadLoading = true;
        draft.st_recruitImageUploadDone = false;
        draft.st_recruitImageUploadError = null;
        break;
      }
      case RECRUIT_IMAGE_UPLOAD_SUCCESS: {
        draft.st_recruitImageUploadLoading = false;
        draft.st_recruitImageUploadDone = true;
        draft.st_recruitImageUploadError = null;
        draft.imgUpload = action.data.path;
        break;
      }
      case RECRUIT_IMAGE_UPLOAD_FAILURE: {
        draft.st_recruitImageUploadLoading = false;
        draft.st_recruitImageUploadDone = false;
        draft.st_recruitImageUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case RECRUIT_UPDATE_REQUEST: {
        draft.st_recruitUpdateLoading = true;
        draft.st_recruitUpdateDone = false;
        draft.st_recruitUpdateError = null;
        break;
      }
      case RECRUIT_UPDATE_SUCCESS: {
        draft.st_recruitUpdateLoading = false;
        draft.st_recruitUpdateDone = true;
        draft.st_recruitUpdateError = null;
        break;
      }
      case RECRUIT_UPDATE_FAILURE: {
        draft.st_recruitUpdateLoading = false;
        draft.st_recruitUpdateDone = false;
        draft.st_recruitUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case RECRUIT_DELETE_REQUEST: {
        draft.st_recruitDeleteLoading = true;
        draft.st_recruitDeleteDone = false;
        draft.st_recruitDeleteError = null;
        break;
      }
      case RECRUIT_DELETE_SUCCESS: {
        draft.st_recruitDeleteLoading = false;
        draft.st_recruitDeleteDone = true;
        draft.st_recruitDeleteError = null;
        break;
      }
      case RECRUIT_DELETE_FAILURE: {
        draft.st_recruitDeleteLoading = false;
        draft.st_recruitDeleteDone = false;
        draft.st_recruitDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case RECRUIT_RESET: {
        draft.fileUpload = null;
        draft.imgUpload = null;
      }

      default:
        break;
    }
  });

export default reducer;
