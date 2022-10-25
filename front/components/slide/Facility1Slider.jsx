import React from "react";
import { Wrapper } from "../commonComponents";
import styled from "styled-components";
import Theme from "../Theme";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import useWidth from "../../hooks/useWidth";

const FacilityWrapper = styled(Wrapper)``;

const Facility1Slider = () => {
  const width = useWidth();

  const data = [
    {
      src: "https://picsum.photos/id/1018/250/150/",
    },
    {
      src: "https://picsum.photos/id/1015/250/150/",
    },
    {
      src: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <FacilityWrapper>
      <Carousel
        images={data}
        time={2000}
        thumbnails={true}
        thumbnailWidth="100px"
        captionPosition="bottom"
      />
    </FacilityWrapper>
  );
};

export default Facility1Slider;
