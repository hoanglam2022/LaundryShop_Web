import React, {Component} from 'react';
import {App} from "../../layouts/App";
import {Auth} from "../../layouts/Auth";
import {connect} from "react-redux";

class Container extends Component {

    render() {
        let component = null;
        switch (this.props.layout) {
            case 'Auth':
                component = <Auth>{this.props.children}</Auth>
                break;
            default:
                component = <App>{this.props.children}</App>
                break;
        }

        return component;
    }
}


function mapStateToProps(state) {
    return {
        crud: state.crud,
    }
}

export default connect(mapStateToProps, {})(Container)