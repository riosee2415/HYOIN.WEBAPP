import produce from "../util/produce";

export const initailState = {
  newsList: [],
  adminNewsList: [],
  //
  fileUpload: null,
  imgUpload: null,
  lastPage: 1,

  st_newsAdminListLoading: false, // newsAdmin 가져오기
  st_newsAdminListDone: false,
  st_newsAdminListError: null,

  st_newsListLoading: false, // news 가져오기
  st_newsListDone: false,
  st_newsListError: null,
  //
  st_newsCreateLoading: false, // news 생성하기
  st_newsCreateDone: false,
  st_newsCreateError: null,
  //
  st_newsFileUploadLoading: false, // news file 올리기
  st_newsFileUploadDone: false,
  st_newsFileUploadError: null,
  //
  st_newsImageUploadLoading: false, // news img 올리기
  st_newsImageUploadDone: false,
  st_newsImageUploadError: null,
  //
  st_newsUpdateLoading: false, // news 수정하기
  st_newsUpdateDone: false,
  st_newsUpdateError: null,
  //
  st_newsDeleteLoading: false, // news 삭제하기
  st_newsDeleteDone: false,
  st_newsDeleteError: null,
};

export const NEWS_ADMIN_LIST_REQUEST = "NEWS_ADMIN_LIST_REQUEST";
export const NEWS_ADMIN_LIST_SUCCESS = "NEWS_ADMIN_LIST_SUCCESS";
export const NEWS_ADMIN_LIST_FAILURE = "NEWS_ADMIN_LIST_FAILURE";

export const NEWS_LIST_REQUEST = "NEWS_LIST_REQUEST";
export const NEWS_LIST_SUCCESS = "NEWS_LIST_SUCCESS";
export const NEWS_LIST_FAILURE = "NEWS_LIST_FAILURE";

export const NEWS_CREATE_REQUEST = "NEWS_CREATE_REQUEST";
export const NEWS_CREATE_SUCCESS = "NEWS_CREATE_SUCCESS";
export const NEWS_CREATE_FAILURE = "NEWS_CREATE_FAILURE";

export const NEWS_FILE_UPLOAD_REQUEST = "NEWS_FILE_UPLOAD_REQUEST";
export const NEWS_FILE_UPLOAD_SUCCESS = "NEWS_FILE_UPLOAD_SUCCESS";
export const NEWS_FILE_UPLOAD_FAILURE = "NEWS_FILE_UPLOAD_FAILURE";

export const NEWS_IMAGE_UPLOAD_REQUEST = "NEWS_IMAGE_UPLOAD_REQUEST";
export const NEWS_IMAGE_UPLOAD_SUCCESS = "NEWS_IMAGE_UPLOAD_SUCCESS";
export const NEWS_IMAGE_UPLOAD_FAILURE = "NEWS_IMAGE_UPLOAD_FAILURE";

export const NEWS_UPDATE_REQUEST = "NEWS_UPDATE_REQUEST";
export const NEWS_UPDATE_SUCCESS = "NEWS_UPDATE_SUCCESS";
export const NEWS_UPDATE_FAILURE = "NEWS_UPDATE_FAILURE";

export const NEWS_DELETE_REQUEST = "NEWS_DELETE_REQUEST";
export const NEWS_DELETE_SUCCESS = "NEWS_DELETE_SUCCESS";
export const NEWS_DELETE_FAILURE = "NEWS_DELETE_FAILURE";

