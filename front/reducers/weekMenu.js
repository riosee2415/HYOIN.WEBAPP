import produce from "../util/produce";

export const initailState = {
  sundayData: null,
  mondayData: null,
  tuesdayData: null,
  wednesdayData: null,
  thursdayData: null,
  fridayData: null,
  saturdayData: null,

  adminWeekMenuList: [],

  weekMenuBrImgPath: null, // 아침메뉴 이미지
  weekMenuLuImgPath: null, // 점심메뉴 이미지
  weekMenuDiImgPath: null, // 저녁메뉴 이미지
  weekMenuAMImgPath: null, // 오전간식 이미지
  weekMenuPMImgPath: null, // 오후간식 이미지

  //
  st_weekMenuListLoading: false, // menu 가져오기
  st_weekMenuListDone: false,
  st_weekMenuListError: null,
  //
  st_adminWeekMenuListLoading: false, // 관리자 menu 가져오기
  st_adminWeekMenuListDone: false,
  st_adminWeekMenuListError: null,
  //
  st_weekMenuCreateLoading: false, // menu 생성
  st_weekMenuCreateDone: false,
  st_weekMenuCreateError: null,
  //
  st_weekMenuUpdateLoading: false, // menu 수정
  st_weekMenuUpdateDone: false,
  st_weekMenuUpdateError: null,
  //
  st_weekMenuDeleteLoading: false, // menu 삭제
  st_weekMenuDeleteDone: false,
  st_weekMenuDeleteError: null,
  //
  st_weekMenuBrImgUploadLoading: false, // 아침메뉴 이미지 등록
  st_weekMenuBrImgUploadDone: false,
  st_weekMenuBrImgUploadError: null,
  //
  st_weekMenuLuImgUploadLoading: false, // 점심메뉴 이미지 등록
  st_weekMenuLuImgUploadDone: false,
  st_weekMenuLuImgUploadError: null,
  //
  st_weekMenuDiImgUploadLoading: false, // 저녁메뉴 이미지 등록
  st_weekMenuDiImgUploadDone: false,
  st_weekMenuDiImgUploadError: null,
  //
  st_weekMenuAMImgUploadLoading: false, // 오전간식 이미지 등록
  st_weekMenuAMImgUploadDone: false,
  st_weekMenuAMImgUploadError: null,
  //
  st_weekMenuPMImgUploadLoading: false, // 오후간식 이미지 등록
  st_weekMenuPMImgUploadDone: false,
  st_weekMenuPMImgUploadError: null,
  //
};

export const WEEK_MENU_LIST_REQUEST = "WEEK_MENU_LIST_REQUEST";
export const WEEK_MENU_LIST_SUCCESS = "WEEK_MENU_LIST_SUCCESS";
export const WEEK_MENU_LIST_FAILURE = "WEEK_MENU_LIST_FAILURE";

export const ADMIN_WEEK_MENU_LIST_REQUEST = "ADMIN_WEEK_MENU_LIST_REQUEST";
export const ADMIN_WEEK_MENU_LIST_SUCCESS = "ADMIN_WEEK_MENU_LIST_SUCCESS";
export const ADMIN_WEEK_MENU_LIST_FAILURE = "ADMIN_WEEK_MENU_LIST_FAILURE";

export const WEEK_MENU_CREATE_REQUEST = "WEEK_MENU_CREATE_REQUEST";
export const WEEK_MENU_CREATE_SUCCESS = "WEEK_MENU_CREATE_SUCCESS";
export const WEEK_MENU_CREATE_FAILURE = "WEEK_MENU_CREATE_FAILURE";

export const WEEK_MENU_UPDATE_REQUEST = "WEEK_MENU_UPDATE_REQUEST";
export const WEEK_MENU_UPDATE_SUCCESS = "WEEK_MENU_UPDATE_SUCCESS";
export const WEEK_MENU_UPDATE_FAILURE = "WEEK_MENU_UPDATE_FAILURE";

export const WEEK_MENU_DELETE_REQUEST = "WEEK_MENU_DELETE_REQUEST";
export const WEEK_MENU_DELETE_SUCCESS = "WEEK_MENU_DELETE_SUCCESS";
export const WEEK_MENU_DELETE_FAILURE = "WEEK_MENU_DELETE_FAILURE";

export const WEEK_MENU_BR_IMG_UPLOAD_REQUEST =
  "WEEK_MENU_BR_IMG_UPLOAD_REQUEST";
export const WEEK_MENU_BR_IMG_UPLOAD_SUCCESS =
  "WEEK_MENU_BR_IMG_UPLOAD_SUCCESS";
export const WEEK_MENU_BR_IMG_UPLOAD_FAILURE =
  "WEEK_MENU_BR_IMG_UPLOAD_FAILURE";

export const WEEK_MENU_LU_IMG_UPLOAD_REQUEST =
  "WEEK_MENU_LU_IMG_UPLOAD_REQUEST";
export const WEEK_MENU_LU_IMG_UPLOAD_SUCCESS =
  "WEEK_MENU_LU_IMG_UPLOAD_SUCCESS";
