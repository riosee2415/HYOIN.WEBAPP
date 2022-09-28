import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  //
  NEWS_ADMIN_LIST_REQUEST,
  NEWS_ADMIN_LIST_SUCCESS,
  NEWS_ADMIN_LIST_FAILURE,
  //
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAILURE,
  //
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAILURE,
  //
  NEWS_FILE_UPLOAD_REQUEST,
  NEWS_FILE_UPLOAD_SUCCESS,
  NEWS_FILE_UPLOAD_FAILURE,
  //
  NEWS_IMAGE_UPLOAD_REQUEST,
  NEWS_IMAGE_UPLOAD_SUCCESS,
  NEWS_IMAGE_UPLOAD_FAILURE,
  //
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
  NEWS_UPDATE_FAILURE,
  //
  NEWS_DELETE_REQUEST,
  NEWS_DELETE_SUCCESS,
  NEWS_DELETE_FAILURE,
  //
  NEWS_DETAIL_REQUEST,
  NEWS_DETAIL_SUCCESS,
  NEWS_DETAIL_FAILURE,
  //
  NEWS_NEXT_REQUEST,
  NEWS_NEXT_SUCCESS,
  NEWS_NEXT_FAILURE,
  //
  NEWS_PREV_REQUEST,
  NEWS_PREV_SUCCESS,
  NEWS_PREV_FAILURE,
} from "../reducers/news";

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function newsListAPI(data) {
  return await axios.post(`/api/news/list`, data);
}

function* newsList(action) {
  try {
    const result = yield call(newsListAPI, action.data);

    yield put({
      type: NEWS_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEWS_LIST_FAILURE,
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
async function newsAdminListAPI(data) {
  return await axios.post(`/api/news/admin/list`, data);
}

function* newsAdminList(action) {
  try {
    const result = yield call(newsAdminListAPI, action.data);

    yield put({
      type: NEWS_ADMIN_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEWS_ADMIN_LIST_FAILURE,
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
async function newsCreateAPI(data) {
  return await axios.post(`/api/news/create`, data);
}

function* newsCreate(action) {
  try {
    const result = yield call(newsCreateAPI, action.data);

    yield put({
      type: NEWS_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEWS_CREATE_FAILURE,
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
async function newsFileUploadAPI(data) {
  return await axios.post(`/api/news/file`, data);
}

function* newsFileUpload(action) {
  try {
    const result = yield call(newsFileUploadAPI, action.data);

    yield put({
      type: NEWS_FILE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEWS_FILE_UPLOAD_FAILURE,
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
async function newsImageUploadAPI(data) {
  return await axios.post(`/api/news/image`, data);
}

function* newsImageUpload(action) {
  try {
    const result = yield call(newsImageUploadAPI, action.data);

    yield put({
      type: NEWS_IMAGE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEWS_IMAGE_UPLOAD_FAILURE,
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
async function newsUpdateAPI(data) {
  return await axios.post(`/api/news/update`, data);
}

function* newsUpdate(action) {
  try {
    const result = yield call(newsUpdateAPI, action.data);

    yield put({
      type: NEWS_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEWS_UPDATE_FAILURE,
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
async function newsDeleteAPI(data) {
  return await axios.post(`/api/news/delete`, data);
}

function* newsDelete(action) {
  try {
    const result = yield call(newsDeleteAPI, action.data);

    yield put({
      type: NEWS_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEWS_DELETE_FAILURE,
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
async function newsDetailAPI(data) {
  return await axios.get(`/api/news/detail/${data}`);
}

function* newsDetail(action) {
  try {
    const result = yield call(newsDetailAPI, action.data);

    yield put({
      type: NEWS_DETAIL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEWS_DETAIL_FAILURE,
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
async function newsNextAPI(data) {
  return await axios.post(`/api/news/nextNews`, data);
}

function* newsNext(action) {
  try {
    const result = yield call(newsNextAPI, action.data);

    yield put({
      type: NEWS_NEXT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEWS_NEXT_FAILURE,
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
async function newsPrevAPI(data) {
  return await axios.post(`/api/news/prevNews`, data);
}

function* newsPrev(action) {
  try {
    const result = yield call(newsPrevAPI, action.data);

    yield put({
      type: NEWS_PREV_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEWS_PREV_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////

function* watchNewsAdminList() {
  yield takeLatest(NEWS_ADMIN_LIST_REQUEST, newsAdminList);
}
function* watchNewsList() {
  yield takeLatest(NEWS_LIST_REQUEST, newsList);
}
function* watchNewsCreate() {
  yield takeLatest(NEWS_CREATE_REQUEST, newsCreate);
}
function* watchNewsFileUpload() {
  yield takeLatest(NEWS_FILE_UPLOAD_REQUEST, newsFileUpload);
}
function* watchNewsImageUpload() {
  yield takeLatest(NEWS_IMAGE_UPLOAD_REQUEST, newsImageUpload);
}
function* watchNewsUpdate() {
  yield takeLatest(NEWS_UPDATE_REQUEST, newsUpdate);
}
function* watchNewsDelete() {
  yield takeLatest(NEWS_DELETE_REQUEST, newsDelete);
}
function* watchDetail() {
  yield takeLatest(NEWS_DETAIL_REQUEST, newsDetail);
}
function* watchDetailNext() {
  yield takeLatest(NEWS_NEXT_REQUEST, newsNext);
}
function* watchDetailPrev() {
  yield takeLatest(NEWS_PREV_REQUEST, newsPrev);
}

//////////////////////////////////////////////////////////////
export default function* newsSage() {
  yield all([
    fork(watchNewsAdminList),
    fork(watchNewsList),
    fork(watchNewsCreate),
    fork(watchNewsFileUpload),
    fork(watchNewsImageUpload),
    fork(watchNewsUpdate),
    fork(watchNewsDelete),
    fork(watchDetail),
    fork(watchDetailNext),
    fork(watchDetailPrev),

    //
  ]);
}
