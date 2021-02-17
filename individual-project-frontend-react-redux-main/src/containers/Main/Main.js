import React, {Component} from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import  Login  from '../Auth/Login';
import * as actions from '../../store/actions/index';
import { Register } from '../Auth/Register';
import Search from '../Search/Search';
import FansList from '../FansList/FansList';


class Main extends Component {
    componentDidMount () {
        console.log(this.props);
        this.props.onTryAutoSignup();
    }

    render() {
        let routes = (
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Register} />
              <Route path="/" exact component={Login} />
              <Redirect to="/" />
            </Switch>
        );
      
        if ( this.props.isAuthenticated ) {
            routes = (
              <Switch>
                {/* <Route path="/logout" component={Logout} /> */}
                <Route path="/search" component={Search} />
                <Route path="/fansList" component={FansList} />
                <Route path="/" exact component={Search} />
                <Redirect to="/search" />
              </Switch>
            );
        }

        return (
            <div className="main">
                {routes}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignup: () => dispatch( actions.authCheckState() )
    };
};
  
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Main ) );
