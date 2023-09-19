import React from "react";
import { Wrapper } from "../commonComponents";
import styled from "styled-components";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import useWidth from "../../hooks/useWidth";

const FacilityWrapper = styled(Wrapper)`
  ._2qwzr img {
    height: 710px;

    @media (max-width: 700px) {
      height: 250px;
    }
  }
`;

const Facility4Slider = () => {
  const width = useWidth();

  const data = [
    {
      src: "https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/facility/2%E1%84%8E%E1%85%B3%E1%86%BC+%E1%84%85%E1%85%A9%E1%84%87%E1%85%B5.png",
    },
    {
      src: "https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/facility/4%E1%84%8E%E1%85%B3%E1%86%BC+%E1%84%85%E1%85%A9%E1%84%87%E1%85%B5.png",
    },
  ];
  return (
    <FacilityWrapper>
      <Carousel
        images={data}
        time={2000}
        thumbnails={true}
        thumbnailWidth="50%"
        thumbnailHeight={width < 700 ? `50px` : `140px`}
        captionPosition="bottom"
      />
    </FacilityWrapper>
  );
};

export default Facility4Slider;
