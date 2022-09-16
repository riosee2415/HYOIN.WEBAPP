import React, { useEffect } from "react";
import {
  Wrapper,
  Text,
  Image,
  WholeWrapper,
  RsWrapper,
  ATag,
} from "./commonComponents";
import Theme from "./Theme";
import useWidth from "../hooks/useWidth";
import { useSelector, useDispatch } from "react-redux";
import { COMPANY_GET_REQUEST } from "../reducers/company";
import { message } from "antd";

const AppFooter = () => {
  const width = useWidth();

  const dispatch = useDispatch();

  const {
    companys,
    //
    st_companyDone,
    st_companyError,
  } = useSelector((state) => state.company);

  useEffect(() => {
    dispatch({
      type: COMPANY_GET_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (st_companyError) {
      return message.error(st_companyError);
    }
  }, [st_companyError]);
  return (
    <WholeWrapper
      bgColor={Theme.black_C}
      color={Theme.white_C}
      padding={`65px 0`}
    >
      <RsWrapper al={`flex-start`}>
        {companys && (
          <Wrapper
            dr={width < 900 ? `column` : `row`}
            al={width < 900 ? `flex-start` : `flex-end`}
            ju={`space-between`}
            fontSize={`14px`}
            margin={`0 0 15px`}
          >
            <Image
              alt="logo"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/bedivers/assets/images/logo/logo_footer.png`}
              width={width < 800 ? `100px` : `125px`}
            />

            <Wrapper
              width={`auto`}
              dr={width < 900 ? `column` : `row`}
              al={width < 900 && `flex-start`}
            >
              {companys[0] && (
                <Text
                  margin={width < 900 ? `10px 0 0` : `0 25px`}
                  fontSize={width < 800 && `12px`}
                  lineHeight={width < 900 && `2`}
                >{`${companys[0].name} : ${companys[0].value}`}</Text>
              )}

              {companys[1] && (
                <Text
                  fontSize={width < 800 && `12px`}
                  lineHeight={width < 900 && `2`}
                >
                  {`${companys[1].name} : ${companys[1].value}`}
                </Text>
              )}

              {companys[2] && (
                <Text
                  margin={width < 900 ? `0` : `0 25px`}
                  fontSize={width < 800 && `12px`}
                  lineHeight={width < 900 && `2`}
                >{`${companys[2].name} : ${companys[2].value}`}</Text>
              )}

              {companys[3] && (
                <Text
                  fontSize={width < 800 && `12px`}
                  lineHeight={width < 900 && `2`}
                >{`${companys[3].name} : ${companys[3].value}`}</Text>
              )}

              {companys[4] && (
                <Text
                  margin={width < 900 ? `0` : `0 0 0 25px`}
                  fontSize={width < 800 && `12px`}
                  lineHeight={width < 900 && `2`}
                >{`${companys[4].name} : ${companys[4].value}`}</Text>
              )}
            </Wrapper>
          </Wrapper>
        )}
        <Wrapper
          dr={width < 900 ? `column-reverse` : `row`}
          ju={`space-between`}
          al={width < 900 && `flex-start`}
          fontSize={`14px`}
        >
          <Text>Copyright (c) Be Divers ALL RIGHTS RESERVED.</Text>
          <ATag
            href={`https://4leaf-software.com/`}
            target={`_blank`}
            width={`auto`}
            dr={`row`}
          >
            <Image
              alt="logo"
              src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/bedivers/assets/images/footer/icon_4leaf.png`}
              width={`18px`}
              margin={`0 5px 0 0`}
            />
            <Text
              fontSize={width < 800 && `12px`}
              lineHeight={width < 900 && `2`}
            >
              www.4leaf-software.com
            </Text>
          </ATag>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default AppFooter;
