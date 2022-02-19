import React, {Component} from 'react';
import {App} from "../../layouts/App";
import {Navigate, Route} from "react-router-dom";
import {connect} from "react-redux";

class Container extends Component {
    render() {
        const auth = this.props.auth;
        const id = auth.id;
        const role = auth.role;

        // Check auth
        if (id === null || id === undefined) {
            return (
                <Navigate to="/login"/>
            )
        }

        // Check rule
        const roles = this.props.roles
        const notAllow = (typeof roles) === "object" && roles.indexOf(role) === -1;
        if (notAllow) {
            return (
                <Navigate to="/errors/403"/>
            )
        }

        let component = null;
        switch (this.props.layout) {
            case 'App':
                component = <App>{this.props.children}</App>
                break;
        }

        return component;
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        crud: state.crud,
    }
}

export default connect(mapStateToProps, {})(Container)