export const NEWS_RESET = "NEWS_RESET";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case NEWS_ADMIN_LIST_REQUEST: {
        draft.st_newsAdminListLoading = true;
        draft.st_newsAdminListDone = false;
        draft.st_newsAdminListError = null;
        break;
      }
      case NEWS_ADMIN_LIST_SUCCESS: {
        draft.st_newsAdminListLoading = false;
        draft.st_newsAdminListDone = true;
        draft.st_newsAdminListError = null;
        draft.adminNewsList = action.data;
        break;
      }
      case NEWS_ADMIN_LIST_FAILURE: {
        draft.st_newsAdminListLoading = false;
        draft.st_newsAdminListDone = false;
        draft.st_newsAdminListError = action.error;
        break;
      }
      //////////////////////////////////////////////

      case NEWS_LIST_REQUEST: {
        draft.st_newsListLoading = true;
        draft.st_newsListDone = false;
        draft.st_newsListError = null;
        break;
      }
      case NEWS_LIST_SUCCESS: {
        draft.st_newsListLoading = false;
        draft.st_newsListDone = true;
        draft.st_newsListError = null;
        draft.newsList = action.data.news;
        draft.lastPage = action.data.lastPage;
        break;
      }
      case NEWS_LIST_FAILURE: {
        draft.st_newsListLoading = false;
        draft.st_newsListDone = false;
        draft.st_newsListError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NEWS_CREATE_REQUEST: {
        draft.st_newsCreateLoading = true;
        draft.st_newsCreateDone = false;
        draft.st_newsCreateError = null;
        break;
      }
      case NEWS_CREATE_SUCCESS: {
        draft.st_newsCreateLoading = false;
        draft.st_newsCreateDone = true;
        draft.st_newsCreateError = null;
        break;
      }
      case NEWS_CREATE_FAILURE: {
        draft.st_newsCreateLoading = false;
        draft.st_newsCreateDone = false;
        draft.st_newsCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NEWS_FILE_UPLOAD_REQUEST: {
        draft.st_newsFileUploadLoading = true;
        draft.st_newsFileUploadDone = false;
        draft.st_newsFileUploadError = null;
        break;
      }
      case NEWS_FILE_UPLOAD_SUCCESS: {
        draft.st_newsFileUploadLoading = false;
        draft.st_newsFileUploadDone = true;
        draft.st_newsFileUploadError = null;
        draft.fileUpload = action.data.path;
        break;
      }
      case NEWS_FILE_UPLOAD_FAILURE: {
        draft.st_newsFileUploadLoading = false;
        draft.st_newsFileUploadDone = false;
        draft.st_newsFileUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NEWS_IMAGE_UPLOAD_REQUEST: {
        draft.st_newsImageUploadLoading = true;
        draft.st_newsImageUploadDone = false;
        draft.st_newsImageUploadError = null;
        break;
      }
      case NEWS_IMAGE_UPLOAD_SUCCESS: {
        draft.st_newsImageUploadLoading = false;
        draft.st_newsImageUploadDone = true;
        draft.st_newsImageUploadError = null;
        draft.imgUpload = action.data.path;
        break;
      }
      case NEWS_IMAGE_UPLOAD_FAILURE: {
        draft.st_newsImageUploadLoading = false;
        draft.st_newsImageUploadDone = false;
        draft.st_newsImageUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NEWS_UPDATE_REQUEST: {
        draft.st_newsUpdateLoading = true;
        draft.st_newsUpdateDone = false;
        draft.st_newsUpdateError = null;
        break;
      }
      case NEWS_UPDATE_SUCCESS: {
        draft.st_newsUpdateLoading = false;
        draft.st_newsUpdateDone = true;
        draft.st_newsUpdateError = null;
        break;
      }
      case NEWS_UPDATE_FAILURE: {
        draft.st_newsUpdateLoading = false;
        draft.st_newsUpdateDone = false;
        draft.st_newsUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NEWS_DELETE_REQUEST: {
        draft.st_newsDeleteLoading = true;
        draft.st_newsDeleteDone = false;
        draft.st_newsDeleteError = null;
        break;
      }
      case NEWS_DELETE_SUCCESS: {
        draft.st_newsDeleteLoading = false;
        draft.st_newsDeleteDone = true;
        draft.st_newsDeleteError = null;
        break;
      }
      case NEWS_DELETE_FAILURE: {
        draft.st_newsDeleteLoading = false;
        draft.st_newsDeleteDone = false;
        draft.st_newsDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case NEWS_RESET: {
        draft.fileUpload = null;
        draft.imgUpload = null;
      }

      default:
        break;
    }
  });

export default reducer;
