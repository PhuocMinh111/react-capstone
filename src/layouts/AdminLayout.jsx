import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import BackHome from "../components/backHome/backHome";
const { Header, Content, Footer, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`
        };
      })
    };
  }
);

const AdminLayout = () => (
  <Layout>
    <BackHome color={"#001529"} />
    <Content
      style={{
        padding: "0 50px"
      }}
    >
      <Layout
        className="site-layout-background"
        style={{
          padding: "24px 0"
        }}
      >
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%"
            }}
            items={items2}
          />
        </Sider>
        <Content
          style={{
            padding: "0 24px",
            minHeight: 280
          }}
        >
          <table>
            <thead></thead>
          </table>
        </Content>
      </Layout>
    </Content>
    <Footer
      style={{
        textAlign: "center"
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default AdminLayout;
