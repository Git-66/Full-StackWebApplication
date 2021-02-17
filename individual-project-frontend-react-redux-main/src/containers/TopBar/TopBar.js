import React, { Component } from 'react';
import { Icon } from 'antd';
import logo from '../../assets/images/logo.jpg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Search from '../Search/Search';
import * as actions from '../../store/actions/index';


class TopBar extends Component {

    render() {

        let logoAndSearch = null;
        if (this.props.isDataLoadingSucessful && this.props.isAuthenticated) {
            logoAndSearch = (
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Search />
                </div>
            );
        }

        return (
            <header className="App-header">
                <div>
                    {logoAndSearch}
                    {this.props.isAuthenticated ?
                    <div className="logout">
                            Projects &nbsp;
                        <a onClick={this.props.onLogout}>
                            <Icon type="user" style={{ fontSize: '25px', color: '#08c' }} />
                        </a>
                    </div> : <p className="logout"><Link to="/signup">Sign up</Link></p>}
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        isDataLoadingSucessful: state.fans.success
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => {
            dispatch(actions.logout());
            dispatch(actions.clearFans());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);

