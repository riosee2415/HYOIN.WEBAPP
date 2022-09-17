import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  FAQ_TYPE_LIST_REQUEST,
  FAQ_TYPE_LIST_SUCCESS,
  FAQ_TYPE_LIST_FAILURE,
  //
  FAQ_TYPE_CREATE_REQUEST,
  FAQ_TYPE_CREATE_SUCCESS,
  FAQ_TYPE_CREATE_FAILURE,
  //
  FAQ_TYPE_UPDATE_REQUEST,
  FAQ_TYPE_UPDATE_SUCCESS,
  FAQ_TYPE_UPDATE_FAILURE,
  //
  FAQ_TYPE_DELETE_REQUEST,
  FAQ_TYPE_DELETE_SUCCESS,
  FAQ_TYPE_DELETE_FAILURE,
  //
  FAQ_LIST_REQUEST,
  FAQ_LIST_SUCCESS,
  FAQ_LIST_FAILURE,
  //
  FAQ_ADMIN_LIST_REQUEST,
  FAQ_ADMIN_LIST_SUCCESS,
  FAQ_ADMIN_LIST_FAILURE,
  //
  FAQ_CREATE_REQUEST,
  FAQ_CREATE_SUCCESS,
  FAQ_CREATE_FAILURE,
  //
  FAQ_UPDATE_REQUEST,
  FAQ_UPDATE_SUCCESS,
  FAQ_UPDATE_FAILURE,
  //
  FAQ_DELETE_REQUEST,
  FAQ_DELETE_SUCCESS,
  FAQ_DELETE_FAILURE,
} from "../reducers/faq";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqTypeListAPI(data) {
  return await axios.post(`/api/faq/type/list`, data);
}

function* faqTypeList(action) {
  try {
    const result = yield call(faqTypeListAPI, action.data);

    yield put({
      type: FAQ_TYPE_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_TYPE_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqTypeCreateAPI(data) {
  return await axios.post(`/api/faq/type/create`, data);
}

function* faqTypeCreate(action) {
  try {
    const result = yield call(faqTypeCreateAPI, action.data);

    yield put({
      type: FAQ_TYPE_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_TYPE_CREATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqTypeUpdateAPI(data) {
  return await axios.post(`/api/faq/type/update`, data);
}

function* faqTypeUpdate(action) {
  try {
    const result = yield call(faqTypeUpdateAPI, action.data);

    yield put({
      type: FAQ_TYPE_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_TYPE_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqTypeDeleteAPI(data) {
  return await axios.post(`/api/faq/type/delete`, data);
}

function* faqTypeDelete(action) {
  try {
    const result = yield call(faqTypeDeleteAPI, action.data);

    yield put({
      type: FAQ_TYPE_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_TYPE_DELETE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqListAPI(data) {
  return await axios.post(`/api/faq/list`, data);
}

function* faqList(action) {
  try {
    const result = yield call(faqListAPI, action.data);

    yield put({
      type: FAQ_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqAdminListAPI(data) {
  return await axios.post(`/api/faq/admin/list`, data);
}

function* faqAdminList(action) {
  try {
    const result = yield call(faqAdminListAPI, action.data);

    yield put({
      type: FAQ_ADMIN_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_ADMIN_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqCreateAPI(data) {
  return await axios.post(`/api/faq/create`, data);
}

function* faqCreate(action) {
  try {
    const result = yield call(faqCreateAPI, action.data);

    yield put({
      type: FAQ_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_CREATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqUpdateAPI(data) {
  return await axios.post(`/api/faq/update`, data);
}

function* faqUpdate(action) {
  try {
    const result = yield call(faqUpdateAPI, action.data);

    yield put({
      type: FAQ_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqDeleteAPI(data) {
  return await axios.post(`/api/faq/delete`, data);
}

function* faqDelete(action) {
  try {
    const result = yield call(faqDeleteAPI, action.data);

    yield put({
      type: FAQ_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_DELETE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchFaqTypeList() {
  yield takeLatest(FAQ_TYPE_LIST_REQUEST, faqTypeList);
}
function* watchFaqTypeCreate() {
  yield takeLatest(FAQ_TYPE_CREATE_REQUEST, faqTypeCreate);
}
function* watchFaqTypeUpdate() {
  yield takeLatest(FAQ_TYPE_UPDATE_REQUEST, faqTypeUpdate);
}
function* watchFaqTypeDelete() {
  yield takeLatest(FAQ_TYPE_DELETE_REQUEST, faqTypeDelete);
}
function* watchFaqList() {
  yield takeLatest(FAQ_LIST_REQUEST, faqList);
}
function* watchFaqAdminList() {
  yield takeLatest(FAQ_ADMIN_LIST_REQUEST, faqAdminList);
}
function* watchFaqCreate() {
  yield takeLatest(FAQ_CREATE_REQUEST, faqCreate);
}
function* watchFaqUpdate() {
  yield takeLatest(FAQ_UPDATE_REQUEST, faqUpdate);
}
function* watchFaqDelete() {
  yield takeLatest(FAQ_DELETE_REQUEST, faqDelete);
}

//////////////////////////////////////////////////////////////
export default function* faqSaga() {
  yield all([
    fork(watchFaqTypeList),
    fork(watchFaqTypeCreate),
    fork(watchFaqTypeUpdate),
    fork(watchFaqTypeDelete),
    fork(watchFaqList),
    fork(watchFaqAdminList),
    fork(watchFaqCreate),
    fork(watchFaqUpdate),
    fork(watchFaqDelete),

    //
  ]);
}
