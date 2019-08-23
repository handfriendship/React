import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
import ProfessorListPage from "./pages/professor_list";
import PlannerPage from "./pages/planner";
import AboutPage from "./pages/about";

const { SubMenu } = Menu;
const { Header, Content, Sider , Footer} = Layout;

function App() {
    const nowPage = window.location.href;
    return (
        <BrowserRouter>
            <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[nowPage]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="/professor"><Link to="/professor">교수 목록</Link></Menu.Item>
                    <Menu.Item key="/planner"><Link to="/planner">교수 계획</Link></Menu.Item>
                    <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
                </Menu>
                </Header>
                <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <Icon type="user" />
                                subnav 1
                            </span>
                            }
                        >
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        background: '#fff',padding: 24,margin: 0, minHeight: 280,}} >
                        <Route path="/professor" component={ProfessorListPage}></Route>
                        <Route path="/planner" component={PlannerPage}></Route>
                        <Route path="/about" component={AboutPage}></Route>
                    </Content>
                </Layout>
                </Layout>
            </Layout>
            
        </BrowserRouter>
    );
}

export default App;