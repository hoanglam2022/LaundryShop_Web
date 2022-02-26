import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {AuditOutlined, AppstoreOutlined, DashboardOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

class President extends Component {
    render() {
        const {router} = this.props;
        const pathname = router.location.pathname;

        let selectDefault;
        let openDefault;
        do {
            if (pathname === "/") {
                openDefault   = 'dashboard'
                selectDefault = 'dashboard'
                break;
            }

            if (pathname.indexOf('/customers') !== -1) {
                openDefault = 'customers'
                if (pathname.indexOf('/customers/create') !== -1) {
                    selectDefault = 'customers-create'
                    break;
                }
                if (pathname.indexOf('/customers/detail') !== -1) {
                    selectDefault = 'customers'
                    break;
                }
                selectDefault = 'customers-index'
                break;
            }

            if (pathname.indexOf('/products') !== -1) {
                openDefault = 'products'
                if (pathname.indexOf('/products/create') !== -1) {
                    selectDefault = 'products-create'
                    break;
                }
                if (pathname.indexOf('/products/detail') !== -1) {
                    selectDefault = 'products'
                    break;
                }
                selectDefault = 'products-index'
                break;
            }

            if (pathname.indexOf('/orders') !== -1) {
                openDefault = 'orders'
                if (pathname.indexOf('/orders/create') !== -1) {
                    selectDefault = 'orders-create'
                    break;
                }
                selectDefault = 'orders-index'
                break;
            }

            openDefault   = 'dashboard'
            selectDefault = 'dashboard'
        } while (false);

        return (
            <Layout.Sider className="left-slider">
                <Menu
                    className="left-slider-menu"
                    mode="inline"
                    defaultSelectedKeys={[selectDefault]}
                    defaultOpenKeys={[openDefault]}
                >
                    <Menu.Item icon={<DashboardOutlined/>} key="dashboard">
                        Trang chủ
                        <Link to="/"/>
                    </Menu.Item>
                    <Menu.SubMenu key="products" icon={<AppstoreOutlined/>} title="Sản phẩm">
                        <Menu.Item key="products-index">
                            Danh sách sản phẩm
                            <Link to="/products"/>
                        </Menu.Item>
                        <Menu.Item key="products-create">
                            Thêm sản phẩm
                            <Link to="/products/create"/>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="customers" icon={<AuditOutlined/>} title="Khách hàng">
                        <Menu.Item key="customers-index">
                            Danh sách khách hàng
                            <Link to="/customers"/>
                        </Menu.Item>
                        <Menu.Item key="customers-create">
                            Thêm khách hàng
                            <Link to="/customers/create"/>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="orders" icon={<AuditOutlined/>} title="Đơn hàng">
                        <Menu.Item key="orders-index">
                            Danh sách đơn hàng
                            <Link to="/orders"/>
                        </Menu.Item>
                        <Menu.Item key="orders-create">
                            Thêm đơn hàng
                            <Link to="/orders/create"/>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Layout.Sider>
        )
    }
}

export default President;