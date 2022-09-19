import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  //
  ANNOUNCE_ADMIN_LIST_REQUEST,
  ANNOUNCE_ADMIN_LIST_SUCCESS,
  ANNOUNCE_ADMIN_LIST_FAILURE,
  //
  ANNOUNCE_LIST_REQUEST,
  ANNOUNCE_LIST_SUCCESS,
  ANNOUNCE_LIST_FAILURE,
  //
  ANNOUNCE_CREATE_REQUEST,
  ANNOUNCE_CREATE_SUCCESS,
  ANNOUNCE_CREATE_FAILURE,
  //
  ANNOUNCE_FILE_UPLOAD_REQUEST,
  ANNOUNCE_FILE_UPLOAD_SUCCESS,
  ANNOUNCE_FILE_UPLOAD_FAILURE,
  //
  ANNOUNCE_IMAGE_UPLOAD_REQUEST,
  ANNOUNCE_IMAGE_UPLOAD_SUCCESS,
  ANNOUNCE_IMAGE_UPLOAD_FAILURE,
  //
  ANNOUNCE_UPDATE_REQUEST,
  ANNOUNCE_UPDATE_SUCCESS,
  ANNOUNCE_UPDATE_FAILURE,
  //
  ANNOUNCE_DELETE_REQUEST,
  ANNOUNCE_DELETE_SUCCESS,
  ANNOUNCE_DELETE_FAILURE,
} from "../reducers/announce";

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function announceListAPI(data) {
  return await axios.post(`/api/announce/list`, data);
}

function* announceList(action) {
  try {
    const result = yield call(announceListAPI, action.data);

    yield put({
      type: ANNOUNCE_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ANNOUNCE_LIST_FAILURE,
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
async function announceAdminListAPI(data) {
  return await axios.post(`/api/announce/admin/list`, data);
}

function* announceAdminList(action) {
  try {
    const result = yield call(announceAdminListAPI, action.data);

    yield put({
      type: ANNOUNCE_ADMIN_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ANNOUNCE_ADMIN_LIST_FAILURE,
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
async function announceCreateAPI(data) {
  return await axios.post(`/api/announce/create`, data);
}

function* announceCreate(action) {
  try {
    const result = yield call(announceCreateAPI, action.data);

    yield put({
      type: ANNOUNCE_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ANNOUNCE_CREATE_FAILURE,
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
async function announceFileUploadAPI(data) {
  return await axios.post(`/api/announce/file`, data);
}

function* announceFileUpload(action) {
  try {
    const result = yield call(announceFileUploadAPI, action.data);

    yield put({
      type: ANNOUNCE_FILE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ANNOUNCE_FILE_UPLOAD_FAILURE,
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
async function announceImageUploadAPI(data) {
  return await axios.post(`/api/announce/image`, data);
}

function* announceImageUpload(action) {
  try {
    const result = yield call(announceImageUploadAPI, action.data);

    yield put({
      type: ANNOUNCE_IMAGE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ANNOUNCE_IMAGE_UPLOAD_FAILURE,
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
async function announceUpdateAPI(data) {
  return await axios.post(`/api/announce/update`, data);
}

function* announceUpdate(action) {
  try {
    const result = yield call(announceUpdateAPI, action.data);

    yield put({
      type: ANNOUNCE_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ANNOUNCE_UPDATE_FAILURE,
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
async function announceDeleteAPI(data) {
  return await axios.post(`/api/announce/delete`, data);
}

function* announceDelete(action) {
  try {
    const result = yield call(announceDeleteAPI, action.data);

    yield put({
      type: ANNOUNCE_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ANNOUNCE_DELETE_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////

function* watchAnnounceAdminList() {
  yield takeLatest(ANNOUNCE_ADMIN_LIST_REQUEST, announceAdminList);
}
function* watchAnnounceList() {
  yield takeLatest(ANNOUNCE_LIST_REQUEST, announceList);
}
function* watchAnnounceCreate() {
  yield takeLatest(ANNOUNCE_CREATE_REQUEST, announceCreate);
}
function* watchAnnounceFileUpload() {
  yield takeLatest(ANNOUNCE_FILE_UPLOAD_REQUEST, announceFileUpload);
}
function* watchAnnounceImageUpload() {
  yield takeLatest(ANNOUNCE_IMAGE_UPLOAD_REQUEST, announceImageUpload);
}
function* watchAnnounceUpdate() {
  yield takeLatest(ANNOUNCE_UPDATE_REQUEST, announceUpdate);
}
function* watchAnnounceDelete() {
  yield takeLatest(ANNOUNCE_DELETE_REQUEST, announceDelete);
}

//////////////////////////////////////////////////////////////
export default function* announceSaga() {
  yield all([
    fork(watchAnnounceAdminList),
    fork(watchAnnounceList),
    fork(watchAnnounceCreate),
    fork(watchAnnounceFileUpload),
    fork(watchAnnounceImageUpload),
    fork(watchAnnounceUpdate),
    fork(watchAnnounceDelete),

    //
  ]);
}
