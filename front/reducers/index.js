import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import banner from "./banner";
import popup from "./popup";
import company from "./company";
import notice from "./notice";
import gallery from "./gallery";
import question from "./question";
import accept from "./accept";
import seo from "./seo";
import editor from "./editor";
import faq from "./faq";
import news from "./news";
import announce from "./announce";
import wait from "./wait";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        banner,
        popup,
        company,
        notice,
        gallery,
        question,
        accept,
        seo,
        editor,
        faq,
        news,
        announce,
        wait,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
