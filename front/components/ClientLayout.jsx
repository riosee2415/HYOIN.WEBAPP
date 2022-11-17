import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col, Drawer } from "antd";
import Link from "next/link";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { Image, Text, Wrapper } from "./commonComponents";
import Theme from "./Theme";
import useWidth from "../hooks/useWidth";

const ClientLayout = ({ children }) => {
  const width = useWidth();

  return (
    <section>
      {/* HEADER */}
      <AppHeader />

      {/* <MobileCol >
        <CustomRow justify={`space-between`} margin={`10px`}>
          <Col span={5}>
            <img
              width={`100%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SOUL%2Fassets%2Fimages%2Flogo%2Fsoul_logo.png?alt=media&token=2cfae161-5462-4687-b5ed-d7ee85755b7a`}
            />
          </Col>
          <Col span={2}>
            <AlignRightOutlined onClick={drawarToggle} />
          </Col>
        </CustomRow>
      </MobileCol>

      */}

      {/* content */}
      <Row>
        <Col span={0}>LEFT</Col>
        <Col span={24}>
          {children}
          <Wrapper
            width={`auto`}
            position={`fixed`}
            bottom={width < 900 ? `20px` : `50px`}
            right={width < 1100 ? `20px` : `100px`}
            zIndex={`100`}
          >
            <a href={`tel:0425227118`}>
              <Wrapper
                width={width < 900 ? `70px` : `100px`}
                height={width < 900 ? `70px` : `100px`}
                radius={`100%`}
                shadow={`3px 5px 5px rgba(0, 0, 0, 0.3)`}
                margin={`0 0 16px`}
                bgColor={Theme.white_C}
                color={Theme.subTheme3_C}
              >
                <Image
                  alt="phone icon"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_quick_call.png`}
                  width={width < 900 ? `16px` : `20px`}
                />
                <Text
                  margin={`6px 0 0`}
                  fontSize={width < 900 ? `14px` : `20px`}
                  fontWeight={`bold`}
                >
                  전화하기
                </Text>
              </Wrapper>
            </a>
            <Wrapper
              width={width < 900 ? `70px` : `100px`}
              height={width < 900 ? `70px` : `100px`}
              radius={`100%`}
              shadow={`3px 5px 5px rgba(0, 0, 0, 0.3)`}
              bgColor={Theme.kakao_C}
            >
              <Image
                alt="kakao icon"
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_quick_kakao.png`}
                width={width < 900 ? `16px` : `22px`}
              />
              <Text
                margin={`6px 0 0`}
                fontSize={width < 900 ? `14px` : `20px`}
                fontWeight={`bold`}
              >
                상담하기
              </Text>
            </Wrapper>
          </Wrapper>
        </Col>
        <Col span={0}>RIGHT</Col>
      </Row>

      {/* Footer */}

      <AppFooter />
    </section>
  );
};

ClientLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientLayout;
