import React, { useState, useRef, useCallback, useEffect } from "react";
import ClientLayout from "../../components/ClientLayout";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import {
  RsWrapper,
  WholeWrapper,
  CommonTitle,
  Text,
  Wrapper,
  SpanText,
  TextInput,
  TextArea,
  CommonButton,
  Image,
} from "../../components/commonComponents";
import SubBanner from "../../components/SubBanner";
import Theme from "../../components/Theme";
import { Checkbox, message } from "antd";
import useInput from "../../hooks/useInput";
import { QUESTION_CREATE_REQUEST } from "../../reducers/question";
import { useSelector, useDispatch } from "react-redux";

const Question = () => {
  ////// GLOBAL STATE //////
  const { st_questionCreateDone } = useSelector((state) => state.question);

  ////// HOOKS //////
  const width = useWidth();
  const dispatch = useDispatch();

  const name = useInput("");
  const mobile = useInput("");
  const email = useInput("");
  const title = useInput("");
  const content = useInput("");

  const [check, setCheck] = useState(false);

  const checkRef = useRef();

  ////// REDUX //////
  ////// USEEFFECT //////
  useEffect(() => {
    if (st_questionCreateDone) {
      message.success(`문의가 접수되었습니다.`);
      name.setValue("");
      mobile.setValue("");
      email.setValue("");
      title.setValue("");
      content.setValue("");
      setCheck(false);
      checkRef.current.state.checked = false;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [st_questionCreateDone]);

  ////// TOGGLE //////
  ////// HANDLER //////
  const checkHandler = useCallback(
    (e) => {
      setCheck(e.target.checked);
    },
    [check]
  );

  const contactSubmitHandler = useCallback(() => {
    if (name.value === "") {
      return message.info(`성함을 입력해주세요.`);
    }
    if (mobile.value === "") {
      return message.info(`연락처를 입력해주세요.`);
    }
    if (email.value === "") {
      return message.info(`이메일을 입력해주세요.`);
    }
    if (title.value === "") {
      return message.info(`문의 제목을 입력해주세요.`);
    }
    if (content.value === "") {
      return message.info(`문의 내용을 입력해주세요.`);
    }
    if (!check) {
      return message.info(`개인정보 처리방침에 동의해주세요.`);
    }

    dispatch({
      type: QUESTION_CREATE_REQUEST,
      data: {
        name: name.value,
        mobile: mobile.value,
        email: email.value,
        title: title.value,
        content: content.value,
        terms: check,
      },
    });
  }, [name, mobile, email, title, content, check]);
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>효인요양원 | 1:1 문의</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper>
            <CommonTitle margin={`85px 0 17px`}>1:1 문의하기</CommonTitle>
            <Text fontSize={width < 700 ? `14px` : `16px`}>
              궁금한 사항은 언제든 문의해주세요.
            </Text>
            <Wrapper dr={`row`} padding={`30px 0 100px`}>
              <Wrapper width={`50%`} al={`flex-start`} padding={`0 25px 0 0`}>
                <Text fontSize={`20px`} fontWeight={`bold`}>
                  이름
                  <SpanText color={Theme.red_C} fontSize={`16px`}>
                    *
                  </SpanText>
                </Text>
                <TextInput
                  width={`100%`}
                  height={`55px`}
                  placeholder="이름을 입력해주세요."
                  type={`text`}
                  margin={`12px 0 32px`}
                  {...name}
                />
                <Text fontSize={`20px`} fontWeight={`bold`}>
                  연락처
                  <SpanText color={Theme.red_C} fontSize={`16px`}>
                    *
                  </SpanText>
                </Text>
                <TextInput
                  width={`100%`}
                  height={`55px`}
                  placeholder="연락처를 입력해주세요."
                  type={`number`}
                  margin={`12px 0 32px`}
                  {...mobile}
                />
                <Text fontSize={`20px`} fontWeight={`bold`}>
                  이메일
                  <SpanText color={Theme.red_C} fontSize={`16px`}>
                    *
                  </SpanText>
                </Text>
                <TextInput
                  width={`100%`}
                  height={`55px`}
                  placeholder="이메일을 입력해주세요."
                  type={`text`}
                  margin={`12px 0 32px`}
                  {...email}
                />
                <Text fontSize={`20px`} fontWeight={`bold`}>
                  제목
                  <SpanText color={Theme.red_C} fontSize={`16px`}>
                    *
                  </SpanText>
                </Text>
                <TextInput
                  width={`100%`}
                  height={`55px`}
                  placeholder="제목을 입력해주세요."
                  type={`text`}
                  margin={`12px 0 32px`}
                  {...title}
                />
                <Text fontSize={`20px`} fontWeight={`bold`}>
                  내용
                  <SpanText color={Theme.red_C} fontSize={`16px`}>
                    *
                  </SpanText>
                </Text>
                <TextArea
                  width={`100%`}
                  height={`120px`}
                  placeholder="내용을 입력해주세요."
                  type={`text`}
                  margin={`12px 0`}
                  {...content}
                />
                <Checkbox onChange={checkHandler} ref={checkRef}>
                  개인정보 처리방침에 동의합니다.
                </Checkbox>
                <CommonButton
                  width={`100%`}
                  height={`60px`}
                  fontSize={`20px`}
                  kindOf={`grey`}
                  margin={`44px 0 0`}
                  onClick={contactSubmitHandler}
                >
                  문의하기
                </CommonButton>
              </Wrapper>
              <Wrapper width={`50%`}>
                <Image
                  alt="image"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/notice-page/img_inquiry.png`}
                />
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </WholeWrapper>
      </ClientLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // SSR Cookie Settings For Data Load/////////////////////////////////////
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    ////////////////////////////////////////////////////////////////////////
    // 구현부

    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default Question;
