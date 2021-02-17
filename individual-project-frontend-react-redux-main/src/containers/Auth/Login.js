
import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, message } from 'antd';

import * as actions from '../../store/actions/index';
import MainLogo from '../MainLogo/MainLogo';


class NormalLoginForm extends Component {

    componentDidMount() {
        if (this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onAuth( values.username, values.password, false );
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            
            <div>
                
                <Form onSubmit={this.handleSubmit} className="login-form">
                <MainLogo />
                   <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, 
                            message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log In
                    </Button>
                </Form.Item>
               </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( username, password, isSignup ) => dispatch( actions.auth( username, password, isSignup ) ),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default connect( mapStateToProps, mapDispatchToProps )( Login );