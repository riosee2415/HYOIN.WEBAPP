import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  //
  WAIT_ADMIN_LIST_REQUEST,
  WAIT_ADMIN_LIST_SUCCESS,
  WAIT_ADMIN_LIST_FAILURE,
  //
  WAIT_LIST_REQUEST,
  WAIT_LIST_SUCCESS,
  WAIT_LIST_FAILURE,
  //
  WAIT_CREATE_REQUEST,
  WAIT_CREATE_SUCCESS,
  WAIT_CREATE_FAILURE,
  //
  WAIT_FILE_UPLOAD_REQUEST,
  WAIT_FILE_UPLOAD_SUCCESS,
  WAIT_FILE_UPLOAD_FAILURE,
  //
  WAIT_IMAGE_UPLOAD_REQUEST,
  WAIT_IMAGE_UPLOAD_SUCCESS,
  WAIT_IMAGE_UPLOAD_FAILURE,
  //
  WAIT_UPDATE_REQUEST,
  WAIT_UPDATE_SUCCESS,
  WAIT_UPDATE_FAILURE,
  //
  WAIT_DELETE_REQUEST,
  WAIT_DELETE_SUCCESS,
  WAIT_DELETE_FAILURE,
  //
  WAIT_DETAIL_REQUEST,
  WAIT_DETAIL_SUCCESS,
  WAIT_DETAIL_FAILURE,
} from "../reducers/wait";

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function waitListAPI(data) {
  return await axios.post(`/api/list/getList`, data);
}

function* waitList(action) {
  try {
    const result = yield call(waitListAPI, action.data);

    yield put({
      type: WAIT_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WAIT_LIST_FAILURE,
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
async function waitAdminListAPI(data) {
  return await axios.post(`/api/list/admin/list`, data);
}

function* waitAdminList(action) {
  try {
    const result = yield call(waitAdminListAPI, action.data);

    yield put({
      type: WAIT_ADMIN_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WAIT_ADMIN_LIST_FAILURE,
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
async function waitCreateAPI(data) {
  return await axios.post(`/api/list/create`, data);
}

function* waitCreate(action) {
  try {
    const result = yield call(waitCreateAPI, action.data);

    yield put({
      type: WAIT_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WAIT_CREATE_FAILURE,
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
async function waitFileUploadAPI(data) {
  return await axios.post(`/api/list/file`, data);
}

function* waitFileUpload(action) {
  try {
    const result = yield call(waitFileUploadAPI, action.data);

    yield put({
      type: WAIT_FILE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WAIT_FILE_UPLOAD_FAILURE,
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
async function waitImageUploadAPI(data) {
  return await axios.post(`/api/list/image`, data);
}

function* waitImageUpload(action) {
  try {
    const result = yield call(waitImageUploadAPI, action.data);

    yield put({
      type: WAIT_IMAGE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WAIT_IMAGE_UPLOAD_FAILURE,
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
async function waitUpdateAPI(data) {
  return await axios.post(`/api/list/update`, data);
}

function* waitUpdate(action) {
  try {
    const result = yield call(waitUpdateAPI, action.data);

    yield put({
      type: WAIT_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WAIT_UPDATE_FAILURE,
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
async function waitDeleteAPI(data) {
  return await axios.post(`/api/list/delete`, data);
}

function* waitDelete(action) {
  try {
    const result = yield call(waitDeleteAPI, action.data);

    yield put({
      type: WAIT_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WAIT_DELETE_FAILURE,
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
async function waitDetailAPI(data) {
  return await axios.get(`/api/list/detail/${data}`);
}

function* waitDetail(action) {
  try {
    const result = yield call(waitDetailAPI, action.data);

    yield put({
      type: WAIT_DETAIL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WAIT_DETAIL_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////

function* watchWaitAdminList() {
  yield takeLatest(WAIT_ADMIN_LIST_REQUEST, waitAdminList);
}
function* watchWaitList() {
  yield takeLatest(WAIT_LIST_REQUEST, waitList);
}
function* watchWaitCreate() {
  yield takeLatest(WAIT_CREATE_REQUEST, waitCreate);
}
function* watchWaitFileUpload() {
  yield takeLatest(WAIT_FILE_UPLOAD_REQUEST, waitFileUpload);
}
function* watchWaitImageUpload() {
  yield takeLatest(WAIT_IMAGE_UPLOAD_REQUEST, waitImageUpload);
}
function* watchWaitUpdate() {
  yield takeLatest(WAIT_UPDATE_REQUEST, waitUpdate);
}
function* watchWaitDelete() {
  yield takeLatest(WAIT_DELETE_REQUEST, waitDelete);
}
function* watchDetail() {
  yield takeLatest(WAIT_DETAIL_REQUEST, waitDetail);
}

//////////////////////////////////////////////////////////////
export default function* waitSaga() {
  yield all([
    fork(watchWaitAdminList),
    fork(watchWaitList),
    fork(watchWaitCreate),
    fork(watchWaitFileUpload),
    fork(watchWaitImageUpload),
    fork(watchWaitUpdate),
    fork(watchWaitDelete),
    fork(watchDetail),

    //
  ]);
}
