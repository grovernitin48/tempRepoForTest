import React from 'react';
import { connect } from 'react-redux';

import { HomeActions } from '../../actions/homeActions';
import Home from '../../Screens/Home';

function HomeRoute(props) {
    return (
        <Home {...{...props }} />
    )
}

const mapStateToProps = state => {
    return { home: state.home, isAuthenticated: state.login.isAuthenticated }
}

export default connect(
    mapStateToProps,
    HomeActions,
)(HomeRoute);

