import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Layout, Breadcrumb, Icon, Row, Col, Button } from 'antd';
import { connect } from 'react-redux';

import FanCard from '../FanCard/FanCard';
import FanFilter from '../FanFilter/FanFilter';

const { Content, Sider } = Layout;

class FansList extends React.Component {
    state = {
        collapsed: false,
        compare: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    handleCompare = (e) => {
        console.log("FansList handleCompare: ", e);
        this.setState((prevState) => ({ compare: !prevState.compare }));
    }

    render() {
        console.log("FansList: ", this.props.fans);

        return (
            <div>
                <Layout style={{ minHeight: '100vh', margin: '0 10px' }}>
                    <Sider width='22%' style={{ backgroundColor: 'white' }}>
                        <FanFilter />
                    </Sider>
                    <Layout>
                    <Content style={{ float: 'left', margin: '0 10px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Mechanical</Breadcrumb.Item>
                            <Breadcrumb.Item>HVAC Fans</Breadcrumb.Item>
                            <Button onClick={this.handleCompare}>Compare</Button>
                        </Breadcrumb>
                        <Row gutter={8}>
                            {
                                this.props.fans.map((fan) => (
                                    <Col span={6}>
                                        <FanCard fan={fan} key={fan.id} />
                                    </Col>
                                ))
                            }
                        </Row>
                        <Row gutter={8}>
                            <Col span={6}></Col>
                            <Col span={6}></Col>
                            <Col span={6}></Col>
                            <Col span={6}></Col>
                        </Row>
                    </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fans: state.fans.fans
    };
};

export default connect(mapStateToProps)(FansList);
