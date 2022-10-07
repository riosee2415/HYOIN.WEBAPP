import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  ADMISSION_ALL_LIST_REQUEST,
  ADMISSION_ALL_LIST_SUCCESS,
  ADMISSION_ALL_LIST_FAILURE,
  //
  ADMISSION_NORMAL_LIST_REQUEST,
  ADMISSION_NORMAL_LIST_SUCCESS,
  ADMISSION_NORMAL_LIST_FAILURE,
  //
  ADMISSION_DEMENTIA_LIST_REQUEST,
  ADMISSION_DEMENTIA_LIST_SUCCESS,
  ADMISSION_DEMENTIA_LIST_FAILURE,
  //
  ADMISSION_WEEK_LIST_REQUEST,
  ADMISSION_WEEK_LIST_SUCCESS,
  ADMISSION_WEEK_LIST_FAILURE,
  //
  ADMISSION_ALL_UPDATE_REQUEST,
  ADMISSION_ALL_UPDATE_SUCCESS,
  ADMISSION_ALL_UPDATE_FAILURE,
  //
  ADMISSION_NORMAL_UPDATE_REQUEST,
  ADMISSION_NORMAL_UPDATE_SUCCESS,
  ADMISSION_NORMAL_UPDATE_FAILURE,
  //
  ADMISSION_DEMENTIA_UPDATE_REQUEST,
  ADMISSION_DEMENTIA_UPDATE_SUCCESS,
  ADMISSION_DEMENTIA_UPDATE_FAILURE,
  //
  ADMISSION_WEEK_UPDATE_REQUEST,
  ADMISSION_WEEK_UPDATE_SUCCESS,
  ADMISSION_WEEK_UPDATE_FAILURE,
} from "../reducers/admission";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function admissionAllListAPI(data) {
  return await axios.post(`/api/admission/all/list`, data);
}

function* admissionList(action) {
  try {
    const result = yield call(admissionAllListAPI, action.data);

    yield put({
      type: ADMISSION_ALL_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMISSION_ALL_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function admissionDementiaListAPI(data) {
  return await axios.post(`/api/admission/dementia/list`, data);
}

function* admissionDementiaList(action) {
  try {
    const result = yield call(admissionDementiaListAPI, action.data);

    yield put({
      type: ADMISSION_DEMENTIA_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMISSION_DEMENTIA_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function admissionNormalListAPI(data) {
  return await axios.post(`/api/admission/normal/list`, data);
}

function* admissionNoramlList(action) {
  try {
    const result = yield call(admissionNormalListAPI, action.data);

    yield put({
      type: ADMISSION_NORMAL_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMISSION_NORMAL_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function admissionWeekListAPI(data) {
  return await axios.post(`/api/admission/week/list`, data);
}

function* admissionWeekList(action) {
  try {
    const result = yield call(admissionWeekListAPI, action.data);

    yield put({
      type: ADMISSION_WEEK_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMISSION_WEEK_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function admissionAllUpdateAPI(data) {
  return await axios.post(`/api/admission/all/update`, data);
}

function* admissionAllUpdate(action) {
  try {
    const result = yield call(admissionAllUpdateAPI, action.data);

    yield put({
      type: ADMISSION_ALL_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMISSION_ALL_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function admissionNormalUpdateAPI(data) {
  return await axios.post(`/api/admission/normal/update`, data);
}

function* admissionNormalUpdate(action) {
  try {
    const result = yield call(admissionNormalUpdateAPI, action.data);

    yield put({
      type: ADMISSION_NORMAL_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMISSION_NORMAL_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function admissionDementiaUpdateAPI(data) {
  return await axios.post(`/api/admission/dementia/update`, data);
}

function* admissionDementiaUpdate(action) {
  try {
    const result = yield call(admissionDementiaUpdateAPI, action.data);

    yield put({
      type: ADMISSION_DEMENTIA_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMISSION_DEMENTIA_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function admissionWeekUpdateAPI(data) {
  return await axios.post(`/api/admission/week/update`, data);
}

function* admissionWeekUpdate(action) {
  try {
    const result = yield call(admissionWeekUpdateAPI, action.data);

    yield put({
      type: ADMISSION_WEEK_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMISSION_WEEK_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchAdmissionAllList() {
  yield takeLatest(ADMISSION_ALL_LIST_REQUEST, admissionList);
}

function* watchAdmissionNormalList() {
  yield takeLatest(ADMISSION_NORMAL_LIST_REQUEST, admissionNoramlList);
}

function* watchAdmissionDementiaList() {
  yield takeLatest(ADMISSION_DEMENTIA_LIST_REQUEST, admissionDementiaList);
}

function* watchAdmissionWeekList() {
  yield takeLatest(ADMISSION_WEEK_LIST_REQUEST, admissionWeekList);
}

function* watchAdmissionAllUpdate() {
  yield takeLatest(ADMISSION_ALL_UPDATE_REQUEST, admissionAllUpdate);
}

function* watchAdmissionNormalUpdate() {
  yield takeLatest(ADMISSION_NORMAL_UPDATE_REQUEST, admissionNormalUpdate);
}

function* watchAdmissionDementiaUpdate() {
  yield takeLatest(ADMISSION_DEMENTIA_UPDATE_REQUEST, admissionDementiaUpdate);
}

function* watchAdmissionWeekUpdate() {
  yield takeLatest(ADMISSION_WEEK_UPDATE_REQUEST, admissionWeekUpdate);
}

//////////////////////////////////////////////////////////////
export default function* admissionSaga() {
  yield all([
    fork(watchAdmissionAllList),
    fork(watchAdmissionNormalList),
    fork(watchAdmissionDementiaList),
    fork(watchAdmissionWeekList),
    fork(watchAdmissionAllUpdate),
    fork(watchAdmissionNormalUpdate),
    fork(watchAdmissionDementiaUpdate),
    fork(watchAdmissionWeekUpdate),

    //
  ]);
}
