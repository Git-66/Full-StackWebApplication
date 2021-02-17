import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Button, Collapse, Icon, Input, Slider, InputNumber, Row, Col } from 'antd';

import * as actions from '../../store/actions/index';

const { TabPane } = Tabs;
const { Panel } = Collapse;

class FanFilter extends Component {

    render() {
        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 0,
            // border: 2,
            overflow: 'hidden',
        };

        return (
            <div className="card-container">
                <div>
                    Search: &nbsp;&nbsp;
                    <Button type="primary" size="small">Save</Button>
                    <Button type="primary" size="small">Clear</Button>
                </div>
                <Tabs type="card">
                    <TabPane tab="Product" key="1">
                        <Collapse
                            defaultActiveKey={['2']}
                            // onChange={callback}
                            // bordered='true'
                            expandIconPosition='right'
                            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                        >
                            <Panel header="Product Type" key="1" style={customPanelStyle}>
                                <div>Product Type</div>
                            </Panel>
                            <div>
                                Model year:&nbsp;&nbsp;
                                <Input style={{ width: '20%', height: '20px' }} size="small" placeholder="" />
                                &nbsp;-&nbsp;
                                <Input style={{ width: '20%', height: '20px' }} size="small" placeholder="" />
                            </div>
                            <Panel header="Technical Specifications" key="2" style={customPanelStyle}>
                                <div className="filter-item">
                                    <Icon type="arrow-up" />
                                    <Icon type="arrow-down" />&nbsp;&nbsp;
                                    Airflow(CFM)
                                    <br></br>

                                    <Row type="flex" justify="space-around" align="middle">
                                        <Col span={4}>
                                            <InputNumber
                                                // min={1}
                                                // max={20}
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='20'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                        <Col span={16} >
                                            <Slider
                                                // size="small"
                                                style={{ width: '125px' }}
                                                range
                                                defaultValue={[20, 50]}
                                            // onChange={this.onChange}
                                            // value={typeof inputValue === 'number' ? inputValue : 0}
                                            />
                                        </Col>
                                        <Col span={4}>
                                            <InputNumber
                                                // min={1}
                                                // max={20}
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='50'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="filter-item">
                                    <Icon type="arrow-up" />
                                    <Icon type="arrow-down" />&nbsp;&nbsp;
                                    Max power(W)
                                    <br></br>

                                    <Row type="flex" justify="space-around" align="middle">
                                        <Col span={4}>
                                            <InputNumber
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='10'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                        <Col span={16} >
                                            <Slider
                                                // size="small"
                                                style={{ width: '125px' }}
                                                range
                                                defaultValue={[10, 90]}
                                            // onChange={this.onChange}
                                            // value={typeof inputValue === 'number' ? inputValue : 0}
                                            />
                                        </Col>
                                        <Col span={4}>
                                            <InputNumber
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='90'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="filter-item">
                                    <Icon type="arrow-up" />
                                    <Icon type="arrow-down" />&nbsp;&nbsp;
                                    Sound at max speed(dBA)
                                    <br></br>

                                    <Row type="flex" justify="space-around" align="middle">
                                        <Col span={4}>
                                            <InputNumber
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='20'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                        <Col span={16} >
                                            <Slider
                                                // size="small"
                                                style={{ width: '125px' }}
                                                range
                                                defaultValue={[20, 80]}
                                            // onChange={this.onChange}
                                            // value={typeof inputValue === 'number' ? inputValue : 0}
                                            />
                                        </Col>
                                        <Col span={4}>
                                            <InputNumber
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='80'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="filter-item">
                                    <Icon type="arrow-up" />
                                    <Icon type="arrow-down" />&nbsp;&nbsp;
                                    Fan sweep diameter(in)
                                    <br></br>

                                    <Row type="flex" justify="space-around" align="middle">
                                        <Col span={4}>
                                            <InputNumber
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='18'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                        <Col span={16} >
                                            <Slider
                                                // size="small"
                                                style={{ width: '125px' }}
                                                range
                                                defaultValue={[18, 96]}
                                            // onChange={this.onChange}
                                            // value={typeof inputValue === 'number' ? inputValue : 0}
                                            />
                                        </Col>
                                        <Col span={4}>
                                            <InputNumber
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='96'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="filter-item">
                                    <Icon type="arrow-up" />
                                    <Icon type="arrow-down" />&nbsp;&nbsp;
                                    Height(in)
                                    <br></br>

                                    <Row type="flex" justify="space-around" align="middle">
                                        <Col span={4}>
                                            <InputNumber
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='12'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                        <Col span={16} >
                                            <Slider
                                                // size="small"
                                                style={{ width: '125px' }}
                                                range
                                                defaultValue={[12, 78]}
                                            // onChange={this.onChange}
                                            // value={typeof inputValue === 'number' ? inputValue : 0}
                                            />
                                        </Col>
                                        <Col span={4}>
                                            <InputNumber
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='78'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Panel>
                            <Panel header="Brand" key="3" style={customPanelStyle}>
                                <div>Brand</div>
                            </Panel>
                            <Panel header="Past Selections" key="4" style={customPanelStyle}>
                                <div className="filter-item">
                                    <Icon type="arrow-up" />
                                    <Icon type="arrow-down" />&nbsp;&nbsp;
                                    Firm
                                    <br></br>

                                    <Row type="flex" justify="space-around" align="middle">
                                        <Col span={4}>
                                            <InputNumber
                                                // min={1}
                                                // max={20}
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='30'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                        <Col span={16} >
                                            <Slider
                                                // size="small"
                                                style={{ width: '125px' }}
                                                range
                                                defaultValue={[30, 90]}
                                            // onChange={this.onChange}
                                            // value={typeof inputValue === 'number' ? inputValue : 0}
                                            />
                                        </Col>
                                        <Col span={4}>
                                            <InputNumber
                                                // min={1}
                                                // max={20}
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='90'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="filter-item">
                                    <Icon type="arrow-up" />
                                    <Icon type="arrow-down" />&nbsp;&nbsp;
                                    Global
                                    <br></br>

                                    <Row type="flex" justify="space-around" align="middle">
                                        <Col span={4}>
                                            <InputNumber
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='10'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                        <Col span={16} >
                                            <Slider
                                                // size="small"
                                                style={{ width: '125px' }}
                                                range
                                                defaultValue={[10, 90]}
                                            // onChange={this.onChange}
                                            // value={typeof inputValue === 'number' ? inputValue : 0}
                                            />
                                        </Col>
                                        <Col span={4}>
                                            <InputNumber
                                                size="small"
                                                style={{ width: '40px' }}
                                                value='90'
                                            // onChange={this.onChange}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Panel>
                            <Panel header="Certifications" key="5" style={customPanelStyle}>
                                <div>Certifications</div>
                            </Panel>
                        </Collapse>
                    </TabPane>
                    <TabPane tab="Project" key="2">
                        <p>Coming soon!</p>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFindFans: (token, conditions) => dispatch(actions.findFans(token, conditions))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( FanFilter );
