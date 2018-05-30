import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class MyMenu extends Component {
    jumpPage= (e) =>{
        //console.log(e.key);   
        //console.log(e);    
        this.props.history.push(e.key);  
    }

    render() {
        return ( 
            <Menu
                onClick={this.jumpPage}
                style={{ width: 260 }}
                defaultSelectedKeys={['/']}
                defaultOpenKeys={[]}
                theme="dark"            
                mode="inline"
            >
                {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <MenuItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/test">Test</Link></Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
                </SubMenu> */}
                <Menu.Item key="/"><span><Icon type="home" /><span>首页</span></span></Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7" >Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="/test" >Test</Menu.Item>
                <Menu.Item key="/test/test2" >Test2</Menu.Item>
                <Menu.Item key="/test/test3">Test3</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default withRouter(MyMenu);