export const WEEK_MENU_LU_IMG_UPLOAD_FAILURE =
  "WEEK_MENU_LU_IMG_UPLOAD_FAILURE";

export const WEEK_MENU_DI_IMG_UPLOAD_REQUEST =
  "WEEK_MENU_DI_IMG_UPLOAD_REQUEST";
export const WEEK_MENU_DI_IMG_UPLOAD_SUCCESS =
  "WEEK_MENU_DI_IMG_UPLOAD_SUCCESS";
export const WEEK_MENU_DI_IMG_UPLOAD_FAILURE =
  "WEEK_MENU_DI_IMG_UPLOAD_FAILURE";

export const WEEK_MENU_AM_IMG_UPLOAD_REQUEST =
  "WEEK_MENU_AM_IMG_UPLOAD_REQUEST";
export const WEEK_MENU_AM_IMG_UPLOAD_SUCCESS =
  "WEEK_MENU_AM_IMG_UPLOAD_SUCCESS";
export const WEEK_MENU_AM_IMG_UPLOAD_FAILURE =
  "WEEK_MENU_AM_IMG_UPLOAD_FAILURE";

export const WEEK_MENU_PM_IMG_UPLOAD_REQUEST =
  "WEEK_MENU_PM_IMG_UPLOAD_REQUEST";
export const WEEK_MENU_PM_IMG_UPLOAD_SUCCESS =
  "WEEK_MENU_PM_IMG_UPLOAD_SUCCESS";
export const WEEK_MENU_PM_IMG_UPLOAD_FAILURE =
  "WEEK_MENU_PM_IMG_UPLOAD_FAILURE";

