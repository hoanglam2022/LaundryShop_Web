import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {AuditOutlined, AppstoreOutlined, DashboardOutlined} from '@ant-design/icons';

class President extends Component {
    render() {
        return (
            <Layout.Sider className="left-slider">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    defaultOpenKeys={['dashboard']}
                    style={{height: '100%', borderRight: 0}}
                >
                    <Menu.Item icon={<DashboardOutlined/>} key="dashboard">Trang chủ</Menu.Item>
                    <Menu.SubMenu key="sub1" icon={<AppstoreOutlined/>} title="Sản phẩm">
                        <Menu.Item key="sub1-1">Danh sách sản phẩm</Menu.Item>
                        <Menu.Item key="sub1-2">Thêm sản phẩm</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="sub2" icon={<AuditOutlined/>} title="Đơn hàng">
                        <Menu.Item key="sub2-1">Danh sách đơn hàng</Menu.Item>
                        <Menu.Item key="sub2-2">Thêm đơn hàng</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Layout.Sider>
        )
    }
}

export default President;