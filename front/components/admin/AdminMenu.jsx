import React, { useState, useCallback } from "react";
import { Menu, Switch } from "antd";
import {
  InfoCircleOutlined,
  AppstoreOutlined,
  SettingOutlined,
  BarChartOutlined,
  UserOutlined,
  BookOutlined,
  PhoneOutlined,
  NotificationOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CURRENT_ADMINMENU_STATUS } from "../../reducers/user";
import { Wrapper, Image } from "../commonComponents";

const { SubMenu } = Menu;
const MenuName = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const AdminMenu = () => {
  const { currentAdminMenu, me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const router = useRouter();

  const [mode, setMode] = useState(`dark`);

  const [current, setCurrent] = useState(`1`);

  const clickAction = useCallback((e) => {
    // console.log("click", e);

    router.replace(e.key);
    setCurrent(e.key);
  }, []);

  const titleClickHandler = useCallback(
    (key) => () => {
      dispatch({
        type: CURRENT_ADMINMENU_STATUS,
        data: { key },
      });
    },
    [currentAdminMenu]
  );

  return (
    <>
      <Menu
        theme={mode}
        onClick={clickAction}
        style={{ width: `100%` }}
        defaultOpenKeys={currentAdminMenu}
        mode="inline"
        selectedKeys={router.pathname}
        disabled={false}
      >
        <Wrapper margin={`20px 0 10px`}>
          <Image
            alt="logo"
            src={`https://hyoin-s3.s3.ap-northeast-2.amazonaws.com/hyoin/assets+/images/logo/logo_footer_hyoin.png`}
            width={`60px`}
          />
        </Wrapper>
        <Wrapper height={`30px`} fontSize={`0.8rem`}>
          {me && me.nickname}
        </Wrapper>
        <Wrapper height={`30px`} fontSize={`0.8rem`} margin={`0 0 20px`}>
          {me &&
            (parseInt(me.level) === 5
              ? `개발사`
              : parseInt(me.level) === 4
              ? `최고관리자`
              : parseInt(me.level) === 3
              ? `운영자`
              : ``)}
        </Wrapper>
        <Menu.Item key="/admin">
          <MenuName>관리자 메인</MenuName>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<BarChartOutlined />}
          title="접속자 관리"
          onTitleClick={titleClickHandler("sub1")}
        >
          <Menu.Item key="/admin/logs/acceptLogs">
            <MenuName>접속자 통계</MenuName>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          icon={<InfoCircleOutlined />}
          title="기초 관리"
          onTitleClick={titleClickHandler("sub2")}
        >
          <Menu.Item key="/admin/info/businessInformation">
            <MenuName>사업자정보 관리</MenuName>
          </Menu.Item>
          <Menu.Item key="/admin/info/popup">
            <MenuName>팝업 관리</MenuName>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          icon={<BookOutlined />}
          title="게시판 관리"
          onTitleClick={titleClickHandler("sub3")}
        >
          <Menu.Item key="/admin/board/notice/list">
            <MenuName>공지사항 관리</MenuName>
          </Menu.Item>
          <Menu.Item key="/admin/board/news/list">
            <MenuName>새소식 관리</MenuName>
          </Menu.Item>
          <Menu.Item key="/admin/board/announce/list">
            <MenuName>공고(입찰) 관리</MenuName>
          </Menu.Item>
          <Menu.Item key="/admin/board/wait/list">
            <MenuName>대기자명단 관리</MenuName>
          </Menu.Item>
          <Menu.Item key="/admin/board/recruit/list">
            <MenuName>채용공고 관리</MenuName>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          icon={<SettingOutlined />}
          title="베너 관리"
          onTitleClick={titleClickHandler("sub4")}
        >
          <Menu.Item key="/admin/banner/mainbanner">
            <MenuName>메인베너 관리</MenuName>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub5"
          icon={<ScheduleOutlined />}
          title="식단표 관리"
          onTitleClick={titleClickHandler("sub5")}
        >
          <Menu.Item key="/admin/diet/list">
            <MenuName>요양원식단표 리스트</MenuName>
          </Menu.Item>
          <Menu.Item key="/admin/protect/list">
            <MenuName>주간보호식단표 리스트</MenuName>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub6"
          icon={<PhoneOutlined />}
          title="문의 관리"
          onTitleClick={titleClickHandler("sub6")}
        >
          <Menu.Item key="/admin/question/list">
            <MenuName>문의 리스트</MenuName>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub7"
          icon={<NotificationOutlined />}
          title="FAQ 관리"
          onTitleClick={titleClickHandler("sub7")}
        >
          <Menu.Item key="/admin/faq/type">
            <MenuName>FAQ 유형 관리</MenuName>
          </Menu.Item>
          <Menu.Item key="/admin/faq">
            <MenuName>FAQ 리스트 관리</MenuName>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub8"
          icon={<ScheduleOutlined />}
          title="시간표 관리"
          onTitleClick={titleClickHandler("sub8")}
        >
          <Menu.Item key="/admin/schedule/month">
            <MenuName>요양원 시간표 관리</MenuName>
          </Menu.Item>
          <Menu.Item key="/admin/schedule/week">
            <MenuName>주간보호 시간표 관리</MenuName>
          </Menu.Item>
          <Menu.Item key="/admin/schedule/move">
            <MenuName>이동서비스 시간표 관리</MenuName>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub9"
          icon={<ScheduleOutlined />}
          title="이용현황 관리"
          onTitleClick={titleClickHandler("sub9")}
        >
          <Menu.Item key="/admin/center/list">
            <MenuName>이용현황 리스트</MenuName>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default AdminMenu;
