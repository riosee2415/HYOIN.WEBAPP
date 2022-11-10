import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  WEEK_MENU_LIST_REQUEST,
  WEEK_MENU_LIST_SUCCESS,
  WEEK_MENU_LIST_FAILURE,
  //
  ADMIN_WEEK_MENU_LIST_REQUEST,
  ADMIN_WEEK_MENU_LIST_SUCCESS,
  ADMIN_WEEK_MENU_LIST_FAILURE,
  //
  WEEK_MENU_CREATE_REQUEST,
  WEEK_MENU_CREATE_SUCCESS,
  WEEK_MENU_CREATE_FAILURE,
  //
  WEEK_MENU_UPDATE_REQUEST,
  WEEK_MENU_UPDATE_SUCCESS,
  WEEK_MENU_UPDATE_FAILURE,
  //
  WEEK_MENU_DELETE_REQUEST,
  WEEK_MENU_DELETE_SUCCESS,
  WEEK_MENU_DELETE_FAILURE,
  //
  WEEK_MENU_BR_IMG_UPLOAD_REQUEST,
  WEEK_MENU_BR_IMG_UPLOAD_SUCCESS,
  WEEK_MENU_BR_IMG_UPLOAD_FAILURE,
  //
  WEEK_MENU_LU_IMG_UPLOAD_REQUEST,
  WEEK_MENU_LU_IMG_UPLOAD_SUCCESS,
  WEEK_MENU_LU_IMG_UPLOAD_FAILURE,
  //
  WEEK_MENU_DI_IMG_UPLOAD_REQUEST,
  WEEK_MENU_DI_IMG_UPLOAD_SUCCESS,
  WEEK_MENU_DI_IMG_UPLOAD_FAILURE,
  //
  WEEK_MENU_AM_IMG_UPLOAD_REQUEST,
  WEEK_MENU_AM_IMG_UPLOAD_SUCCESS,
  WEEK_MENU_AM_IMG_UPLOAD_FAILURE,
  //
  WEEK_MENU_PM_IMG_UPLOAD_REQUEST,
  WEEK_MENU_PM_IMG_UPLOAD_SUCCESS,
  WEEK_MENU_PM_IMG_UPLOAD_FAILURE,
  //
} from "../reducers/weekMenu";

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function weekMenuListAPI(data) {
  return await axios.post(`/api/weekMenu/list`, data);
}

