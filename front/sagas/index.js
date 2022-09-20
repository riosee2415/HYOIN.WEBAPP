import { all, fork } from "redux-saga/effects";
import bannerSaga from "./banner";
import userSaga from "./user";
import popupSaga from "./popup";
import companySaga from "./company";
import noticeSage from "./notice";
import gallerySage from "./gallery";
import questionSage from "./question";
import acceptSaga from "./accept";
import seoSaga from "./seo";
import editSaga from "./editor";
import faqSaga from "./faq";
import newsSaga from "./news";
import announceSaga from "./announce";
import waitSaga from "./wait";
import recruitSaga from "./recruit";
//
import axios from "axios";
import backURL from "../config/config";

axios.defaults.baseURL = backURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(bannerSaga),
    fork(userSaga),
    fork(popupSaga),
    fork(companySaga),
    fork(noticeSage),
    fork(gallerySage),
    fork(questionSage),
    fork(acceptSaga),
    fork(seoSaga),
    fork(editSaga),
    fork(faqSaga),
    fork(newsSaga),
    fork(announceSaga),
    fork(waitSaga),
    fork(recruitSaga),
  ]);
}
