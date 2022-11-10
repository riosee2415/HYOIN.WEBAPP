import React, { useCallback, useEffect, useState } from "react";
import {
  Wrapper,
  Text,
  Image,
  WholeWrapper,
  RsWrapper,
  ATag,
  SpanText,
} from "./commonComponents";
import Theme from "./Theme";
import useWidth from "../hooks/useWidth";
import { useSelector, useDispatch } from "react-redux";
import { COMPANY_GET_REQUEST } from "../reducers/company";
import { message, Modal } from "antd";
import Link from "next/link";

const AppFooter = () => {
  const width = useWidth();

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

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

  const modalToggle = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, [openModal]);

  return (
    <WholeWrapper
      bgColor={Theme.black_C}
      color={Theme.white_C}
      padding={`55px 0`}
    >
      <RsWrapper al={`flex-start`}>
        <Wrapper dr={`row`} ju={`space-between`}>
          <Wrapper width={`auto`} dr={`row`} ju={`flex-start`}>
            {width < 900 ? null : (
              <>
                <Link href={`/admin`}>
                  <a>
                    <Text fontSize={`15px`}>관리자 페이지 접속</Text>
                  </a>
                </Link>
                <SpanText fontSize={`10px`} margin={`0 10px`}>
                  |
                </SpanText>
              </>
            )}

            <Text fontSize={`15px`} isHover onClick={() => modalToggle()}>
              개인정보 처리방침
            </Text>
            <SpanText fontSize={`10px`} margin={`0 10px`}>
              |
            </SpanText>
            <Text fontSize={`15px`}>서비스 급여 종류 : 주야간보호센터</Text>
          </Wrapper>

          <Wrapper
            dr={`row`}
            width={width < 900 ? `100%` : `auto`}
            margin={width < 900 && `15px 0 0`}
          >
            <a href={`https://blog.naver.com/neowb1130`} target={`_blank`}>
              <Wrapper
                width={`27px`}
                height={`27px`}
                radius={`5px`}
                bgColor={Theme.darkGrey_C}
              >
                <Image
                  width={`14px`}
                  alt="blog"
                  src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_footer_band.png`}
                />
              </Wrapper>
            </a>
            <Wrapper
              width={`27px`}
              height={`27px`}
              radius={`5px`}
              margin={`0 13px`}
              bgColor={Theme.darkGrey_C}
            >
              <Image
                width={`17px`}
                alt="kakao"
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_footer_kakao.png`}
              />
            </Wrapper>
            <Wrapper
              width={`27px`}
              height={`27px`}
              radius={`5px`}
              margin={`0 13px 0 0`}
              bgColor={Theme.darkGrey_C}
            >
              <Image
                width={`17px`}
                alt="insta"
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_footer_insta.png`}
              />
            </Wrapper>
            <Wrapper
              width={`27px`}
              height={`27px`}
              radius={`5px`}
              bgColor={Theme.darkGrey_C}
            >
              <Image
                width={`14px`}
                alt="face"
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/common/icon_footer_face-book.png`}
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
        {companys && (
          <Wrapper
            dr={width < 900 ? `column` : `row`}
            al={width < 900 ? `flex-start` : `flex-end`}
            ju={`space-between`}
            fontSize={`15px`}
            margin={`55px 0 0`}
          >
            <Wrapper width={`auto`} al={`flex-start`} color={Theme.grey3_C}>
              <Text>대표 : 이진숙</Text>
              <Wrapper
                width={`auto`}
                dr={width < 900 ? `column` : `row`}
                al={width < 900 && `flex-start`}
              >
                {companys[0] && (
                  <Text
                    fontSize={width < 800 && `12px`}
                    lineHeight={width < 900 && `2`}
                  >{`${companys[0].name} : ${companys[0].value}`}</Text>
                )}
                {width < 900 ? (
                  companys[1] && (
                    <Text
                      fontSize={width < 800 && `12px`}
                      lineHeight={width < 900 && `2`}
                    >
                      {`${companys[1].name} : ${companys[1].value}`}
                    </Text>
                  )
                ) : (
                  <>
                    <SpanText fontSize={`10px`} margin={`0 10px`}>
                      |
                    </SpanText>
                    {companys[1] && (
                      <Text
                        fontSize={width < 800 && `12px`}
                        lineHeight={width < 900 && `2`}
                      >
                        {`${companys[1].name} : ${companys[1].value}`}
                      </Text>
                    )}
                  </>
                )}
              </Wrapper>
              <Wrapper dr={`row`} ju={`flex-start`}>
                {companys[2] && (
                  <Text
                    fontSize={width < 800 && `12px`}
                    lineHeight={width < 900 && `2`}
                  >{`${companys[2].name} : ${companys[2].value}`}</Text>
                )}
                <SpanText fontSize={`10px`} margin={`0 10px`}>
                  |
                </SpanText>
                {companys[3] && (
                  <Text
                    fontSize={width < 800 && `12px`}
                    lineHeight={width < 900 && `2`}
                  >{`${companys[3].name} : ${companys[3].value}`}</Text>
                )}
              </Wrapper>
              <Text
                margin={width < 900 ? `10px 0 30px` : `10px 0 0`}
                fontSize={width < 800 && `14px`}
              >
                Copyright © 효인주야간노인복지센터 All rights reserved.
              </Text>
            </Wrapper>
            <Wrapper width={`auto`} dr={`row`}>
              <Image
                alt="logo"
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo_footer_hyoin.png`}
                width={`62px`}
                margin={`0 30px 0 0`}
              />
              <Image
                alt="logo"
                src={`https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo_footer_neo.png`}
                width={`190px`}
              />
            </Wrapper>
          </Wrapper>
        )}
      </RsWrapper>

      <Modal
        footer={null}
        title="개인정보 처리방침"
        visible={openModal}
        onCancel={modalToggle}
        width={`700px`}
      >
        <Wrapper>
          <pre>
            {`효인주야간노인복지센터는 (이하 "기관") 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
기관는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
기관는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.

1. 처리하는 개인정보의 항목 및 수집방법

가. 처리하는 개인정보의 항목 :
작성자,연락처,이메일

나. 개인정보 수집방법 :
기관은 다음과 같은 방법으로 개인정보를 수집합니다
홈페이지 상담신청 게시판

※ 상담신청자는 본 사이트의 개인정보처리방침에 동의를 거부할 권리가 있으며 동의거부 시 상담신청을 계속할 수 없습니다.
2. 개인정보의 수집 및 처리목적

답변 결과를 상담신청인의 문자로 안내하고 답변 내용을 상담신청인의 이메일로 발송하기 위함입니다.
3. 개인정보 수집, 이용, 제공에 대한 동의철회

상담신청을 통해 이루어진 개인정보의 수집, 이용, 제공에 대해서 동의하신 내용을 상담신청자는 언제든지 철회하실 수 있습니다. 동의철회는 상담신청에 요청하여 주시거나 개인정보관리 담당자부서로 전화, E-mail등으로 연락하시면 즉시 개인정보의삭제 등 필요한 조치를 취하겠습니다. 삭제된 신청자 정보는 상담신청자 DB에서 복원되지 않도록 완전삭제 처리 됩니다.

4. 개인정보의 보유기간 및 이용기간

상담신청에 대한 문의답변 완료후 30일 동안 보관됩니다.

5. 개인정보의 파기절차 및 방법

기관는 원칙적으로 개인정보의 보유기간이 경과했거나 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 다만, 다른 법률에 따라 보존하여야하는 경우에는 그러하지 않습니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.

가. 파기절차
이용자가 입력한 정보는 보유기간이 경과했거나 처리목적이 달성 후 내부 방침 및 관련 법령에 따라 파기합니다.

다. 파기기한
이용자의 개인정보는 개인정보의 보유기간이 경과된 경우 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.

다. 파기방법
기관에서 처리하는 개인정보를 파기할 때에는 다음의 방법으로 파기 합니다. 가. 전자적 파일 형태인 경우: 복원이 불가능한 방법으로 영구삭제 나. 전자적 파일의 형태 외의 기록물, 인쇄물, 서면, 그 밖의 기록매체인 경우: 파쇄 또는 소각

6. 정보주체의 권리·의무 및 그 행사방법

이용자는 정보주체로서 다음과 같은 권리를 행사할 수 있습니다.

가. 개인정보 열람 요구 : 기관에서 보유하고 있는 개인정보파일은 「개인정보보호법」 제35조(개인정보의 열람)에 따라 열람을 요구할 수 있습니다.
다만 개인정보 열람 요구는 「개인정보보호법」 제35조제5항에 의하여 다음과 같이 제한될 수 있습니다.
- 법률에 따라 열람이 금지되거나 제한되는 경우
- 다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우

나. 개인정보 정정·삭제 요구 :기관에서 보유하고 있는 개인정보파일에 대해서는 「개인정보보호법」 제36조(개인정보의 정정·삭제)에 따라 기관에 개인정보의 정정·삭제를 요구할 수 있습니다.
다만, 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.

다. 개인정보 처리정지 요구 : 기관에서 보유하고 있는 개인정보파일에 대해서는 「개인정보보호법」 제37조(개인정보의 처리정지 등)에 따라 기관에 개인정보의 처리정지를 요구할 수 있습니다. 또한 만 14세 미만 아동의 법정대리인은 기관에 그 아동의 개인정보의 열람, 정정·삭제, 처리정지 요구를 할 수 있습니다.
다만, 개인정보 처리정지 요구시 「개인정보보호법」 제37조제2항에 의하여 처리정지 요구가 거절될 수 있습니다.
- 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우
- 다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우
- 공공기관이 개인정보를 처리하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우
- 개인정보를 처리하지 아니하면 정보주체와 약정한 서비스를 제공하지 못하는 등 계약의 이행이 곤란한 경우로서 정보주체가 그 계약의 해지 의사를 명확하게 밝히지 아니한 경우

라. 개인정보의 열람, 정정·삭제, 처리정지 요구에 대해서는 10일 이내에 해당 사항에 대한기관의 조치를 통지 합니다. 개인정보의 열람, 정정·삭제, 처리정지 요구는 해당 부서를 통해서 가능합니다.
7. 개인정보의 제3자 제공

기관는 수집·보유하고 있는 개인정보를 이용자의 동의 없이는 제3자에게 제공하지 않으며 다음의 경우에는 개인정보를 제3자에게 제공할 수 있습니다.

가. 정보주체로부터 별도의 동의를 받은 경우

나. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우

다. 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우

라. 다음 각 호의 어느 하나에 해당하는 경우에는 정보주체 또는 제3자의 이익을 부당하게 침해할 우려가 있을 때를 제외하고는 이용자의 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공할 수 있습니다.
- 정보주체로부터 별도의 동의를 받은 경우
- 다른 법률에 특별한 규정이 있는 경우
- 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우
- 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 개인정보를 제공하는 경우
- 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서 보호위원회의 심의·의결을 거친 경우
- 조약, 그 밖의 국제협정의 이행을 위하여 외국정부 또는 국제기구에 제공하기 위하여 필요한 경우
- 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우
- 법원의 재판업무 수행을 위하여 필요한 경우
- 형(刑) 및 감호, 보호처분의 집행을 위하여 필요한 경우
8. 수집한 개인정보의 위탁
기관는 원칙적으로 이용자의 동의없이 해당 개인정보의 처리를 타인에게 위탁하지 않습니다. 다만, 기관는 제3자에게 개인정보의 처리 업무를 위탁하는 경우에는 「개인정보보호법」제26조(업무위탁에 따른 개인정보의 처리 제한)에 따라 위탁하며 다음 각 호의 내용이 포함된 문서에 의하며 위탁 업무의 내용과 수탁자를 기관 홈페이지에 게시합니다.


가. 위탁업무 수행 목적 외 개인정보의 처리 금지에 관한 사항

나. 개인정보의 기술적·관리적 보호조치에 관한 사항

다. 그 밖에 개인정보의 안전한 관리를 위하여 다음과 같이 대통령령으로 정한 사항
- 위탁업무의 목적 및 범위
- 재위탁 제한에 관한 사항
- 개인정보에 대한 접근 제한 등 안전성 확보 조치에 관한 사항
- 위탁업무와 관련하여 보유하고 있는 개인정보의 관리 현황 점검 등 감독에 관한 사항
- 법 제26조제2항에 따른 수탁자(이하 "수탁자"라 한다)가 준수하여야 할 의무를 위반한 경우의 손해배상 등 책임에 관한 사항


9. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항

기관는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 oo의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 기관은(는) 다음과 같은 목적을 위해 쿠키를 사용합니다.

가. 쿠키 등 사용 목적
     - 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트
       참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
     - 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든
       쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
나. 쿠키 설정 거부 방법
예: 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
설정방법 예(인터넷 익스플로어의 경우):
웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보
단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.

10. 개인정보보호를 위한 기술적/관리적 보호 대책

기관는 이용자들의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 조치를 취하고 있습니다.

가. 개인정보 암호화
이용자의 개인정보는 암호화 되어 저장 및 관리되고 있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의 별도 보안기능을 사용하고 있습니다.

나. 해킹 등에 대비한 대책
기관는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며, 암호화통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다. 그리고 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.

다. 취급 직원의 최소화 및 교육
기관의 개인정보관련 취급 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 효인주야간노인복지센터 의 개인정보처리방침의 준수를 항상 강조하고 있습니다.

라. 개인정보보호전담기구의 운영
그리고 사내 개인정보보호전담기구 등을 통하여 효인주야간노인복지센터 의 개인정보처리방침의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고 있습니다.
단, 이용자 본인의 부주의나 인터넷상의 문제로 ID, 비밀번호, 생년월일 등 개인정보가 유출되어 발생한 문제에 대해 기관는 일체의 책임을 지지 않습니다.

마. 정기적인 자체 감사 실시
개인정보 취급 관련 안정성 확보를 위해 정기적으로 자체 감사를 실시하고 있습니다.

바. 내부관리계획의 수립 및 시행
개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.

사. 문서보안을 위한 잠금장치 사용
개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.

11. 개인정보보호 책임자 지정
기관는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.

개인정보보호 책임자
- 성명 : 이진숙
- 직책 : 대표자
- 전화 : 042-522-7118
- 이메일 : neowb1130@naver.com

- 고객서비스 담당부서 : 효인주야간노인복지센터
- 전화 : 042-522-7118
- 이메일 : neowb1130@naver.com



12. 권익침해 구제방법
개인정보에 관한 권리 또는 이익을 침해받은 사람은 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 기관는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.

기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
1.개인정보침해신고센터 (국번없이) 118 (내선2번)
2.개인분쟁조정위원회 (www.1336.or.kr/1336)
3.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)
4.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)
5.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
13. 고지의 의무

현 개인정보처리방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 홈페이지의 '공지사항'을 통해 고지할 것입니다

부 칙
제 1 조 (시행일) 본 약관은 2016.03.28부터 시행합니다.

            `}
          </pre>
        </Wrapper>
      </Modal>
    </WholeWrapper>
  );
};

export default AppFooter;
