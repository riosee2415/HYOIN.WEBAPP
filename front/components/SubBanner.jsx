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
        <RsWrapper al={`flex-start`} ju={`flex-end`} padding={`0 0 72px`}>
          <Title>{currentMenuName}</Title>
          <Text color={Theme.white_C} fontSize={`24px`}>
            {currentMenuContent}
          </Text>
        </RsWrapper>
      </ImgWrapper>

      <Wrapper dr={`row`} position={`relative`} ju={`flex-end`}>
        <Wrapper
          position={`absolute`}
          bottom={`0`}
          left={`0`}
          fontSize={`16px`}
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
          width={`50%`}
          height={`144px`}
          bgColor={Theme.basicTheme_C}
          shadow={`0 5px 10px rgba(0, 0, 0, 0.1)`}
          color={Theme.white_C}
          margin={`-72px 0 0`}
          padding={`0 0 0 80px`}
          zIndex={`10`}
          ju={`flex-start`}
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
                      display={width < 700 ? `none` : `block`}
                      fontSize={`22px`}
                      margin={`0 0 0 75px`}
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
