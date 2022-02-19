import React, {Component} from "react";
import Header from '../Header'
import Slider from "../Slider";
import Footer from '../Footer'

import {Layout} from 'antd';

class President extends Component {
    render() {
        return (
            <Layout>
                <Slider/>
                <div className="app-layout-space"/>
                <Layout>
                    <Header/>
                    <div className="app-header-space"/>
                    <Layout className="app-content-wrapper">
                        <Layout.Content className="app-content">
                            {this.props.children}
                        </Layout.Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default President