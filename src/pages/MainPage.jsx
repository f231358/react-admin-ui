import React, { Component } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';

class MainPage extends Component {
    render() {
        return ( 
            <div style={{padding:18}}>
            <Row gutter={16}>
            <Col className="mb18" sm={24} md={12} xl={8}>
                <Card title="Card title" extra={<a href="123">More</a>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
            <Col className="mb18" sm={24} md={12} xl={8}>
                <Card title="Card title" extra={<a href="123">More</a>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
            <Col className="mb18" sm={24} md={12} xl={8}>
                <Card title="Card title" extra={<a href="123">More</a>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
            </Row>

            <Row gutter={16}>
            <Col className="mb18" span={24}>
                <Card title="Card title" extra={<a href="123">More</a>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
            </Row>

            <Row gutter={16}>
            <Col className="mb18"  sm={24} xl={12}>
                <Card title="Card title" extra={<a href="123">More</a>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    
                </Card>
            </Col>
            <Col className="mb18"  sm={24} xl={12}>
                <Card title="Card title" extra={<a href="123">More</a>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
            </Row>
            </div>
        );
    }
}

export default MainPage;