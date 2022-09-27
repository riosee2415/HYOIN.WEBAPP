import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { menus } from "./clientMenus";
import {
  RsWrapper,
  WholeWrapper,
  Wrapper,
  Image,
  Text,
  SpanText,
} from "./commonComponents";
import styled from "styled-components";
import Theme from "./Theme";
import Link from "next/link";
import { withResizeDetector } from "react-resize-detector";
import { HomeFilled, RightOutlined } from "@ant-design/icons";

const ImgWrapper = styled(Wrapper)`
  height: 540px;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 900px) {
    height: 300px;
  }

  @media (max-width: 700px) {
    height: 250px;
  }
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  color: ${(props) => props.theme.white_C};
  z-index: 1;
  margin: 0 0 20px;
  line-height: 1;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

const Menu = styled.h3`
  margin: ${(props) => props.margin || `0`};
  font-weight: bold;
  position: relative;
  color: ${(props) => props.theme.white_C};
  font-size: 22px;

  &:before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 100%;
    position: absolute;
    top: -10px;
    left: 50%;
    margin: 0 0 0 -2.5px;
    background: ${(props) => props.theme.white_C};
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const SubBanner = ({ width, bgImg }) => {
  const [parentMenuName, setParentMenuName] = useState(``);
  const [currentMenuName, setCurrentMenuName] = useState(``);
  const [currentMenuContent, setCurrentMenuContent] = useState(``);
  const [currentAllMenus, setCurrentAllMenus] = useState([]);
  const [currentAllLinks, setCurrentAllLinks] = useState([]);
  const [currentImagePath, setCurrentImagePath] = useState("");

  const router = useRouter();

  useEffect(() => {
    let tempArr = [];
    let tempArrLink = [];

    menus.map((menu) => {
      if (menu.menuLink.split("/")[1] === router.pathname.split("/")[1]) {
        setParentMenuName(menu.menuName);

        menu.subMenus.map((childMenu) => {
          tempArr.push(childMenu.subMenuName);
          tempArrLink.push(childMenu.subMenuLink);

          if (childMenu.subMenuLink === router.pathname) {
            setCurrentMenuName(childMenu.subMenuName);
            setCurrentImagePath(childMenu.subBannerImagePath);
            setCurrentMenuContent(childMenu.subMenuContent);
          }
        });

        setCurrentAllMenus(tempArr);
        setCurrentAllLinks(tempArrLink);
      }
    });
  }, []);

  return (
    <WholeWrapper>
      <ImgWrapper bgImg={`url(${currentImagePath ? currentImagePath : bgImg})`}>
        <RsWrapper
          al={`flex-start`}
          ju={`flex-end`}
          padding={width < 900 ? `0 0 30px` : `0 0 72px`}
        >
          <Title>{parentMenuName}</Title>
          <Text color={Theme.white_C} fontSize={width < 900 ? `17px` : `24px`}>
            {currentMenuContent}
          </Text>
        </RsWrapper>
      </ImgWrapper>

      <Wrapper
        dr={width < 900 ? `column-reverse` : `row`}
        position={`relative`}
        ju={`flex-end`}
      >
        <Wrapper
          position={width < 900 ? `relative` : `absolute`}
          bottom={`0`}
          left={`0`}
          fontSize={`16px`}
          padding={width < 900 && `15px 0 0`}
        >
          <RsWrapper dr={`row`} ju={`flex-start`}>
            <HomeFilled />
            &nbsp; HOME
            <SpanText margin={`0 10px`} color={Theme.grey3_C}>
              <RightOutlined />
            </SpanText>
            {parentMenuName}
            <SpanText color={Theme.grey3_C} margin={`0 10px`}>
              <RightOutlined />
            </SpanText>
            {currentMenuName}
          </RsWrapper>
        </Wrapper>
        <Wrapper
          dr={`row`}
          width={width < 1280 ? (width < 900 ? `100%` : `60%`) : `50%`}
          height={width < 900 ? `100px` : `144px`}
          bgColor={Theme.basicTheme_C}
          shadow={`0 5px 10px rgba(0, 0, 0, 0.1)`}
          color={Theme.white_C}
          margin={width < 900 ? `0` : `-72px 0 0`}
          padding={
            width < 1280 ? (width < 700 ? `0 10px` : `0 40px`) : `0 80px`
          }
          zIndex={`10`}
          ju={`space-between`}
          display={width < 700 ? `none` : `flex`}
        >
          {currentAllMenus.map((value, idx) => {
            if (value === currentMenuName) {
              return <Menu key={value}>{value}</Menu>;
            } else {
              return (
                <Link
                  href={currentAllLinks && currentAllLinks[idx]}
                  key={value}
                >
                  <a>
                    <Text
                      fontSize={width < 900 ? `16px` : `22px`}
                      cursor={`pointer`}
                      color={Theme.subTheme4_C}
                    >
                      {value}
                    </Text>
                  </a>
                </Link>
              );
            }
          })}
        </Wrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(SubBanner);