function* weekMenuList(action) {
  try {
    const result = yield call(weekMenuListAPI, action.data);

    yield put({
      type: WEEK_MENU_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_MENU_LIST_FAILURE,
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
async function adminweekMenuListAPI(data) {
  return await axios.post(`/api/weekMenu/admin/list`, data);
}

function* adminWeekMenuList(action) {
  try {
    const result = yield call(adminweekMenuListAPI, action.data);

    yield put({
      type: ADMIN_WEEK_MENU_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMIN_WEEK_MENU_LIST_FAILURE,
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
async function weekMenuCreateAPI(data) {
  return await axios.post(`/api/weekMenu/create`, data);
}

function* weekMenuCreate(action) {
  try {
    const result = yield call(weekMenuCreateAPI, action.data);

    yield put({
      type: WEEK_MENU_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_MENU_CREATE_FAILURE,
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
async function weekMenuUpdateAPI(data) {
  return await axios.post(`/api/weekMenu/update`, data);
}

function* weekMenuUpdate(action) {
  try {
    const result = yield call(weekMenuUpdateAPI, action.data);

    yield put({
      type: WEEK_MENU_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_MENU_UPDATE_FAILURE,
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
async function weekMenuDeleteAPI(data) {
  return await axios.post(`/api/weekMenu/delete`, data);
}

function* weekMenuDelete(action) {
  try {
    const result = yield call(weekMenuDeleteAPI, action.data);

    yield put({
      type: WEEK_MENU_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_MENU_DELETE_FAILURE,
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
async function weekMenuBrImgUploadAPI(data) {
  return await axios.post(`/api/weekMenu/image`, data);
}

function* weekMenuBrImgUpload(action) {
  try {
    const result = yield call(weekMenuBrImgUploadAPI, action.data);

    yield put({
      type: WEEK_MENU_BR_IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_MENU_BR_IMG_UPLOAD_FAILURE,
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
async function weekMenuLuImgUploadAPI(data) {
  return await axios.post(`/api/weekMenu/image`, data);
}

function* weekMenuLuImgUpload(action) {
  try {
    const result = yield call(weekMenuLuImgUploadAPI, action.data);

    yield put({
      type: WEEK_MENU_LU_IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_MENU_LU_IMG_UPLOAD_FAILURE,
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
async function weekMenuDiImgUploadAPI(data) {
  return await axios.post(`/api/weekMenu/image`, data);
}

function* weekMenuDiImgUpload(action) {
  try {
    const result = yield call(weekMenuDiImgUploadAPI, action.data);

    yield put({
      type: WEEK_MENU_DI_IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_MENU_DI_IMG_UPLOAD_FAILURE,
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
async function weekMenuAMImgUploadAPI(data) {
  return await axios.post(`/api/weekMenu/image`, data);
}

function* weekMenuAMImgUpload(action) {
  try {
    const result = yield call(weekMenuAMImgUploadAPI, action.data);

    yield put({
      type: WEEK_MENU_AM_IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_MENU_AM_IMG_UPLOAD_FAILURE,
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
async function weekMenuPMImgUploadAPI(data) {
  return await axios.post(`/api/weekMenu/image`, data);
}

function* weekMenuPMImgUpload(action) {
  try {
    const result = yield call(weekMenuPMImgUploadAPI, action.data);

    yield put({
      type: WEEK_MENU_PM_IMG_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_MENU_PM_IMG_UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchWeekMenuList() {
  yield takeLatest(WEEK_MENU_LIST_REQUEST, weekMenuList);
}

function* watchAdminWeekMenuList() {
  yield takeLatest(ADMIN_WEEK_MENU_LIST_REQUEST, adminWeekMenuList);
}

function* watchWeekMenuCreate() {
  yield takeLatest(WEEK_MENU_CREATE_REQUEST, weekMenuCreate);
}

function* watchWeekMenuUpdate() {
  yield takeLatest(WEEK_MENU_UPDATE_REQUEST, weekMenuUpdate);
}

function* watchWeekMenuDelete() {
  yield takeLatest(WEEK_MENU_DELETE_REQUEST, weekMenuDelete);
}

function* watchWeekMenuBrImgUpload() {
  yield takeLatest(WEEK_MENU_BR_IMG_UPLOAD_REQUEST, weekMenuBrImgUpload);
}

function* watchWeekMenuLuImgUpload() {
  yield takeLatest(WEEK_MENU_LU_IMG_UPLOAD_REQUEST, weekMenuLuImgUpload);
}

function* watchWeekMenuDiImgUpload() {
  yield takeLatest(WEEK_MENU_DI_IMG_UPLOAD_REQUEST, weekMenuDiImgUpload);
}

function* watchWeekMenuAMImgUpload() {
  yield takeLatest(WEEK_MENU_AM_IMG_UPLOAD_REQUEST, weekMenuAMImgUpload);
}

function* watchWeekMenuPMImgUpload() {
  yield takeLatest(WEEK_MENU_PM_IMG_UPLOAD_REQUEST, weekMenuPMImgUpload);
}

//////////////////////////////////////////////////////////////
export default function* weekMenuSaga() {
  yield all([
    fork(watchWeekMenuList),
    fork(watchAdminWeekMenuList),
    fork(watchWeekMenuCreate),
    fork(watchWeekMenuUpdate),
    fork(watchWeekMenuDelete),
    fork(watchWeekMenuBrImgUpload),
    fork(watchWeekMenuLuImgUpload),
    fork(watchWeekMenuDiImgUpload),
    fork(watchWeekMenuAMImgUpload),
    fork(watchWeekMenuPMImgUpload),

    //
  ]);
}
