import React, { useState, useEffect, useCallback } from "react";
import {
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
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Drawer, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import wrapper from "../store/configureStore";
import axios from "axios";
import { END } from "@redux-saga/core";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import { useDispatch } from "react-redux";
import useWidth from "../hooks/useWidth";

const HeaderRs = styled(Wrapper)`
  padding-left: 110px;
  padding-right: 110px;

  @media (max-width: 1600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
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
  padding: 10px 0;

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

const MobileRow = styled(WholeWrapper)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  transition: 0.5s;

  .ant-drawer-content-wrapper {
    width: 100% !important;
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
  color: ${(props) => props.color};
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${Theme.subTheme2_C};
  }

  @media (max-width: 1350px) {
    margin: ${(props) => props.margin || `0 30px 0 0`};
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

const AppHeader = () => {
  const width = useWidth();
  const dispatch = useDispatch();

  const router = useRouter();

  ////////////// - USE STATE- ///////////////
  const [headerScroll, setHeaderScroll] = useState(false);
  const [pageY, setPageY] = useState(0);
  // const documentRef = useRef(document);

  const [drawar, setDrawar] = useState(false);
  const [subMenu, setSubMenu] = useState(``);

  ///////////// - EVENT HANDLER- ////////////

  const drawarToggle = useCallback(() => {
    setDrawar((prev) => !prev);
  }, [drawar]);

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const headerScroll = pageY && pageYOffset !== 0 && pageYOffset !== pageY;
    setHeaderScroll(headerScroll);
    setPageY(pageYOffset);
  });

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  return (
    <>
      <WebRow
        bgColor={headerScroll ? Theme.white_C : `rgba(255, 255,255, 0.6)`}
      >
        <HeaderRs dr={`row`} ju={`space-between`}>
          {/* web */}
          <ATag href="/" width={`15%`} ju={`flex-start`}>
            <Image
              width={`120px`}
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo.png`}
            />
          </ATag>
          <Wrapper dr={`row`} width={`auto`}>
            <Menu
              color={router.pathname.includes(`/company`) && Theme.subTheme2_C}
            >
              요양원 소개
            </Menu>
            <Menu
              color={router.pathname.includes(`/service`) && Theme.subTheme2_C}
            >
              서비스 안내
            </Menu>
            <Menu color={router.pathname.includes(`/use`) && Theme.subTheme2_C}>
              이용 안내
            </Menu>
            <Menu
              color={
                router.pathname.includes(`/happiness`) && Theme.subTheme2_C
              }
            >
              행복나눔
            </Menu>
            <Menu
              color={router.pathname.includes(`/garden`) && Theme.subTheme2_C}
            >
              알림마당
            </Menu>
            <Menu
              margin={`0`}
              color={router.pathname.includes(`/care`) && Theme.subTheme2_C}
            >
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
        </HeaderRs>

        <HoverWrapper>
          <HeaderRs dr={`row`} ju={`space-between`} al={`flex-start`}>
            <SubMenu>
              <Text className="menu" margin={`0 0 25px`}>
                요양원 소개
              </Text>
              <Wrapper width={`auto`} color={Theme.grey3_C} fontSize={`19px`}>
                <Text margin={`0 0 10px`}>
                  <Link href={`/company/intro`}>
                    <a>요양원 소개</a>
                  </Link>
                </Text>
                <Text margin={`0 0 10px`}>
                  <Link href={`/company/organization`}>
                    <a>조직도</a>
                  </Link>
                </Text>
                <Text margin={`0 0 10px`}>
                  <Link href={`/company/location`}>
                    <a>찾아오시는 길</a>
                  </Link>
                </Text>
                <Text>시설 3D 안내</Text>
              </Wrapper>
            </SubMenu>
            <SubMenu>
              <Text className="menu" margin={`0 0 25px`}>
                서비스 안내
              </Text>
              <Wrapper width={`auto`} color={Theme.grey3_C} fontSize={`19px`}>
                <Text margin={`0 0 10px`}>
                  <Link href={`/service/nursing`}>
                    <a>요양원</a>
                  </Link>
                </Text>
                <Text margin={`0 0 10px`}>
                  <Link href={`/service/protection`}>
                    <a>주간 보호</a>
                  </Link>
                </Text>
                <Text>
                  <Link href={`/service/visit`}>
                    <a>방문 요양</a>
                  </Link>
                </Text>
              </Wrapper>
            </SubMenu>
            <SubMenu>
              <Text className="menu" margin={`0 0 25px`}>
                이용 안내
              </Text>
              <Wrapper width={`auto`} color={Theme.grey3_C} fontSize={`19px`}>
                <Text margin={`0 0 10px`}>
                  <Link href={`/use`}>
                    <a>이용 안내</a>
                  </Link>
                </Text>
                <Text margin={`0 0 10px`}>
                  <Link href={`/use/admission`}>
                    <a>입소 절차</a>
                  </Link>
                </Text>
                <Text margin={`0 0 10px`}>
                  <Link href={`/use/design`}>
                    <a>비용 안내</a>
                  </Link>
                </Text>
                <Text margin={`0 0 10px`}>
                  <Link href={`/use/list`}>
                    <a>이용 현황</a>
                  </Link>
                </Text>
                <Text>
                  <Link href={`/use/wait`}>
                    <a>대기자명단</a>
                  </Link>
                </Text>
              </Wrapper>
            </SubMenu>
            <SubMenu>
              <Text className="menu" margin={`0 0 25px`}>
                행복나눔
              </Text>
              <Wrapper width={`auto`} color={Theme.grey3_C} fontSize={`19px`}>
                <Text margin={`0 0 10px`}>
                  <Link href={`/happiness/info`}>
                    <a>자원봉사 안내</a>
                  </Link>
                </Text>
                <Text>
                  <Link href={`/happiness/support`}>
                    <a>후원 안내</a>
                  </Link>
                </Text>
              </Wrapper>
            </SubMenu>
            <SubMenu>
              <Text className="menu" margin={`0 0 25px`}>
                알림마당
              </Text>
              <Wrapper width={`auto`} color={Theme.grey3_C} fontSize={`19px`}>
                <Text margin={`0 0 10px`}>
                  <Link href={`/garden/notice`}>
                    <a>공지사항</a>
                  </Link>
                </Text>
                <Text margin={`0 0 10px`}>
                  <Link href={`/garden/news`}>
                    <a>새소식</a>
                  </Link>
                </Text>
                <Text margin={`0 0 10px`}>
                  <Link href={`/garden/faq`}>
                    <a>FAQ</a>
                  </Link>
                </Text>
                <Text margin={`0 0 10px`}>
                  <Link href={`/garden/recruit`}>
                    <a>채용공고</a>
                  </Link>
                </Text>
                <Text margin={`0 0 10px`}>
                  <Link href={`/garden/announce`}>
                    <a>공고(입찰)</a>
                  </Link>
                </Text>
                <Text>
                  <Link href={`/garden/question`}>
                    <a>1:1 문의</a>
                  </Link>
                </Text>
              </Wrapper>
            </SubMenu>
            <SubMenu>
              <Link href={`/care`}>
                <a>
                  <Text
                    className="menu"
                    textAlign={`center`}
                    margin={`0 0 25px`}
                  >
                    <Text>노인장기요양</Text>
                    <Text>보험제도</Text>
                  </Text>
                </a>
              </Link>
            </SubMenu>
          </HeaderRs>
        </HoverWrapper>
      </WebRow>
      {/* mobile */}
      <MobileRow
        justify={`center`}
        bgColor={headerScroll ? Theme.white_C : `rgba(255, 255,255, 0.6)`}
      >
        <Wrapper position={`relative`}>
          <RsWrapper dr={`row`} padding={`10px 0`} ju={`space-between`}>
            <ATag width={`auto`} href={`tel:0425227118`}>
              <Image
                alt="call icon"
                width={`28px`}
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_menu-bar_call.png`}
              />
            </ATag>
            <ATag width={`auto`} href="/">
              <Image
                width={`80px`}
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo.png`}
              />
            </ATag>
            <Wrapper width={`20px`} al={`flex-end`} fontSize={`1.3rem`}>
              <MenuOutlined onClick={drawarToggle} />
            </Wrapper>
          </RsWrapper>
        </Wrapper>
        {drawar && (
          <Drawer
            placement="right"
            closable={true}
            onClose={drawarToggle}
            visible={drawarToggle}
            getContainer={false}
          >
            <Wrapper
              position={`relative`}
              color={Theme.black2_C}
              fontSize={`17px`}
            >
              <Wrapper
                position={`absolute`}
                top={`0`}
                right={`0px`}
                width={`40px`}
                height={`40px`}
                radius={`8px`}
                fontSize={`1.2rem`}
                zIndex={`1`}
              >
                <CloseOutlined onClick={drawarToggle} />
              </Wrapper>

              <ColWrapper width={`100%`} al={`flex-start`} padding={`60px 0 0`}>
                <ColWrapper
                  margin={`0 0 10px`}
                  width={`100%`}
                  al={`flex-start`}
                >
                  <Wrapper
                    ju={`space-between`}
                    dr={`row`}
                    color={Theme.grey2_C}
                    fontSize={`14px`}
                  >
                    요양원 소개
                  </Wrapper>
                </ColWrapper>
                <Wrapper
                  al={`flex-start`}
                  padding={`0 0 20px`}
                  margin={`0 0 20px`}
                  borderBottom={`1px solid ${Theme.lightGrey_C}`}
                >
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/company/intro`}>
                      <a>요양원 소개</a>
                    </Link>
                  </Wrapper>

                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/company/organization`}>
                      <a>조직도</a>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/company/location`}>
                      <a>찾아오시는 길</a>
                    </Link>
                  </Wrapper>
                  <Wrapper al={`flex-start`} onClick={drawarToggle}>
                    <Link href={`/`}>
                      <a>시설 3D 안내</a>
                    </Link>
                  </Wrapper>
                </Wrapper>
                <ColWrapper
                  margin={`0 0 10px`}
                  width={`100%`}
                  al={`flex-start`}
                >
                  <Wrapper
                    ju={`space-between`}
                    dr={`row`}
                    color={Theme.grey2_C}
                    fontSize={`14px`}
                  >
                    서비스 안내
                  </Wrapper>
                </ColWrapper>
                <Wrapper
                  al={`flex-start`}
                  padding={`0 0 20px`}
                  margin={`0 0 20px`}
                  borderBottom={`1px solid ${Theme.lightGrey_C}`}
                >
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/service/nursing`}>
                      <a>요양원</a>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/service/protection`}>
                      <a>주간 보호</a>
                    </Link>
                  </Wrapper>
                  <Wrapper al={`flex-start`} onClick={drawarToggle}>
                    <Link href={`/service/visit`}>
                      <a>방문 요양</a>
                    </Link>
                  </Wrapper>
                </Wrapper>
                <ColWrapper
                  margin={`0 0 10px`}
                  width={`100%`}
                  al={`flex-start`}
                >
                  <Wrapper
                    ju={`space-between`}
                    dr={`row`}
                    color={Theme.grey2_C}
                    fontSize={`14px`}
                  >
                    이용안내
                  </Wrapper>
                </ColWrapper>
                <Wrapper
                  al={`flex-start`}
                  padding={`0 0 20px`}
                  margin={`0 0 20px`}
                  borderBottom={`1px solid ${Theme.lightGrey_C}`}
                >
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/use/certification`}>
                      <a>이용안내</a>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/use/admission`}>
                      <a>입소 절차</a>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    margin={`0 0 10px`}
                    al={`flex-start`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/use/design`}>
                      <a>비용 안내</a>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    margin={`0 0 10px`}
                    al={`flex-start`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/use/list`}>
                      <a>이용 현황</a>
                    </Link>
                  </Wrapper>
                  <Wrapper al={`flex-start`} onClick={drawarToggle}>
                    <Link href={`/use/wait`}>
                      <a>대기자명단</a>
                    </Link>
                  </Wrapper>
                </Wrapper>
                <ColWrapper
                  margin={`0 0 10px`}
                  width={`100%`}
                  al={`flex-start`}
                >
                  <Wrapper
                    ju={`space-between`}
                    dr={`row`}
                    color={Theme.grey2_C}
                    fontSize={`14px`}
                  >
                    행복나눔
                  </Wrapper>
                </ColWrapper>
                <Wrapper
                  al={`flex-start`}
                  padding={`0 0 20px`}
                  margin={`0 0 20px`}
                  borderBottom={`1px solid ${Theme.lightGrey_C}`}
                >
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/happiness/info`}>
                      <a>자원봉사 안내</a>
                    </Link>
                  </Wrapper>
                  <Wrapper al={`flex-start`} onClick={drawarToggle}>
                    <Link href={`/happiness/support`}>
                      <a>후원 안내</a>
                    </Link>
                  </Wrapper>
                </Wrapper>
                <ColWrapper
                  margin={`0 0 10px`}
                  width={`100%`}
                  al={`flex-start`}
                >
                  <Wrapper
                    ju={`space-between`}
                    dr={`row`}
                    color={Theme.grey2_C}
                    fontSize={`14px`}
                  >
                    알림마당
                  </Wrapper>
                </ColWrapper>
                <Wrapper
                  al={`flex-start`}
                  padding={`0 0 20px`}
                  margin={`0 0 20px`}
                  borderBottom={`1px solid ${Theme.lightGrey_C}`}
                >
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/garden/notice`}>
                      <a>공지사항</a>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/garden/news`}>
                      <a>새소식</a>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/garden/faq`}>
                      <a>FAQ</a>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/garden/recruit`}>
                      <a>채용공고</a>
                    </Link>
                  </Wrapper>
                  <Wrapper
                    al={`flex-start`}
                    margin={`0 0 10px`}
                    onClick={drawarToggle}
                  >
                    <Link href={`/garden/announce`}>
                      <a>공고(입찰)</a>
                    </Link>
                  </Wrapper>
                  <Wrapper al={`flex-start`} onClick={drawarToggle}>
                    <Link href={`/garden/question`}>
                      <a>1:1 문의</a>
                    </Link>
                  </Wrapper>
                </Wrapper>

                <Link href={`/care`}>
                  <a>
                    {" "}
                    <ColWrapper
                      margin={`0 0 10px`}
                      width={`100%`}
                      al={`flex-start`}
                    >
                      노인장기요양 보험제도
                    </ColWrapper>
                  </a>
                </Link>
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
