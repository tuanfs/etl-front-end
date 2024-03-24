import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {Breadcrumb, Layout, Menu, theme} from "antd";
const {Header, Content, Sider} = Layout;
const items1 = [
  {
    key: "home",
    label: (
      <a href="/" rel="noopener noreferrer">
        Home
      </a>
    ),
  },
  {
    label: (
      <a href="/ca" rel="noopener noreferrer">
        Ca
      </a>
    ),
    key: "Ca",
  },
  {
    label: (
      <a href="/ak247" rel="noopener noreferrer">
        Ak247
      </a>
    ),
    key: "ak247",
  },
];

const items2 = [
  {
    icon: UserOutlined,
    label: "User",
    key: "user",
  },
  {
    icon: LaptopOutlined,
    label: "Report",
    key: "report",
  },
  {
    icon: NotificationOutlined,
    label: "Notification",
    key: "notification",
  },
].map((item, index) => {
  const {key, icon, label} = item;
  return {
    key: key,
    icon: React.createElement(icon),
    label: label,
    children: new Array(2).fill(null).map((_, j) => {
      const subKey = j + 1;
      return {
        key: subKey,
        label: `${label} ${subKey}`,
      };
    }),
  };
});
const Wrapper = ({children}) => {
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();
  return (
    <Layout style={{height: "100vh"}}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Wrapper;
