import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  MOVE_SERVICE_LIST_REQUEST,
  MOVE_SERVICE_LIST_SUCCESS,
  MOVE_SERVICE_LIST_FAILURE,
  //
  MOVE_SERVICE_CAR_CREATE_REQUEST,
  MOVE_SERVICE_CAR_CREATE_SUCCESS,
  MOVE_SERVICE_CAR_CREATE_FAILURE,
  //
  MOVE_SERVICE_CAR_UPDATE_REQUEST,
  MOVE_SERVICE_CAR_UPDATE_SUCCESS,
  MOVE_SERVICE_CAR_UPDATE_FAILURE,
  //
  MOVE_SERVICE_TIME_CREATE_REQUEST,
  MOVE_SERVICE_TIME_CREATE_SUCCESS,
  MOVE_SERVICE_TIME_CREATE_FAILURE,
  //
  MOVE_SERVICE_TIME_UPDATE_REQUEST,
  MOVE_SERVICE_TIME_UPDATE_SUCCESS,
  MOVE_SERVICE_TIME_UPDATE_FAILURE,
  //
  MOVE_SERVICE_CREATE_REQUEST,
  MOVE_SERVICE_CREATE_SUCCESS,
  MOVE_SERVICE_CREATE_FAILURE,
  //
  MOVE_SERVICE_UPDATE_REQUEST,
  MOVE_SERVICE_UPDATE_SUCCESS,
  MOVE_SERVICE_UPDATE_FAILURE,
  //
  MOVE_SERVICE_DELETE_REQUEST,
  MOVE_SERVICE_DELETE_SUCCESS,
  MOVE_SERVICE_DELETE_FAILURE,
} from "../reducers/moveService";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function moveServiceListAPI(data) {
  return await axios.post(`/api/move/list`, data);
}

function* moveServiceList(action) {
  try {
    const result = yield call(moveServiceListAPI, action.data);

    yield put({
      type: MOVE_SERVICE_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MOVE_SERVICE_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function moveServiceCarCreateAPI(data) {
  return await axios.post(`/api/move/car/create`, data);
}

function* moveServiceCarCreate(action) {
  try {
    const result = yield call(moveServiceCarCreateAPI, action.data);

    yield put({
      type: MOVE_SERVICE_CAR_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MOVE_SERVICE_CAR_CREATE_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function moveServiceCarUpdateAPI(data) {
  return await axios.post(`/api/move/car/update`, data);
}

function* moveServiceCarUpdate(action) {
  try {
    const result = yield call(moveServiceCarUpdateAPI, action.data);

    yield put({
      type: MOVE_SERVICE_CAR_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MOVE_SERVICE_CAR_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function moveServiceTimeCreateAPI(data) {
  return await axios.post(`/api/move/time/create`, data);
}

function* moveServiceTimeCreate(action) {
  try {
    const result = yield call(moveServiceTimeCreateAPI, action.data);

    yield put({
      type: MOVE_SERVICE_TIME_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MOVE_SERVICE_TIME_CREATE_FAILURE,
      error: err.response.data,
    });
  }
}
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function moveServiceTimeUpdateAPI(data) {
  return await axios.post(`/api/move/time/update`, data);
}

function* moveServiceTimeUpdate(action) {
  try {
    const result = yield call(moveServiceTimeUpdateAPI, action.data);

    yield put({
      type: MOVE_SERVICE_TIME_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MOVE_SERVICE_TIME_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function moveServiceCreateAPI(data) {
  return await axios.post(`/api/move/create`, data);
}

function* moveServiceCreate(action) {
  try {
    const result = yield call(moveServiceCreateAPI, action.data);

    yield put({
      type: MOVE_SERVICE_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MOVE_SERVICE_CREATE_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function moveServiceUpdateAPI(data) {
  return await axios.post(`/api/move/service/update`, data);
}

function* moveServiceUpdate(action) {
  try {
    const result = yield call(moveServiceUpdateAPI, action.data);

    yield put({
      type: MOVE_SERVICE_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MOVE_SERVICE_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function moveServiceDeleteAPI(data) {
  return await axios.post(`/api/move/service/delete`, data);
}

function* moveServiceDelete(action) {
  try {
    const result = yield call(moveServiceDeleteAPI, action.data);

    yield put({
      type: MOVE_SERVICE_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MOVE_SERVICE_DELETE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchMoveServiceList() {
  yield takeLatest(MOVE_SERVICE_LIST_REQUEST, moveServiceList);
}
function* watchMoveServiceCarCreate() {
  yield takeLatest(MOVE_SERVICE_CAR_CREATE_REQUEST, moveServiceCarCreate);
}
function* watchMoveServiceCarUpdate() {
  yield takeLatest(MOVE_SERVICE_CAR_UPDATE_REQUEST, moveServiceCarUpdate);
}
function* watchMoveServiceTimeCreate() {
  yield takeLatest(MOVE_SERVICE_TIME_CREATE_REQUEST, moveServiceTimeCreate);
}
function* watchMoveServiceTimeUpdate() {
  yield takeLatest(MOVE_SERVICE_TIME_UPDATE_REQUEST, moveServiceTimeUpdate);
}
function* watchMoveServiceCreate() {
  yield takeLatest(MOVE_SERVICE_CREATE_REQUEST, moveServiceCreate);
}
function* watchMoveServiceUpdate() {
  yield takeLatest(MOVE_SERVICE_UPDATE_REQUEST, moveServiceUpdate);
}
function* watchMoveServiceDelete() {
  yield takeLatest(MOVE_SERVICE_DELETE_REQUEST, moveServiceDelete);
}

//////////////////////////////////////////////////////////////
export default function* moveServiceSaga() {
  yield all([
    fork(watchMoveServiceList),
    fork(watchMoveServiceCarCreate),
    fork(watchMoveServiceCarUpdate),
    fork(watchMoveServiceTimeCreate),
    fork(watchMoveServiceTimeUpdate),
    fork(watchMoveServiceCreate),
    fork(watchMoveServiceUpdate),
    fork(watchMoveServiceDelete),

    //
  ]);
}
