import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  ADMISSION_LIST_REQUEST,
  ADMISSION_LIST_SUCCESS,
  ADMISSION_LIST_FAILURE,

  //
  ADMISSION_UPDATE_REQUEST,
  ADMISSION_UPDATE_SUCCESS,
  ADMISSION_UPDATE_FAILURE,
} from "../reducers/admission";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function admissionListAPI(data) {
  return await axios.post(`/api/admission/list`, data);
}

function* admissionList(action) {
  try {
    const result = yield call(admissionListAPI, action.data);

    yield put({
      type: ADMISSION_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMISSION_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function admissionUpdateAPI(data) {
  return await axios.post(`/api/admission/update`, data);
}

function* admissionUpdate(action) {
  try {
    const result = yield call(admissionUpdateAPI, action.data);

    yield put({
      type: ADMISSION_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADMISSION_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchAdmissionList() {
  yield takeLatest(ADMISSION_LIST_REQUEST, admissionList);
}

function* watchAdmissionUpdate() {
  yield takeLatest(ADMISSION_UPDATE_REQUEST, admissionUpdate);
}

//////////////////////////////////////////////////////////////
export default function* admissionSaga() {
  yield all([
    fork(watchAdmissionList),
    fork(watchAdmissionUpdate),

    //
  ]);
}
