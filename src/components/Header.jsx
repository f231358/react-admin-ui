
import React, { Component } from 'react'
import { Breadcrumb, Icon } from 'antd';
import {    Link  } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Icon type="menu-fold" className="menu-icon" />
                <Breadcrumb>
                    <Breadcrumb.Item >
                    <Link to="/"><Icon type="home" />  <span>首页</span></Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                    <Link to="/test">
                    <Icon type="user" /> <span>用户管理</span></Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    Application 
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}
