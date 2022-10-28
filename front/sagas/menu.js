import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  MENU_LIST_REQUEST,
  MENU_LIST_SUCCESS,
  MENU_LIST_FAILURE,
  //
  ADMIN_MENU_LIST_REQUEST,
  ADMIN_MENU_LIST_SUCCESS,
  ADMIN_MENU_LIST_FAILURE,
  //
  MENU_CREATE_REQUEST,
  MENU_CREATE_SUCCESS,
  MENU_CREATE_FAILURE,
  //
  MENU_UPDATE_REQUEST,
  MENU_UPDATE_SUCCESS,
  MENU_UPDATE_FAILURE,
  //
  MENU_DELETE_REQUEST,
  MENU_DELETE_SUCCESS,
  MENU_DELETE_FAILURE,
  //
  MENU_BR_IMG_UPLOAD_REQUEST,
  MENU_BR_IMG_UPLOAD_SUCCESS,
  MENU_BR_IMG_UPLOAD_FAILURE,
  //
  MENU_LU_IMG_UPLOAD_REQUEST,
  MENU_LU_IMG_UPLOAD_SUCCESS,
  MENU_LU_IMG_UPLOAD_FAILURE,
  //
  MENU_DI_IMG_UPLOAD_REQUEST,
  MENU_DI_IMG_UPLOAD_SUCCESS,
  MENU_DI_IMG_UPLOAD_FAILURE,
  //
  MENU_AM_IMG_UPLOAD_REQUEST,
  MENU_AM_IMG_UPLOAD_SUCCESS,
  MENU_AM_IMG_UPLOAD_FAILURE,
  //
  MENU_PM_IMG_UPLOAD_REQUEST,
  MENU_PM_IMG_UPLOAD_SUCCESS,
  MENU_PM_IMG_UPLOAD_FAILURE,
  //
} from "../reducers/menu";

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function menuListAPI(data) {
  return await axios.post(`/api/menu/list`, data);
}

function* menuList(action) {
  try {
    const result = yield call(menuListAPI, action.data);

    yield put({
      type: MENU_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MENU_LIST_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function adminMenuListAPI(data) {
  return await axios.post(`/api/menu/admin/list`, data);
}

function* adminMenuList(action) {
  try {
    const result = yield call(adminMenuListAPI, action.data);

    yield put({
      type: ADMIN_MENU_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMIN_MENU_LIST_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function menuCreateAPI(data) {
  return await axios.post(`/api/menu/create`, data);
}

function* menuCreate(action) {
  try {
    const result = yield call(menuCreateAPI, action.data);

    yield put({
      type: MENU_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MENU_CREATE_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function menuUpdateAPI(data) {
  return await axios.post(`/api/menu/update`, data);
}

function* menuUpdate(action) {
  try {
    const result = yield call(menuUpdateAPI, action.data);

    yield put({
      type: MENU_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MENU_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function menuDeleteAPI(data) {
  return await axios.post(`/api/menu/delete`, data);
}

function* menuDelete(action) {
  try {
    const result = yield call(menuDeleteAPI, action.data);

    yield put({
      type: MENU_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MENU_DELETE_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function menuBrImgUploadAPI(data) {
  return await axios.post(`/api/menu/image`, data);
}

function* menuBrImgUpload(action) {
  try {
    const result = yield call(menuBrImgUploadAPI, action.data);

    yield put({
      type: MENU_BR_IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MENU_BR_IMG_UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function menuLuImgUploadAPI(data) {
  return await axios.post(`/api/menu/image`, data);
}

function* menuLuImgUpload(action) {
  try {
    const result = yield call(menuLuImgUploadAPI, action.data);

    yield put({
      type: MENU_LU_IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MENU_LU_IMG_UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function menuDiImgUploadAPI(data) {
  return await axios.post(`/api/menu/image`, data);
}

function* menuDiImgUpload(action) {
  try {
    const result = yield call(menuDiImgUploadAPI, action.data);

    yield put({
      type: MENU_DI_IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MENU_DI_IMG_UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function menuAMImgUploadAPI(data) {
  return await axios.post(`/api/menu/image`, data);
}

function* menuAMImgUpload(action) {
  try {
    const result = yield call(menuAMImgUploadAPI, action.data);

    yield put({
      type: MENU_AM_IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MENU_AM_IMG_UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function menuPMImgUploadAPI(data) {
  return await axios.post(`/api/menu/image`, data);
}

function* menuPMImgUpload(action) {
  try {
    const result = yield call(menuPMImgUploadAPI, action.data);

    yield put({
      type: MENU_PM_IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MENU_PM_IMG_UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchMenuList() {
  yield takeLatest(MENU_LIST_REQUEST, menuList);
}

function* watchAdminMenuList() {
  yield takeLatest(ADMIN_MENU_LIST_REQUEST, adminMenuList);
}

function* watchMenuCreate() {
  yield takeLatest(MENU_CREATE_REQUEST, menuCreate);
}

function* watchMenuUpdate() {
  yield takeLatest(MENU_UPDATE_REQUEST, menuUpdate);
}

function* watchMenuDelete() {
  yield takeLatest(MENU_DELETE_REQUEST, menuDelete);
}

function* watchMenuBrImgUpload() {
  yield takeLatest(MENU_BR_IMG_UPLOAD_REQUEST, menuBrImgUpload);
}

function* watchMenuLuImgUpload() {
  yield takeLatest(MENU_LU_IMG_UPLOAD_REQUEST, menuLuImgUpload);
}

function* watchMenuDiImgUpload() {
  yield takeLatest(MENU_DI_IMG_UPLOAD_REQUEST, menuDiImgUpload);
}

function* watchMenuAMImgUpload() {
  yield takeLatest(MENU_AM_IMG_UPLOAD_REQUEST, menuAMImgUpload);
}

function* watchMenuPMImgUpload() {
  yield takeLatest(MENU_PM_IMG_UPLOAD_REQUEST, menuPMImgUpload);
}

//////////////////////////////////////////////////////////////
export default function* menuSaga() {
  yield all([
    fork(watchMenuList),
    fork(watchAdminMenuList),
    fork(watchMenuCreate),
    fork(watchMenuUpdate),
    fork(watchMenuDelete),
    fork(watchMenuBrImgUpload),
    fork(watchMenuLuImgUpload),
    fork(watchMenuDiImgUpload),
    fork(watchMenuAMImgUpload),
    fork(watchMenuPMImgUpload),

    //
  ]);
}
