import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  //
  RECRUIT_ADMIN_LIST_REQUEST,
  RECRUIT_ADMIN_LIST_SUCCESS,
  RECRUIT_ADMIN_LIST_FAILURE,
  //
  RECRUIT_LIST_REQUEST,
  RECRUIT_LIST_SUCCESS,
  RECRUIT_LIST_FAILURE,
  //
  RECRUIT_CREATE_REQUEST,
  RECRUIT_CREATE_SUCCESS,
  RECRUIT_CREATE_FAILURE,
  //
  RECRUIT_FILE_UPLOAD_REQUEST,
  RECRUIT_FILE_UPLOAD_SUCCESS,
  RECRUIT_FILE_UPLOAD_FAILURE,
  //
  RECRUIT_IMAGE_UPLOAD_REQUEST,
  RECRUIT_IMAGE_UPLOAD_SUCCESS,
  RECRUIT_IMAGE_UPLOAD_FAILURE,
  //
  RECRUIT_UPDATE_REQUEST,
  RECRUIT_UPDATE_SUCCESS,
  RECRUIT_UPDATE_FAILURE,
  //
  RECRUIT_DELETE_REQUEST,
  RECRUIT_DELETE_SUCCESS,
  RECRUIT_DELETE_FAILURE,
} from "../reducers/recruit";

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function recruitListAPI(data) {
  return await axios.post(`/api/recruit/list`, data);
}

function* recruitList(action) {
  try {
    const result = yield call(recruitListAPI, action.data);

    yield put({
      type: RECRUIT_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RECRUIT_LIST_FAILURE,
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
async function recruitAdminListAPI(data) {
  return await axios.post(`/api/recruit/admin/list`, data);
}

function* recruitAdminList(action) {
  try {
    const result = yield call(recruitAdminListAPI, action.data);

    yield put({
      type: RECRUIT_ADMIN_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RECRUIT_ADMIN_LIST_FAILURE,
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
async function recruitCreateAPI(data) {
  return await axios.post(`/api/recruit/create`, data);
}

function* recruitCreate(action) {
  try {
    const result = yield call(recruitCreateAPI, action.data);

    yield put({
      type: RECRUIT_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RECRUIT_CREATE_FAILURE,
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
async function recruitFileUploadAPI(data) {
  return await axios.post(`/api/recruit/file`, data);
}

function* recruitFileUpload(action) {
  try {
    const result = yield call(recruitFileUploadAPI, action.data);

    yield put({
      type: RECRUIT_FILE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RECRUIT_FILE_UPLOAD_FAILURE,
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
async function recruitImageUploadAPI(data) {
  return await axios.post(`/api/recruit/image`, data);
}

function* recruitImageUpload(action) {
  try {
    const result = yield call(recruitImageUploadAPI, action.data);

    yield put({
      type: RECRUIT_IMAGE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RECRUIT_IMAGE_UPLOAD_FAILURE,
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
async function recruitUpdateAPI(data) {
  return await axios.post(`/api/recruit/update`, data);
}

function* recruitUpdate(action) {
  try {
    const result = yield call(recruitUpdateAPI, action.data);

    yield put({
      type: RECRUIT_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RECRUIT_UPDATE_FAILURE,
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
async function recruitDeleteAPI(data) {
  return await axios.post(`/api/recruit/delete`, data);
}

function* recruitDelete(action) {
  try {
    const result = yield call(recruitDeleteAPI, action.data);

    yield put({
      type: RECRUIT_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RECRUIT_DELETE_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////

function* watchRecruitAdminList() {
  yield takeLatest(RECRUIT_ADMIN_LIST_REQUEST, recruitAdminList);
}
function* watchRecruitList() {
  yield takeLatest(RECRUIT_LIST_REQUEST, recruitList);
}
function* watchRecruitCreate() {
  yield takeLatest(RECRUIT_CREATE_REQUEST, recruitCreate);
}
function* watchRecruitFileUpload() {
  yield takeLatest(RECRUIT_FILE_UPLOAD_REQUEST, recruitFileUpload);
}
function* watchRecruitImageUpload() {
  yield takeLatest(RECRUIT_IMAGE_UPLOAD_REQUEST, recruitImageUpload);
}
function* watchRecruitUpdate() {
  yield takeLatest(RECRUIT_UPDATE_REQUEST, recruitUpdate);
}
function* watchRecruitDelete() {
  yield takeLatest(RECRUIT_DELETE_REQUEST, recruitDelete);
}

//////////////////////////////////////////////////////////////
export default function* recruitSage() {
  yield all([
    fork(watchRecruitAdminList),
    fork(watchRecruitList),
    fork(watchRecruitCreate),
    fork(watchRecruitFileUpload),
    fork(watchRecruitImageUpload),
    fork(watchRecruitUpdate),
    fork(watchRecruitDelete),

    //
  ]);
}
