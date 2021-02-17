import React, { Component } from 'react';
import { Row, Col } from 'antd';

import logoBig from '../../assets/images/logo-big.jpg';

class MainLogo extends Component {
    render() {
        return (

            <div className="main-logo">
              
                <Row>
                    <Col>
                        <br></br>
                        <br></br>
                        <h3>Building Product Selection Platform</h3>
                        <br></br>
                        <br></br>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MainLogo;