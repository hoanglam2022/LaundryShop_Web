import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createMatchSelector} from "connected-react-router";

class Container extends Component {
    render() {
        const reducer     = this.props.user;

        return (
            <President

            />
        )
    }

    componentDidMount() {
        const auth       = this.props.auth;
        const config     = {
            headers: {Authorization: `Bearer ${auth.token}`}
        }

    }
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

function mapStateToProps(state) {
    const matchSelector = createMatchSelector("/users/:username");
    return {
        auth : state.auth,
        match: matchSelector(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)