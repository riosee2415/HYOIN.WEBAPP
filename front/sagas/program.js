import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  PROGRAM_LIST_REQUEST,
  PROGRAM_LIST_SUCCESS,
  PROGRAM_LIST_FAILURE,
  //
  PROGRAM_WEEK_LIST_REQUEST,
  PROGRAM_WEEK_LIST_SUCCESS,
  PROGRAM_WEEK_LIST_FAILURE,
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
  //
  PROGRAM_IMAGE_UPLOAD_REQUEST,
  PROGRAM_IMAGE_UPLOAD_SUCCESS,
  PROGRAM_IMAGE_UPLOAD_FAILURE,
  //
  PROGRAM_SLIDE_LIST_REQUEST,
  PROGRAM_SLIDE_LIST_SUCCESS,
  PROGRAM_SLIDE_LIST_FAILURE,
  //
} from "../reducers/program";

// ******************************************************************************************************************
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
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function programWeekListAPI(data) {
  return await axios.post(`/api/program/week/list`, data);
}

function* programWeekList(action) {
  try {
    const result = yield call(programWeekListAPI, action.data);

    yield put({
      type: PROGRAM_WEEK_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PROGRAM_WEEK_LIST_FAILURE,
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
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
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
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
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

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function programImageUploadAPI(data) {
  return await axios.post(`/api/program/image`, data);
}

function* programImageUpload(action) {
  try {
    const result = yield call(programImageUploadAPI, action.data);

    yield put({
      type: PROGRAM_IMAGE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PROGRAM_IMAGE_UPLOAD_FAILURE,
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
async function programSlideListAPI(data) {
  return await axios.post(`/api/program/slide/list`, data);
}

function* programSlideList(action) {
  try {
    const result = yield call(programSlideListAPI, action.data);

    yield put({
      type: PROGRAM_SLIDE_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PROGRAM_SLIDE_LIST_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchProgramList() {
  yield takeLatest(PROGRAM_LIST_REQUEST, programList);
}

function* watchProgramWeekList() {
  yield takeLatest(PROGRAM_WEEK_LIST_REQUEST, programWeekList);
}

function* watchProgramCreate() {
  yield takeLatest(PROGRAM_CREATE_REQUEST, programCreate);
}

function* watchProgramUpdate() {
  yield takeLatest(PROGRAM_UPDATE_REQUEST, programUpdate);
}

function* watchProgramDelete() {
  yield takeLatest(PROGRAM_DELETE_REQUEST, programDelete);
}

function* watchProgramImageUpload() {
  yield takeLatest(PROGRAM_IMAGE_UPLOAD_REQUEST, programImageUpload);
}

function* watchProgramSlideList() {
  yield takeLatest(PROGRAM_SLIDE_LIST_REQUEST, programSlideList);
}

//////////////////////////////////////////////////////////////
export default function* programSaga() {
  yield all([
    fork(watchProgramList),
    fork(watchProgramWeekList),
    fork(watchProgramCreate),
    fork(watchProgramUpdate),
    fork(watchProgramDelete),
    fork(watchProgramImageUpload),
    fork(watchProgramSlideList),

    //
  ]);
}
