import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  PROGRAM_LIST_REQUEST,
  PROGRAM_LIST_SUCCESS,
  PROGRAM_LIST_FAILURE,
  //
  PROGRAM_CREATE_REQUEST,
  PROGRAM_CREATE_SUCCESS,
  PROGRAM_CREATE_FAILURE,
  //
  PROGRAM_UPDATE_REQUEST,
  PROGRAM_UPDATE_SUCCESS,
  PROGRAM_UPDATE_FAILURE,
  //
  PROGRAM_DELETE_REQUEST,
  PROGRAM_DELETE_SUCCESS,
  PROGRAM_DELETE_FAILURE,
} from "../reducers/program";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function programListAPI(data) {
  return await axios.post(`/api/program/list`, data);
}

function* programList(action) {
  try {
    const result = yield call(programListAPI, action.data);

    yield put({
      type: PROGRAM_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PROGRAM_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function programCreateAPI(data) {
  return await axios.post(`/api/program/create`, data);
}

function* programCreate(action) {
  try {
    const result = yield call(programCreateAPI, action.data);

    yield put({
      type: PROGRAM_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PROGRAM_CREATE_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function programUpdateAPI(data) {
  return await axios.post(`/api/program/update`, data);
}

function* programUpdate(action) {
  try {
    const result = yield call(programUpdateAPI, action.data);

    yield put({
      type: PROGRAM_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PROGRAM_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function programDeleteAPI(data) {
  return await axios.post(`/api/program/delete`, data);
}

function* programDelete(action) {
  try {
    const result = yield call(programDeleteAPI, action.data);

    yield put({
      type: PROGRAM_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PROGRAM_DELETE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchProgram2List() {
  yield takeLatest(PROGRAM_LIST_REQUEST, programList);
}
function* watchProgram2Create() {
  yield takeLatest(PROGRAM_CREATE_REQUEST, programCreate);
}
function* watchProgram2Update() {
  yield takeLatest(PROGRAM_UPDATE_REQUEST, programUpdate);
}
function* watchProgram2Delete() {
  yield takeLatest(PROGRAM_DELETE_REQUEST, programDelete);
}

//////////////////////////////////////////////////////////////
export default function* programSaga() {
  yield all([
    fork(watchProgram2List),
    fork(watchProgram2Create),
    fork(watchProgram2Update),
    fork(watchProgram2Delete),

    //
  ]);
}
