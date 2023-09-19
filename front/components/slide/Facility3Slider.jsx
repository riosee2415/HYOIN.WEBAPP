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

const Facility3Slider = () => {
  const width = useWidth();

  const data = [
    {
      src: "https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/facility/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A1%E1%86%BC.png",
    },
    {
      src: "https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/facility/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A1%E1%86%BC+%E1%84%83%E1%85%B5%E1%84%90%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF+%E1%84%89%E1%85%A3%E1%86%BA.png",
    },
    {
      src: "https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/facility/%E1%84%8C%E1%85%AE%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%84%92%E1%85%A9+102-1.png",
    },
    {
      src: "https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/facility/%E1%84%8C%E1%85%AE%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%84%92%E1%85%A9+102%E1%84%92%E1%85%A9.png",
    },
    {
      src: "https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/facility/%E1%84%8C%E1%85%AE%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%84%92%E1%85%A9+%E1%84%80%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A1%E1%86%BC.png",
    },
  ];
  return (
    <FacilityWrapper>
      <Carousel
        images={data}
        time={2000}
        thumbnails={true}
        thumbnailWidth="20%"
        thumbnailHeight={width < 700 ? `50px` : `140px`}
        captionPosition="bottom"
      />
    </FacilityWrapper>
  );
};

export default Facility3Slider;
