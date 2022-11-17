import React, { useEffect } from "react";
import ClientLayout from "../../components/ClientLayout";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import {
  ATag,
  CommonTitle,
  Image,
  RsWrapper,
  Text,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";
import SubBanner from "../../components/SubBanner";
import Theme from "../../components/Theme";

const Location = () => {
  ////// GLOBAL STATE //////
  const width = useWidth();
  ////// HOOKS //////
  ////// REDUX //////
  ////// USEEFFECT //////

  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=6j4egi6qtj`;
    document.head.appendChild(mapScript);

    mapScript.onload = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(36.352492, 127.360686), // 지도 중심 좌표
        scaleControl: true,
        mapTypeControl: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: naver.maps.MapTypeControlStyle.BUTTON,
          position: naver.maps.Position.TOP_LEFT,
        },
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
        zoom: 18,
      });

      // 마커가 표시될 위치입니다
      let markerPosition = new naver.maps.LatLng(
        36.35243456315784,
        127.36069960393321
      );

      // 마커를 생성합니다
      let marker = new naver.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 커스텀 오버레이가 표시될 위치입니다 마커표시 위도 경도랑 다름 살짝 바꿔줘야함
      let position = new naver.maps.LatLng(
        36.35257408182409,
        127.36000674059729
      );

      // 커스텀 오버레이를 생성합니다
      let customOverlay = new naver.maps.Marker({
        map: map,
        position: position,
        icon: {
          content:
            '<div class="customoverlay">' +
            '  <a href="http://kko.to/KTdw7pvqR" target="_blank">' +
            '    <span class="title">대전광역시 서구 계룡로264번길 52</span>' +
            "  </a>" +
            "</div>",
        },
      });
    };
  }, []);

  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>효인요양원 | 찾아오시는 길</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />
          <RsWrapper>
            <CommonTitle>찾아오시는 길</CommonTitle>
          </RsWrapper>
          <Wrapper height={width < 900 ? `400px` : `700px`} id="map">
            {width < 900 ? null : (
              <Wrapper
                position={`absolute`}
                top={`90px`}
                bottom={`auto`}
                left={`0`}
              >
                <RsWrapper al={`flex-start`} position={`relative`}>
                  <Wrapper
                    zIndex={`100`}
                    width={`auto`}
                    bgColor={Theme.basicTheme_C}
                    color={Theme.white_C}
                    padding={width < 900 ? `100px 25px 50px` : `140px 90px`}
                  >
                    <Image
                      alt="logo"
                      width={`120px`}
                      position={`absolute`}
                      top={`20px`}
                      left={`10px`}
                      src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_map_hoyin.png`}
                    />
                    <Text
                      fontSize={width < 900 ? `25px` : `36px`}
                      fontWeight={`bold`}
                    >
                      효인요양원
                    </Text>
                    <Wrapper
                      dr={`row`}
                      ju={`flex-start`}
                      al={`flex-start`}
                      margin={`30px 0 18px`}
                    >
                      <Text
                        width={width < 700 ? `70px` : `82px`}
                        color={Theme.subTheme4_C}
                        fontSize={width < 700 ? `15px` : `18px`}
                        fontWeight={`bold`}
                      >
                        위치
                      </Text>
                      <Wrapper
                        fontSize={width < 700 ? `15px` : `18px`}
                        width={`auto`}
                        al={`flex-start`}
                      >
                        <Text>대전광역시 서구 계룡로264번길 52</Text>
                        <Text>(월평동, 효인요양원)</Text>
                      </Wrapper>
                    </Wrapper>
                    <Wrapper dr={`row`} ju={`flex-start`} al={`flex-start`}>
                      <Text
                        width={width < 700 ? `70px` : `82px`}
                        color={Theme.subTheme4_C}
                        fontSize={width < 700 ? `15px` : `18px`}
                        fontWeight={`bold`}
                      >
                        대표전화
                      </Text>
                      <ATag width={`auto`} href={`tel:0425227118`}>
                        <Text fontSize={width < 700 ? `15px` : `18px`}>
                          042-522-7118
                        </Text>
                      </ATag>
                    </Wrapper>
                    <Wrapper dr={`row`} ju={`flex-start`} margin={`30px 0 0`}>
                      <a
                        href={`https://blog.naver.com/neowb1130`}
                        target={`_blank`}
                      >
                        <Wrapper
                          width={`51px`}
                          height={`51px`}
                          radius={`5px`}
                          bgColor={Theme.subTheme6_C}
                        >
                          <Image
                            alt="band"
                            src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/icon_map_band.png`}
                            width={`27px`}
                          />
                        </Wrapper>
                      </a>
                      <Wrapper
                        width={`51px`}
                        height={`51px`}
                        radius={`5px`}
                        margin={`0 25px`}
                        bgColor={Theme.subTheme6_C}
                      >
                        <Image
                          alt="kakao"
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/icon_map_kakao.png`}
                          width={`27px`}
                        />
                      </Wrapper>
                      <Wrapper
                        width={`51px`}
                        height={`51px`}
                        radius={`5px`}
                        bgColor={Theme.subTheme6_C}
                      >
                        <Image
                          alt="face"
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/icon_map_face-book.png`}
                          width={`27px`}
                        />
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                </RsWrapper>
              </Wrapper>
            )}
          </Wrapper>

          {width < 900 && (
            <Wrapper>
              <RsWrapper al={`flex-start`} position={`relative`}>
                <Wrapper
                  width={`100%`}
                  bgColor={Theme.basicTheme_C}
                  color={Theme.white_C}
                  padding={width < 900 ? `100px 25px 50px` : `140px 90px`}
                >
                  <Image
                    alt="logo"
                    width={`120px`}
                    position={`absolute`}
                    top={`20px`}
                    left={`10px`}
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/img_map_hoyin.png`}
                  />
                  <Text
                    fontSize={width < 900 ? `25px` : `36px`}
                    fontWeight={`bold`}
                  >
                    효인요양원
                  </Text>
                  <Wrapper
                    dr={`row`}
                    ju={`flex-start`}
                    al={`flex-start`}
                    margin={`30px 0 18px`}
                  >
                    <Text
                      width={width < 700 ? `70px` : `82px`}
                      color={Theme.subTheme4_C}
                      fontSize={width < 700 ? `15px` : `18px`}
                      fontWeight={`bold`}
                    >
                      위치
                    </Text>
                    <Wrapper
                      fontSize={width < 700 ? `15px` : `18px`}
                      width={`auto`}
                      al={`flex-start`}
                    >
                      <Text>대전광역시 서구 계룡로264번길 52</Text>
                      <Text>(월평동, 효인요양원)</Text>
                    </Wrapper>
                  </Wrapper>
                  <Wrapper dr={`row`} ju={`flex-start`} al={`flex-start`}>
                    <Text
                      width={width < 700 ? `70px` : `82px`}
                      color={Theme.subTheme4_C}
                      fontSize={width < 700 ? `15px` : `18px`}
                      fontWeight={`bold`}
                    >
                      대표전화
                    </Text>
                    <ATag width={`auto`} href={`tel:0425227118`}>
                      <Text fontSize={width < 700 ? `15px` : `18px`}>
                        042-522-7118
                      </Text>
                    </ATag>
                  </Wrapper>
                  <Wrapper dr={`row`} ju={`flex-start`} margin={`30px 0 0`}>
                    <a
                      href={`https://blog.naver.com/neowb1130`}
                      target={`_blank`}
                    >
                      <Wrapper
                        width={`51px`}
                        height={`51px`}
                        radius={`5px`}
                        bgColor={Theme.subTheme6_C}
                      >
                        <Image
                          alt="band"
                          src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/icon_map_band.png`}
                          width={`27px`}
                        />
                      </Wrapper>
                    </a>
                    <Wrapper
                      width={`51px`}
                      height={`51px`}
                      radius={`5px`}
                      margin={`0 25px`}
                      bgColor={Theme.subTheme6_C}
                    >
                      <Image
                        alt="kakao"
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/icon_map_kakao.png`}
                        width={`27px`}
                      />
                    </Wrapper>
                    <Wrapper
                      width={`51px`}
                      height={`51px`}
                      radius={`5px`}
                      bgColor={Theme.subTheme6_C}
                    >
                      <Image
                        alt="band"
                        src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/icon_map_band.png`}
                        width={`27px`}
                      />
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </RsWrapper>
            </Wrapper>
          )}

          <Wrapper bgColor={Theme.subTheme14_C}>
            <RsWrapper padding={`80px 0`} al={`flex-start`}>
              <Text
                fontWeight={`bold`}
                fontSize={width < 700 ? `18px` : `30px`}
                bgColor={Theme.subTheme3_C}
                color={Theme.white_C}
                padding={`0 20px`}
              >
                교통편
              </Text>
              <Wrapper dr={`row`} al={`flex-start`} margin={`40px 0 0`}>
                <Wrapper
                  width={width < 900 ? `100%` : `calc(100% / 2)`}
                  al={`flex-start`}
                >
                  <Image
                    alt="bus icon"
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/icon_map_bus.png`}
                    width={`32px`}
                  />
                  <Text
                    fontSize={width < 700 ? `18px` : `24px`}
                    fontWeight={`bold`}
                    margin={`18px 0 28px`}
                  >
                    버스 이용시
                  </Text>
                  <Wrapper dr={`row`} ju={`space-between`}>
                    <Wrapper width={`auto`} al={`flex-start`}>
                      <Text fontSize={`20px`} fontWeight={`bold`}>
                        대전일보사 (32750) 129m
                      </Text>
                      <Text
                        fontSize={width < 700 ? `15px` : `18px`}
                        margin={`16px 0 10px`}
                      >
                        일반 101, 103, 105, 107, 116, 119, 312
                      </Text>
                      <Text fontSize={width < 700 ? `15px` : `18px`}>
                        급행 3(급, 원내동 - 정부청사)
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={`auto`}
                      al={`flex-start`}
                      margin={width < 900 && `15px 0 0`}
                    >
                      <Text fontSize={`20px`} fontWeight={`bold`}>
                        대전일보사 (32760) 215m
                      </Text>
                      <Text
                        fontSize={width < 700 ? `15px` : `18px`}
                        margin={`16px 0 10px`}
                      >
                        일반 101, 103, 105, 107, 116, 119, 312
                      </Text>
                      <Text fontSize={width < 700 ? `15px` : `18px`}>
                        급행 3(급, 원내동 - 정부청사)
                      </Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  width={width < 900 ? `100%` : `calc(100% / 2)`}
                  al={`flex-start`}
                  padding={width < 900 ? `30px 0 0` : `0 0 0 110px`}
                >
                  <Image
                    alt="bus icon"
                    src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/introduce-page/icon_map_subway.png`}
                    width={`32px`}
                  />
                  <Text
                    fontSize={width < 700 ? `18px` : `24px`}
                    fontWeight={`bold`}
                    margin={`18px 0 28px`}
                  >
                    지하철 이용시
                  </Text>
                  <Text
                    fontSize={width < 700 ? `15px` : `18px`}
                    margin={width < 900 ? `15px 0` : `30px 0 14px`}
                  >
                    갑천역 ①번 출구 도보 12분
                  </Text>
                  <Text fontSize={width < 700 ? `15px` : `18px`}>
                    월평역 ②번 출구 도보 15분
                  </Text>
                </Wrapper>
              </Wrapper>
            </RsWrapper>
          </Wrapper>
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

export default Location;
