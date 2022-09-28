import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  //
  NOTICE_ADMIN_LIST_REQUEST,
  NOTICE_ADMIN_LIST_SUCCESS,
  NOTICE_ADMIN_LIST_FAILURE,
  //
  NOTICE_LIST_REQUEST,
  NOTICE_LIST_SUCCESS,
  NOTICE_LIST_FAILURE,
  //
  NOTICE_CREATE_REQUEST,
  NOTICE_CREATE_SUCCESS,
  NOTICE_CREATE_FAILURE,
  //
  NOTICE_FILE_UPLOAD_REQUEST,
  NOTICE_FILE_UPLOAD_SUCCESS,
  NOTICE_FILE_UPLOAD_FAILURE,
  //
  NOTICE_IMAGE_UPLOAD_REQUEST,
  NOTICE_IMAGE_UPLOAD_SUCCESS,
  NOTICE_IMAGE_UPLOAD_FAILURE,
  //
  NOTICE_UPDATE_REQUEST,
  NOTICE_UPDATE_SUCCESS,
  NOTICE_UPDATE_FAILURE,
  //
  NOTICE_DELETE_REQUEST,
  NOTICE_DELETE_SUCCESS,
  NOTICE_DELETE_FAILURE,
  //
  NOTICE_DETAIL_REQUEST,
  NOTICE_DETAIL_SUCCESS,
  NOTICE_DETAIL_FAILURE,
} from "../reducers/notice";

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function noticeListAPI(data) {
  return await axios.post(`/api/notice/list`, data);
}

function* noticeList(action) {
  try {
    const result = yield call(noticeListAPI, action.data);

    yield put({
      type: NOTICE_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NOTICE_LIST_FAILURE,
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
async function noticeAdminListAPI(data) {
  return await axios.post(`/api/notice/admin/list`, data);
}

function* noticeAdminList(action) {
  try {
    const result = yield call(noticeAdminListAPI, action.data);

    yield put({
      type: NOTICE_ADMIN_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NOTICE_ADMIN_LIST_FAILURE,
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
async function noticeCreateAPI(data) {
  return await axios.post(`/api/notice/create`, data);
}

function* noticeCreate(action) {
  try {
    const result = yield call(noticeCreateAPI, action.data);

    yield put({
      type: NOTICE_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NOTICE_CREATE_FAILURE,
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
async function noticeFileUploadAPI(data) {
  return await axios.post(`/api/notice/file`, data);
}

function* noticeFileUpload(action) {
  try {
    const result = yield call(noticeFileUploadAPI, action.data);

    yield put({
      type: NOTICE_FILE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NOTICE_FILE_UPLOAD_FAILURE,
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
async function noticeImageUploadAPI(data) {
  return await axios.post(`/api/notice/image`, data);
}

function* noticeImageUpload(action) {
  try {
    const result = yield call(noticeImageUploadAPI, action.data);

    yield put({
      type: NOTICE_IMAGE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NOTICE_IMAGE_UPLOAD_FAILURE,
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
async function noticeUpdateAPI(data) {
  return await axios.post(`/api/notice/update`, data);
}

function* noticeUpdate(action) {
  try {
    const result = yield call(noticeUpdateAPI, action.data);

    yield put({
      type: NOTICE_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NOTICE_UPDATE_FAILURE,
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
async function noticeDeleteAPI(data) {
  return await axios.post(`/api/notice/delete`, data);
}

function* noticeDelete(action) {
  try {
    const result = yield call(noticeDeleteAPI, action.data);

    yield put({
      type: NOTICE_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NOTICE_DELETE_FAILURE,
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
async function noticeDetailAPI(data) {
  return await axios.get(`/api/notice/detail/${data}`);
}

function* noticeDetail(action) {
  try {
    const result = yield call(noticeDetailAPI, action.data);

    yield put({
      type: NOTICE_DETAIL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NOTICE_DETAIL_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////

function* watchNoticeAdminList() {
  yield takeLatest(NOTICE_ADMIN_LIST_REQUEST, noticeAdminList);
}
function* watchNoticeList() {
  yield takeLatest(NOTICE_LIST_REQUEST, noticeList);
}
function* watchNoticeCreate() {
  yield takeLatest(NOTICE_CREATE_REQUEST, noticeCreate);
}
function* watchNoticeFileUpload() {
  yield takeLatest(NOTICE_FILE_UPLOAD_REQUEST, noticeFileUpload);
}
function* watchNoticeImageUpload() {
  yield takeLatest(NOTICE_IMAGE_UPLOAD_REQUEST, noticeImageUpload);
}
function* watchNoticeUpdate() {
  yield takeLatest(NOTICE_UPDATE_REQUEST, noticeUpdate);
}
function* watchNoticeDelete() {
  yield takeLatest(NOTICE_DELETE_REQUEST, noticeDelete);
}
function* watchDetail() {
  yield takeLatest(NOTICE_DETAIL_REQUEST, noticeDetail);
}

//////////////////////////////////////////////////////////////
export default function* noticeSage() {
  yield all([
    fork(watchNoticeAdminList),
    fork(watchNoticeList),
    fork(watchNoticeCreate),
    fork(watchNoticeFileUpload),
    fork(watchNoticeImageUpload),
    fork(watchNoticeUpdate),
    fork(watchNoticeDelete),
    fork(watchDetail),

    //
  ]);
}
