import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAILURE,
  //
  QUESTION_CREATE_REQUEST,
  QUESTION_CREATE_SUCCESS,
  QUESTION_CREATE_FAILURE,
  //
  QUESTION_UPDATE_REQUEST,
  QUESTION_UPDATE_SUCCESS,
  QUESTION_UPDATE_FAILURE,
  //
} from "../reducers/question";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function questionListAPI(data) {
  return await axios.post(`/api/question/list`, data);
}

function* questionList(action) {
  try {
    const result = yield call(questionListAPI, action.data);

    yield put({
      type: QUESTION_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: QUESTION_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function questionCreateAPI(data) {
  return await axios.post(`/api/question/create`, data);
}

function* questionCreate(action) {
  try {
    const result = yield call(questionCreateAPI, action.data);

    yield put({
      type: QUESTION_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: QUESTION_CREATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function questionUpdateAPI(data) {
  return await axios.post(`/api/question/update`, data);
}

function* questionUpdate(action) {
  try {
    const result = yield call(questionUpdateAPI, action.data);

    yield put({
      type: QUESTION_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: QUESTION_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////

function* watchQuestionList() {
  yield takeLatest(QUESTION_LIST_REQUEST, questionList);
}

function* watchQuestionCreate() {
  yield takeLatest(QUESTION_CREATE_REQUEST, questionCreate);
}

function* watchQuestionUpdate() {
  yield takeLatest(QUESTION_UPDATE_REQUEST, questionUpdate);
}

//////////////////////////////////////////////////////////////
export default function* questionSaga() {
  yield all([
    fork(watchQuestionList),
    fork(watchQuestionCreate),
    fork(watchQuestionUpdate),
  ]);
}
