import React, { useEffect, useCallback } from "react";
import {
  ColWrapper,
  RowWrapper,
  Wrapper,
  CommonButton,
  RsWrapper,
  Text,
} from "../commonComponents";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { MAIN_BANNER_REQUEST } from "../../reducers/banner";
import Theme from "../Theme";
import { Carousel } from "antd";
import useWidth from "../../hooks/useWidth";
import { useRouter } from "next/router";

const MainSliderWrapper = styled(RowWrapper)`
  & .ant-carousel {
    width: 100%;
  }

  .ant-carousel .slick-dots-bottom {
    bottom: 110px;
  }
`;

const MainSlider = () => {
  const width = useWidth();

  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.banner);
  const { me } = useSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: MAIN_BANNER_REQUEST,
    });
  }, [me]);

  const moveLinkHandler = useCallback((link) => {
    window.open(link);
  }, []);
  return (
    <MainSliderWrapper>
      <Carousel autoplay={true} speed={3000}>
        {banners &&
          banners.map((data, idx) => {
            return (
              <ColWrapper
                key={idx}
                span={24}
                height={width < 800 ? `500px` : `760px`}
                bgImg={`url(${data.imagePath})`}
                position={`relative`}
                display={`flex !important`}
                color={Theme.white_C}
              >
                {data.title && (
                  <Wrapper height={`100%`} bgColor={`rgba(0, 0, 0, 0.5)`}>
                    <Text
                      fontSize={width < 900 ? `20px` : `45px`}
                      fontWeight={`bold`}
                      color={Theme.subTheme2_C}
                    >
                      {data.title}
                    </Text>

                    <Text
                      fontSize={width < 900 ? `15px` : `30px`}
                      margin={`20px 0 0`}
                    >
                      {data.subTitle}
                    </Text>
                  </Wrapper>
                )}
              </ColWrapper>
            );
          })}
      </Carousel>
    </MainSliderWrapper>
  );
};

export default MainSlider;
