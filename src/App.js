import React, { Component } from 'react';
//import logo from './logo.svg';
//import './css/App.css';
import MainPage from './pages/MainPage';
import MyMenu from './components/MyMenu';
import UserCard from './components/UserCard';
import MyHeader from './components/Header';
import { Layout } from 'antd';


import test from './pages/test/test';
import test2 from './pages/test/test2';
import test3 from './pages/test/test3';



import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'

const { Header,  Sider, Content } = Layout;

class App extends Component {
    render() {
        return (    
            <Router >
            <Layout>                
                <Sider className="sider" >
                    <UserCard/>
                    <MyMenu/>  
                </Sider>
                <Layout>
                    <Header style={{padding:0}}>
                        <MyHeader></MyHeader>
                    </Header>    
                    <Content className="content">
                    <Route path="/" exact component={MainPage}/> 
                    <Route path="/test"  exact  component={test}/>
                    <Route path="/test/test2" component={test2}/>  
                    <Route path="/test/test3" component={test3}/>                 
                    </Content>                  
                </Layout>
            </Layout>
            </Router>  
        );
    }
}

export default App;