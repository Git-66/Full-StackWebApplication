import React, { Component } from 'react';
import { Input, Select, AutoComplete, Icon } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MainLogo from '../MainLogo/MainLogo';
import * as actions from '../../store/actions/index';


class Search extends Component {
    state = {
        dataSource: ["HVAC Fans"],
        dropdownMenu: "Mechanical"
    };

    componentDidMount = () => {
        if (this.props.isSuccessful && this.props.isAuthenticated) {
            this.setState({
                dropdownMenu: "HVAC Fans"
            });
        }
    }

    handleChange = () => {
        this.props.onFetchFans(this.props.token);
    }

    render() {
        const InputGroup = Input.Group;
        const { Option } = Select;

        let toFansList = null;
        if (this.props.isSuccessful) {
            toFansList = <Redirect to="/fansList" />;
        }

        let hasMainLogo = null;
        if (!this.props.isSuccessful) {
            hasMainLogo = <MainLogo />;
        }

        return (
            <div className="search-bar">
                {toFansList}
                
                <InputGroup compact>
                {hasMainLogo}
                <br></br>
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        value="Mechanical"
                    >
                        <Option value="Mechanical">{this.state.dropdownMenu}</Option>
                    </Select>
                    <AutoComplete
                        dataSource={this.state.dataSource}
                        style={{ width: 350 }}
                        onChange={this.handleChange}
                        placeholder="search..." >
                        <Input.Search suffix={<Icon type="caret-down" className="certain-category-icon" style={{ fontSize: '10px' }} />} />
                    </AutoComplete>
                </InputGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        token: state.auth.token,
        isSuccessful: state.fans.success
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchFans: (token) => dispatch(actions.fetchFans(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
