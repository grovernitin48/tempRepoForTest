import React from 'react';
import { connect } from 'react-redux';

import { LoginActions } from '../../actions/loginActions';

import Login from '../../Screens/Login';

function LoginRoute(props) {
    return (
        <Login {...{ ...props }} />
    )
}


const mapStateToProps = state => {
    return { login: state.login }
}

export default connect(
    mapStateToProps,
    LoginActions,
)(LoginRoute);
