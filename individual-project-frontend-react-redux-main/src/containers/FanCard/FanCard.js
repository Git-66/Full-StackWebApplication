import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Card, Dropdown, Button, Checkbox, Icon } from 'antd';

import * as actions from '../../store/actions/index';

import fan1 from '../../assets/images/1.jpg';
import fan2 from '../../assets/images/2.jpg';
import fan3 from '../../assets/images/3.jpg';
import fan4 from '../../assets/images/4.jpg';

class FanCard extends Component {

    render() {
        // const imageUrl = require('../../assets/images/1.jpg');
        console.log("FanCard: ", this.props.fan);
        let imageUrl = fan1;
        if (this.props.fan.image === '../../assets/images/2.jpg') {
            imageUrl = fan2;
        } else if (this.props.fan.image === '../../assets/images/3.jpg') {
            imageUrl = fan3;
        } else if (this.props.fan.image === '../../assets/images/4.jpg') {
            imageUrl = fan4;
        }

        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                  Add to
                </a>
              </Menu.Item>
            </Menu>
        );

        return (
            <div>
                {/* <Card style={{ width: 300 }}> */}
                <Card style={{height: '550px'}} >
                    <div className="card_zero">
                        Verified 08/21/2016 <br></br>
                    </div>
                    <img style={{width: "95%", height: "auto"}} src={imageUrl} onClick={this.handle}/>
                    <div className="card_first">
                        {this.props.fan.manufacturer} <br></br>
                        {this.props.fan.series} Series <br></br>
                        {this.props.fan.model}
                        <br></br>
                        <br></br>
                    </div>
                    <div className="card_second">
                        {this.props.fan.airflow} CFM <br></br>
                        {this.props.fan.powerMax} W at max speed <br></br>
                        {this.props.fan.sound} dBA at max speed <br></br>
                        {this.props.fan.sweepDiameter}" fan sweep diameter <br></br>
                    </div>
                    <div className="card_third">
                        <br></br>
                        Past specifications: <br></br>
                        {this.props.fan.firm} firm / {this.props.fan.global} global
                        <br></br>
                        <br></br>
                    </div>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCompareFans: ( fan ) => dispatch( actions.compareFans( fan ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( FanCard );
