import React, { useState, useEffect, useCallback } from "react";
import {
  RowWrapper,
  ColWrapper,
  Image,
  ATag,
  RsWrapper,
  Wrapper,
  Text,
  WholeWrapper,
} from "./commonComponents";
import styled from "styled-components";
import Theme from "./Theme";
import {
  MenuOutlined,
  MinusOutlined,
  PlusOutlined,
  SearchOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Drawer, message } from "antd";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import wrapper from "../store/configureStore";
import axios from "axios";
import { END } from "@redux-saga/core";
import {
  LOAD_MY_INFO_REQUEST,
  // LOGOUT_REQUEST
} from "../reducers/user";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import useWidth from "../hooks/useWidth";

const SearchWrapper = styled(Wrapper)`
  background: ${(props) => props.theme.subTheme2_C};
  padding: 10px;
  position: absolute;
  left: 0;
`;

const HoverWrapper = styled(Wrapper)`
  position: absolute;
  top: 104px;
  left: 0;
  background: ${Theme.white_C};
  padding: 30px 0;
  transition: 0.2s;
  opacity: 0;
  visibility: hidden;
`;

const WebRow = styled(WholeWrapper)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: 0.5s;
  padding: 10px 110px;

  &:hover {
    background: ${Theme.white_C};

    ${HoverWrapper} {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const MobileRow = styled(RowWrapper)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  transition: 0.5s;

  background: ${(props) => props.theme.white_C};

  .ant-drawer-content-wrapper {
    width: 90% !important;
  }

  .ant-drawer-header-no-title .ant-drawer-close {
    display: none;
  }

  @media (max-width: 1100px) {
    display: flex;
  }
`;

const Menu = styled.h2`
  margin: ${(props) => props.margin || `0 80px 0 0`};
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${Theme.subTheme2_C};
  }
`;

const SubMenu = styled.h2`
  font-size: 24px;
  font-weight: bold;

  & .menu {
    position: relative;
    text-align: center;
    color: ${Theme.grey3_C};

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${Theme.subTheme2_C};
      transition: 0.3s;
    }
  }

  & ${Wrapper} ${Text}:hover {
    color: ${Theme.subTheme2_C};
  }

  &:hover {
    cursor: pointer;

    & .menu {
      color: ${Theme.black_C};
    }

    & .menu:before {
      width: 100%;
    }
  }
`;

const TxtInput = styled.input`
  width: 265px;
  background: ${Theme.white_C};
  border: 1px solid ${Theme.basicTheme_C};
  padding: 0 25px 0 10px;
  height: 36px;
  border-radius: 20px;
  transition: 0.5s;

  &:focus {
    border: 1px solid ${Theme.subTheme3_C};
  }

  &::placeholder {
    font-size: 13px;
    color: ${Theme.lightGrey_C};
  }
