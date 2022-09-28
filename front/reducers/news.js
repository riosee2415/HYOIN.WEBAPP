import produce from "../util/produce";

export const initailState = {
  newsList: [],
  adminNewsList: [],
  //
  fileUpload: null,
  imgUpload: null,
  lastPage: 1,
  newsLen: null,

  newsDetail: null, // 새소식 디테일
  newsNext: null, // 다음디테일
  newsPrev: null, // 이전디테일

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
  //
  st_newsDetailLoading: false, //  디데일 리스트
  st_newsDetailDone: false,
  st_newsDetailError: null,
  //
  st_newsPrevLoading: false, //  이전 디데일
  st_newsPrevDone: false,
  st_newsPrevError: null,
  //
  st_newsNextLoading: false, //  다음 디데일
  st_newsNextDone: false,
  st_newsNextError: null,
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

export const NEWS_DETAIL_REQUEST = "NEWS_DETAIL_REQUEST";
export const NEWS_DETAIL_SUCCESS = "NEWS_DETAIL_SUCCESS";
export const NEWS_DETAIL_FAILURE = "NEWS_DETAIL_FAILURE";

export const NEWS_PREV_REQUEST = "NEWS_PREV_REQUEST";
export const NEWS_PREV_SUCCESS = "NEWS_PREV_SUCCESS";
export const NEWS_PREV_FAILURE = "NEWS_PREV_FAILURE";

export const NEWS_NEXT_REQUEST = "NEWS_NEXT_REQUEST";
export const NEWS_NEXT_SUCCESS = "NEWS_NEXT_SUCCESS";
export const NEWS_NEXT_FAILURE = "NEWS_NEXT_FAILURE";

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
        draft.newsLen = action.data.newsLen;
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

      case NEWS_DETAIL_REQUEST: {
        draft.st_newsDetailLoading = true;
        draft.st_newsDetailDone = false;
        draft.st_newsDetailError = null;
        break;
      }
      case NEWS_DETAIL_SUCCESS: {
        draft.st_newsDetailLoading = false;
        draft.st_newsDetailDone = true;
        draft.st_newsDetailError = null;
        draft.newsDetail = action.data.detailData;
        break;
      }
      case NEWS_DETAIL_FAILURE: {
        draft.st_newsDetailLoading = false;
        draft.st_newsDetailDone = false;
        draft.st_newsDetailError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NEWS_NEXT_REQUEST: {
        draft.st_newsNextLoading = true;
        draft.st_newsNextDone = false;
        draft.st_newsNextError = null;
        break;
      }
      case NEWS_NEXT_SUCCESS: {
        draft.st_newsNextLoading = false;
        draft.st_newsNextDone = true;
        draft.st_newsNextError = null;
        draft.newsNext = action.data.detailData;
        break;
      }
      case NEWS_NEXT_FAILURE: {
        draft.st_newsNextLoading = false;
        draft.st_newsNextDone = false;
        draft.st_newsNextError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case NEWS_PREV_REQUEST: {
        draft.st_newsPrevLoading = true;
        draft.st_newsPrevDone = false;
        draft.st_newsPrevError = null;
        break;
      }
      case NEWS_PREV_SUCCESS: {
        draft.st_newsPrevLoading = false;
        draft.st_newsPrevDone = true;
        draft.st_newsPrevError = null;
        draft.newsPrev = action.data.detailData;
        break;
      }
      case NEWS_PREV_FAILURE: {
        draft.st_newsPrevLoading = false;
        draft.st_newsPrevDone = false;
        draft.st_newsPrevError = action.error;
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
