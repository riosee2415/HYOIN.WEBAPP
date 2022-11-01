import produce from "../util/produce";

export const initailState = {
  sundayData: null,
  mondayData: null,
  tuesdayData: null,
  wednesdayData: null,
  thursdayData: null,
  fridayData: null,
  saturdayData: null,

  adminMenuList: [],

  menuBrImgPath: null, // 아침메뉴 이미지
  menuLuImgPath: null, // 점심메뉴 이미지
  menuDiImgPath: null, // 저녁메뉴 이미지
  menuAMImgPath: null, // 오전간식 이미지
  menuPMImgPath: null, // 오후간식 이미지

  //
  st_menuListLoading: false, // menu 가져오기
  st_menuListDone: false,
  st_menuListError: null,
  //
  st_adminMenuListLoading: false, // 관리자 menu 가져오기
  st_adminMenuListDone: false,
  st_adminMenuListError: null,
  //
  st_menuCreateLoading: false, // menu 생성
  st_menuCreateDone: false,
  st_menuCreateError: null,
  //
  st_menuUpdateLoading: false, // menu 수정
  st_menuUpdateDone: false,
  st_menuUpdateError: null,
  //
  st_menuDeleteLoading: false, // menu 삭제
  st_menuDeleteDone: false,
  st_menuDeleteError: null,
  //
  st_menuBrImgUploadLoading: false, // 아침메뉴 이미지 등록
  st_menuBrImgUploadDone: false,
  st_menuBrImgUploadError: null,
  //
  st_menuLuImgUploadLoading: false, // 점심메뉴 이미지 등록
  st_menuLuImgUploadDone: false,
  st_menuLuImgUploadError: null,
  //
  st_menuDiImgUploadLoading: false, // 저녁메뉴 이미지 등록
  st_menuDiImgUploadDone: false,
  st_menuDiImgUploadError: null,
  //
  st_menuAMImgUploadLoading: false, // 오전간식 이미지 등록
  st_menuAMImgUploadDone: false,
  st_menuAMImgUploadError: null,
  //
  st_menuPMImgUploadLoading: false, // 오후간식 이미지 등록
  st_menuPMImgUploadDone: false,
  st_menuPMImgUploadError: null,
  //
};

export const MENU_LIST_REQUEST = "MENU_LIST_REQUEST";
export const MENU_LIST_SUCCESS = "MENU_LIST_SUCCESS";
export const MENU_LIST_FAILURE = "MENU_LIST_FAILURE";

export const ADMIN_MENU_LIST_REQUEST = "ADMIN_MENU_LIST_REQUEST";
export const ADMIN_MENU_LIST_SUCCESS = "ADMIN_MENU_LIST_SUCCESS";
export const ADMIN_MENU_LIST_FAILURE = "ADMIN_MENU_LIST_FAILURE";

export const MENU_CREATE_REQUEST = "MENU_CREATE_REQUEST";
export const MENU_CREATE_SUCCESS = "MENU_CREATE_SUCCESS";
export const MENU_CREATE_FAILURE = "MENU_CREATE_FAILURE";

export const MENU_UPDATE_REQUEST = "MENU_UPDATE_REQUEST";
export const MENU_UPDATE_SUCCESS = "MENU_UPDATE_SUCCESS";
export const MENU_UPDATE_FAILURE = "MENU_UPDATE_FAILURE";

export const MENU_DELETE_REQUEST = "MENU_DELETE_REQUEST";
export const MENU_DELETE_SUCCESS = "MENU_DELETE_SUCCESS";
export const MENU_DELETE_FAILURE = "MENU_DELETE_FAILURE";

export const MENU_BR_IMG_UPLOAD_REQUEST = "MENU_BR_IMG_UPLOAD_REQUEST";
export const MENU_BR_IMG_UPLOAD_SUCCESS = "MENU_BR_IMG_UPLOAD_SUCCESS";
export const MENU_BR_IMG_UPLOAD_FAILURE = "MENU_BR_IMG_UPLOAD_FAILURE";

export const MENU_LU_IMG_UPLOAD_REQUEST = "MENU_LU_IMG_UPLOAD_REQUEST";
export const MENU_LU_IMG_UPLOAD_SUCCESS = "MENU_LU_IMG_UPLOAD_SUCCESS";
export const MENU_LU_IMG_UPLOAD_FAILURE = "MENU_LU_IMG_UPLOAD_FAILURE";