`;

const AppHeader = () => {
  const width = useWidth();
  const dispatch = useDispatch();

  const router = useRouter();

  const searchTitle = useInput("");

  const {
    me,
    //
    st_logoutDone,
    st_logoutError,
  } = useSelector((state) => state.user);

  ////////////// - USE STATE- ///////////////
  const [headerScroll, setHeaderScroll] = useState(false);
  const [pageY, setPageY] = useState(0);
  // const documentRef = useRef(document);

  const [drawar, setDrawar] = useState(false);
  const [subMenu, setSubMenu] = useState(``);
  const [searchToggle, setSearchToggle] = useState(false);

  ///////////// - EVENT HANDLER- ////////////

  const drawarToggle = useCallback(() => {
    setDrawar((prev) => !prev);
  }, [drawar]);

  const searchToggleHandler = useCallback(() => {
    setSearchToggle((prev) => !prev);
  }, [searchToggle]);

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const headerScroll = pageY && pageYOffset !== 0 && pageYOffset !== pageY;
    setHeaderScroll(headerScroll);
    setPageY(pageYOffset);
  });

  const logoutHandler = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  });

  const searchMoveHandler = useCallback((link) => {
    router.push(link);
  }, []);

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  useEffect(() => {
    if (st_logoutDone) {
      message.success({
        content: "로그아웃이 되었습니다.",
        className: "custom-class",
        style: {
          marginTop: "100px",
        },
      });
      Router.replace("/");
    }
  }, [st_logoutDone]);

  return (
    <>
      <WebRow
        bgColor={headerScroll ? Theme.white_C : `rgba(255, 255,255, 0.6)`}
      >
        <RsWrapper dr={`row`} ju={`space-between`}>
          {/* web */}
          <ATag href="/" width={`15%`} ju={`flex-start`}>
            <Image
              width={`120px`}
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo.png`}
            />
          </ATag>
          <Wrapper dr={`row`} width={`auto`}>
            <Menu>요양원 소개</Menu>
            <Menu>서비스 안내</Menu>
            <Menu>이용 안내</Menu>
            <Menu>행복나눔</Menu>
            <Menu>알림마당</Menu>
            <Menu margin={`0`}>
              <Text>노인장기요양</Text>
              <Text>보험제도</Text>
            </Menu>
          </Wrapper>
          <Wrapper width={`15%`} al={`flex-end`}>
            <Wrapper dr={`row`} ju={`flex-end`}>
              <Text fontSize={`16px`} margin={`0 5px 0 0`}>
                상담 전화
              </Text>
              <Image
                alt="call icon"
                width={`28px`}
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_menu-bar_call.png`}
              />
            </Wrapper>
            <ATag width={`auto`} href={`tel:0425227118`}>
              <Text fontSize={`26px`} fontWeight={`bold`}>
                042-522-7118
              </Text>
            </ATag>
          </Wrapper>
        </RsWrapper>

        <HoverWrapper>
          <RsWrapper dr={`row`} ju={`space-between`} al={`flex-start`}>
            <SubMenu>
              <Text className="menu" margin={`0 0 25px`}>
                요양원 소개
              </Text>
              <Wrapper width={`auto`} color={Theme.grey3_C} fontSize={`19px`}>
                <Text margin={`0 0 10px`}>인사말</Text>
                <Text margin={`0 0 10px`}>비전/CI</Text>
                <Text margin={`0 0 10px`}>연혁</Text>
                <Text margin={`0 0 10px`}>조직도</Text>
                <Text margin={`0 0 10px`}>찾아오시는 길</Text>
                <Text>시설 3D 안내</Text>
              </Wrapper>
            </SubMenu>
            <SubMenu>
              <Text className="menu" margin={`0 0 25px`}>
                서비스 안내
              </Text>
              <Wrapper width={`auto`} color={Theme.grey3_C} fontSize={`19px`}>
                <Text margin={`0 0 10px`}>요양원</Text>
                <Text margin={`0 0 10px`}>주간 보호</Text>
                <Text>방문 요양</Text>
              </Wrapper>
            </SubMenu>
            <SubMenu>
              <Text className="menu" margin={`0 0 25px`}>
                이용 안내
              </Text>
              <Wrapper width={`auto`} color={Theme.grey3_C} fontSize={`19px`}>
                <Text margin={`0 0 10px`}>이용 안내</Text>
                <Text margin={`0 0 10px`}>비용 안내</Text>
                <Text margin={`0 0 10px`}>이용 현황</Text>
                <Text>대기자명단</Text>
              </Wrapper>
            </SubMenu>
            <SubMenu>
              <Text className="menu" margin={`0 0 25px`}>
                행복나눔
              </Text>
              <Wrapper width={`auto`} color={Theme.grey3_C} fontSize={`19px`}>
                <Text margin={`0 0 10px`}>자원봉사 안내</Text>
                <Text>후원 안내</Text>
              </Wrapper>
            </SubMenu>
            <SubMenu>
              <Text className="menu" margin={`0 0 25px`}>
                알림마당
              </Text>
              <Wrapper width={`auto`} color={Theme.grey3_C} fontSize={`19px`}>
                <Text margin={`0 0 10px`}>공지사항</Text>
                <Text margin={`0 0 10px`}>새소식</Text>
                <Text margin={`0 0 10px`}>FAQ</Text>
                <Text margin={`0 0 10px`}>채용공고</Text>
                <Text margin={`0 0 10px`}>공고(입찰)</Text>
                <Text>1:1 문의</Text>
              </Wrapper>
            </SubMenu>
            <SubMenu>
              <Text className="menu" textAlign={`center`} margin={`0 0 25px`}>
                <Text>노인장기요양</Text>
                <Text>보험제도</Text>
              </Text>
            </SubMenu>
          </RsWrapper>
        </HoverWrapper>
      </WebRow>
      {/* mobile */}
      <MobileRow justify={`center`}>
        <Wrapper bgColor={Theme.lightGrey_C}>
          <RsWrapper>
            <Wrapper
              dr={`row`}
              ju={`flex-end`}
              color={Theme.grey_C}
              padding={`5px 0`}
              fontSize={`12px`}
            >
              {me ? (
                <>
                  <Wrapper
                    cursor={`pointer`}
                    width={`auto`}
                    onClick={logoutHandler}
                  >
                    로그아웃
                  </Wrapper>

                  <Wrapper cursor={`pointer`} width={`auto`} margin={`0 30px`}>
                    <Link href={`/mypage`}>
                      <a>마이페이지</a>
                    </Link>
                  </Wrapper>
                </>
              ) : (
                <>
                  <Wrapper cursor={`pointer`} width={`auto`}>
                    <Link href={`/user/login`}>
                      <a>로그인</a>
                    </Link>
                  </Wrapper>
                  <Wrapper cursor={`pointer`} width={`auto`} margin={`0 30px`}>
                    <Link href={`/user/join`}>
                      <a>회원가입</a>
                    </Link>
                  </Wrapper>
                </>
              )}

              <Wrapper cursor={`pointer`} width={`auto`}>
                <Link href={`/cart`}>
                  <a>장바구니</a>
                </Link>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </Wrapper>
        <Wrapper position={`relative`}>
          <RsWrapper dr={`row`} padding={`10px 0`} ju={`space-between`}>
            <Wrapper width={`20px`} al={`flex-start`} fontSize={`1.3rem`}>
              <SearchOutlined onClick={searchToggleHandler} />
            </Wrapper>
            <ATag width={`auto`} href="/">
              <Image
                width={`80px`}
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/edufactory/assets/images/logo/logo.png`}
              />
            </ATag>
            <Wrapper width={`20px`} al={`flex-end`} fontSize={`1.3rem`}>
              <MenuOutlined onClick={drawarToggle} />
            </Wrapper>
          </RsWrapper>

          {searchToggle && (
            <SearchWrapper dr={`row`}>
              <Wrapper
                width={`auto`}
                position={`relative`}
                margin={`0 20px 0 0`}
              >
                <TxtInput
                  {...searchTitle}
                  placeholder={`제품명으로 검색하세요.`}
                  onKeyDown={(e) =>
                    e.keyCode === 13 &&
                    searchMoveHandler(`/search?type=${searchTitle.value}`)
                  }
                />
                <Wrapper
                  width={`auto`}
                  position={`absolute`}
                  top={`8px`}
                  right={`10px`}
                  color={Theme.basicTheme_C}
                  fontSize={`20px`}
                  onClick={() =>
                    searchMoveHandler(`/search?type=${searchTitle.value}`)
                  }
                >
                  <SearchOutlined onClick={searchToggleHandler} />
                </Wrapper>
              </Wrapper>
              <Text onClick={searchToggleHandler}>닫기</Text>
            </SearchWrapper>
          )}
        </Wrapper>
        {drawar && (
          <Drawer
            placement="right"
            closable={true}
            onClose={drawarToggle}
            visible={drawarToggle}
            getContainer={false}
          >
            <Wrapper position={`relative`}>
              <Wrapper
                position={`absolute`}
                top={`0`}
                right={`0px`}
                width={`40px`}
                height={`40px`}
                radius={`8px`}
                fontSize={`1.2rem`}
                color={Theme.basicTheme_C}
                border={`1px solid ${Theme.basicTheme_C}`}
                zIndex={`1`}
              >
                <CloseOutlined onClick={drawarToggle} />
              </Wrapper>

              <ColWrapper width={`100%`} al={`flex-start`} padding={`60px 0 0`}>
                <ColWrapper
                  borderBottom={`1px solid ${Theme.lightGrey3_C}`}
                  margin={`0 0 10px`}
                  padding={`5px 0`}
                  width={`100%`}
                  al={`flex-start`}
                  onClick={() => {
                    setSubMenu(0);
                  }}
                >
                  <Wrapper
                    ju={`space-between`}
                    dr={`row`}
                    color={subMenu === 0 && Theme.basicTheme_C}
                  >
                    회사소개
                    {subMenu === 0 ? <MinusOutlined /> : <PlusOutlined />}
                  </Wrapper>
                </ColWrapper>
                {subMenu === 0 && (
                  <>
                    <ColWrapper margin={`5px 10px 20px`} onClick={drawarToggle}>
                      <Link href="/company/introduce">
                        <ATag width={`auto`} color={`initial`}>
                          인사말
                        </ATag>
                      </Link>
                    </ColWrapper>
                    <ColWrapper margin={`5px 10px 20px`} onClick={drawarToggle}>
                      <Link href="/company/location">
                        <ATag width={`auto`} color={`initial`}>
                          오시는 길
                        </ATag>
                      </Link>
                    </ColWrapper>
                    <ColWrapper margin={`5px 10px 15px`} onClick={drawarToggle}>
                      <Link href="/company/manager">
                        <ATag width={`auto`} color={`initial`}>
                          지역별담당자
                        </ATag>
                      </Link>
                    </ColWrapper>
                  </>
                )}
                <ColWrapper
                  borderBottom={`1px solid ${Theme.lightGrey3_C}`}
                  margin={`0 0 10px`}
                  padding={`5px 0`}
                  width={`100%`}
                  al={`flex-start`}
                  onClick={() => {
                    setSubMenu(1);
                  }}
                >
                  <Wrapper
                    ju={`space-between`}
                    dr={`row`}
                    color={subMenu === 1 && Theme.basicTheme_C}
                  >
                    도서소개
                    {subMenu === 1 ? <MinusOutlined /> : <PlusOutlined />}
                  </Wrapper>
                </ColWrapper>
                {subMenu === 1 && (
                  <>
                    <ColWrapper margin={`5px 10px 20px`} onClick={drawarToggle}>
                      <Link href="/books/new">
                        <ATag width={`auto`} color={`initial`}>
                          신간도서
                        </ATag>
                      </Link>
                    </ColWrapper>
                    <ColWrapper margin={`5px 10px 20px`} onClick={drawarToggle}>
                      <Link href="/books/field">
                        <ATag width={`auto`} color={`initial`}>
                          분야별 도서
                        </ATag>
                      </Link>
                    </ColWrapper>
                    <ColWrapper margin={`5px 10px 15px`} onClick={drawarToggle}>
                      <Link href="/books/list">
                        <ATag width={`auto`} color={`initial`}>
                          도서목록
                        </ATag>
                      </Link>
                    </ColWrapper>
                  </>
                )}

                <ColWrapper
                  borderBottom={`1px solid ${Theme.lightGrey3_C}`}
                  margin={`0 0 10px`}
                  padding={`5px 0`}
                  width={`100%`}
                  al={`flex-start`}
                  onClick={() => {
                    setSubMenu(2);
                  }}
                >
                  <Wrapper
                    ju={`space-between`}
                    dr={`row`}
                    color={subMenu === 2 && Theme.basicTheme_C}
                  >
                    자료실
                    {subMenu === 2 ? <MinusOutlined /> : <PlusOutlined />}
                  </Wrapper>
                </ColWrapper>
                {subMenu === 2 && (
                  <>
                    <ColWrapper margin={`5px 10px 0`} onClick={drawarToggle}>
                      <Link href="/reference/errata">정오표</Link>
                    </ColWrapper>

                    <ColWrapper margin={`5px 10px 0`} onClick={drawarToggle}>
                      <Link href="/reference/class">강의자료실</Link>
                    </ColWrapper>
                    <ColWrapper margin={`5px 10px 15px`} onClick={drawarToggle}>
                      <Link href="/reference/learning">학습자료실</Link>
                    </ColWrapper>
                  </>
                )}

                <ColWrapper
                  borderBottom={`1px solid ${Theme.lightGrey3_C}`}
                  margin={`0 0 10px`}
                  padding={`5px 0`}
                  width={`100%`}
                  al={`flex-start`}
                  onClick={() => {
                    setSubMenu(3);
                  }}
                >
                  <Wrapper
                    ju={`space-between`}
                    dr={`row`}
                    color={subMenu === 3 && Theme.basicTheme_C}
                  >
                    고객지원
                    {subMenu === 3 ? <MinusOutlined /> : <PlusOutlined />}
                  </Wrapper>
                </ColWrapper>
                {subMenu === 3 && (
                  <>
                    <ColWrapper margin={`5px 10px 0`} onClick={drawarToggle}>
                      <Link href="/center/notice">공지사항</Link>
                    </ColWrapper>

                    <ColWrapper margin={`5px 10px 0`} onClick={drawarToggle}>
                      <Link href="/center/question">1:1문의</Link>
                    </ColWrapper>
                    <ColWrapper margin={`5px 10px 0`} onClick={drawarToggle}>
                      <Link href="/center/faq">FAQ</Link>
                    </ColWrapper>
                    <ColWrapper margin={`5px 10px 0`} onClick={drawarToggle}>
                      <Link href="/center/publication">출간문의</Link>
                    </ColWrapper>
                    <ColWrapper margin={`5px 10px 0`} onClick={drawarToggle}>
                      <Link href="/center/application">견본도서신청</Link>
                    </ColWrapper>
                    <ColWrapper margin={`5px 10px 15px`} onClick={drawarToggle}>
                      <Link href="/center/groupPurchase">단체구매신청</Link>
                    </ColWrapper>
                  </>
                )}
                <ColWrapper
                  borderBottom={`1px solid ${Theme.lightGrey3_C}`}
                  margin={`0 0 10px`}
                  padding={`5px 0`}
                  width={`100%`}
                  al={`flex-start`}
                >
                  <Link href="/mobileApp">
                    <ATag width={`auto`}>
                      <ColWrapper>모바일앱</ColWrapper>
                    </ATag>
                  </Link>
                </ColWrapper>
              </ColWrapper>
            </Wrapper>
          </Drawer>
        )}
      </MobileRow>
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

    // context.store.dispatch({
    //   type: ACCEPT_LOG_REQUEST,
    //   data: { typeId: "1" },
    // });

    // 구현부 종료
    context.store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await context.store.sagaTask.toPromise();
  }
);

export default AppHeader;
