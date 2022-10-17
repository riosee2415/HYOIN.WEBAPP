import React from "react";
import ClientLayout from "../../components/ClientLayout";
import Head from "next/head";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import axios from "axios";
import { END } from "redux-saga";
import useWidth from "../../hooks/useWidth";
import {
  CommonTitle,
  Image,
  RsWrapper,
  SpanText,
  Text,
  WholeWrapper,
  Wrapper,
} from "../../components/commonComponents";
import SubBanner from "../../components/SubBanner";
import Theme from "../../components/Theme";
import styled from "styled-components";
import { VerticalAlignBottomOutlined } from "@ant-design/icons";

const DownloadBtn = styled(Wrapper)`
  background: ${(props) => props.bgColor || Theme.lightGrey4_C};
  border-radius: 10px;
  flex-direction: row;
  width: auto;
  padding: 5px 14px;
  color: ${(props) => props.color || Theme.subTheme2_C};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 0 0 5px;

  &:hover {
    background: ${(props) => props.hoverBgColor || Theme.lightGrey5_C};
  }

  @media (max-width: 700px) {
    font-size: 13px;
    margin: 5px 0 0;
  }
`;

const Design = () => {
  ////// GLOBAL STATE //////

  ////// HOOKS //////
  const width = useWidth();
  ////// REDUX //////
  ////// USEEFFECT //////
  ////// TOGGLE //////
  ////// HANDLER //////
  ////// DATAVIEW //////

  return (
    <>
      <Head>
        <title>효인주야간노인복지센터 | 비용안내</title>
      </Head>
      <ClientLayout>
        <WholeWrapper>
          <SubBanner />

          <RsWrapper>
            <CommonTitle>비용안내</CommonTitle>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                구비 서류
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 10px`}>
              <Wrapper
                width={width < 700 ? `5px` : `8px`}
                height={width < 700 ? `5px` : `8px`}
                bgColor={Theme.subTheme2_C}
                radius={`100%`}
                margin={width < 700 ? `0 8px 0 0` : `0 16px 0 0`}
              ></Wrapper>

              <Wrapper
                width={
                  width < 700
                    ? `calc(100% - 5px - 8px)`
                    : `calc(100% - 8px - 16px)`
                }
              >
                <Text fontSize={width < 700 ? `14px` : `22px`}>
                  장기요양 인정서 1부, 표준 장기요양 이용계획서 1부(공단에서
                  발급)
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 10px`}>
              <Wrapper
                width={width < 700 ? `5px` : `8px`}
                height={width < 700 ? `5px` : `8px`}
                bgColor={Theme.subTheme2_C}
                radius={`100%`}
                margin={width < 700 ? `0 8px 0 0` : `0 16px 0 0`}
              ></Wrapper>

              <Text fontSize={width < 700 ? `14px` : `22px`}>
                건강보험증, 의사소견서, 약처방전(해당어르신)
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 10px`}>
              <Wrapper
                width={width < 700 ? `5px` : `8px`}
                height={width < 700 ? `5px` : `8px`}
                bgColor={Theme.subTheme2_C}
                radius={`100%`}
                margin={width < 700 ? `0 8px 0 0` : `0 16px 0 0`}
              ></Wrapper>

              <Text fontSize={width < 700 ? `14px` : `22px`}>
                건강검진자료(병원에서 전염성 및 피부질환 등 확인)
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 100px`}>
              <Wrapper
                width={width < 700 ? `5px` : `8px`}
                height={width < 700 ? `5px` : `8px`}
                bgColor={Theme.subTheme2_C}
                radius={`100%`}
                margin={width < 700 ? `0 8px 0 0` : `0 16px 0 0`}
              ></Wrapper>

              <Text fontSize={width < 700 ? `14px` : `22px`}>
                의료급여 또는 기초생활 수급증명서(수급자에 한함)
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                요양원 급여비용 미리보기
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 20px`}>
              <Image
                src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_file_blue.png"
                alt="icon"
                width={`16px`}
                margin={`0 16px 0 0`}
              />
              <Text fontSize={width < 700 ? `16px` : `22px`} fontWeight={`600`}>
                효인요양원 급여비용 &#60;2022년 기준&#62;
              </Text>

              <DownloadBtn>
                <Image
                  width={`14px`}
                  margin={`0 4px 0 0`}
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_download_blue.png"
                  alt="icon"
                />
                <Text>다운로드</Text>
              </DownloadBtn>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 20px`}>
              <Image
                src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_file_blue.png"
                alt="icon"
                width={`16px`}
                margin={`0 16px 0 0`}
              />

              <Text fontSize={width < 700 ? `16px` : `22px`} fontWeight={`600`}>
                효인요양원 급여비용[치매전담] &#60;2022년 기준&#62;
              </Text>

              <DownloadBtn
                bgColor={Theme.subTheme2_C}
                color={Theme.white_C}
                hoverBgColor={Theme.basicTheme_C}
              >
                <Image
                  width={`14px`}
                  margin={`0 4px 0 0`}
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_download.png"
                  alt="icon"
                />
                <Text>다운로드</Text>
              </DownloadBtn>
            </Wrapper>

            <Wrapper al={`flex-start`} margin={`0 0 100px`}>
              <Text fontSize={width < 700 ? `14px` : `18px`}>
                ※ 해당 비용은 해당년의 기준으로 산출되었으므로 입소 기간 및
                환자의 상태에 따라 비용이 상이할 수 있습니다.
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                주간보호 급여비용 미리보기
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 20px`}>
              <Image
                src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_file_blue.png"
                alt="icon"
                width={`16px`}
                margin={`0 16px 0 0`}
              />

              <Text fontSize={width < 700 ? `16px` : `22px`} fontWeight={`600`}>
                효인주간보호 급여비용[일반] &#60;2022년 기준&#62;
              </Text>

              <DownloadBtn>
                <Image
                  width={`14px`}
                  margin={`0 4px 0 0`}
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_download_blue.png"
                  alt="icon"
                />
                <Text>다운로드</Text>
              </DownloadBtn>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 20px`}>
              <Image
                src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_file_blue.png"
                alt="icon"
                width={`16px`}
                margin={`0 16px 0 0`}
              />

              <Text fontSize={width < 700 ? `16px` : `22px`} fontWeight={`600`}>
                효인주간보호 급여비용[치매전담실] &#60;2022년 기준&#62;
              </Text>

              <DownloadBtn>
                <Image
                  width={`14px`}
                  margin={`0 4px 0 0`}
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_download_blue.png"
                  alt="icon"
                />
                <Text>다운로드</Text>
              </DownloadBtn>
            </Wrapper>

            <Wrapper al={`flex-start`} margin={`0 0 100px`}>
              <Text fontSize={width < 700 ? `14px` : `18px`}>
                ※ 해당 비용은 해당년의 기준으로 산출되었으므로 입소 기간 및
                환자의 상태에 따라 비용이 상이할 수 있습니다.
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                방문요양 급여비용 미리보기
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 20px`}>
              <Image
                src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_file_blue.png"
                alt="icon"
                width={`16px`}
                margin={`0 16px 0 0`}
              />

              <Text fontSize={width < 700 ? `16px` : `22px`} fontWeight={`600`}>
                효인방문요양원 급여비용(방문당) &#60;2022년 기준&#62;
              </Text>

              <DownloadBtn>
                <Image
                  width={`14px`}
                  margin={`0 4px 0 0`}
                  src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_download_blue.png"
                  alt="icon"
                />
                <Text>다운로드</Text>
              </DownloadBtn>
            </Wrapper>

            <Wrapper al={`flex-start`} margin={`0 0 100px`}>
              <Text fontSize={width < 700 ? `14px` : `18px`}>
                ※ 해당 비용은 해당년의 기준으로 산출되었으므로 입소 기간 및
                환자의 상태에 따라 비용이 상이할 수 있습니다.
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                주야간보호센터 월 한도액
              </Text>
            </Wrapper>

            <Wrapper overflow={`auto`} margin={`0 0 100px`}>
              <Image
                src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/img_table_month1.png"
                alt="map"
                width={`100%`}
                minWidth={`800px`}
              />
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                주야간보호센터 월 한도액
              </Text>
            </Wrapper>

            <Wrapper dr={`row`} margin={`0 0 60px`}>
              <Wrapper
                width={
                  width < 1280
                    ? width < 1100
                      ? width < 900
                        ? `100%`
                        : `220px`
                      : `250px`
                    : `310px`
                }
                height={`245px`}
                radius={`20px`}
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  radius={`100%`}
                  bgColor={Theme.white_C}
                  padding={`25px`}
                >
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_cost_process-1.png"
                    alt="icon"
                  />
                </Wrapper>

                <Text
                  margin={`16px 0 8px`}
                  fontSize={`24px`}
                  fontWeight={`700`}
                >
                  본인부담
                </Text>

                <Text fontSize={`18px`} fontWeight={`600`}>
                  (일반, 감경, 의료, 기초)
                </Text>
              </Wrapper>

              <Wrapper
                width={`55px`}
                height={`55px`}
                radius={`100%`}
                bgColor={Theme.lightGrey2_C}
                color={Theme.white_C}
                fontSize={`50px`}
                margin={width < 900 ? `20px 0` : `0 20px`}
                padding={`0 0 4px 2px`}
              >
                +
              </Wrapper>

              <Wrapper
                width={
                  width < 1280
                    ? width < 1100
                      ? width < 900
                        ? `100%`
                        : `220px`
                      : `250px`
                    : `310px`
                }
                height={`245px`}
                radius={`20px`}
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  radius={`100%`}
                  bgColor={Theme.white_C}
                  padding={`25px`}
                >
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_cost_process-2.png"
                    alt="icon"
                  />
                </Wrapper>

                <Text
                  margin={`16px 0 8px`}
                  fontSize={`24px`}
                  fontWeight={`700`}
                >
                  비급여
                </Text>

                <Text fontSize={`18px`} fontWeight={`600`}>
                  (식사, 간식)
                </Text>
              </Wrapper>

              <Wrapper
                width={`55px`}
                height={`55px`}
                radius={`100%`}
                bgColor={Theme.lightGrey2_C}
                color={Theme.white_C}
                fontSize={`50px`}
                margin={width < 900 ? `20px 0` : `0 20px`}
                padding={`0 0 4px 2px`}
              >
                =
              </Wrapper>

              <Wrapper
                width={
                  width < 1280
                    ? width < 1100
                      ? width < 900
                        ? `100%`
                        : `220px`
                      : `250px`
                    : `310px`
                }
                height={`245px`}
                radius={`20px`}
                bgColor={Theme.lightGrey6_C}
                border={`1px solid ${Theme.lightGrey4_C}`}
              >
                <Wrapper
                  width={`100px`}
                  height={`100px`}
                  radius={`100%`}
                  bgColor={Theme.subTheme9_C}
                  padding={`25px`}
                >
                  <Image
                    src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/icon_cost_process-3.png"
                    alt="icon"
                  />
                </Wrapper>

                <Text
                  margin={`16px 0 0`}
                  fontSize={`24px`}
                  fontWeight={`700`}
                  color={Theme.subTheme2_C}
                >
                  이용자 부담금
                </Text>
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 30px`}>
              <Wrapper
                width={width < 700 ? `5px` : `8px`}
                height={width < 700 ? `5px` : `8px`}
                bgColor={Theme.subTheme2_C}
                radius={`100%`}
                margin={width < 700 ? `0 8px 0 0` : `0 16px 0 0`}
              ></Wrapper>

              <Text fontSize={width < 700 ? `14px` : `22px`}>
                이용시간별 수가 (야간 가산 20%, 공휴일 가산 30%)
              </Text>
            </Wrapper>

            <Wrapper overflow={`auto`} margin={`0 0 100px`}>
              <Image
                src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/img_table_month2.png"
                alt="map"
                width={`100%`}
                minWidth={`800px`}
              />
            </Wrapper>

            <Wrapper dr={`row`} ju={`flex-start`} margin={`0 0 40px`}>
              <Wrapper
                width={`18px`}
                height={`18px`}
                radius={`100%`}
                border={`1px solid ${Theme.subTheme2_C}`}
                margin={`0 16px 0 0`}
              ></Wrapper>

              <Text
                fontSize={
                  width < 1100 ? (width < 700 ? `20px` : `24px`) : `28px`
                }
                fontWeight={`600`}
              >
                본인부담금 계산
              </Text>
            </Wrapper>

            <Wrapper overflow={`auto`} margin={`0 0 100px`}>
              <Image
                src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/information-page/img_table_cost.png"
                alt="map"
                width={`100%`}
                minWidth={`800px`}
              />
            </Wrapper>
          </RsWrapper>
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

export default Design;
