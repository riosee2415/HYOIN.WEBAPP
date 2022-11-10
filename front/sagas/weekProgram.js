import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  WEEK_PROGRAM_LIST_REQUEST,
  WEEK_PROGRAM_LIST_SUCCESS,
  WEEK_PROGRAM_LIST_FAILURE,
  //
  WEEK_PROGRAM_WEEK_LIST_REQUEST,
  WEEK_PROGRAM_WEEK_LIST_SUCCESS,
  WEEK_PROGRAM_WEEK_LIST_FAILURE,
  //
  WEEK_PROGRAM_CREATE_REQUEST,
  WEEK_PROGRAM_CREATE_SUCCESS,
  WEEK_PROGRAM_CREATE_FAILURE,
  //
  WEEK_PROGRAM_UPDATE_REQUEST,
  WEEK_PROGRAM_UPDATE_SUCCESS,
  WEEK_PROGRAM_UPDATE_FAILURE,
  //
  WEEK_PROGRAM_DELETE_REQUEST,
  WEEK_PROGRAM_DELETE_SUCCESS,
  WEEK_PROGRAM_DELETE_FAILURE,
  //
  WEEK_PROGRAM_IMAGE_UPLOAD_REQUEST,
  WEEK_PROGRAM_IMAGE_UPLOAD_SUCCESS,
  WEEK_PROGRAM_IMAGE_UPLOAD_FAILURE,
  //
  WEEK_PROGRAM_SLIDE_LIST_REQUEST,
  WEEK_PROGRAM_SLIDE_LIST_SUCCESS,
  WEEK_PROGRAM_SLIDE_LIST_FAILURE,
  //
} from "../reducers/weekProgram";

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function weekProgramListAPI(data) {
  return await axios.post(`/api/weekProgram/list`, data);
}

function* weekProgramList(action) {
  try {
    const result = yield call(weekProgramListAPI, action.data);

    yield put({
      type: WEEK_PROGRAM_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_PROGRAM_LIST_FAILURE,
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
async function weekProgramWeekListAPI(data) {
  return await axios.post(`/api/weekProgram/week/list`, data);
}

function* weekProgramWeekList(action) {
  try {
    const result = yield call(weekProgramWeekListAPI, action.data);

    yield put({
      type: WEEK_PROGRAM_WEEK_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_PROGRAM_WEEK_LIST_FAILURE,
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
async function weekProgramCreateAPI(data) {
  return await axios.post(`/api/weekProgram/create`, data);
}

function* weekProgramCreate(action) {
  try {
    const result = yield call(weekProgramCreateAPI, action.data);

    yield put({
      type: WEEK_PROGRAM_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_PROGRAM_CREATE_FAILURE,
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

async function weekProgramUpdateAPI(data) {
  return await axios.post(`/api/weekProgram/update`, data);
}

function* weekProgramUpdate(action) {
  try {
    const result = yield call(weekProgramUpdateAPI, action.data);

    yield put({
      type: WEEK_PROGRAM_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_PROGRAM_UPDATE_FAILURE,
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
async function weekProgramDeleteAPI(data) {
  return await axios.post(`/api/weekProgram/delete`, data);
}

function* weekProgramDelete(action) {
  try {
    const result = yield call(weekProgramDeleteAPI, action.data);

    yield put({
      type: WEEK_PROGRAM_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_PROGRAM_DELETE_FAILURE,
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
async function weekProgramImageUploadAPI(data) {
  return await axios.post(`/api/weekProgram/image`, data);
}

function* weekProgramImageUpload(action) {
  try {
    const result = yield call(weekProgramImageUploadAPI, action.data);

    yield put({
      type: WEEK_PROGRAM_IMAGE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_PROGRAM_IMAGE_UPLOAD_FAILURE,
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
async function weekProgramSlideListAPI(data) {
  return await axios.post(`/api/weekProgram/slide/list`, data);
}

function* weekProgramSlideList(action) {
  try {
    const result = yield call(weekProgramSlideListAPI, action.data);

    yield put({
      type: WEEK_PROGRAM_SLIDE_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WEEK_PROGRAM_SLIDE_LIST_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchWeekProgramList() {
  yield takeLatest(WEEK_PROGRAM_LIST_REQUEST, weekProgramList);
}

function* watchWeekProgramWeekList() {
  yield takeLatest(WEEK_PROGRAM_WEEK_LIST_REQUEST, weekProgramWeekList);
}

function* watchWeekProgramCreate() {
  yield takeLatest(WEEK_PROGRAM_CREATE_REQUEST, weekProgramCreate);
}

function* watchWeekProgramUpdate() {
  yield takeLatest(WEEK_PROGRAM_UPDATE_REQUEST, weekProgramUpdate);
}

function* watchWeekProgramDelete() {
  yield takeLatest(WEEK_PROGRAM_DELETE_REQUEST, weekProgramDelete);
}

function* watchWeekProgramImageUpload() {
  yield takeLatest(WEEK_PROGRAM_IMAGE_UPLOAD_REQUEST, weekProgramImageUpload);
}

function* watchWeekProgramSlideList() {
  yield takeLatest(WEEK_PROGRAM_SLIDE_LIST_REQUEST, weekProgramSlideList);
}

//////////////////////////////////////////////////////////////
export default function* weekProgramSaga() {
  yield all([
    fork(watchWeekProgramList),
    fork(watchWeekProgramWeekList),
    fork(watchWeekProgramCreate),
    fork(watchWeekProgramUpdate),
    fork(watchWeekProgramDelete),
    fork(watchWeekProgramImageUpload),
    fork(watchWeekProgramSlideList),

    //
  ]);
}