export const MENU_DI_IMG_UPLOAD_REQUEST = "MENU_DI_IMG_UPLOAD_REQUEST";
export const MENU_DI_IMG_UPLOAD_SUCCESS = "MENU_DI_IMG_UPLOAD_SUCCESS";
export const MENU_DI_IMG_UPLOAD_FAILURE = "MENU_DI_IMG_UPLOAD_FAILURE";

export const MENU_AM_IMG_UPLOAD_REQUEST = "MENU_AM_IMG_UPLOAD_REQUEST";
export const MENU_AM_IMG_UPLOAD_SUCCESS = "MENU_AM_IMG_UPLOAD_SUCCESS";
export const MENU_AM_IMG_UPLOAD_FAILURE = "MENU_AM_IMG_UPLOAD_FAILURE";

export const MENU_PM_IMG_UPLOAD_REQUEST = "MENU_PM_IMG_UPLOAD_REQUEST";
export const MENU_PM_IMG_UPLOAD_SUCCESS = "MENU_PM_IMG_UPLOAD_SUCCESS";
export const MENU_PM_IMG_UPLOAD_FAILURE = "MENU_PM_IMG_UPLOAD_FAILURE";

export const MENU_IMAGE_RESET = "MENU_IMAGE_RESET";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case MENU_LIST_REQUEST: {
        draft.st_menuListLoading = true;
        draft.st_menuListDone = false;
        draft.st_menuListError = null;
        break;
      }
      case MENU_LIST_SUCCESS: {
        draft.st_menuListLoading = false;
        draft.st_menuListDone = true;
        draft.st_menuListError = null;
        draft.sundayData = action.data.sundayData;
        draft.mondayData = action.data.mondayData;
        draft.tuesdayData = action.data.tuesdayData;
        draft.wednesdayData = action.data.wednesdayData;
        draft.thursdayData = action.data.thursdayData;
        draft.fridayData = action.data.fridayData;
        draft.saturdayData = action.data.saturdayData;
        break;
      }
      case MENU_LIST_FAILURE: {
        draft.st_menuListLoading = false;
        draft.st_menuListDone = false;
        draft.st_menuListError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case ADMIN_MENU_LIST_REQUEST: {
        draft.st_adminMenuListLoading = true;
        draft.st_adminMenuListDone = false;
        draft.st_adminMenuListError = null;
        break;
      }
      case ADMIN_MENU_LIST_SUCCESS: {
        draft.st_adminMenuListLoading = false;
        draft.st_adminMenuListDone = true;
        draft.st_adminMenuListError = null;
        draft.adminMenuList = action.data;
        break;
      }
      case ADMIN_MENU_LIST_FAILURE: {
        draft.st_adminMenuListLoading = false;
        draft.st_adminMenuListDone = false;
        draft.st_adminMenuListError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case MENU_CREATE_REQUEST: {
        draft.st_menuCreateLoading = true;
        draft.st_menuCreateDone = false;
        draft.st_menuCreateError = null;
        break;
      }
      case MENU_CREATE_SUCCESS: {
        draft.st_menuCreateLoading = false;
        draft.st_menuCreateDone = true;
        draft.st_menuCreateError = null;
        break;
      }
      case MENU_CREATE_FAILURE: {
        draft.st_menuCreateLoading = false;
        draft.st_menuCreateDone = false;
        draft.st_menuCreateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case MENU_UPDATE_REQUEST: {
        draft.st_menuUpdateLoading = true;
        draft.st_menuUpdateDone = false;
        draft.st_menuUpdateError = null;
        break;
      }
      case MENU_UPDATE_SUCCESS: {
        draft.st_menuUpdateLoading = false;
        draft.st_menuUpdateDone = true;
        draft.st_menuUpdateError = null;
        break;
      }
      case MENU_UPDATE_FAILURE: {
        draft.st_menuUpdateLoading = false;
        draft.st_menuUpdateDone = false;
        draft.st_menuUpdateError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case MENU_DELETE_REQUEST: {
        draft.st_menuDeleteLoading = true;
        draft.st_menuDeleteDone = false;
        draft.st_menuDeleteError = null;
        break;
      }
      case MENU_DELETE_SUCCESS: {
        draft.st_menuDeleteLoading = false;
        draft.st_menuDeleteDone = true;
        draft.st_menuDeleteError = null;
        break;
      }
      case MENU_DELETE_FAILURE: {
        draft.st_menuDeleteLoading = false;
        draft.st_menuDeleteDone = false;
        draft.st_menuDeleteError = action.error;
        break;
      }

      //////////////////////////////////////////////
      case MENU_BR_IMG_UPLOAD_REQUEST: {
        draft.st_menuBrImgUploadLoading = true;
        draft.st_menuBrImgUploadDone = false;
        draft.st_menuBrImgUploadError = null;
        break;
      }
      case MENU_BR_IMG_UPLOAD_SUCCESS: {
        draft.st_menuBrImgUploadLoading = false;
        draft.st_menuBrImgUploadDone = true;
        draft.st_menuBrImgUploadError = null;
        draft.menuBrImgPath = action.data.path;
        break;
      }
      case MENU_BR_IMG_UPLOAD_FAILURE: {
        draft.st_menuBrImgUploadLoading = false;
        draft.st_menuBrImgUploadDone = false;
        draft.st_menuBrImgUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case MENU_LU_IMG_UPLOAD_REQUEST: {
        draft.st_menuLuImgUploadLoading = true;
        draft.st_menuLuImgUploadDone = false;
        draft.st_menuLuImgUploadError = null;
        break;
      }
      case MENU_LU_IMG_UPLOAD_SUCCESS: {
        draft.st_menuLuImgUploadLoading = false;
        draft.st_menuLuImgUploadDone = true;
        draft.st_menuLuImgUploadError = null;
        draft.menuLuImgPath = action.data.path;
        break;
      }
      case MENU_LU_IMG_UPLOAD_FAILURE: {
        draft.st_menuLuImgUploadLoading = false;
        draft.st_menuLuImgUploadDone = false;
        draft.st_menuLuImgUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case MENU_DI_IMG_UPLOAD_REQUEST: {
        draft.st_menuDiImgUploadLoading = true;
        draft.st_menuDiImgUploadDone = false;
        draft.st_menuDiImgUploadError = null;
        break;
      }
      case MENU_DI_IMG_UPLOAD_SUCCESS: {
        draft.st_menuDiImgUploadLoading = false;
        draft.st_menuDiImgUploadDone = true;
        draft.st_menuDiImgUploadError = null;
        draft.menuDiImgPath = action.data.path;
        break;
      }
      case MENU_DI_IMG_UPLOAD_FAILURE: {
        draft.st_menuDiImgUploadLoading = false;
        draft.st_menuDiImgUploadDone = false;
        draft.st_menuDiImgUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case MENU_AM_IMG_UPLOAD_REQUEST: {
        draft.st_menuAMImgUploadLoading = true;
        draft.st_menuAMImgUploadDone = false;
        draft.st_menuAMImgUploadError = null;
        break;
      }
      case MENU_AM_IMG_UPLOAD_SUCCESS: {
        draft.st_menuAMImgUploadLoading = false;
        draft.st_menuAMImgUploadDone = true;
        draft.st_menuAMImgUploadError = null;
        draft.menuAMImgPath = action.data.path;
        break;
      }
      case MENU_AM_IMG_UPLOAD_FAILURE: {
        draft.st_menuAMImgUploadLoading = false;
        draft.st_menuAMImgUploadDone = false;
        draft.st_menuAMImgUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case MENU_PM_IMG_UPLOAD_REQUEST: {
        draft.st_menuPMImgUploadLoading = true;
        draft.st_menuPMImgUploadDone = false;
        draft.st_menuPMImgUploadError = null;
        break;
      }
      case MENU_PM_IMG_UPLOAD_SUCCESS: {
        draft.st_menuPMImgUploadLoading = false;
        draft.st_menuPMImgUploadDone = true;
        draft.st_menuPMImgUploadError = null;
        draft.menuPMImgPath = action.data.path;
        break;
      }
      case MENU_PM_IMG_UPLOAD_FAILURE: {
        draft.st_menuPMImgUploadLoading = false;
        draft.st_menuPMImgUploadDone = false;
        draft.st_menuPMImgUploadError = action.error;
        break;
      }

      //////////////////////////////////////////////

      case MENU_IMAGE_RESET: {
        draft.menuBrImgPath = null;
        draft.menuLuImgPath = null;
        draft.menuDiImgPath = null;
        draft.menuAMImgPath = null;
        draft.menuPMImgPath = null;
        break;
      }

      //////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