export const WEEK_MENU_IMAGE_RESET = "WEEK_MENU_IMAGE_RESET";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case WEEK_MENU_LIST_REQUEST: {
        draft.st_weekMenuListLoading = true;
        draft.st_weekMenuListDone = false;
        draft.st_weekMenuListError = null;
        break;
      }
      case WEEK_MENU_LIST_SUCCESS: {
        draft.st_weekMenuListLoading = false;
        draft.st_weekMenuListDone = true;
        draft.st_weekMenuListError = null;
        draft.sundayData = action.data.sundayData;
        draft.mondayData = action.data.mondayData;
        draft.tuesdayData = action.data.tuesdayData;
        draft.wednesdayData = action.data.wednesdayData;
        draft.thursdayData = action.data.thursdayData;
        draft.fridayData = action.data.fridayData;
        draft.saturdayData = action.data.saturdayData;
        break;
      }
      case WEEK_MENU_LIST_FAILURE: {
        draft.st_weekMenuListLoading = false;
        draft.st_weekMenuListDone = false;
        draft.st_weekMenuListError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case ADMIN_WEEK_MENU_LIST_REQUEST: {
        draft.st_adminWeekMenuListLoading = true;
        draft.st_adminWeekMenuListDone = false;
        draft.st_adminWeekMenuListError = null;
        break;
      }
      case ADMIN_WEEK_MENU_LIST_SUCCESS: {
        draft.st_adminWeekMenuListLoading = false;
        draft.st_adminWeekMenuListDone = true;
        draft.st_adminWeekMenuListError = null;
        draft.adminWeekMenuList = action.data;
        break;
      }
      case ADMIN_WEEK_MENU_LIST_FAILURE: {
        draft.st_adminWeekMenuListLoading = false;
        draft.st_adminWeekMenuListDone = false;
        draft.st_adminWeekMenuListError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case WEEK_MENU_CREATE_REQUEST: {
        draft.st_weekMenuCreateLoading = true;
        draft.st_weekMenuCreateDone = false;
        draft.st_weekMenuCreateError = null;
        break;
      }
      case WEEK_MENU_CREATE_SUCCESS: {
        draft.st_weekMenuCreateLoading = false;
        draft.st_weekMenuCreateDone = true;
        draft.st_weekMenuCreateError = null;
        break;
      }
      case WEEK_MENU_CREATE_FAILURE: {
        draft.st_weekMenuCreateLoading = false;
        draft.st_weekMenuCreateDone = false;
        draft.st_weekMenuCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WEEK_MENU_UPDATE_REQUEST: {
        draft.st_weekMenuUpdateLoading = true;
        draft.st_weekMenuUpdateDone = false;
        draft.st_weekMenuUpdateError = null;
        break;
      }
      case WEEK_MENU_UPDATE_SUCCESS: {
        draft.st_weekMenuUpdateLoading = false;
        draft.st_weekMenuUpdateDone = true;
        draft.st_weekMenuUpdateError = null;
        break;
      }
      case WEEK_MENU_UPDATE_FAILURE: {
        draft.st_weekMenuUpdateLoading = false;
        draft.st_weekMenuUpdateDone = false;
        draft.st_weekMenuUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WEEK_MENU_DELETE_REQUEST: {
        draft.st_weekMenuDeleteLoading = true;
        draft.st_weekMenuDeleteDone = false;
        draft.st_weekMenuDeleteError = null;
        break;
      }
      case WEEK_MENU_DELETE_SUCCESS: {
        draft.st_weekMenuDeleteLoading = false;
        draft.st_weekMenuDeleteDone = true;
        draft.st_weekMenuDeleteError = null;
        break;
      }
      case WEEK_MENU_DELETE_FAILURE: {
        draft.st_weekMenuDeleteLoading = false;
        draft.st_weekMenuDeleteDone = false;
        draft.st_weekMenuDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case WEEK_MENU_BR_IMG_UPLOAD_REQUEST: {
        draft.st_weekMenuBrImgUploadLoading = true;
        draft.st_weekMenuBrImgUploadDone = false;
        draft.st_weekMenuBrImgUploadError = null;
        break;
      }
      case WEEK_MENU_BR_IMG_UPLOAD_SUCCESS: {
        draft.st_weekMenuBrImgUploadLoading = false;
        draft.st_weekMenuBrImgUploadDone = true;
        draft.st_weekMenuBrImgUploadError = null;
        draft.weekMenuBrImgPath = action.data.path;
        break;
      }
      case WEEK_MENU_BR_IMG_UPLOAD_FAILURE: {
        draft.st_weekMenuBrImgUploadLoading = false;
        draft.st_weekMenuBrImgUploadDone = false;
        draft.st_weekMenuBrImgUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case WEEK_MENU_LU_IMG_UPLOAD_REQUEST: {
        draft.st_weekMenuLuImgUploadLoading = true;
        draft.st_weekMenuLuImgUploadDone = false;
        draft.st_weekMenuLuImgUploadError = null;
        break;
      }
      case WEEK_MENU_LU_IMG_UPLOAD_SUCCESS: {
        draft.st_weekMenuLuImgUploadLoading = false;
        draft.st_weekMenuLuImgUploadDone = true;
        draft.st_weekMenuLuImgUploadError = null;
        draft.weekMenuLuImgPath = action.data.path;
        break;
      }
      case WEEK_MENU_LU_IMG_UPLOAD_FAILURE: {
        draft.st_weekMenuLuImgUploadLoading = false;
        draft.st_weekMenuLuImgUploadDone = false;
        draft.st_weekMenuLuImgUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case WEEK_MENU_DI_IMG_UPLOAD_REQUEST: {
        draft.st_weekMenuDiImgUploadLoading = true;
        draft.st_weekMenuDiImgUploadDone = false;
        draft.st_weekMenuDiImgUploadError = null;
        break;
      }
      case WEEK_MENU_DI_IMG_UPLOAD_SUCCESS: {
        draft.st_weekMenuDiImgUploadLoading = false;
        draft.st_weekMenuDiImgUploadDone = true;
        draft.st_weekMenuDiImgUploadError = null;
        draft.weekMenuDiImgPath = action.data.path;
        break;
      }
      case WEEK_MENU_DI_IMG_UPLOAD_FAILURE: {
        draft.st_weekMenuDiImgUploadLoading = false;
        draft.st_weekMenuDiImgUploadDone = false;
        draft.st_weekMenuDiImgUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case WEEK_MENU_AM_IMG_UPLOAD_REQUEST: {
        draft.st_weekMenuAMImgUploadLoading = true;
        draft.st_weekMenuAMImgUploadDone = false;
        draft.st_weekMenuAMImgUploadError = null;
        break;
      }
      case WEEK_MENU_AM_IMG_UPLOAD_SUCCESS: {
        draft.st_weekMenuAMImgUploadLoading = false;
        draft.st_weekMenuAMImgUploadDone = true;
        draft.st_weekMenuAMImgUploadError = null;
        draft.weekMenuAMImgPath = action.data.path;
        break;
      }
      case WEEK_MENU_AM_IMG_UPLOAD_FAILURE: {
        draft.st_weekMenuAMImgUploadLoading = false;
        draft.st_weekMenuAMImgUploadDone = false;
        draft.st_weekMenuAMImgUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case WEEK_MENU_PM_IMG_UPLOAD_REQUEST: {
        draft.st_weekMenuPMImgUploadLoading = true;
        draft.st_weekMenuPMImgUploadDone = false;
        draft.st_weekMenuPMImgUploadError = null;
        break;
      }
      case WEEK_MENU_PM_IMG_UPLOAD_SUCCESS: {
        draft.st_weekMenuPMImgUploadLoading = false;
        draft.st_weekMenuPMImgUploadDone = true;
        draft.st_weekMenuPMImgUploadError = null;
        draft.weekMenuPMImgPath = action.data.path;
        break;
      }
      case WEEK_MENU_PM_IMG_UPLOAD_FAILURE: {
        draft.st_weekMenuPMImgUploadLoading = false;
        draft.st_weekMenuPMImgUploadDone = false;
        draft.st_weekMenuPMImgUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case WEEK_MENU_IMAGE_RESET: {
        draft.weekMenuBrImgPath = null;
        draft.weekMenuLuImgPath = null;
        draft.weekMenuDiImgPath = null;
        draft.weekMenuAMImgPath = null;
        draft.weekMenuPMImgPath = null;
        break;
      }

      //////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
