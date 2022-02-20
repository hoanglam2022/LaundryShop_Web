import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';

class Container extends Component {
    render() {
        const {detail} = this.props.product;
        return (
            <President/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

function mapStateToProps(state) {
    return {
        product: state.product,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)